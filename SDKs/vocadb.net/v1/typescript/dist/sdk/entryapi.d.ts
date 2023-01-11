import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EntryApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * entryApiGetList - Find entries.
    **/
    entryApiGetList(req: operations.EntryApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.EntryApiGetListResponse>;
    /**
     * entryApiGetNames - Gets a list of entry names. Ideal for autocomplete boxes.
    **/
    entryApiGetNames(req: operations.EntryApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.EntryApiGetNamesResponse>;
}
