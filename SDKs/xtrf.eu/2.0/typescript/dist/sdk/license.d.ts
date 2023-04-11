import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class License {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns license content.
     *
     * @remarks
     * Returns license content.
     */
    getLicense(config?: AxiosRequestConfig): Promise<operations.GetLicenseResponse>;
    /**
     * Refreshes license content.
     *
     * @remarks
     * Refreshes license content. This method returns OK immediately and license is refreshed asynchronously. It takes a while (usually a few seconds) for the license to be actually refreshed.
     */
    refresh(config?: AxiosRequestConfig): Promise<operations.RefreshResponse>;
}
