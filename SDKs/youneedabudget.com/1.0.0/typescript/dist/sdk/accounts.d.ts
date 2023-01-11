import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAccount - Create a new account
     *
     * Creates a new account
    **/
    createAccount(req: operations.CreateAccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountResponse>;
    /**
     * getAccountById - Single account
     *
     * Returns a single account
    **/
    getAccountById(req: operations.GetAccountByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountByIdResponse>;
    /**
     * getAccounts - Account list
     *
     * Returns all accounts
    **/
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
}
