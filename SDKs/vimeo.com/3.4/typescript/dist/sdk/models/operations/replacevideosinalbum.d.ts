import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReplaceVideosInAlbumSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ReplaceVideosInAlbumRequestBody extends SpeakeasyBase {
    /**
     * A comma-separated list of video URIs.
     */
    videos: string;
}
export declare class ReplaceVideosInAlbumRequest extends SpeakeasyBase {
    requestBody: ReplaceVideosInAlbumRequestBody;
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class ReplaceVideosInAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't add videos to albums.
     */
    legacyError?: shared.LegacyError;
}
