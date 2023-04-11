import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideosToChannelSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideosToChannelRequestBody extends SpeakeasyBase {
    /**
     * The URI of a video to add.
     */
    videoUri: string;
}
export declare class AddVideosToChannelRequest extends SpeakeasyBase {
    requestBody: AddVideosToChannelRequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class AddVideosToChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user isn't a moderator of the channel, or the video can't be added to the channel.
     */
    legacyError?: shared.LegacyError;
}
