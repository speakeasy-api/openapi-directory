import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveChannelModeratorsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RemoveChannelModeratorsRequestBody extends SpeakeasyBase {
    /**
     * The URI of a user to remove as a moderator.
     */
    userUri: string;
}
export declare class RemoveChannelModeratorsRequest extends SpeakeasyBase {
    requestBody: RemoveChannelModeratorsRequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class RemoveChannelModeratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user doesn't own the channel, the user isn't a moderator of the channel, or you tried to remove the owner of the channel.
     */
    legacyError?: shared.LegacyError;
    /**
     * The moderators were removed.
     */
    user?: shared.User;
}
