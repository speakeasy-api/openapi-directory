import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateCobrandNotificationEvent } from "./updatecobrandnotificationevent";



export class UpdateCobrandNotificationEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event: UpdateCobrandNotificationEvent;
}
