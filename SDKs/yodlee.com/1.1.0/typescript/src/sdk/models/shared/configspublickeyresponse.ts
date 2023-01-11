import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigsPublicKey } from "./configspublickey";



export class ConfigsPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: ConfigsPublicKey;
}
