import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum SearchVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results. `CC` and related filters target videos with the corresponding Creative Commons licenses. For more information, see our [Creative Commons](https://vimeo.com/creativecommons) page.
 */
export declare enum SearchVideosFilterEnum {
    Cc = "CC",
    CcBy = "CC-BY",
    CcByNc = "CC-BY-NC",
    CcByNcNd = "CC-BY-NC-ND",
    CcByNcSa = "CC-BY-NC-SA",
    CcByNd = "CC-BY-ND",
    CcBySa = "CC-BY-SA",
    Cc0 = "CC0",
    Categories = "categories",
    Duration = "duration",
    InProgress = "in-progress",
    MinimumLikes = "minimum_likes",
    Trending = "trending",
    UploadDate = "upload_date"
}
/**
 * The way to sort the results.
 */
export declare enum SearchVideosSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays",
    Relevant = "relevant"
}
export declare class SearchVideosRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: SearchVideosDirectionEnum;
    /**
     * The attribute by which to filter the results. `CC` and related filters target videos with the corresponding Creative Commons licenses. For more information, see our [Creative Commons](https://vimeo.com/creativecommons) page.
     */
    filter?: SearchVideosFilterEnum;
    /**
     * A comma-separated list of video URLs to find.
     */
    links?: string;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * Search query.
     */
    query: string;
    /**
     * The way to sort the results.
     */
    sort?: SearchVideosSortEnum;
    /**
     * The comma-separated list of videos to find.
     */
    uris?: string;
}
export declare class SearchVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * Error code 2101: Either the `uris` or `links` parameter has filtering or sorting arguments.
     *
     * @remarks
     * * Error code 2204: There is a problem with the batch request.
     */
    error?: shared.ErrorT;
    /**
     * * Search is disabled.
     *
     * @remarks
     * * Error code 7300: There was an internal search error.
     */
    legacyError?: shared.LegacyError;
    /**
     * The search results were returned.
     */
    videos?: shared.Video[];
}
