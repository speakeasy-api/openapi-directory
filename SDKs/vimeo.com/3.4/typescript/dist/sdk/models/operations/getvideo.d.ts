import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVideoRequest extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such video exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The video was returned.
     */
    video?: shared.Video;
}
