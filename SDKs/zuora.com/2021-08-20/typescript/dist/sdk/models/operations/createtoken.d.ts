import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTokenHeaders extends SpeakeasyBase {
    zuoraTrackId?: string;
}
export declare enum CreateTokenRequestBodyGrantTypeEnum {
    ClientCredentials = "client_credentials"
}
export declare class CreateTokenRequestBody extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
    grantType: CreateTokenRequestBodyGrantTypeEnum;
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    headers: CreateTokenHeaders;
    request: CreateTokenRequestBody;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    tokenResponse?: shared.TokenResponse;
}
