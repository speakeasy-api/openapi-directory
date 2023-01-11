import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ActivityEntryApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * activityEntryApiGetList - Gets a list of recent activity entries.
     *
     * Entries are always returned sorted from newest to oldest.
     *             Activity for deleted entries is not returned.
    **/
    activityEntryApiGetList(req: operations.ActivityEntryApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.ActivityEntryApiGetListResponse>;
}
