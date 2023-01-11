import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PosthmacSignatureResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
