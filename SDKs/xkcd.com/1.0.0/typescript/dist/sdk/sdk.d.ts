import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["http://xkcd.com/"];
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
     * getInfo0Json - Fetch current comic and metadata.
     *
    **/
    getInfo0Json(config?: AxiosRequestConfig): Promise<operations.GetInfo0JsonResponse>;
    /**
     * getComicIdInfo0Json - Fetch comics and metadata  by comic id.
     *
    **/
    getComicIdInfo0Json(req: operations.GetComicIdInfo0JsonRequest, config?: AxiosRequestConfig): Promise<operations.GetComicIdInfo0JsonResponse>;
}
