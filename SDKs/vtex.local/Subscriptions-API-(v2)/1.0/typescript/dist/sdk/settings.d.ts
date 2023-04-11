import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Edit Subscriptions settings
     *
     * @remarks
     * Edits Subscriptions settings in your store.
     */
    editSettings(req: operations.EditSettingsRequest, config?: AxiosRequestConfig): Promise<operations.EditSettingsResponse>;
    /**
     * Get Subscriptions Settings
     *
     * @remarks
     * Lists the current Subscriptions settings in your store.
     */
    getSettings(req: operations.GetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsResponse>;
}
