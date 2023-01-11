import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostDecryptResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=decryptedSignature" })
  decryptedSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
