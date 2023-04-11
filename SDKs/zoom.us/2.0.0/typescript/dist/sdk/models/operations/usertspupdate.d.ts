import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>`media_link` - Media Link Phone Number. It is used for PSTN integration instead of paid bridge number.
 */
export declare enum UserTSPUpdateTSPAccountDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}
export declare class UserTSPUpdateTSPAccountDialInNumbers extends SpeakeasyBase {
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
     * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>`media_link` - Media Link Phone Number. It is used for PSTN integration instead of paid bridge number.
     */
    type?: UserTSPUpdateTSPAccountDialInNumbersTypeEnum;
}
/**
 * Telephony bridge
 */
export declare enum UserTSPUpdateTSPAccountTSPBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * TSP account.
 */
export declare class UserTSPUpdateTSPAccount extends SpeakeasyBase {
    /**
     * Conference code: numeric value, length is less than 16.
     */
    conferenceCode: string;
    /**
     * List of dial in numbers.
     */
    dialInNumbers?: UserTSPUpdateTSPAccountDialInNumbers[];
    /**
     * Leader PIN: numeric value, length is less than 16.
     */
    leaderPin: string;
    /**
     * Telephony bridge
     */
    tspBridge?: UserTSPUpdateTSPAccountTSPBridgeEnum;
}
/**
 * TSP account ID.
 */
export declare enum UserTSPUpdateTSPIDEnum {
    One = "1",
    Two = "2"
}
export declare class UserTSPUpdateRequest extends SpeakeasyBase {
    /**
     * TSP account.
     */
    requestBody: UserTSPUpdateTSPAccount;
    /**
     * TSP account ID.
     */
    tspId: UserTSPUpdateTSPIDEnum;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserTSPUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
