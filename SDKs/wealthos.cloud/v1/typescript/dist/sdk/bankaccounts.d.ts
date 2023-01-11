import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BankAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * updateBankAccount - Update existing bank account details
     *
     * Update an existing Bank Account. WealthOS will update only the fields sent in the request.
    **/
    updateBankAccount(req: operations.UpdateBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBankAccountResponse>;
    /**
     * createBankAccount - Create new bank account
    **/
    createBankAccount(req: operations.CreateBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateBankAccountResponse>;
    /**
     * getAllBankAccounts - Retrieve all the bank accounts of a particular investor
    **/
    getAllBankAccounts(req: operations.GetAllBankAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllBankAccountsResponse>;
    /**
     * getBankAccount - Retrieve existing bank account from bank account id
    **/
    getBankAccount(req: operations.GetBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetBankAccountResponse>;
}
