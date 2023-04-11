import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckCategoryForVideoRequest extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: string;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CheckCategoryForVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such category exists, or the video doesn't belong to it.
     */
    legacyError?: shared.LegacyError;
    /**
     * The video belongs to the category.
     */
    video?: shared.Video;
}
