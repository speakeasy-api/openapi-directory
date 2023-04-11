import { Policy } from "./policy";
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
 *  This API will create promotion alarms when selling products with undesired prices and promotions. It will create conditions that will check if the prices and the promotions are correct. If not, the system will alarm the store with information about the product sold at unexpected prices.
 *
 *  ## Index
 *
 *  `GET` [Get Policy List](https://developers.vtex.com/docs/api-reference/policies-system-api#get-/api/policy-engine/policies)
 *  `POST` [Evaluate Policies](https://developers.vtex.com/docs/api-reference/policies-system-api#post-/api/policy-engine/evaluate)
 *  `GET` [Get Policy by ID](https://developers.vtex.com/docs/api-reference/policies-system-api#get-/api/policy-engine/policies/-id-)
 *  `POST` [Create Policy](https://developers.vtex.com/docs/api-reference/policies-system-api#post-/api/policy-engine/policies/-id-)
 *  `PUT` [Update Policy](https://developers.vtex.com/docs/api-reference/policies-system-api#put-/api/policy-engine/policies/-id-)
 *  `DELETE` [Delete Policy by ID](https://developers.vtex.com/docs/api-reference/policies-system-api#delete-/api/policy-engine/policies/-id-)
 */
export declare class SDK {
    policy: Policy;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
