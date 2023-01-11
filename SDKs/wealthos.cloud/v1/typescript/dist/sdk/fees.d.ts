import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Fees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createFee - Create Fee
     *
     * This endpoint supports the creation of a single fee deduction from an investor's pot. A sucessful fee creation will result in the creation of a fee transaction and updates to holdings. The system will return the `transaction_id` of the fee transaction.
    **/
    createFee(req: operations.CreateFeeRequest, config?: AxiosRequestConfig): Promise<operations.CreateFeeResponse>;
}
