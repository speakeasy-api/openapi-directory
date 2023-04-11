import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetVideoAsAlbumThumbnailAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class SetVideoAsAlbumThumbnailAlt1RequestBody extends SpeakeasyBase {
    /**
     * The video frame time in seconds to use as the album thumbnail.
     */
    timeCode?: number;
}
export declare class SetVideoAsAlbumThumbnailAlt1Request extends SpeakeasyBase {
    requestBody?: SetVideoAsAlbumThumbnailAlt1RequestBody;
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class SetVideoAsAlbumThumbnailAlt1Response extends SpeakeasyBase {
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
