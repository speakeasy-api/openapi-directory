import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReplaceAlbumCustomThumbSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ReplaceAlbumCustomThumbRequestBody extends SpeakeasyBase {
    /**
     * Whether to make this the active album thumbnail.
     */
    active?: boolean;
}
export declare class ReplaceAlbumCustomThumbRequest extends SpeakeasyBase {
    requestBody?: ReplaceAlbumCustomThumbRequestBody;
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
export declare class ReplaceAlbumCustomThumbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't modify this album.
     */
    legacyError?: shared.LegacyError;
    /**
     * The custom thumbnail was replaced.
     */
    picture?: shared.Picture;
}
