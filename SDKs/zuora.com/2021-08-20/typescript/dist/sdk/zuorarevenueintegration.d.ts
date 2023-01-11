import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ZuoraRevenueIntegration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * putRevProAccountingCodes - Update a Zuora Revenue accounting code
     *
     * Update the Zuora Revenue accounting code that corresponds to a specific Product Rate Plan Charge Id in Zuora Billing.
    **/
    putRevProAccountingCodes(req: operations.PutRevProAccountingCodesRequest, config?: AxiosRequestConfig): Promise<operations.PutRevProAccountingCodesResponse>;
}
