import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteAlbumLogoSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteAlbumLogoRequest extends SpeakeasyBase {
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
export declare class DeleteAlbumLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't modify this album.
     */
    legacyError?: shared.LegacyError;
}
