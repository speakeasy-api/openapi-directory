import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetChannelSubscriptionsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetChannelSubscriptionsAlt1FilterEnum {
    Moderated = "moderated"
}
/**
 * The way to sort the results.
 */
export declare enum GetChannelSubscriptionsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Videos = "videos"
}
export declare class GetChannelSubscriptionsAlt1Request extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetChannelSubscriptionsAlt1DirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetChannelSubscriptionsAlt1FilterEnum;
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
    sort?: GetChannelSubscriptionsAlt1SortEnum;
}
export declare class GetChannelSubscriptionsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The channels were returned.
     */
    channels?: shared.Channel[];
}
