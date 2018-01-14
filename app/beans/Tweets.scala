package beans

import play.api.libs.json._

case class Tweets(statuses: List[Tweet])

case class Tweet(text: String, created_at: String)

object Tweets {
  implicit val format: OFormat[Tweets] = Json.format[Tweets]
}

object Tweet {
  implicit val format: OFormat[Tweet] = Json.format[Tweet]
}
