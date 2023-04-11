import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckIfUserLikedVideoAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CheckIfUserLikedVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user hasn't liked the video.
     */
    legacyError?: shared.LegacyError;
}
