import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WeatherForecast {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVisualCrossingWebServicesRestServicesWeatherdataForecast - Weather Forecast API
     *
     * Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
    **/
    getVisualCrossingWebServicesRestServicesWeatherdataForecast(req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest, config?: AxiosRequestConfig): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse>;
}
