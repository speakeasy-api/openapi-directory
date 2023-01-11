import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CobrandNotificationEvent } from "./cobrandnotificationevent";



export class CobrandNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event", elemType: CobrandNotificationEvent })
  event?: CobrandNotificationEvent[];
}
