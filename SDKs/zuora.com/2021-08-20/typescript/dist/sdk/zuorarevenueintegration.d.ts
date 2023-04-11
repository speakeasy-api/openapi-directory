import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * **Note:** You can only use the operations in this section if you have the Billing - Revenue Integration feature enabled. See [Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Billing_-_Revenue_Integration) for more information.
 *
 * @remarks
 *
 */
export declare class ZuoraRevenueIntegration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Update a Zuora Revenue accounting code
     *
     * @remarks
     * Update the Zuora Revenue accounting code that corresponds to a specific Product Rate Plan Charge Id in Zuora Billing.
     */
    putRevProAccountingCodes(req: operations.PUTRevProAccountingCodesRequest, config?: AxiosRequestConfig): Promise<operations.PUTRevProAccountingCodesResponse>;
}
