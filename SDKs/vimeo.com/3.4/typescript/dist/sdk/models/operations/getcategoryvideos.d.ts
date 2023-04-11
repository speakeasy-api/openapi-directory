import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetCategoryVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `conditional_featured` - Featured (promoted) videos
 *
 */
export declare enum GetCategoryVideosFilterEnum {
    ConditionalFeatured = "conditional_featured",
    Embeddable = "embeddable"
}
/**
 * The way to sort the results.
 */
export declare enum GetCategoryVideosSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Featured = "featured",
    Likes = "likes",
    Plays = "plays",
    Relevant = "relevant"
}
export declare class GetCategoryVideosRequest extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: string;
    /**
     * The sort direction of the results.
     */
    direction?: GetCategoryVideosDirectionEnum;
    /**
     * The attribute by which to filter the results.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `conditional_featured` - Featured (promoted) videos
     *
     */
    filter?: GetCategoryVideosFilterEnum;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The search query to use to filter the results.
     */
    query?: string;
    /**
     * The way to sort the results.
     */
    sort?: GetCategoryVideosSortEnum;
}
export declare class GetCategoryVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such category exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
