import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Payee:<br>`master` - master account holder pays.<br>`sub` - Sub account holder pays.
 */
export declare enum AccountCreateApplicationJSONOptionsPayModeEnum {
    Master = "master",
    Sub = "sub"
}
/**
 * Account options object.
 */
export declare class AccountCreateApplicationJSONOptions extends SpeakeasyBase {
    /**
     * Toggle whether automatic billing renewal is on or off.
     */
    billingAutoRenew?: boolean;
    /**
     * Specify the IP addresses of the Meeting Connectors that you would like to share with the sub account. Multiple values can be separated by comma. If no value is provided in this field, all the Meeting Connectors of a master account will be shared with the sub account.
     *
     * @remarks
     *
     *
     * **Note:** This option can only be used if the value of `share_mc` is set to `true`.
     */
    meetingConnectorList?: string[];
    /**
     * Payee:<br>`master` - master account holder pays.<br>`sub` - Sub account holder pays.
     */
    payMode?: AccountCreateApplicationJSONOptionsPayModeEnum;
    /**
     * Specify the IP addresses of the Room Connectors that you would like to share with the sub account. Multiple values can be separated by comma. If no value is provided in this field, all the Room Connectors of a master account will be shared with the sub account.
     *
     * @remarks
     *
     *
     * **Note:** This option can only be used if the value of `share_rc` is set to `true`.
     */
    roomConnectorList?: string[];
    /**
     * Enable/disable the option for a sub account to use shared [Meeting Connector(s)](https://support.zoom.us/hc/en-us/articles/201363093-Getting-Started-with-the-Meeting-Connector) that are set up by the master account. Meeting Connectors can only be used by On-prem users.
     */
    shareMc?: boolean;
    /**
     * Enable/disable the option for a sub account to use shared [Virtual Room Connector(s)](https://support.zoom.us/hc/en-us/articles/202134758-Getting-Started-With-Virtual-Room-Connector) that are set up by the master account. Virtual Room Connectors can only be used by On-prem users.
     */
    shareRc?: boolean;
}
/**
 * The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
 */
export declare class AccountCreateApplicationJSON extends SpeakeasyBase {
    /**
     * Name of the account. If you do not provide a value for this field, by default, the value will be set as a concatenation of "first_name" and "last_name".
     */
    accountName?: string;
    /**
     * User's email address.
     */
    email: string;
    /**
     * User's first name.
     */
    firstName: string;
    /**
     * User's last name.
     */
    lastName: string;
    /**
     * Account options object.
     */
    options?: AccountCreateApplicationJSONOptions;
    /**
     * User's password.
     *
     * @remarks
     *
     * **Note:** If the account owner or admin has enabled [enhanced password requirements](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_fa9186e4-6818-4f7a-915c-2e25c19f0acd), the value provided in this field must meet those requirements. These requirements can be retrieved by calling the [Get Account Settings API](https://marketplace.zoom.us/docs/api-reference/zoom-api/accounts/accountsettings) and referring to the `password_requirement` field present in the `security` object.
     */
    password: string;
}
/**
 * Account created.
 */
export declare class AccountCreate201ApplicationXML extends SpeakeasyBase {
    /**
     * Account created date time.
     */
    createdAt?: string;
    /**
     * Account ID.
     */
    id?: string;
    /**
     * Account owner email.
     */
    ownerEmail?: string;
    /**
     * Account owner ID.
     */
    ownerId?: string;
}
/**
 * Account created.
 */
export declare class AccountCreate201ApplicationJSON extends SpeakeasyBase {
    /**
     * Account created date time.
     */
    createdAt?: string;
    /**
     * Account ID.
     */
    id?: string;
    /**
     * Account owner email.
     */
    ownerEmail?: string;
    /**
     * Account owner ID.
     */
    ownerId?: string;
}
export declare class AccountCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account created.
     */
    accountCreate201ApplicationJSONObject?: AccountCreate201ApplicationJSON;
}
