import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetUserFollowingDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetUserFollowingFilterEnum {
    Online = "online"
}
/**
 * The way to sort the results.
 */
export declare enum GetUserFollowingSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetUserFollowingRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetUserFollowingDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetUserFollowingFilterEnum;
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
    sort?: GetUserFollowingSortEnum;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetUserFollowingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The followed users were returned.
     */
    users?: shared.User[];
}
