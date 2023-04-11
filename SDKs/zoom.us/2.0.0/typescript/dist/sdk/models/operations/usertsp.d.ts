import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * TSP account ID.
 */
export declare enum UserTSPTSPIDEnum {
    One = "1",
    Two = "2"
}
export declare class UserTSPRequest extends SpeakeasyBase {
    /**
     * TSP account ID.
     */
    tspId: UserTSPTSPIDEnum;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
/**
 * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number. <br> `media_link` - Media link phone number. This is used for PSTN integration instead of a paid bridge number.
 */
export declare enum UserTSPTSPAccountDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}
export declare class UserTSPTSPAccountDialInNumbers extends SpeakeasyBase {
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
     * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number. <br> `media_link` - Media link phone number. This is used for PSTN integration instead of a paid bridge number.
     */
    type?: UserTSPTSPAccountDialInNumbersTypeEnum;
}
/**
 * Telephony bridge
 */
export declare enum UserTSPTSPAccountTSPBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * TSP account of the user.
 */
export declare class UserTSPTSPAccount extends SpeakeasyBase {
    /**
     * Conference code: numeric value, length is less than 16.
     */
    conferenceCode: string;
    /**
     * List of dial in numbers.
     */
    dialInNumbers?: UserTSPTSPAccountDialInNumbers[];
    /**
     * The ID of the TSP account.
     */
    id?: number;
    /**
     * Leader PIN: numeric value, length is less than 16.
     */
    leaderPin: string;
    /**
     * Telephony bridge
     */
    tspBridge?: UserTSPTSPAccountTSPBridgeEnum;
}
export declare class UserTSPResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * TSP account retrieved successfully.
     */
    tspAccount?: UserTSPTSPAccount;
}
