import { AxiosInstance } from "axios";
import { Bets } from "./bets";
export declare const ServerList: readonly ["https://sandbox.whapi.com/v2/bets"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    bets: Bets;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
