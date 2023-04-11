import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The attribute by which to filter the results.
 */
export declare enum GetLikesAlt1FilterEnum {
    Embeddable = "embeddable"
}
/**
 * The way to sort the results.
 */
export declare enum GetLikesAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}
export declare class GetLikesAlt1Request extends SpeakeasyBase {
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetLikesAlt1FilterEnum;
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
    sort?: GetLikesAlt1SortEnum;
}
export declare class GetLikesAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
