import { Pages } from "./pages";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{account}.myvtex.com", "https://{workspace}--{account}.myvtex.com"];
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
 *
 * @remarks
 * The VTEX Headless CMS is a no-code management system for storefront content.
 * That means you can store your content as structured data in a layer decoupled from the frontend and
 * use the VTEX Headless CMS to access and deliver your content to your storefront project.
 *
 * Notice that the VTEX Headless CMS typically works with **FastStore** projects only. In this case, you can use this API
 * to fetch data using SSR (NextJS and Gatsby v4+) or SSG (NextJS).
 *
 * **Servers**
 * - `https://{account}.myvtex.com/`
 * - `https://{workspace}--{account}.myvtex.com/`
 *
 * **Server variables**
 * - `accountName`: Name of your VTEX account.
 * - `workspace`: Name of your VTEX workspace.
 *
 */
export declare class SDK {
    pages: Pages;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
