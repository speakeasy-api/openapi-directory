import { Accounts } from "./accounts";
import { Calls } from "./calls";
import { Events } from "./events";
import { Users } from "./users";
import { Webhooks } from "./webhooks";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.vonage.com/t/vbc.prod/vis/v1"];
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
 * The Vonage Integration Suite API enables call control and webhooks for call events.
 *
 * @remarks
 *
 * Your application must subscribe to the VonageIntegrationSuite API suite to use this API.
 *
 */
export declare class SDK {
    accounts: Accounts;
    calls: Calls;
    events: Events;
    users: Users;
    /**
     * Webhooks are external URLs which subscribe to receive events via HTTP POST for a specified set of events.
     */
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
