import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetGroupsFilterEnum {
    Featured = "featured"
}
/**
 * The way to sort the results.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `relevant` - Relevant sorting is available only for search queries.
 *
 */
export declare enum GetGroupsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Relevant = "relevant",
    Videos = "videos"
}
export declare class GetGroupsRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetGroupsDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetGroupsFilterEnum;
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
     *
     * @remarks
     *
     * Option descriptions:
     *  * `relevant` - Relevant sorting is available only for search queries.
     *
     */
    sort?: GetGroupsSortEnum;
}
export declare class GetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The groups were returned.
     */
    groups?: shared.Group[];
}
