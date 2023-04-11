import { Bets } from "./bets";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://sandbox.whapi.com/v2/bets"];
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
 * The Bets API methods are used to place single, multiple and complex bets and to retrieve a customer’s bet history. When retrieving a customer’s bet history you can organize the bets from the betting history in terms of date, bet type and whether the bet is settled or not. You can also specify what fields to be included/excluded or return a list of all default fields the method returns. <br /><br /> The Bets API will also generate a bet delay if you’re placing a single/multiple bet in-Play by creating a time margin to negate the effects of major changes to the market (for example, goals during a football match). Note that in version 2 of our APIs, Bets API contains the functionality of both Bets API v1 and the Betslips API v1.
 */
export declare class SDK {
    bets: Bets;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
