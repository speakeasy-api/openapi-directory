import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWatchLaterQueueSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The sort direction of the results.
 */
export declare enum GetWatchLaterQueueDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetWatchLaterQueueFilterEnum {
    Embeddable = "embeddable"
}
/**
 * The way to sort the results.
 */
export declare enum GetWatchLaterQueueSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}
export declare class GetWatchLaterQueueRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetWatchLaterQueueDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetWatchLaterQueueFilterEnum;
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
    sort?: GetWatchLaterQueueSortEnum;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetWatchLaterQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
