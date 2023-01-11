import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Inventory } from "./inventory";
export declare const ServerList: readonly ["https://marketplace.walmartapis.com", "https://sandbox.walmartapis.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    inventory: Inventory;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
