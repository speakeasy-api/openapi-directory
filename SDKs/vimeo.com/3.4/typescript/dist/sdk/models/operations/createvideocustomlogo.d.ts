import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateVideoCustomLogoSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateVideoCustomLogoRequest extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CreateVideoCustomLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the user is attempting to upload pictures for another user's videos.
     */
    legacyError?: shared.LegacyError;
    /**
     * Standard request.
     */
    picture?: shared.Picture;
}
