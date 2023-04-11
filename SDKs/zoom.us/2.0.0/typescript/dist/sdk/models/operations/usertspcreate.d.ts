import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>
 *
 * @remarks
 * `media_link` - Media link.
 */
export declare enum UserTSPCreateTSPAccountsListDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}
export declare class UserTSPCreateTSPAccountsListDialInNumbers extends SpeakeasyBase {
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
     * `media_link` - Media link.
     */
    type?: UserTSPCreateTSPAccountsListDialInNumbersTypeEnum;
}
/**
 * Telephony bridge
 */
export declare enum UserTSPCreateTSPAccountsListTSPBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * List of TSP accounts.
 */
export declare class UserTSPCreateTSPAccountsList extends SpeakeasyBase {
    /**
     * Conference code: numeric value, length is less than 16.
     */
    conferenceCode: string;
    /**
     * List of dial in numbers.
     */
    dialInNumbers?: UserTSPCreateTSPAccountsListDialInNumbers[];
    /**
     * Leader PIN: numeric value, length is less than 16.
     */
    leaderPin: string;
    /**
     * Telephony bridge
     */
    tspBridge?: UserTSPCreateTSPAccountsListTSPBridgeEnum;
}
export declare class UserTSPCreateRequest extends SpeakeasyBase {
    /**
     * TSP account.
     */
    requestBody: UserTSPCreateTSPAccountsList;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserTSPCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * TSP account added.
     */
    tspAccountsList?: UserTSPCreateTSPAccountsList;
}
