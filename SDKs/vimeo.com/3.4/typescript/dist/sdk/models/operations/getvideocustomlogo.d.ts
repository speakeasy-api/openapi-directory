import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVideoCustomLogoRequest extends SpeakeasyBase {
    /**
     * The ID of the picture.
     */
    thumbnailId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetVideoCustomLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the user isn't permitted to view this custom logo.
     */
    legacyError?: shared.LegacyError;
    /**
     * The custom logo was returned.
     */
    picture?: shared.Picture;
}
