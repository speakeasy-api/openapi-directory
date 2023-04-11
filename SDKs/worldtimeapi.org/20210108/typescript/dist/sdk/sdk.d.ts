import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://worldtimeapi.org/api/"];
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
 * A simple API to get the current time based on a request with a timezone.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
     */
    getIp(config?: AxiosRequestConfig): Promise<operations.GetIpResponse>;
    /**
     * request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
     */
    getIpTxt(config?: AxiosRequestConfig): Promise<operations.GetIpTxtResponse>;
    /**
     * request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
     */
    getIpIpv4(req: operations.GetIpIpv4Request, config?: AxiosRequestConfig): Promise<operations.GetIpIpv4Response>;
    /**
     * request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
     */
    getIpIpv4Txt(req: operations.GetIpIpv4TxtRequest, config?: AxiosRequestConfig): Promise<operations.GetIpIpv4TxtResponse>;
    /**
     * a listing of all timezones.
     */
    getTimezone(config?: AxiosRequestConfig): Promise<operations.GetTimezoneResponse>;
    /**
     * a listing of all timezones.
     */
    getTimezoneTxt(config?: AxiosRequestConfig): Promise<operations.GetTimezoneTxtResponse>;
    /**
     * a listing of all timezones available for that area.
     */
    getTimezoneArea(req: operations.GetTimezoneAreaRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaResponse>;
    /**
     * a listing of all timezones available for that area.
     */
    getTimezoneAreaTxt(req: operations.GetTimezoneAreaTxtRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaTxtResponse>;
    /**
     * request the current time for a timezone.
     */
    getTimezoneAreaLocation(req: operations.GetTimezoneAreaLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationResponse>;
    /**
     * request the current time for a timezone.
     */
    getTimezoneAreaLocationTxt(req: operations.GetTimezoneAreaLocationTxtRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationTxtResponse>;
    /**
     * request the current time for a timezone.
     */
    getTimezoneAreaLocationRegion(req: operations.GetTimezoneAreaLocationRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationRegionResponse>;
    /**
     * request the current time for a timezone.
     */
    getTimezoneAreaLocationRegionTxt(req: operations.GetTimezoneAreaLocationRegionTxtRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationRegionTxtResponse>;
}
