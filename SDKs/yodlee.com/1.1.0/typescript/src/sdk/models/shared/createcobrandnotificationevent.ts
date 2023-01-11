import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCobrandNotificationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;
}
