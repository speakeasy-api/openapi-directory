import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cobrandPublicKeyResponse?: shared.CobrandPublicKeyResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
