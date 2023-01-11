import { AxiosInstance } from "axios";
import { HistoricalWeather } from "./historicalweather";
import { WeatherForecast } from "./weatherforecast";
export declare const ServerList: readonly ["https://weather.visualcrossing.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    historicalWeather: HistoricalWeather;
    weatherForecast: WeatherForecast;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
