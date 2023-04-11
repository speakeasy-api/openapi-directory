import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Bank Account endpoint allows a wealth manager to create, update and retrieve the bank account details of an investor. An investor can have one or more bank accounts within the system and a default bank account should always be configured.
 *
 * @remarks
 *
 * Every bank account has an account status that represents the `active` or `inactive` status of an account. Only `active` bank accounts can be used for any transactions in the system.
 */
export declare class BankAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Update existing bank account details
     *
     * @remarks
     * Update an existing Bank Account. WealthOS will update only the fields sent in the request.
     */
    updateBankAccount(req: operations.UpdateBankAccountRequest, security: operations.UpdateBankAccountSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateBankAccountResponse>;
    /**
     * Create new bank account
     */
    createBankAccount(req: operations.CreateBankAccountRequest, security: operations.CreateBankAccountSecurity, config?: AxiosRequestConfig): Promise<operations.CreateBankAccountResponse>;
    /**
     * Retrieve all the bank accounts of a particular investor
     */
    getAllBankAccounts(req: operations.GetAllBankAccountsRequest, security: operations.GetAllBankAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllBankAccountsResponse>;
    /**
     * Retrieve existing bank account from bank account id
     */
    getBankAccount(req: operations.GetBankAccountRequest, security: operations.GetBankAccountSecurity, config?: AxiosRequestConfig): Promise<operations.GetBankAccountResponse>;
}
