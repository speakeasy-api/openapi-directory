import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VideosCredits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Credit a user in a video
     */
    addVideoCredit(req: operations.AddVideoCreditRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoCreditResponse>;
    /**
     * Credit a user in a video
     */
    addVideoCreditAlt1(req: operations.AddVideoCreditAlt1Request, config?: AxiosRequestConfig): Promise<operations.AddVideoCreditAlt1Response>;
    /**
     * Delete a credit for a user in a video
     */
    deleteVideoCredit(req: operations.DeleteVideoCreditRequest, security: operations.DeleteVideoCreditSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoCreditResponse>;
    /**
     * Edit a credit for a user in a video
     */
    editVideoCredit(req: operations.EditVideoCreditRequest, security: operations.EditVideoCreditSecurity, config?: AxiosRequestConfig): Promise<operations.EditVideoCreditResponse>;
    /**
     * Get a specific credited user in a video
     */
    getVideoCredit(req: operations.GetVideoCreditRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCreditResponse>;
    /**
     * Get all the credited users in a video
     */
    getVideoCredits(req: operations.GetVideoCreditsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCreditsResponse>;
    /**
     * Get all the credited users in a video
     */
    getVideoCreditsAlt1(req: operations.GetVideoCreditsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetVideoCreditsAlt1Response>;
}
