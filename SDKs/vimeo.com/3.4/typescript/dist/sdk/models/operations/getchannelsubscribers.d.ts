import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetChannelSubscribersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetChannelSubscribersFilterEnum {
    Moderators = "moderators"
}
/**
 * The way to sort the results.
 */
export declare enum GetChannelSubscribersSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetChannelSubscribersRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The sort direction of the results.
     */
    direction?: GetChannelSubscribersDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter: GetChannelSubscribersFilterEnum;
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
    sort?: GetChannelSubscribersSortEnum;
}
export declare class GetChannelSubscribersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such channel exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The followers were returned.
     */
    users?: shared.User[];
}
