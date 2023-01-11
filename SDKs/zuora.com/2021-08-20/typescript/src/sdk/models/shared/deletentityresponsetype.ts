import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletEntityResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
