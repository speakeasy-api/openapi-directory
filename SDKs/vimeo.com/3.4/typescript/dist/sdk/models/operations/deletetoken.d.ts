import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The token was revoked.
     */
    auth?: shared.Auth;
    /**
     * You can't revoke access for an OAuth 1 token.
     */
    legacyError?: shared.LegacyError;
}
