import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteAlbumSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteAlbumRequest extends SpeakeasyBase {
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class DeleteAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The supplied token doesn't have the proper scopes, or the authenticated user can't delete the album.
     */
    legacyError?: shared.LegacyError;
}
