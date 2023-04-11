import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAlbumCustomThumbSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateAlbumCustomThumbRequest extends SpeakeasyBase {
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class CreateAlbumCustomThumbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't modify this album.
     */
    legacyError?: shared.LegacyError;
    /**
     * The custom thumbnail was added to the album.
     */
    picture?: shared.Picture;
}
