import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublicEncryptionKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configsPublicKeyResponse?: shared.ConfigsPublicKeyResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
