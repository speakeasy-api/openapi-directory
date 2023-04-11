import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get full HTML content of pages with proxies and Chrome JS rendering
 */
export declare class Html {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Page HTML by URL
     *
     * @remarks
     * Returns just HTML on success, JSON on error
     */
    getHTML(req: operations.GetHTMLRequest, config?: AxiosRequestConfig): Promise<operations.GetHTMLResponse>;
}
