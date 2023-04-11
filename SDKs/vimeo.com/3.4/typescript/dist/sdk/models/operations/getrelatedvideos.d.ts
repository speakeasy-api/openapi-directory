import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The attribute by which to filter the results.
 */
export declare enum GetRelatedVideosFilterEnum {
    Related = "related"
}
export declare class GetRelatedVideosRequest extends SpeakeasyBase {
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetRelatedVideosFilterEnum;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetRelatedVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The value of `filter` isn' `related`.
     */
    legacyError?: shared.LegacyError;
    /**
     * The related videos were returned.
     */
    videos?: shared.Video[];
}
