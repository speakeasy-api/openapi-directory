import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveVideoFromAlbumAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class RemoveVideoFromAlbumAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class RemoveVideoFromAlbumAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The supplied token doesn't have the proper scopes, or the authenticated user can't edit the album.
     */
    legacyError?: shared.LegacyError;
}
