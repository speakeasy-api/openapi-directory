import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAlbumLogoRequest extends SpeakeasyBase {
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
export declare class GetAlbumLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't view this custom logo.
     */
    legacyError?: shared.LegacyError;
    /**
     * The custom logo was returned.
     */
    picture?: shared.Picture;
}
