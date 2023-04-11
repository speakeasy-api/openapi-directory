import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveVideosFromChannelSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RemoveVideosFromChannelRequestBody extends SpeakeasyBase {
    /**
     * The URI of a video to remove.
     */
    videoUri: string;
}
export declare class RemoveVideosFromChannelRequest extends SpeakeasyBase {
    requestBody: RemoveVideosFromChannelRequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class RemoveVideosFromChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user isn't a moderator of this channel, or you can't remove this video from the channel.
     */
    legacyError?: shared.LegacyError;
    /**
     * The videos were removed.
     */
    video?: shared.Video;
}
