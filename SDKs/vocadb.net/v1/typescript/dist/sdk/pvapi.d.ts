import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PvApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pvApiGetList - Gets a list of PVs for songs.
    **/
    pvApiGetList(req: operations.PvApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.PvApiGetListResponse>;
}
