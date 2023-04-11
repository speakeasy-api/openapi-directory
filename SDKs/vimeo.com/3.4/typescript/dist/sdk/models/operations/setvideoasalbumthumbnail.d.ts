import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetVideoAsAlbumThumbnailSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SetVideoAsAlbumThumbnailRequestBody extends SpeakeasyBase {
    /**
     * The video frame time in seconds to use as the album thumbnail.
     */
    timeCode?: number;
}
export declare class SetVideoAsAlbumThumbnailRequest extends SpeakeasyBase {
    requestBody?: SetVideoAsAlbumThumbnailRequestBody;
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The ID of the user.
     */
    userId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class SetVideoAsAlbumThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The album was updated with a new thumbnail.
     */
    album?: shared.Album;
    /**
     * Error code 3429: The authenticated user can't edit the album.
     */
    error?: shared.ErrorT;
}
