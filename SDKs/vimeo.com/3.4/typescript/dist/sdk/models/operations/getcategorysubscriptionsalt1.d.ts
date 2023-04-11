import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategorySubscriptionsAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The sort direction of the results.
 */
export declare enum GetCategorySubscriptionsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetCategorySubscriptionsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Name = "name"
}
export declare class GetCategorySubscriptionsAlt1Request extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetCategorySubscriptionsAlt1DirectionEnum;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The way to sort the results.
     */
    sort?: GetCategorySubscriptionsAlt1SortEnum;
}
export declare class GetCategorySubscriptionsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The categories were returned.
     */
    categories?: shared.Category[];
    /**
     * Error code 3200: You can't view another user.
     */
    error?: shared.ErrorT;
}
