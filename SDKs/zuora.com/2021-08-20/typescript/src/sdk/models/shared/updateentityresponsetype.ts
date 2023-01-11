import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateEntityResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
