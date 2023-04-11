import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveChannelModeratorSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RemoveChannelModeratorRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class RemoveChannelModeratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user doesn't own the channel, the user isn't a moderator of the channel, or you tried to remove the owner of the channel.
     */
    legacyError?: shared.LegacyError;
}
