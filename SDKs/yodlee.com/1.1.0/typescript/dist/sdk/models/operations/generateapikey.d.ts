import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenerateApiKeyRequest extends SpeakeasyBase {
    request: shared.ApiKeyRequest;
}
export declare class GenerateApiKeyResponse extends SpeakeasyBase {
    apiKeyResponse?: shared.ApiKeyResponse;
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
