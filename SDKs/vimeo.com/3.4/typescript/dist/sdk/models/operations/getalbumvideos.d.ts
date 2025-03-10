import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetAlbumVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetAlbumVideosFilterEnum {
    Embeddable = "embeddable"
}
/**
 * The way to sort the results.
 */
export declare enum GetAlbumVideosSortEnum {
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
export declare class GetAlbumVideosRequest extends SpeakeasyBase {
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The page containing the video URI.
     */
    containingUri?: string;
    /**
     * The sort direction of the results.
     */
    direction?: GetAlbumVideosDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetAlbumVideosFilterEnum;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The password of the album.
     */
    password?: string;
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
    sort?: GetAlbumVideosSortEnum;
    /**
     * The ID of the user.
     */
    userId: number;
    /**
     * Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name.
     */
    weakSearch?: boolean;
}
export declare class GetAlbumVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such album exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
