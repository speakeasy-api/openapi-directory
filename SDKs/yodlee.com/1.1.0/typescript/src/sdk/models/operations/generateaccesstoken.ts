import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenerateAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientCredentialTokenResponse?: shared.ClientCredentialTokenResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
