import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyResponse?: shared.ApiKeyResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
