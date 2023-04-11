import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAlbumAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the album.
     */
    albumId: number;
}
export declare class GetAlbumAlt1Response extends SpeakeasyBase {
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
