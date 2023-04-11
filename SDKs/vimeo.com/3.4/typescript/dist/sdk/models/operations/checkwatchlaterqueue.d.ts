import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckWatchLaterQueueSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CheckWatchLaterQueueRequest extends SpeakeasyBase {
    /**
     * The ID of the user.
     */
    userId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CheckWatchLaterQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The video doesn't appear in the user's Watch Later queue.
     */
    legacyError?: shared.LegacyError;
    /**
     * The video appears in the user's Watch Later queue.
     */
    video?: shared.Video;
}
