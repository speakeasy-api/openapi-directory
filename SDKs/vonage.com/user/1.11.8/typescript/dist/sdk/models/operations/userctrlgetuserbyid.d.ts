import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserCtrlGetUserByIDSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UserCtrlGetUserByIDRequest extends SpeakeasyBase {
    /**
     * The Vonage Business Cloud account ID
     */
    accountId: string;
    /**
     * The Vonage Business Cloud user ID
     */
    userId: number;
}
export declare class UserCtrlGetUserByIDResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * User not found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    userHalResponse?: shared.UserHalResponse;
}
