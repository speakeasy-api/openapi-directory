import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CreditBalanceAdjustments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetCreditBalanceAdjustment - CRUD: Retrieve a credit balance adjustment
    **/
    objectGetCreditBalanceAdjustment(req: operations.ObjectGetCreditBalanceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetCreditBalanceAdjustmentResponse>;
    /**
     * objectPostCreditBalanceAdjustment - CRUD: Create a credit balance adjustment
    **/
    objectPostCreditBalanceAdjustment(req: operations.ObjectPostCreditBalanceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostCreditBalanceAdjustmentResponse>;
    /**
     * objectPutCreditBalanceAdjustment - CRUD: Update a credit balance adjustment
    **/
    objectPutCreditBalanceAdjustment(req: operations.ObjectPutCreditBalanceAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutCreditBalanceAdjustmentResponse>;
}
