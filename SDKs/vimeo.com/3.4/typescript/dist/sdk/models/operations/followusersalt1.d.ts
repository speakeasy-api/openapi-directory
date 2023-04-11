import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FollowUsersAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class FollowUsersAlt1RequestBody extends SpeakeasyBase {
    /**
     * An array of user URIs for the list of users to follow.
     */
    users: string[];
}
export declare class FollowUsersAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * Error code 2205: The request body is empty.
     *
     * @remarks
     * * Error code 2205: The `users` array is invalid.
     * * Error code 2205: The list of users doesn't contain URIs.
     * * Error code 2900: A user in the list doesn't exist.
     * * Error code 2901: The list contains more than 100 users.
     */
    error?: shared.ErrorT;
}
