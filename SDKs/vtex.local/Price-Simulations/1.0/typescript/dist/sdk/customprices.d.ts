import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomPrices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get custom prices schema
     *
     * @remarks
     * Retrieves all custom price for all shopping scenarios
     */
    getVCustomPricesSessionSchema(req: operations.GetVCustomPricesSessionSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetVCustomPricesSessionSchemaResponse>;
    /**
     * Create or Update custom prices schema
     *
     * @remarks
     * Creates a new custom price for a shopping scenario or updates an existing one
     */
    postVCustomPricesSessionSchema(req: operations.PostVCustomPricesSessionSchemaRequest, config?: AxiosRequestConfig): Promise<operations.PostVCustomPricesSessionSchemaResponse>;
}
