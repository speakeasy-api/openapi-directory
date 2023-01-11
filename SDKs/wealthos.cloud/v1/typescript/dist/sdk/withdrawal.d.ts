import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Withdrawal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createWithdrawal - Create Withdrawal
     *
     * This endpoint supports the creation of a single withdrawal from an investor's pot. A sucessful withdrawal creation will result in the creation of a withdrawal transaction and updates to holdings. The system will return the `transaction_id`, `transaction_value`, `pot_id`, `sub_transaction_type` and `transaction_status` of the withdrawal transaction.
    **/
    createWithdrawal(req: operations.CreateWithdrawalRequest, config?: AxiosRequestConfig): Promise<operations.CreateWithdrawalResponse>;
}
