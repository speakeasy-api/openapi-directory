import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetVideosFilterEnum {
    AppOnly = "app_only",
    Embeddable = "embeddable",
    Featured = "featured",
    Playable = "playable"
}
/**
 * The way to sort the results.
 */
export declare enum GetVideosSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Duration = "duration",
    LastUserActionEventDate = "last_user_action_event_date",
    Likes = "likes",
    ModifiedTime = "modified_time",
    Plays = "plays"
}
export declare class GetVideosRequest extends SpeakeasyBase {
    /**
     * The page that contains the video URI. Only available when not paired with `query`.
     */
    containingUri?: string;
    /**
     * The sort direction of the results.
     */
    direction?: GetVideosDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetVideosFilterEnum;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
    /**
     * Whether to filter by all playable videos or by all videos that are not  playable.
     */
    filterPlayable?: boolean;
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
    sort?: GetVideosSortEnum;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
