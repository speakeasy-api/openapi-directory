import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReplaceChannelModeratorsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ReplaceChannelModeratorsRequestBody extends SpeakeasyBase {
    /**
     * The URI of the user to add as a moderator.
     */
    userUri: string;
}
export declare class ReplaceChannelModeratorsRequest extends SpeakeasyBase {
    requestBody: ReplaceChannelModeratorsRequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class ReplaceChannelModeratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 2908: The list contains more than 100 users.
     */
    error?: shared.ErrorT;
    /**
     * The authenticated user owns this channel.
     */
    legacyError?: shared.LegacyError;
    /**
     * The moderators were replaced.
     */
    users?: shared.User[];
}
