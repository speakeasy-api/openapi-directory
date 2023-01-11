import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateCobrandNotificationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;
}
