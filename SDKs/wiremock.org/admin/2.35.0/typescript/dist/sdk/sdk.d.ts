import { NearMisses } from "./nearmisses";
import { Recordings } from "./recordings";
import { Requests } from "./requests";
import { Scenarios } from "./scenarios";
import { StubMappings } from "./stubmappings";
import { System } from "./system";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/"];
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
 * @see {@link http://wiremock.org/docs/} - WireMock user documentation
 */
export declare class SDK {
    /**
     * Near misses allow querying of received requests or request patterns according to similarity
     *
     * @see {@link http://wiremock.org/docs/verifying/#near-misses} - User documentation
     */
    nearMisses: NearMisses;
    /**
     * Stub mapping record and snapshot functions
     *
     * @see {@link http://wiremock.org/docs/record-playback/} - User documentation
     */
    recordings: Recordings;
    /**
     * Logged requests and responses received by the mock service
     *
     * @see {@link http://wiremock.org/docs/verifying/} - User documentation
     */
    requests: Requests;
    /**
     * Scenarios support modelling of stateful behaviour
     *
     * @see {@link http://wiremock.org/docs/stateful-behaviour/} - User documentation
     */
    scenarios: Scenarios;
    /**
     * Operations on stub mappings
     *
     * @see {@link http://wiremock.org/docs/stubbing/} - User documentation
     */
    stubMappings: StubMappings;
    /**
     * Global operations
     */
    system: System;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
