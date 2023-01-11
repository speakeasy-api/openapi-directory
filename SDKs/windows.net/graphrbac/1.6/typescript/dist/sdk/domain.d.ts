import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Domain {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * domainsGet - Gets a specific domain in the current tenant.
    **/
    domainsGet(req: operations.DomainsGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsGetResponse>;
    /**
     * domainsList - Gets a list of domains for the current tenant.
    **/
    domainsList(req: operations.DomainsListRequest, config?: AxiosRequestConfig): Promise<operations.DomainsListResponse>;
}
