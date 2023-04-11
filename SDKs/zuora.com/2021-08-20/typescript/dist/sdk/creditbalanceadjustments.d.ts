import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CreditBalanceAdjustments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Retrieve a credit balance adjustment
     */
    objectGETCreditBalanceAdjustment(req: operations.ObjectGETCreditBalanceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETCreditBalanceAdjustmentResponse>;
    /**
     * CRUD: Create a credit balance adjustment
     */
    objectPOSTCreditBalanceAdjustment(req: operations.ObjectPOSTCreditBalanceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTCreditBalanceAdjustmentResponse>;
    /**
     * CRUD: Update a credit balance adjustment
     */
    objectPUTCreditBalanceAdjustment(req: operations.ObjectPUTCreditBalanceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTCreditBalanceAdjustmentResponse>;
}
