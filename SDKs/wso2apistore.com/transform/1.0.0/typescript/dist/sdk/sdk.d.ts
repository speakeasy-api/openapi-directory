import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://gateway.wso2apistore.com/transform/1.0.0", "http://gateway.wso2apistore.com/transform/1.0.0"];
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
 * This API provides XML to JSON, JSON to XML transformations.
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
    postJsontoxml(req: string, config?: AxiosRequestConfig): Promise<operations.PostJsontoxmlResponse>;
    postXmltojson(req: string, config?: AxiosRequestConfig): Promise<operations.PostXmltojsonResponse>;
}
