import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Wealth Managers require various types of rates (e.g. spot fx rates, interest rates) for valuations, currency conversations etc.
 *
 * @remarks
 *
 * The Rates endpoint returns all the configured rate types along with the latest available rate.
 */
export declare class Rates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Configured Rates
     *
     * @remarks
     * Returns rate details of the requested rate type.
     */
    getRates(req: operations.GetRatesRequest, security: operations.GetRatesSecurity, config?: AxiosRequestConfig): Promise<operations.GetRatesResponse>;
}
