import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutDenyUserAccessResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
