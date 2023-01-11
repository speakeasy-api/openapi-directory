import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;
}
