import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigsNotificationEvent } from "./configsnotificationevent";



export class ConfigsNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event", elemType: ConfigsNotificationEvent })
  event?: ConfigsNotificationEvent[];
}
