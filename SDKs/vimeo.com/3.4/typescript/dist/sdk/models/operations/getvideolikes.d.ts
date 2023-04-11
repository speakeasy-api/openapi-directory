import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetVideoLikesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetVideoLikesSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetVideoLikesRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetVideoLikesDirectionEnum;
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
    sort?: GetVideoLikesSortEnum;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetVideoLikesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The users were returned.
     */
    users?: shared.User[];
}
