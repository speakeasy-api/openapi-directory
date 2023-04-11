import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetVideoCreditsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetVideoCreditsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetVideoCreditsRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetVideoCreditsDirectionEnum;
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
    sort?: GetVideoCreditsSortEnum;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetVideoCreditsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The users were returned.
     */
    credits?: shared.Credit[];
}
