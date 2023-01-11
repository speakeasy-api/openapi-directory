import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserTsPsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}
export declare class UserTsPs200ApplicationJsonTspAccountsListDialInNumbers extends SpeakeasyBase {
    code?: string;
    countryLabel?: string;
    number?: string;
    type?: UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum;
}
export declare enum UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * List of TSP accounts.
**/
export declare class UserTsPs200ApplicationJsonTspAccountsList extends SpeakeasyBase {
    conferenceCode: string;
    dialInNumbers?: UserTsPs200ApplicationJsonTspAccountsListDialInNumbers[];
    id?: number;
    leaderPin: string;
    tspBridge?: UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum;
}
export declare class UserTsPs200ApplicationJson extends SpeakeasyBase {
    tspAccounts?: UserTsPs200ApplicationJsonTspAccountsList[];
}
export declare class UserTsPsRequest extends SpeakeasyBase {
    pathParams: UserTsPsPathParams;
}
export declare class UserTsPsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userTSPs200ApplicationJSONObject?: UserTsPs200ApplicationJson;
}
