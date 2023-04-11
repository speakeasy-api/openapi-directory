import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Upload approach
 */
export declare enum CreateVideoVersionRequestBodyUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}
export declare class CreateVideoVersionRequestBodyUpload extends SpeakeasyBase {
    /**
     * Upload approach
     */
    approach: CreateVideoVersionRequestBodyUploadApproachEnum;
    /**
     * If your upload approach is pull, Vimeo will download the video hosted at this public URL. This URL must be valid for at least 24 hours.
     */
    link?: string;
    /**
     * The app's redirect URL. Use this parameter when `approach` is `post`.
     */
    redirectUrl?: string;
    /**
     * Upload size
     */
    size?: string;
}
export declare class CreateVideoVersionRequestBody extends SpeakeasyBase {
    /**
     * The name of the version
     */
    fileName: string;
    upload: CreateVideoVersionRequestBodyUpload;
}
export declare class CreateVideoVersionRequest extends SpeakeasyBase {
    requestBody: CreateVideoVersionRequestBody;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CreateVideoVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * Error code 2204: If the request input contains invalid upload data.
     *
     * @remarks
     * * Error code 2204: If the request input contains invalid versions data.
     */
    error?: shared.ErrorT;
    /**
     * Standard request.
     */
    videoVersions?: shared.VideoVersions;
}
