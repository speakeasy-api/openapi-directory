import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SamlLoginQueryParams extends SpeakeasyBase {
    issuer: string;
    samlResponse: string;
    source?: string;
}
export declare class SamlLoginRequest extends SpeakeasyBase {
    queryParams: SamlLoginQueryParams;
}
export declare class SamlLoginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userResponse?: shared.UserResponse;
    yodleeError?: shared.YodleeError;
}
