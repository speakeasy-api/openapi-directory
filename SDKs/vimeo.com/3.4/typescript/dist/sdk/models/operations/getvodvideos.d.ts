import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetVodVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetVodVideosFilterEnum {
    All = "all",
    Buy = "buy",
    ExpiringSoon = "expiring_soon",
    Extra = "extra",
    Main = "main",
    MainViewable = "main.viewable",
    Rent = "rent",
    Trailer = "trailer",
    Unwatched = "unwatched",
    Viewable = "viewable",
    Watched = "watched"
}
/**
 * The way to sort the results.
 */
export declare enum GetVodVideosSortEnum {
    Date = "date",
    Default = "default",
    Episode = "episode",
    Manual = "manual",
    Name = "name",
    PurchaseTime = "purchase_time",
    ReleaseDate = "release_date"
}
export declare class GetVodVideosRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetVodVideosDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetVodVideosFilterEnum;
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
    sort?: GetVodVideosSortEnum;
}
export declare class GetVodVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * The videos were returned.
     *
     * @remarks
     * * The videos were returned.
     */
    videos?: shared.Video[];
}
