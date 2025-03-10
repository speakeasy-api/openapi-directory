import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetChannelVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetChannelVideosFilterEnum {
    Embeddable = "embeddable"
}
/**
 * The way to sort the results.
 */
export declare enum GetChannelVideosSortEnum {
    Added = "added",
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Duration = "duration",
    Likes = "likes",
    Manual = "manual",
    ModifiedTime = "modified_time",
    Plays = "plays"
}
export declare class GetChannelVideosRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The page that contains the video URI.
     */
    containingUri?: string;
    /**
     * The sort direction of the results.
     */
    direction?: GetChannelVideosDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetChannelVideosFilterEnum;
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
    sort?: GetChannelVideosSortEnum;
}
export declare class GetChannelVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The **sort** field is `default`, but the **direction** field has a value.
     */
    legacyError?: shared.LegacyError;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
