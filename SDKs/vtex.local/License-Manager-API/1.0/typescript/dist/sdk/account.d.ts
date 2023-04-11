import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get information about account
     *
     * @remarks
     * Retrieves information from an account, such as company and sponsor user details, stores, and appTokens.
     *
     *
  This endpoint only accepts requests from the host list designated for that store. If you want to try this request from this portal, be sure to add it to the list. Learn how to add hosts to the list in [How to manage accounts](https://help.vtex.com/en/tutorial/how-to-manage-accounts--tutorials_6285#).
     */
    getAccount(config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
}
