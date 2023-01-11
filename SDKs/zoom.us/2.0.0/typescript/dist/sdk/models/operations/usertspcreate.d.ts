import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserTspCreatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum UserTspCreateTspAccountsListDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}
export declare class UserTspCreateTspAccountsListDialInNumbers extends SpeakeasyBase {
    code?: string;
    countryLabel?: string;
    number?: string;
    type?: UserTspCreateTspAccountsListDialInNumbersTypeEnum;
}
export declare enum UserTspCreateTspAccountsListTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * List of TSP accounts.
**/
export declare class UserTspCreateTspAccountsList extends SpeakeasyBase {
    conferenceCode: string;
    dialInNumbers?: UserTspCreateTspAccountsListDialInNumbers[];
    leaderPin: string;
    tspBridge?: UserTspCreateTspAccountsListTspBridgeEnum;
}
export declare class UserTspCreateRequests extends SpeakeasyBase {
    tspAccountsList?: UserTspCreateTspAccountsList;
    tspAccountsList1?: UserTspCreateTspAccountsList;
}
export declare class UserTspCreateRequest extends SpeakeasyBase {
    pathParams: UserTspCreatePathParams;
    request: UserTspCreateRequests;
}
export declare class UserTspCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tspAccountsList?: UserTspCreateTspAccountsList;
}
