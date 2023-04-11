import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HistoricalWeather {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves hourly or daily historical weather records.
     *
     * @remarks
     * The weather history data is suitable for retrieving hourly or daily historical weather records.
     */
    getVisualCrossingWebServicesRestServicesWeatherdataHistory(req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse>;
}
