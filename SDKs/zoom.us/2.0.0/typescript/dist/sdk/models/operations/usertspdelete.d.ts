import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserTspDeleteTspIdEnum {
    One = "1",
    Two = "2"
}
export declare class UserTspDeletePathParams extends SpeakeasyBase {
    tspId: UserTspDeleteTspIdEnum;
    userId: string;
}
export declare class UserTspDeleteRequest extends SpeakeasyBase {
    pathParams: UserTspDeletePathParams;
}
export declare class UserTspDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
