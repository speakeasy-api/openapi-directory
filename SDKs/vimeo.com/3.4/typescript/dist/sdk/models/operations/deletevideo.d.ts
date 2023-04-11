import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVideoSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoRequest extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user doesn't own the video and can't delete it.
     */
    legacyError?: shared.LegacyError;
}
