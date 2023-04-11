import { Addresses } from "./addresses";
import * as shared from "./models/shared";
import { Profiles } from "./profiles";
import { Prospects } from "./prospects";
import { PurchaseInformation } from "./purchaseinformation";
import { Schemas } from "./schemas";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{accountName}.{environment}.com.br"];
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
 * Create shopper profiles and manage their information.
 */
export declare class SDK {
    addresses: Addresses;
    profiles: Profiles;
    prospects: Prospects;
    purchaseInformation: PurchaseInformation;
    schemas: Schemas;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
