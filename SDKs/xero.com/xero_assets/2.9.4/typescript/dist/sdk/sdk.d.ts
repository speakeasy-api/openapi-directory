import { AxiosInstance } from "axios";
import { Asset } from "./asset";
export declare const ServerList: readonly ["https://api.xero.com/assets.xro/1.0"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    asset: Asset;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
