import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReplaceAlbumLogoSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ReplaceAlbumLogoRequestBody extends SpeakeasyBase {
    /**
     * Whether to make this the active album logo.
     */
    active?: boolean;
}
export declare class ReplaceAlbumLogoRequest extends SpeakeasyBase {
    requestBody?: ReplaceAlbumLogoRequestBody;
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The ID of the custom logo.
     */
    logoId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class ReplaceAlbumLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't modify this album.
     */
    legacyError?: shared.LegacyError;
    /**
     * The custom logo was replaced.
     */
    picture?: shared.Picture;
}
