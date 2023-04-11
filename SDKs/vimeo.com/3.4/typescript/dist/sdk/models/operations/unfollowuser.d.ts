import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnfollowUserSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UnfollowUserRequest extends SpeakeasyBase {
    /**
     * The ID of the following user.
     */
    followUserId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class UnfollowUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
