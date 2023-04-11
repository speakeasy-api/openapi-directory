import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckIfUserIsFollowingRequest extends SpeakeasyBase {
    /**
     * The ID of the following user.
     */
    followUserId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class CheckIfUserIsFollowingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user in question doesn't follow the authenticated user.
     */
    legacyError?: shared.LegacyError;
}
