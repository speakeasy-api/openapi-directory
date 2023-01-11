import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserTspTspIdEnum {
    One = "1",
    Two = "2"
}
export declare class UserTspPathParams extends SpeakeasyBase {
    tspId: UserTspTspIdEnum;
    userId: string;
}
export declare enum UserTspTspAccountDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}
export declare class UserTspTspAccountDialInNumbers extends SpeakeasyBase {
    code?: string;
    countryLabel?: string;
    number?: string;
    type?: UserTspTspAccountDialInNumbersTypeEnum;
}
export declare enum UserTspTspAccountTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * TSP account of the user.
**/
export declare class UserTspTspAccount extends SpeakeasyBase {
    conferenceCode: string;
    dialInNumbers?: UserTspTspAccountDialInNumbers[];
    id?: number;
    leaderPin: string;
    tspBridge?: UserTspTspAccountTspBridgeEnum;
}
export declare class UserTspRequest extends SpeakeasyBase {
    pathParams: UserTspPathParams;
}
export declare class UserTspResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tspAccount?: UserTspTspAccount;
}
