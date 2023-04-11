import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * User email.
 */
export declare class UserEmailUpdateApplicationJSON extends SpeakeasyBase {
    /**
     * User’s email. The length should be less than 128 characters.
     */
    email: string;
}
export declare class UserEmailUpdateRequest extends SpeakeasyBase {
    /**
     * User email.
     */
    requestBody: UserEmailUpdateApplicationJSON;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserEmailUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
