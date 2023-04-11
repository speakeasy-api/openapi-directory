import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetCategoryGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetCategoryGroupsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Members = "members",
    Videos = "videos"
}
export declare class GetCategoryGroupsRequest extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: string;
    /**
     * The sort direction of the results.
     */
    direction?: GetCategoryGroupsDirectionEnum;
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
    sort?: GetCategoryGroupsSortEnum;
}
export declare class GetCategoryGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The groups were returned.
     */
    groups?: shared.Group[];
    /**
     * No such category exists.
     */
    legacyError?: shared.LegacyError;
}
