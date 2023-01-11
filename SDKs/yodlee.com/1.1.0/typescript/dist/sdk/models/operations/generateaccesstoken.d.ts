import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenerateAccessTokenResponse extends SpeakeasyBase {
    clientCredentialTokenResponse?: shared.ClientCredentialTokenResponse;
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
