import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["http://worldtimeapi.org/api/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getIp - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
    **/
    getIp(config?: AxiosRequestConfig): Promise<operations.GetIpResponse>;
    /**
     * getIpTxt - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
    **/
    getIpTxt(config?: AxiosRequestConfig): Promise<operations.GetIpTxtResponse>;
    /**
     * getIpIpv4 - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
    **/
    getIpIpv4(req: operations.GetIpIpv4Request, config?: AxiosRequestConfig): Promise<operations.GetIpIpv4Response>;
    /**
     * getIpIpv4Txt - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
    **/
    getIpIpv4Txt(req: operations.GetIpIpv4TxtRequest, config?: AxiosRequestConfig): Promise<operations.GetIpIpv4TxtResponse>;
    /**
     * getTimezone - a listing of all timezones.
    **/
    getTimezone(config?: AxiosRequestConfig): Promise<operations.GetTimezoneResponse>;
    /**
     * getTimezoneTxt - a listing of all timezones.
    **/
    getTimezoneTxt(config?: AxiosRequestConfig): Promise<operations.GetTimezoneTxtResponse>;
    /**
     * getTimezoneArea - a listing of all timezones available for that area.
    **/
    getTimezoneArea(req: operations.GetTimezoneAreaRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaResponse>;
    /**
     * getTimezoneAreaTxt - a listing of all timezones available for that area.
    **/
    getTimezoneAreaTxt(req: operations.GetTimezoneAreaTxtRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaTxtResponse>;
    /**
     * getTimezoneAreaLocation - request the current time for a timezone.
    **/
    getTimezoneAreaLocation(req: operations.GetTimezoneAreaLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationResponse>;
    /**
     * getTimezoneAreaLocationTxt - request the current time for a timezone.
    **/
    getTimezoneAreaLocationTxt(req: operations.GetTimezoneAreaLocationTxtRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationTxtResponse>;
    /**
     * getTimezoneAreaLocationRegion - request the current time for a timezone.
    **/
    getTimezoneAreaLocationRegion(req: operations.GetTimezoneAreaLocationRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationRegionResponse>;
    /**
     * getTimezoneAreaLocationRegionTxt - request the current time for a timezone.
    **/
    getTimezoneAreaLocationRegionTxt(req: operations.GetTimezoneAreaLocationRegionTxtRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationRegionTxtResponse>;
}
