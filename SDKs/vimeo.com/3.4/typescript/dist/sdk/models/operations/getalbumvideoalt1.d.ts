import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAlbumVideoAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The password of the album.
     */
    password?: string;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetAlbumVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such album exists, or the video wasn't found in it.
     */
    legacyError?: shared.LegacyError;
    /**
     * The video was returned.
     */
    video?: shared.Video;
}
