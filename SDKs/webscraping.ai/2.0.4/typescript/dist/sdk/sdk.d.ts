import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Account } from "./account";
import { Html } from "./html";
import { SelectedHtml } from "./selectedhtml";
export declare const ServerList: readonly ["https://api.webscraping.ai"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    account: Account;
    html: Html;
    selectedHTML: SelectedHtml;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
