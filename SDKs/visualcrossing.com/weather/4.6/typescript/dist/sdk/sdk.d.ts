import { HistoricalWeather } from "./historicalweather";
import { TimelineWeatherApi15DayForecastRequest } from "./timelineweatherapi15dayforecastrequest";
import { TimelineWeatherAPIDateRangeRequest } from "./timelineweatherapidaterangerequest";
import { TimelineWeatherAPISingleDateRequest } from "./timelineweatherapisingledaterequest";
import { WeatherForecast } from "./weatherforecast";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://weather.visualcrossing.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Weather Forecast and Historical Weather Data via RESTful API.
 *
 * @see {@link https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/} - Full Timeline Weather API Documentation
 */
export declare class SDK {
    historicalWeather: HistoricalWeather;
    timelineWeatherAPI15DayForecastRequest: TimelineWeatherApi15DayForecastRequest;
    timelineWeatherAPIDateRangeRequest: TimelineWeatherAPIDateRangeRequest;
    timelineWeatherAPISingleDateRequest: TimelineWeatherAPISingleDateRequest;
    weatherForecast: WeatherForecast;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
