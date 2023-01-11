import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateCobrandNotificationEvent } from "./createcobrandnotificationevent";



export class CreateCobrandNotificationEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event: CreateCobrandNotificationEvent;
}
