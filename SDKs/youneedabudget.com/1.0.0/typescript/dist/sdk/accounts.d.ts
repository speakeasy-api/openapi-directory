import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The accounts for a budget
 */
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new account
     *
     * @remarks
     * Creates a new account
     */
    createAccount(req: operations.CreateAccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountResponse>;
    /**
     * Single account
     *
     * @remarks
     * Returns a single account
     */
    getAccountById(req: operations.GetAccountByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountByIdResponse>;
    /**
     * Account list
     *
     * @remarks
     * Returns all accounts
     */
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
}
