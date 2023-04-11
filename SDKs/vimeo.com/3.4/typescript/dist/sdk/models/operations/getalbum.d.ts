import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAlbumRequest extends SpeakeasyBase {
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The album was returned.
     */
    album?: shared.Album;
    /**
     * No such album exists.
     */
    legacyError?: shared.LegacyError;
}
