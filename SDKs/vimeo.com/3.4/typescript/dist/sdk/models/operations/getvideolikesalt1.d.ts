import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetVideoLikesAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetVideoLikesAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetVideoLikesAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The sort direction of the results.
     */
    direction?: GetVideoLikesAlt1DirectionEnum;
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
    sort?: GetVideoLikesAlt1SortEnum;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetVideoLikesAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The users were returned.
     */
    users?: shared.User[];
}
