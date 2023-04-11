import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * An investor account is designed to manage a group of pots attached to a single financial product. A user can maintain multiple accounts for a given financial product if the product regulations support this setup.
 */
export declare class InvestorAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all the investor accounts
     */
    getAllinvestorAccounts(req: operations.GetAllinvestorAccountsRequest, security: operations.GetAllinvestorAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllinvestorAccountsResponse>;
    /**
     * Retrieve existing investor account from account id
     */
    getinvestorAccount(req: operations.GetinvestorAccountRequest, security: operations.GetinvestorAccountSecurity, config?: AxiosRequestConfig): Promise<operations.GetinvestorAccountResponse>;
}
