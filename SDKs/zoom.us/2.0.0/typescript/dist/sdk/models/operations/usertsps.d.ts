import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserTSPsRequest extends SpeakeasyBase {
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
/**
 * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>
 *
 * @remarks
 * `media_link` - Media link
 */
export declare enum UserTSPs200ApplicationXMLTSPAccountsListDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}
export declare class UserTSPs200ApplicationXMLTSPAccountsListDialInNumbers extends SpeakeasyBase {
    /**
     * Country code.
     */
    code?: string;
    /**
     * Country Label, if passed, will display in place of code.
     */
    countryLabel?: string;
    /**
     * Dial-in number: length is less than 16.
     */
    number?: string;
    /**
     * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>
     *
     * @remarks
     * `media_link` - Media link
     */
    type?: UserTSPs200ApplicationXMLTSPAccountsListDialInNumbersTypeEnum;
}
/**
 * The ID of the TSP account.
 */
export declare enum UserTSPs200ApplicationXMLTSPAccountsListIdEnum {
    One = "1",
    Two = "2"
}
/**
 * Telephony bridge
 *
 * @remarks
 *
 */
export declare enum UserTSPs200ApplicationXMLTSPAccountsListTSPBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * List of TSP accounts.
 */
export declare class UserTSPs200ApplicationXMLTSPAccountsList extends SpeakeasyBase {
    /**
     * Conference code: numeric value, length is less than 16.
     */
    conferenceCode: string;
    /**
     * List of dial in numbers.
     */
    dialInNumbers?: UserTSPs200ApplicationXMLTSPAccountsListDialInNumbers[];
    /**
     * The ID of the TSP account.
     */
    id?: UserTSPs200ApplicationXMLTSPAccountsListIdEnum;
    /**
     * Leader PIN: numeric value, length is less than 16.
     */
    leaderPin: string;
    /**
     * Telephony bridge
     *
     * @remarks
     *
     */
    tspBridge?: UserTSPs200ApplicationXMLTSPAccountsListTSPBridgeEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * TSP account list returned successfully.
 */
export declare class UserTSPs200ApplicationXML extends SpeakeasyBase {
    tspAccounts?: UserTSPs200ApplicationXMLTSPAccountsList[];
}
/**
 * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>
 *
 * @remarks
 * `media_link` - Media link
 */
export declare enum UserTSPs200ApplicationJSONTSPAccountsListDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}
export declare class UserTSPs200ApplicationJSONTSPAccountsListDialInNumbers extends SpeakeasyBase {
    /**
     * Country code.
     */
    code?: string;
    /**
     * Country Label, if passed, will display in place of code.
     */
    countryLabel?: string;
    /**
     * Dial-in number: length is less than 16.
     */
    number?: string;
    /**
     * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>
     *
     * @remarks
     * `media_link` - Media link
     */
    type?: UserTSPs200ApplicationJSONTSPAccountsListDialInNumbersTypeEnum;
}
/**
 * The ID of the TSP account.
 */
export declare enum UserTSPs200ApplicationJSONTSPAccountsListIdEnum {
    One = "1",
    Two = "2"
}
/**
 * Telephony bridge
 *
 * @remarks
 *
 */
export declare enum UserTSPs200ApplicationJSONTSPAccountsListTSPBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * List of TSP accounts.
 */
export declare class UserTSPs200ApplicationJSONTSPAccountsList extends SpeakeasyBase {
    /**
     * Conference code: numeric value, length is less than 16.
     */
    conferenceCode: string;
    /**
     * List of dial in numbers.
     */
    dialInNumbers?: UserTSPs200ApplicationJSONTSPAccountsListDialInNumbers[];
    /**
     * The ID of the TSP account.
     */
    id?: UserTSPs200ApplicationJSONTSPAccountsListIdEnum;
    /**
     * Leader PIN: numeric value, length is less than 16.
     */
    leaderPin: string;
    /**
     * Telephony bridge
     *
     * @remarks
     *
     */
    tspBridge?: UserTSPs200ApplicationJSONTSPAccountsListTSPBridgeEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * TSP account list returned successfully.
 */
export declare class UserTSPs200ApplicationJSON extends SpeakeasyBase {
    tspAccounts?: UserTSPs200ApplicationJSONTSPAccountsList[];
}
export declare class UserTSPsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * TSP account list returned successfully.
     */
    userTSPs200ApplicationJSONObject?: UserTSPs200ApplicationJSON;
}
