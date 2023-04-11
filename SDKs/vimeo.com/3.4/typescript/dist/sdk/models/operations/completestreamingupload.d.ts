import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompleteStreamingUploadSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CompleteStreamingUploadRequest extends SpeakeasyBase {
    /**
     * The crypto signature of the completed upload.
     */
    signature: string;
    /**
     * The ID of the upload attempt.
     */
    upload: number;
    /**
     * The ID of the user.
     */
    userId: number;
    /**
     * The ID of the uploaded file.
     */
    videoFileId: number;
}
export declare class CompleteStreamingUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 2502: The format of the video file is invalid.
     */
    error?: shared.ErrorT;
}
