import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InvestorAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAllinvestorAccounts - Retrieve all the investor accounts
    **/
    getAllinvestorAccounts(req: operations.GetAllinvestorAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllinvestorAccountsResponse>;
    /**
     * getinvestorAccount - Retrieve existing investor account from account id
    **/
    getinvestorAccount(req: operations.GetinvestorAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetinvestorAccountResponse>;
}
