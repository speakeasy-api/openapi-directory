import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteVideoFromWatchLaterAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoFromWatchLaterAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteVideoFromWatchLaterAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
