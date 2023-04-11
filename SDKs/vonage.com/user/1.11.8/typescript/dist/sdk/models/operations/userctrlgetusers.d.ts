import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserCtrlGetUsersSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UserCtrlGetUsersRequest extends SpeakeasyBase {
    /**
     * The Vonage Business Cloud account ID
     */
    accountId: string;
    /**
     * Filter by email address
     */
    email?: string;
    /**
     * Filter by first name
     */
    firstName?: string;
    /**
     * Filter by last name
     */
    lastName?: string;
    /**
     * Filter by login name
     */
    loginName?: string;
    /**
     * Current page number
     */
    page?: number;
    /**
     * Number of records per page
     */
    pageSize?: number;
}
export declare class UserCtrlGetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    usersHalResponse?: shared.UsersHalResponse;
    /**
     * Invalid parameters given
     */
    validationErrorsResponse?: shared.ValidationErrorsResponse;
}
