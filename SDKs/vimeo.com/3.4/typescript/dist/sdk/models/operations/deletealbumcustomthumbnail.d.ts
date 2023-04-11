import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteAlbumCustomThumbnailSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteAlbumCustomThumbnailRequest extends SpeakeasyBase {
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The ID of the custom thumbnail.
     */
    thumbnailId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class DeleteAlbumCustomThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't modify this album.
     */
    legacyError?: shared.LegacyError;
}
