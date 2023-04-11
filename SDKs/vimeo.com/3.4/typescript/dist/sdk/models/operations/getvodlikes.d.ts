import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetVodLikesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetVodLikesFilterEnum {
    Extra = "extra",
    Main = "main",
    Trailer = "trailer"
}
/**
 * The way to sort the results.
 */
export declare enum GetVodLikesSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetVodLikesRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetVodLikesDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetVodLikesFilterEnum;
    /**
     * The ID of the On Demand page.
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
    sort?: GetVodLikesSortEnum;
}
export declare class GetVodLikesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The users were returned.
     */
    users?: shared.User[];
}
