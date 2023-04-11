import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetUserFollowingAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetUserFollowingAlt1FilterEnum {
    Online = "online"
}
/**
 * The way to sort the results.
 */
export declare enum GetUserFollowingAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetUserFollowingAlt1Request extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetUserFollowingAlt1DirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetUserFollowingAlt1FilterEnum;
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
    sort?: GetUserFollowingAlt1SortEnum;
}
export declare class GetUserFollowingAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The followed users were returned.
     */
    users?: shared.User[];
}
