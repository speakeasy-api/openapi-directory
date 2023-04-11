import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetPortfoliosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetPortfoliosSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetPortfoliosRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetPortfoliosDirectionEnum;
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
    sort?: GetPortfoliosSortEnum;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetPortfoliosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The portfolios were returned.
     */
    portfolios?: shared.Portfolio[];
}
