import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountOptionsUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Payee:<br>`master` - master account holder pays.<br>`sub` - Sub account holder pays.
 */
export declare enum AccountOptionsUpdateApplicationJSONPayModeEnum {
    Master = "master",
    Sub = "sub"
}
/**
 * Account options object.
 */
export declare class AccountOptionsUpdateApplicationJSON extends SpeakeasyBase {
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
    payMode?: AccountOptionsUpdateApplicationJSONPayModeEnum;
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
export declare class AccountOptionsUpdateRequest extends SpeakeasyBase {
    requestBody: AccountOptionsUpdateApplicationJSON;
    /**
     * The account ID.
     */
    accountId: string;
}
export declare class AccountOptionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
