import { CustomPrices } from "./customprices";
import { PriceAssociation } from "./priceassociation";
import { SessionManagement } from "./sessionmanagement";
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
 * > Check the new [Pricing onboarding guide](https://developers.vtex.com/docs/guides/pricing-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Pricing and is organized by focusing on the developer's journey
 *
 * The Price Simulations API allows you to configure custom price selectors for B2B stores, based on the context set by the [Orders Configuration app](https://developers.vtex.com/docs/guides/vtex-order-configuration).
 *
 * ## Custom Prices
 *
 * In this section, you can create a specific shopping scenario with the criteria you want. For explaining purpose, we used the `orderType` and `state` as default values, but it can be others too.
 *
 * `GET` [Get custom prices schema](https://developers.vtex.com/docs/api-reference/price-simulations#get-/_v/custom-prices/session/schema)
 * `POST` [Create or Update custom prices schema](https://developers.vtex.com/docs/api-reference/price-simulations#post-/_v/custom-prices/session/schema)
 *
 * ## Session Management
 *
 * Every time you edit a configuration value set on the Custom Prices session, you must use this endpoint to update the Order Configuration.
 *
 * `POST` [Update Order Configuration](https://developers.vtex.com/docs/api-reference/price-simulations#post-/sessions/)
 *
 *
 * ## Price Association
 *
 * Use these routes to associate a shopping scenario, created at the Custom Price session, to a specific price table.
 *
 * `GET` [Get price association by ID](https://developers.vtex.com/docs/api-reference/price-simulations#get-/_v/custom-prices/rules/-priceAssociationId-)
 * `POST` [Create price association](https://developers.vtex.com/docs/api-reference/price-simulations#post-/_v/custom-prices/rules)
 * `PUT` [Update price association by ID](https://developers.vtex.com/docs/api-reference/price-simulations#put-/_v/custom-prices/rules/-priceAssociationId-)
 * `DELETE` [Disassociate price association by ID](https://developers.vtex.com/docs/api-reference/price-simulations#delete-/_v/custom-prices/rules/-priceAssociationId-)
 */
export declare class SDK {
    customPrices: CustomPrices;
    priceAssociation: PriceAssociation;
    sessionManagement: SessionManagement;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
