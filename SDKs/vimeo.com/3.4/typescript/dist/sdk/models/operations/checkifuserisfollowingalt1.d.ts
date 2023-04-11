import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckIfUserIsFollowingAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the following user.
     */
    followUserId: number;
}
export declare class CheckIfUserIsFollowingAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user in question doesn't follow the authenticated user.
     */
    legacyError?: shared.LegacyError;
}
