import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get HTML content of selected page areas (like price, search results, page title, etc.)
 */
export declare class SelectedHTML {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * HTML of a selected page area by URL and CSS selector
     *
     * @remarks
     * Returns just HTML on success, JSON on error
     */
    getSelected(req: operations.GetSelectedRequest, config?: AxiosRequestConfig): Promise<operations.GetSelectedResponse>;
    /**
     * HTML of multiple page areas by URL and CSS selectors
     *
     * @remarks
     * Always returns JSON
     */
    getSelectedMultiple(req: operations.GetSelectedMultipleRequest, config?: AxiosRequestConfig): Promise<operations.GetSelectedMultipleResponse>;
}
