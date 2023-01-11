import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateConfigsNotificationEvent } from "./updateconfigsnotificationevent";



export class UpdateConfigsNotificationEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event: UpdateConfigsNotificationEvent;
}
