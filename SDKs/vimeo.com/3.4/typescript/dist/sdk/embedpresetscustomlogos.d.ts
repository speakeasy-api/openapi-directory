import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EmbedPresetsCustomLogos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a custom logo
     */
    createCustomLogo(req: operations.CreateCustomLogoRequest, security: operations.CreateCustomLogoSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCustomLogoResponse>;
    /**
     * Add a custom logo
     */
    createCustomLogoAlt1(config?: AxiosRequestConfig): Promise<operations.CreateCustomLogoAlt1Response>;
    /**
     * Get a specific custom logo
     */
    getCustomLogo(req: operations.GetCustomLogoRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomLogoResponse>;
    /**
     * Get a specific custom logo
     */
    getCustomLogoAlt1(req: operations.GetCustomLogoAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetCustomLogoAlt1Response>;
    /**
     * Get all the custom logos that belong to a user
     */
    getCustomLogos(req: operations.GetCustomLogosRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomLogosResponse>;
    /**
     * Get all the custom logos that belong to a user
     */
    getCustomLogosAlt1(config?: AxiosRequestConfig): Promise<operations.GetCustomLogosAlt1Response>;
}
