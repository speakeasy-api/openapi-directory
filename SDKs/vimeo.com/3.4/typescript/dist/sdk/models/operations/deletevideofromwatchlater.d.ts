import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteVideoFromWatchLaterSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoFromWatchLaterRequest extends SpeakeasyBase {
    /**
     * The ID of the user.
     */
    userId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteVideoFromWatchLaterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
