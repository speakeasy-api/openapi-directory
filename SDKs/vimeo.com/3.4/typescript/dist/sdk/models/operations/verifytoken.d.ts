import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VerifyTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The token was verified.
     */
    auth?: shared.Auth;
    /**
     * The token isn't a valid OAuth 2 token.
     */
    legacyError?: shared.LegacyError;
}
