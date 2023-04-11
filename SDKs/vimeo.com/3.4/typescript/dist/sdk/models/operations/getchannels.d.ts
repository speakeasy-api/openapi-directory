import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetChannelsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetChannelsFilterEnum {
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
export declare enum GetChannelsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Relevant = "relevant",
    Videos = "videos"
}
export declare class GetChannelsRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetChannelsDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetChannelsFilterEnum;
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
    sort?: GetChannelsSortEnum;
}
export declare class GetChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The channels were returned.
     */
    channels?: shared.Channel[];
    /**
     * The relevant sort has no search query.
     */
    legacyError?: shared.LegacyError;
}
