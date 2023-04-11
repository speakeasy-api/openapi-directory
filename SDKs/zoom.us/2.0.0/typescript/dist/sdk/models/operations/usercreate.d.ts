import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserCreateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Specify how to create the new user: <br>`create` - User will get an email sent from Zoom. There is a confirmation link in this email. The user will then need to use the link to activate their Zoom account. The user can then set or change their password.<br>`autoCreate` - This action is provided for the enterprise customer who has a managed domain. This feature is disabled by default because of the security risk involved in creating a user who does not belong to your domain.<br>`custCreate` - Users created via this option do not have passwords and will not have the ability to log into the Zoom Web Portal or the Zoom Client. These users can still host and join meetings using the `start_url` and `join_url` respectively. To use this option, you must contact the ISV Platform Sales team at isv@zoom.us.<br>`ssoCreate` - This action is provided for the enabled “Pre-provisioning SSO User” option. A user created in this way has no password. If not a basic user, a personal vanity URL using the user name (no domain) of the provisioning email will be generated. If the user name or PMI is invalid or occupied, it will use a random number or random personal vanity URL.
 */
export declare enum UserCreateApplicationJSONActionEnum {
    Create = "create",
    AutoCreate = "autoCreate",
    CustCreate = "custCreate",
    SsoCreate = "ssoCreate"
}
/**
 * User type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
 */
export declare enum UserCreateApplicationJSONUserInfoTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    NinetyNine = "99"
}
export declare class UserCreateApplicationJSONUserInfo extends SpeakeasyBase {
    /**
     * User email address.
     */
    email: string;
    /**
     * User's first name: cannot contain more than 5 Chinese words.
     */
    firstName?: string;
    /**
     * User's last name: cannot contain more than 5 Chinese words.
     */
    lastName?: string;
    /**
     * User password. Only used for the "autoCreate" function. The password has to have a minimum of 8 characters and maximum of 32 characters. By default (basic requirement), password must have at least one letter (a, b, c..), at least one number (1, 2, 3...) and include both uppercase and lowercase letters. It should not contain only one identical character repeatedly ('11111111' or 'aaaaaaaa') and it cannot contain consecutive characters ('12345678' or 'abcdefgh').
     *
     * @remarks
     *
     * **Note:** If the account owner or admin has enabled [enhanced password requirements](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_fa9186e4-6818-4f7a-915c-2e25c19f0acd), the value provided in this field must meet those requirements. These requirements can be retrieved by calling the [Get Account Settings API](https://marketplace.zoom.us/docs/api-reference/zoom-api/accounts/accountsettings) and referring to the `password_requirement` field present in the `security` object.
     */
    password?: string;
    /**
     * User type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
     */
    type: UserCreateApplicationJSONUserInfoTypeEnum;
}
/**
 * User
 */
export declare class UserCreateApplicationJSON extends SpeakeasyBase {
    /**
     * Specify how to create the new user: <br>`create` - User will get an email sent from Zoom. There is a confirmation link in this email. The user will then need to use the link to activate their Zoom account. The user can then set or change their password.<br>`autoCreate` - This action is provided for the enterprise customer who has a managed domain. This feature is disabled by default because of the security risk involved in creating a user who does not belong to your domain.<br>`custCreate` - Users created via this option do not have passwords and will not have the ability to log into the Zoom Web Portal or the Zoom Client. These users can still host and join meetings using the `start_url` and `join_url` respectively. To use this option, you must contact the ISV Platform Sales team at isv@zoom.us.<br>`ssoCreate` - This action is provided for the enabled “Pre-provisioning SSO User” option. A user created in this way has no password. If not a basic user, a personal vanity URL using the user name (no domain) of the provisioning email will be generated. If the user name or PMI is invalid or occupied, it will use a random number or random personal vanity URL.
     */
    action: UserCreateApplicationJSONActionEnum;
    userInfo?: UserCreateApplicationJSONUserInfo;
}
/**
 * User type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
 *
 * @remarks
 *
 */
export declare enum UserCreate201ApplicationXMLTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    NinetyNine = "99"
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * User created.
 */
export declare class UserCreate201ApplicationXML extends SpeakeasyBase {
    /**
     * User email address.
     */
    email?: string;
    /**
     * User's first name.
     */
    firstName?: string;
    /**
     * User ID.
     */
    id?: string;
    /**
     * User's last name.
     */
    lastName?: string;
    /**
     * User type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
     *
     * @remarks
     *
     */
    type?: UserCreate201ApplicationXMLTypeEnum;
}
/**
 * User type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
 *
 * @remarks
 *
 */
export declare enum UserCreate201ApplicationJSONTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    NinetyNine = "99"
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * User created.
 */
export declare class UserCreate201ApplicationJSON extends SpeakeasyBase {
    /**
     * User email address.
     */
    email?: string;
    /**
     * User's first name.
     */
    firstName?: string;
    /**
     * User ID.
     */
    id?: string;
    /**
     * User's last name.
     */
    lastName?: string;
    /**
     * User type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
     *
     * @remarks
     *
     */
    type?: UserCreate201ApplicationJSONTypeEnum;
}
export declare class UserCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * User created.
     */
    userCreate201ApplicationJSONObject?: UserCreate201ApplicationJSON;
}
