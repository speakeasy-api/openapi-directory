import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAlbumCustomThumbnailRequest extends SpeakeasyBase {
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
export declare class GetAlbumCustomThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't view this custom thumbnail.
     */
    legacyError?: shared.LegacyError;
    /**
     * The custom thumbnail was returned.
     */
    picture?: shared.Picture;
}
