import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Domain {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a specific domain in the current tenant.
     */
    domainsGet(req: operations.DomainsGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsGetResponse>;
    /**
     * Gets a list of domains for the current tenant.
     */
    domainsList(req: operations.DomainsListRequest, config?: AxiosRequestConfig): Promise<operations.DomainsListResponse>;
}
