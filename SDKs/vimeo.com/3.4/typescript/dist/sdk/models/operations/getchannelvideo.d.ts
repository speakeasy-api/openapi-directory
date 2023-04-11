import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelVideoRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetChannelVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such channel exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The video was returned.
     */
    video?: shared.Video;
}
