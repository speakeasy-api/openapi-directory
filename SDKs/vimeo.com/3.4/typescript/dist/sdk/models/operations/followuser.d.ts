import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FollowUserSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class FollowUserRequest extends SpeakeasyBase {
    /**
     * The ID of the following user.
     */
    followUserId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class FollowUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't add followers.
     */
    legacyError?: shared.LegacyError;
}
