import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The OAuth grant type that will be used to generate the token. The value of this parameter must be `client_credentials`.
 *
 * @remarks
 *
 */
export declare enum CreateTokenRequestBodyGrantTypeEnum {
    ClientCredentials = "client_credentials"
}
export declare class CreateTokenRequestBody extends SpeakeasyBase {
    /**
     * The Client ID of the OAuth client.
     *
     * @remarks
     *
     */
    clientId: string;
    /**
     * The Client Secret that was displayed when the OAuth client was created.
     *
     * @remarks
     *
     */
    clientSecret: string;
    /**
     * The OAuth grant type that will be used to generate the token. The value of this parameter must be `client_credentials`.
     *
     * @remarks
     *
     */
    grantType: CreateTokenRequestBodyGrantTypeEnum;
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    requestBody: CreateTokenRequestBody;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tokenResponse?: shared.TokenResponse;
}
