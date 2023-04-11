import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckIfUserOwnsVideoAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CheckIfUserOwnsVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user doesn't own the video.
     */
    legacyError?: shared.LegacyError;
    /**
     * The user owns the video.
     */
    video?: shared.Video;
}
