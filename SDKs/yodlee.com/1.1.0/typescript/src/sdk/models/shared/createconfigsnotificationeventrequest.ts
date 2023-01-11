import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateConfigsNotificationEvent } from "./createconfigsnotificationevent";



export class CreateConfigsNotificationEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event: CreateConfigsNotificationEvent;
}
