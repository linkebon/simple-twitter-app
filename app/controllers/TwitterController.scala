package controllers

import java.util.Locale

import beans.api.{TweetApi, TweetsApi}
import com.google.inject.{Inject, Singleton}
import org.joda.time.DateTime
import org.joda.time.format.{DateTimeFormat, DateTimeFormatter}
import org.slf4j.LoggerFactory
import play.api.libs.json.Json.toJson
import play.api.mvc.{AbstractController, Action, AnyContent, ControllerComponents}
import service.TwitterService

import scala.concurrent.ExecutionContext
import scala.util.control.NonFatal

@Singleton
class TwitterController @Inject()(twitterService: TwitterService, cc: ControllerComponents)(implicit ec: ExecutionContext) extends AbstractController(cc) {
  private val logger = LoggerFactory.getLogger(getClass)
  implicit class TwitterDateHelper(date: String) {
    private val formatter: DateTimeFormatter = DateTimeFormat.forPattern("EEE MMM dd HH:mm:ss Z yyyy").withLocale(Locale.ENGLISH)
    def asDateTime: DateTime = {
      formatter.parseDateTime(date)
    }
  }

  def getTweets(keyword: String): Action[AnyContent] = Action.async { implicit request =>
    logger.debug("fetching tweets...")
    val count = request.getQueryString("count").getOrElse("10")
    twitterService
      .getTweetsByKey(keyword, count)
      .map { tweets =>
        val tweetsApi = TweetsApi(tweets.statuses.map(t => TweetApi(t.text, t.created_at.asDateTime)))
        logger.debug(s"response: ${tweetsApi.statuses.mkString(",")}")
        Ok(toJson(tweetsApi))
      }
      .recover {
        case NonFatal(e) => InternalServerError
      }
  }
}
