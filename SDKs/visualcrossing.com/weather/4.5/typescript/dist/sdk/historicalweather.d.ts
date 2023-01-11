import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HistoricalWeather {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVisualCrossingWebServicesRestServicesWeatherdataHistory - Retrieves hourly or daily historical weather records.
     *
     * The weather history data is suitable for retrieving hourly or daily historical weather records.
    **/
    getVisualCrossingWebServicesRestServicesWeatherdataHistory(req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse>;
}
