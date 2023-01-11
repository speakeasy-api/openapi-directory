import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateConfigsNotificationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;
}
