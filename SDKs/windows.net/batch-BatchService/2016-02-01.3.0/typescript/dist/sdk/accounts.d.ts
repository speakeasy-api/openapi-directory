import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists all node agent SKUs supported by the Azure Batch service.
     */
    accountListNodeAgentSkus(req: operations.AccountListNodeAgentSkusRequest, config?: AxiosRequestConfig): Promise<operations.AccountListNodeAgentSkusResponse>;
}
