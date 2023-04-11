import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAlbumCustomThumbsRequest extends SpeakeasyBase {
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetAlbumCustomThumbsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such album exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The custom uploaded thumbnails were returned.
     */
    pictures?: shared.Picture[];
}
