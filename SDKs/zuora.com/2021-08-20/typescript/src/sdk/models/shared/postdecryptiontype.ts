import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostDecryptionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature: string;
}
