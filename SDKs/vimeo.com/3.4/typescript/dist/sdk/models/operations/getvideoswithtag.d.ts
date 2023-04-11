import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetVideosWithTagDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetVideosWithTagSortEnum {
    CreatedTime = "created_time",
    Duration = "duration",
    Name = "name"
}
export declare class GetVideosWithTagRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetVideosWithTagDirectionEnum;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The way to sort the results.
     */
    sort?: GetVideosWithTagSortEnum;
    /**
     * The tag word.
     */
    word: string;
}
export declare class GetVideosWithTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such tag exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
