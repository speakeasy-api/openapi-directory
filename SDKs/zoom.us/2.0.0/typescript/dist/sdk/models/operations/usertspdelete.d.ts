import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * TSP account ID.
 */
export declare enum UserTSPDeleteTSPIDEnum {
    One = "1",
    Two = "2"
}
export declare class UserTSPDeleteRequest extends SpeakeasyBase {
    /**
     * TSP account ID.
     */
    tspId: UserTSPDeleteTSPIDEnum;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserTSPDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
