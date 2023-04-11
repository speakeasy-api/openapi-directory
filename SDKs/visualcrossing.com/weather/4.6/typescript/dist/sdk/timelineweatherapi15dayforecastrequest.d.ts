import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TimelineWeatherApi15DayForecastRequest {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Historical and Forecast Weather API
     *
     * @remarks
     * Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.
     */
    getVisualCrossingWebServicesRestServicesTimelineLocation(req: operations.GetVisualCrossingWebServicesRestServicesTimelineLocationRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.GetVisualCrossingWebServicesRestServicesTimelineLocationResponse>;
}
