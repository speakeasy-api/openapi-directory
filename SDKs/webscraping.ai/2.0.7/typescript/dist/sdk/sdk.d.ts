import { Account } from "./account";
import { Html } from "./html";
import * as shared from "./models/shared";
import { SelectedHTML } from "./selectedhtml";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.webscraping.ai"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * A client for https://webscraping.ai API. It provides a web scaping automation API with Chrome JS rendering, rotating proxies and builtin HTML parsing.
 */
export declare class SDK {
    /**
     * Information about your account calls quota
     */
    account: Account;
    /**
     * Get full HTML content of pages with proxies and Chrome JS rendering
     */
    html: Html;
    /**
     * Get HTML content of selected page areas (like price, search results, page title, etc.)
     */
    selectedHTML: SelectedHTML;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
