import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://gateway.wso2apistore.com/transform/1.0.0", "http://gateway.wso2apistore.com/transform/1.0.0"];
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
    postJsontoxml(req: operations.PostJsontoxmlRequest, config?: AxiosRequestConfig): Promise<operations.PostJsontoxmlResponse>;
    postXmltojson(req: operations.PostXmltojsonRequest, config?: AxiosRequestConfig): Promise<operations.PostXmltojsonResponse>;
}
