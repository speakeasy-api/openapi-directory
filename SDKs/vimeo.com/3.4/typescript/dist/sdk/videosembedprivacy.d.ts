import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VideosEmbedPrivacy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Permit a video to be embedded on a domain
     *
     * @remarks
     * If domain privacy is enabled for this video, this method permits the video to be embedded on the specified domain.
     */
    addVideoPrivacyDomain(req: operations.AddVideoPrivacyDomainRequest, security: operations.AddVideoPrivacyDomainSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoPrivacyDomainResponse>;
    /**
     * Restrict a video from being embedded on a domain
     */
    deleteVideoPrivacyDomain(req: operations.DeleteVideoPrivacyDomainRequest, security: operations.DeleteVideoPrivacyDomainSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoPrivacyDomainResponse>;
    /**
     * Get all the domains on which a video can be embedded
     */
    getVideoPrivacyDomains(req: operations.GetVideoPrivacyDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoPrivacyDomainsResponse>;
}
