import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Bundles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Calculate discounts and taxes (Bundles)
     *
     * @remarks
     * Calculate discounts and taxes
     */
    calculatediscountsandtaxesBundles(req: operations.CalculatediscountsandtaxesBundlesRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CalculatediscountsandtaxesBundlesResponse>;
}
