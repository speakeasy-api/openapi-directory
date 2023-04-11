import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVideoFromChannelSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoFromChannelRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteVideoFromChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user isn't a moderator of this channel.
     */
    legacyError?: shared.LegacyError;
}
