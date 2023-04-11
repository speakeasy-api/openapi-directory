import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetVodSeasonsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetVodSeasonsFilterEnum {
    Viewable = "viewable"
}
/**
 * The way to sort the results.
 */
export declare enum GetVodSeasonsSortEnum {
    Date = "date",
    Manual = "manual"
}
export declare class GetVodSeasonsRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetVodSeasonsDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetVodSeasonsFilterEnum;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
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
    sort?: GetVodSeasonsSortEnum;
}
export declare class GetVodSeasonsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such On Demand page exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The seasons were returned.
     */
    onDemandSeasons?: shared.OnDemandSeason[];
}
