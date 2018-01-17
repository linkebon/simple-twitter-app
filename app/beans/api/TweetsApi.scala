package beans.api

import org.joda.time.DateTime
import play.api.libs.json._

case class TweetsApi(statuses: List[TweetApi])

case class TweetApi(id: String, text: String, created_at: DateTime)

object TweetsApi {
  implicit val writes: OWrites[TweetsApi] = Json.writes[TweetsApi]
}

object TweetApi {
  implicit val writesDateTime = new Writes[DateTime] {
    override def writes(o: DateTime): JsValue = JsString(o.toDateTimeISO.toString())
  }
  implicit val writes: OWrites[TweetApi] = Json.writes[TweetApi]

}

