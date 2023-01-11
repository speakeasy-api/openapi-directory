import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserTspUpdateTspIdEnum {
    One = "1",
    Two = "2"
}
export declare class UserTspUpdatePathParams extends SpeakeasyBase {
    tspId: UserTspUpdateTspIdEnum;
    userId: string;
}
export declare enum UserTspUpdateTspAccountDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}
export declare class UserTspUpdateTspAccountDialInNumbers extends SpeakeasyBase {
    code?: string;
    countryLabel?: string;
    number?: string;
    type?: UserTspUpdateTspAccountDialInNumbersTypeEnum;
}
export declare enum UserTspUpdateTspAccountTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * TSP account.
**/
export declare class UserTspUpdateTspAccount extends SpeakeasyBase {
    conferenceCode: string;
    dialInNumbers?: UserTspUpdateTspAccountDialInNumbers[];
    leaderPin: string;
    tspBridge?: UserTspUpdateTspAccountTspBridgeEnum;
}
export declare class UserTspUpdateRequests extends SpeakeasyBase {
    tspAccount?: UserTspUpdateTspAccount;
    tspAccount1?: UserTspUpdateTspAccount;
}
export declare class UserTspUpdateRequest extends SpeakeasyBase {
    pathParams: UserTspUpdatePathParams;
    request: UserTspUpdateRequests;
}
export declare class UserTspUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
