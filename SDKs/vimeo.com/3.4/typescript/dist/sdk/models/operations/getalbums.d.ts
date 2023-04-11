import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetAlbumsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetAlbumsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Duration = "duration",
    Videos = "videos"
}
export declare class GetAlbumsRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetAlbumsDirectionEnum;
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
    sort?: GetAlbumsSortEnum;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetAlbumsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The albums were returned.
     */
    albums?: shared.Album[];
    /**
     * A parameter is invalid.
     */
    legacyError?: shared.LegacyError;
}
