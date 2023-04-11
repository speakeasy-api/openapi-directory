import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FollowUserAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class FollowUserAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the following user.
     */
    followUserId: number;
}
export declare class FollowUserAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't add followers.
     */
    legacyError?: shared.LegacyError;
}
