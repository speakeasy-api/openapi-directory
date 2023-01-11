import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Rates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRates - Get Configured Rates
     *
     * Returns rate details of the requested rate type.
    **/
    getRates(req: operations.GetRatesRequest, config?: AxiosRequestConfig): Promise<operations.GetRatesResponse>;
}
