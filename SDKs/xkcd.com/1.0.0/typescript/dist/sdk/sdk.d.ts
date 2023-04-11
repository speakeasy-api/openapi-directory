import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://xkcd.com/"];
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
 * Webcomic of romance, sarcasm, math, and language.
 *
 * @see {@link https://xkcd.com/json.html}
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
     * Fetch current comic and metadata.
     *
     */
    getInfo0Json(config?: AxiosRequestConfig): Promise<operations.GetInfo0JsonResponse>;
    /**
     * Fetch comics and metadata  by comic id.
     *
     */
    getComicIdInfo0Json(req: operations.GetComicIdInfo0JsonRequest, config?: AxiosRequestConfig): Promise<operations.GetComicIdInfo0JsonResponse>;
}
