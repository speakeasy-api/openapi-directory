import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Prices } from "./prices";
export declare const ServerList: readonly ["https://marketplace.walmartapis.com", "https://sandbox.walmartapis.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    prices: Prices;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
