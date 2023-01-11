import { AxiosInstance } from "axios";
import { Files } from "./files";
export declare const ServerList: readonly ["https://api.xero.com/files.xro/1.0/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    files: Files;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
