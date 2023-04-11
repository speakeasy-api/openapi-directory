import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetUserGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetUserGroupsFilterEnum {
    Moderated = "moderated"
}
/**
 * The way to sort the results.
 */
export declare enum GetUserGroupsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Members = "members",
    Videos = "videos"
}
export declare class GetUserGroupsRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetUserGroupsDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetUserGroupsFilterEnum;
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
    sort?: GetUserGroupsSortEnum;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetUserGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The groups were returned.
     */
    groups?: shared.Group[];
}
