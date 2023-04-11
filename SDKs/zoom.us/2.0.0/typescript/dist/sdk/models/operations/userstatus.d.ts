import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserStatusSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The action types:<br>`activate` - Activate a deactivated user.<br>`deactivate` - Deactivate a user.
 */
export declare enum UserStatusApplicationJSONActionEnum {
    Activate = "activate",
    Deactivate = "deactivate"
}
/**
 * The action.
 */
export declare class UserStatusApplicationJSON extends SpeakeasyBase {
    /**
     * The action types:<br>`activate` - Activate a deactivated user.<br>`deactivate` - Deactivate a user.
     */
    action: UserStatusApplicationJSONActionEnum;
}
export declare class UserStatusRequest extends SpeakeasyBase {
    /**
     * User status.
     */
    requestBody: UserStatusApplicationJSON;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
