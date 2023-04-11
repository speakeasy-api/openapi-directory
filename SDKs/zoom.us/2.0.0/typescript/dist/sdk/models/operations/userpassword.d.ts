import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * User password.
 */
export declare class UserPasswordApplicationJSON extends SpeakeasyBase {
    /**
     * User password. Should be less than 32 characters.
     *
     * @remarks
     *
     * **Note:** If the account owner or admin has enabled [enhanced password requirements](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_fa9186e4-6818-4f7a-915c-2e25c19f0acd), the value provided in this field must meet those requirements. These requirements can be retrieved by calling the [Get Account Settings API](https://marketplace.zoom.us/docs/api-reference/zoom-api/accounts/accountsettings) and referring to the `password_requirement` field present in the `security` object.
     */
    password: string;
}
export declare class UserPasswordRequest extends SpeakeasyBase {
    /**
     * User password.
     */
    requestBody: UserPasswordApplicationJSON;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
