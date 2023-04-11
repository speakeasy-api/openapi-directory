import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReplaceVideosInAlbumAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class ReplaceVideosInAlbumAlt1RequestBody extends SpeakeasyBase {
    /**
     * A comma-separated list of video URIs.
     */
    videos: string;
}
export declare class ReplaceVideosInAlbumAlt1Request extends SpeakeasyBase {
    requestBody: ReplaceVideosInAlbumAlt1RequestBody;
    /**
     * The ID of the album.
     */
    albumId: number;
}
export declare class ReplaceVideosInAlbumAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't add videos to albums.
     */
    legacyError?: shared.LegacyError;
}
