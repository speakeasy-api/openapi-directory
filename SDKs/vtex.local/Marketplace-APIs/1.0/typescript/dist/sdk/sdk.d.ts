import { MatchedOffers } from "./matchedoffers";
import * as shared from "./models/shared";
import { Notification } from "./notification";
import { SalesChannelMapping } from "./saleschannelmapping";
import { SellerCommissions } from "./sellercommissions";
import { SellerInvite } from "./sellerinvite";
import { Sellers } from "./sellers";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{accountName}.{environment}.com.br/api"];
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
 *
 * @remarks
 * The **Marketplace API** enables marketplaces and sellers hosted on VTEX to perform their collaborative operations.
 *
 * >⚠️ The marketplace must [create an appKey and appToken](https://developers.vtex.com/docs/guides/getting-started-authentication) for each non-VTEX seller that will use this API.
 *
 * ## Index
 *
 * ### Notification
 *
 * Endpoints used by sellers to notify marketplaces that the price or inventory language has changed for one of their SKUs.
 *
 * `POST` [Notify marketplace of price update](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/price)
 *
 * `POST` [Notify marketplace of inventory update](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/inventory)
 *
 *
 * ### Suggestions
 *
 * #### Get Suggestions
 *
 * Search and filter all suggestions using specific criteria.
 *
 * `GET` [Get all SKU Suggestions](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions)
 *
 * `GET` [Get SKU Suggestion by ID](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerSkuId-)
 *
 *
 * #### Manage Suggestions
 *
 * Send or delete SKU suggestions from the seller to marketplace.
 *
 * `PUT` [Send SKU Suggestion](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerSkuId-)
 *
 * `DELETE` [Delete SKU Suggestion](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#delete-/suggestions/-sellerId-/-sellerSkuId-)
 *
 *
 * #### Get Versions
 *
 * Search and filter all versions of suggestions, using specific criteria.
 *
 * `GET` [Get all versions](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerskuid-/versions)
 *
 * `GET` [Get version by ID](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerskuid-/versions/-version-)
 *
 *
 * #### Match Received SKUs
 *
 * Match SKU suggestions received in the marketplace.
 *
 * `PUT` [Match Received SKUs individually](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerskuid-/versions/-version-/matches/-matchid-)
 *
 * `PUT` [Match Multiple Received SKUs](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/matches/action/-actionName-)
 *
 *
 * #### SKU Approval Settings
 *
 * Allows marketplaces to configure rules for automatically and manually approving SKUs received from sellers.
 *
 * `GET`[Get autoApprove Status in Account Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/configuration/autoapproval/toggle)
 *
 * `PUT`[Activate autoApprove in Marketplace's Account](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/autoapproval/toggle)
 *
 * `GET`[Get Account's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/configuration)
 *
 * `PUT`[Save Account's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration)
 *
 * `GET`[Get Seller's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/configuration/seller/-sellerId-)
 *
 * `PUT`[Save Seller's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/seller/-sellerId-)
 *
 * `PUT`[Activate autoApprove Setting for a Seller](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/autoapproval/toggle/seller/-sellerId-)
 *
 *
 * ### Matched Offers
 *
 * Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.
 *
 * `GET`[Get Matched Offers List](https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/offer-manager/pvt/offers)
 *
 * `GET`[Get Matched Offer's Data by SKU ID](https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/offer-manager/pvt/product/-productId-/sku/-skuId-)
 *
 * `GET`[Get Matched Offer's Data by Product ID](https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/offer-manager/pvt/product/-productId-)
 *
 */
export declare class SDK {
    matchedOffers: MatchedOffers;
    notification: Notification;
    /**
     * Mapping between a marketplace's sales channel and a seller's affiliate.
     */
    salesChannelMapping: SalesChannelMapping;
    /**
     * Get sellers' data
     */
    sellerCommissions: SellerCommissions;
    /**
     * Used to invite sellers and configure their accounts
     */
    sellerInvite: SellerInvite;
    /**
     * Get sellers' data
     */
    sellers: Sellers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
