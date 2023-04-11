import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VideosUpload {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Complete a user's streaming upload
     */
    completeStreamingUpload(req: operations.CompleteStreamingUploadRequest, security: operations.CompleteStreamingUploadSecurity, config?: AxiosRequestConfig): Promise<operations.CompleteStreamingUploadResponse>;
    /**
     * Get a user's upload attempt
     */
    getUploadAttempt(req: operations.GetUploadAttemptRequest, security: operations.GetUploadAttemptSecurity, config?: AxiosRequestConfig): Promise<operations.GetUploadAttemptResponse>;
    /**
     * Upload a video
     *
     * @remarks
     * Begin the video upload process. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).
     */
    uploadVideo(req: operations.UploadVideoRequest, config?: AxiosRequestConfig): Promise<operations.UploadVideoResponse>;
    /**
     * Upload a video
     *
     * @remarks
     * Begin the video upload process. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).
     */
    uploadVideoAlt1(req: operations.UploadVideoAlt1RequestBody, config?: AxiosRequestConfig): Promise<operations.UploadVideoAlt1Response>;
}
