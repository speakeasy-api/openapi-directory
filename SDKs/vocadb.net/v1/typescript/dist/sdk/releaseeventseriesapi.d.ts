import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ReleaseEventSeriesApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * releaseEventSeriesApiDelete - Deletes an event series.
    **/
    releaseEventSeriesApiDelete(req: operations.ReleaseEventSeriesApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventSeriesApiDeleteResponse>;
    /**
     * releaseEventSeriesApiGetList - Gets a page of event series.
    **/
    releaseEventSeriesApiGetList(req: operations.ReleaseEventSeriesApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventSeriesApiGetListResponse>;
    /**
     * releaseEventSeriesApiGetOne - Gets single event series by ID.
    **/
    releaseEventSeriesApiGetOne(req: operations.ReleaseEventSeriesApiGetOneRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventSeriesApiGetOneResponse>;
}
