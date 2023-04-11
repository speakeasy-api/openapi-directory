import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddVideoToWatchLaterAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoToWatchLaterAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoToWatchLaterAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
