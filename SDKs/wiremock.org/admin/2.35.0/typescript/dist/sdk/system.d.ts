import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Global operations
 */
export declare class System {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Reset mappings and request journal
     *
     * @remarks
     * Reset mappings to the default state and reset the request journal
     */
    postAdminReset(config?: AxiosRequestConfig): Promise<operations.PostAdminResetResponse>;
    /**
     * Update global settings
     */
    postAdminSettings(req: any, config?: AxiosRequestConfig): Promise<operations.PostAdminSettingsResponse>;
    /**
     * Shutdown the WireMock server
     */
    postAdminShutdown(config?: AxiosRequestConfig): Promise<operations.PostAdminShutdownResponse>;
}
