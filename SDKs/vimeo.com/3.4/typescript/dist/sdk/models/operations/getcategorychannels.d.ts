import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetCategoryChannelsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetCategoryChannelsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Videos = "videos"
}
export declare class GetCategoryChannelsRequest extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: string;
    /**
     * The sort direction of the results.
     */
    direction?: GetCategoryChannelsDirectionEnum;
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
    sort?: GetCategoryChannelsSortEnum;
}
export declare class GetCategoryChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The channels were returned.
     */
    channels?: shared.Channel[];
    /**
     * No such category exists.
     */
    legacyError?: shared.LegacyError;
}
