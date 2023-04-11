import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddChannelModeratorsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddChannelModeratorsRequestBody extends SpeakeasyBase {
    /**
     * The URI of a user to add as a moderator.
     */
    userUri: string;
}
export declare class AddChannelModeratorsRequest extends SpeakeasyBase {
    requestBody: AddChannelModeratorsRequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class AddChannelModeratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 2908: The list contains more than 100 users.
     */
    error?: shared.ErrorT;
    /**
     * The authenticated user doesn't own the channel, a user is already a moderator of the channel, or you tried to add a user that the authenticated user doesn't follow.
     */
    legacyError?: shared.LegacyError;
}
