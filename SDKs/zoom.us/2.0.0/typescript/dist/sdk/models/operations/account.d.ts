import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountRequest extends SpeakeasyBase {
    /**
     * The account ID.
     */
    accountId: string;
}
/**
 * Payee:<br>`master` - master account holder pays.<br>`sub` - Sub account holder pays.
 */
export declare enum Account200ApplicationXMLOptionsPayModeEnum {
    Master = "master",
    Sub = "sub"
}
/**
 * Account options object.
 */
export declare class Account200ApplicationXMLOptions extends SpeakeasyBase {
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
    payMode?: Account200ApplicationXMLOptionsPayModeEnum;
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
 * **HTTP Status Code**: `200`<br>
 *
 * @remarks
 * Account object returned.
 */
export declare class Account200ApplicationXML extends SpeakeasyBase {
    /**
     * Account creation date and time.
     */
    createdAt?: Date;
    /**
     * Account ID.
     */
    id?: string;
    /**
     * Account options object.
     */
    options?: Account200ApplicationXMLOptions;
    /**
     * Account owner email.
     */
    ownerEmail?: string;
    /**
     * Account owner ID.
     */
    ownerId?: string;
    /**
     * Account Vanity URL
     */
    vanityUrl?: string;
}
/**
 * Payee:<br>`master` - master account holder pays.<br>`sub` - Sub account holder pays.
 */
export declare enum Account200ApplicationJSONOptionsPayModeEnum {
    Master = "master",
    Sub = "sub"
}
/**
 * Account options object.
 */
export declare class Account200ApplicationJSONOptions extends SpeakeasyBase {
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
    payMode?: Account200ApplicationJSONOptionsPayModeEnum;
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
 * **HTTP Status Code**: `200`<br>
 *
 * @remarks
 * Account object returned.
 */
export declare class Account200ApplicationJSON extends SpeakeasyBase {
    /**
     * Account creation date and time.
     */
    createdAt?: Date;
    /**
     * Account ID.
     */
    id?: string;
    /**
     * Account options object.
     */
    options?: Account200ApplicationJSONOptions;
    /**
     * Account owner email.
     */
    ownerEmail?: string;
    /**
     * Account owner ID.
     */
    ownerId?: string;
    /**
     * Account Vanity URL
     */
    vanityUrl?: string;
}
export declare class AccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code**: `200`<br>
     *
     * @remarks
     * Account object returned.
     */
    account200ApplicationJSONObject?: Account200ApplicationJSON;
}
