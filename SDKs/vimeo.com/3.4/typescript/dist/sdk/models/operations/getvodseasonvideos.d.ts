import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The attribute by which to filter the results.
 */
export declare enum GetVodSeasonVideosFilterEnum {
    Viewable = "viewable"
}
/**
 * The way to sort the results.
 */
export declare enum GetVodSeasonVideosSortEnum {
    Date = "date",
    Default = "default",
    Manual = "manual",
    Name = "name",
    PurchaseTime = "purchase_time",
    ReleaseDate = "release_date"
}
export declare class GetVodSeasonVideosRequest extends SpeakeasyBase {
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetVodSeasonVideosFilterEnum;
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
     * The ID of the season.
     */
    seasonId: number;
    /**
     * The way to sort the results.
     */
    sort?: GetVodSeasonVideosSortEnum;
}
export declare class GetVodSeasonVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
