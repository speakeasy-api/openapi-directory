import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetGroupVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetGroupVideosFilterEnum {
    Embeddable = "embeddable"
}
/**
 * The way to sort the results.
 */
export declare enum GetGroupVideosSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}
export declare class GetGroupVideosRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetGroupVideosDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetGroupVideosFilterEnum;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
    /**
     * The ID of the group.
     */
    groupId: number;
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
    sort?: GetGroupVideosSortEnum;
}
export declare class GetGroupVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such group exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
