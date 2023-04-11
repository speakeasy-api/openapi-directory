import { Applications } from "./applications";
import { Authentication } from "./authentication";
import { DataSources } from "./datasources";
import { Entities } from "./entities";
import { Info } from "./info";
import { Infrastructure } from "./infrastructure";
import { Microsegmentation } from "./microsegmentation";
import { Search } from "./search";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://vmware.local", "https://vrni.example.com/api/ni"];
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
 * vRealize Network Insight API Reference
 */
export declare class SDK {
    /**
     * Applications APIs
     */
    applications: Applications;
    /**
     * Authentication APIs
     */
    authentication: Authentication;
    /**
     * Data source APIs
     */
    dataSources: DataSources;
    /**
     * Entities APIs
     */
    entities: Entities;
    /**
     * Info APIs
     */
    info: Info;
    /**
     * Infra APIs
     */
    infrastructure: Infrastructure;
    /**
     * Micro-segmentation APIs
     */
    microsegmentation: Microsegmentation;
    /**
     * Search APIs
     */
    search: Search;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
