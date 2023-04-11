import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The attribute by which to filter the results.
 */
export declare enum GetPortfolioVideosFilterEnum {
    Embeddable = "embeddable"
}
/**
 * The way to sort the results.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `default` - This will sort to the default sort set on the portfolio.
 *
 */
export declare enum GetPortfolioVideosSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Likes = "likes",
    Manual = "manual",
    Plays = "plays"
}
export declare class GetPortfolioVideosRequest extends SpeakeasyBase {
    /**
     * The page that contains the video URI.
     */
    containingUri?: string;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetPortfolioVideosFilterEnum;
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
     * The ID of the portfolio.
     */
    portfolioId: number;
    /**
     * The way to sort the results.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `default` - This will sort to the default sort set on the portfolio.
     *
     */
    sort?: GetPortfolioVideosSortEnum;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetPortfolioVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
