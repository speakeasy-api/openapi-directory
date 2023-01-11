import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProvisionEntityResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
