import * as shared from "./models/shared";
import { Report } from "./report";
import { Settings } from "./settings";
import { SubscriptionGroup } from "./subscriptiongroup";
import { Subscriptions } from "./subscriptions";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{accountName}.{environment}.com.br/api/rns"];
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
 * VTEX Subscriptions REST API Documentation
 *
 * @remarks
 *
 * This documentation describes the available REST APIs for VTEX Subscription System.
 *
 * With Subscriptions you can set up regularly scheduled deliveries.
 *
 * All requests need authorization (VTEX Id authentication token or VTEX Appkey and Apptoken headers)
 */
export declare class SDK {
    report: Report;
    settings: Settings;
    subscriptionGroup: SubscriptionGroup;
    subscriptions: Subscriptions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
