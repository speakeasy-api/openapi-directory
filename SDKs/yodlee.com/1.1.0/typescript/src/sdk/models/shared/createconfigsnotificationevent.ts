import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateConfigsNotificationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;
}
