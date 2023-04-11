import { SpeakeasyBase } from "../../../internal/utils";
import { AvailableSalesChannel } from "./availablesaleschannel";
import { Groups } from "./groups";
export declare class UpsertSellerRequest extends SpeakeasyBase {
    /**
     * SKU Seller Identification
     */
    cscIdentification: string;
    /**
     * Seller's account name
     */
    account: string;
    /**
     * Flag that allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.
     */
    allowHybridPayments: boolean;
    /**
     * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) available.
     */
    availableSalesChannels: AvailableSalesChannel[];
    /**
     * URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `https://{sellerName}.vtexcommercestable.com.br/api/catalog_system/.`
     */
    catalogSystemEndpoint: string;
    /**
     * Channel's name.
     */
    channel: string;
    /**
     * Text describing the delivery policy previously agreed between the marketplace and the seller.
     */
    deliveryPolicy: string;
    /**
     * String describing the seller
     */
    description: string;
    /**
     * email of the admin responsible for the seller.
     */
    email: string;
    /**
     * Text describing the exchange and return policy previously agreed between the marketplace and the seller.
     */
    exchangeReturnPolicy: string;
    /**
     * URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller.
     *
     * @remarks
     *
     * For **external sellers**, please include the URL of the seller's endpoint. External sellers have different endpoint standards. The seller must inform this endpoint to the marketplace so that the marketplace can complete the configuration process.
     *
     * For **VTEX Stores**, the field format will be as follows: `https://{SellerName}.vtexcommercestable.com.br/api/fulfillment?&sc={TradePolicyID}`.
     *
     * The value `SellerName` corresponds to the store name if the seller is a VTEX store.
     *
     * The value `TradePolicyID` corresponds to the [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV#master-data) created by the seller in their own VTEX environment. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process.
     *
     * The value `AffiliateID` corresponds to the 3-digit affiliate identification code created by the seller. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process.
     *
     * To configure the [Multilevel Omnichannel Inventory](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory) feature, fill in this field with the checkout endpoint following this example: `https://{{sellerAccount}}.vtexcommercestable.com.br/api/checkout?affiliateid={{affiliateId}}&sc={{salesChannel`
     */
    fulfillmentEndpoint: string;
    /**
     *  Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be nulled.
     */
    fulfillmentSellerId: string;
    /**
     * Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation.
     */
    groups?: Groups[];
    /**
     * Seller ID assigned by the marketplace. We recommend filling it in with the seller's account name.
     */
    id: string;
    /**
     * Whether the seller is active on the marketplace or not.
     */
    isActive: boolean;
    /**
     * Flag used by the VTEX Checkout to simmulate shopping carts, products and shipping only in sellers with the boolean set as `true`, avoiding performance issues.
     */
    isBetterScope: boolean;
    /**
     * Flag determining whether the seller configured is a VTEX store or not.
     */
    isVtex: boolean;
    /**
     * Name of the seller's store, configured in the seller's environment.
     */
    name: string;
    /**
     * User password, if you are using a hub to integrate with the external seller.
     */
    password: string;
    /**
     * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. If no value is specified, the system will automatically use the sales channel configured in the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) ID.
     */
    salesChannel: string;
    /**
     * Score attributed to this seller.
     */
    score: number;
    /**
     *  Text describing the security policy previously agreed between the marketplace and the seller.
     */
    securityPrivacyPolicy: string;
    sellerCommissionConfiguration: Record<string, any>;
    /**
     * Type of seller, including:
     *
     * @remarks
     *
     * `1`: regular seller
     *
     * `2`: whitelabel seller
     */
    sellerType: number;
    /**
     * This code is the Identity Number for the legal entity and is linked to information in its base country.
     */
    taxCode: string;
    /**
     *  the marketplace must first allow VTEX to share clients’ email addresses with the seller. To do so, it is necessary to set 'AllowEmailSharing' as the value for the TrustPolicy field
     */
    trustPolicy: string;
    /**
     * Username, if you are using a hub to integrate with the external seller.
     */
    user: string;
}
