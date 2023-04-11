import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddChannelModeratorSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddChannelModeratorRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class AddChannelModeratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user doesn't own the channel, a user is already a moderator of the channel, or you tried to add a user that the authenticated user doesn't follow.
     */
    legacyError?: shared.LegacyError;
}
