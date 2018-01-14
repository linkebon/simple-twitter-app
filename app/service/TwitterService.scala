package service

import beans.Tweets
import com.google.inject.{Inject, Singleton}
import org.slf4j.LoggerFactory
import play.api.Configuration
import play.api.libs.oauth._
import play.api.libs.ws.WSClient

import scala.concurrent.{ExecutionContext, Future}


@Singleton
class TwitterService @Inject()(wSClient: WSClient, configuration: Configuration)(implicit ec: ExecutionContext) {

  private val logger = LoggerFactory.getLogger(getClass)

  private val consumerKey = configuration.getOptional[String]("twitter.linkebon.apiConsumerKey").get
  private val consumerSecret = configuration.getOptional[String]("twitter.linkebon.apiConsumerSecret").get
  private val accessToken = configuration.getOptional[String]("twitter.linkebon.apiAccessToken").get
  private val accessTokenSecret = configuration.getOptional[String]("twitter.linkebon.apiAccessTokenSecret").get
  val calculator = OAuthCalculator(ConsumerKey(consumerKey, consumerSecret), RequestToken(accessToken, accessTokenSecret))

  def getTweetsByKey(keyword: String, count: String = "10"): Future[Tweets] = {
    wSClient
      .url("https://api.twitter.com/1.1/search/tweets.json")
      .sign(calculator)
      .withQueryStringParameters("q" -> keyword, "count" -> count)
      .get
      .flatMap {
        case response if response.status == 200 => Future.successful(response.json.as[Tweets])
        case _ => Future.failed(new Exception("Failed to fetch tweets"))
      }
  }
}
