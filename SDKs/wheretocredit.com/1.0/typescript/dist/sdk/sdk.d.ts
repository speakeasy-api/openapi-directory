import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Calculate } from "./calculate";
import { Programs } from "./programs";
export declare const ServerList: readonly ["https://wheretocredit.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    calculate: Calculate;
    programs: Programs;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
