import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The attribute by which to filter the results.
 */
export declare enum GetPortfolioVideosAlt1FilterEnum {
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
export declare enum GetPortfolioVideosAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Likes = "likes",
    Manual = "manual",
    Plays = "plays"
}
export declare class GetPortfolioVideosAlt1Request extends SpeakeasyBase {
    /**
     * The page that contains the video URI.
     */
    containingUri?: string;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetPortfolioVideosAlt1FilterEnum;
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
    sort?: GetPortfolioVideosAlt1SortEnum;
}
export declare class GetPortfolioVideosAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
