import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CobrandPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyAlias" })
  keyAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=keyAsPemString" })
  keyAsPemString?: string;
}
