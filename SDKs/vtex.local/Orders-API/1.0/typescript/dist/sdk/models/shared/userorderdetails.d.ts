import { SpeakeasyBase } from "../../../internal/utils";
import { ChangesAttachment } from "./changesattachment";
import { ClientProfileData } from "./clientprofiledata";
import { Item } from "./item";
import { Marketplace } from "./marketplace";
import { PackageAttachment } from "./packageattachment";
import { PaymentData } from "./paymentdata";
import { RatesAndBenefitsData } from "./ratesandbenefitsdata";
import { Seller } from "./seller";
import { ShippingData } from "./shippingdata";
import { StorePreferencesData } from "./storepreferencesdata";
import { Total } from "./total";
/**
 * Information about order cancellation, when it applies.
 */
export declare class UserorderdetailsCancellationData extends SpeakeasyBase {
    /**
     * The date when the order was cancelled.
     */
    cancellationDate: string;
    /**
     * The reason why the order was cancelled.
     */
    reason: string;
    /**
     * If the order cancellation was requested by the payment gateway (`true`) or not (`false`).
     */
    requestedByPaymentNotification: boolean;
    /**
     * If the order cancellation was requested by the seller (`true`) or not (`false`).
     */
    requestedBySellerNotification: boolean;
    /**
     * If the order cancellation was made by the system (`true`) or not (`false`). This type of order cancellation happens in [incomplete orders](https://help.vtex.com/en/tutorial/how-incomplete-orders-work--tutorials_294), for example.
     */
    requestedBySystem: boolean;
    /**
     * If the order cancellation was requested by the costumer (`true`) or not (`false`).
     */
    requestedByUser: boolean;
}
/**
 * Information about customer's preferences.
 */
export declare class UserorderdetailsClientPreferencesData extends SpeakeasyBase {
    /**
     * Customer's prefered language while accessing the store.
     */
    locale: string;
    /**
     * When set as `true`, this field indicates customers opted to receive the newsletters, and when set as `false`, it means they did not.
     */
    optinNewsLetter: boolean;
}
export declare class UserorderdetailsItemMetadataItemsAssemblyOptions extends SpeakeasyBase {
    /**
     * Displays the attachment's composition.
     */
    composition: Record<string, any>;
    /**
     * ID of the attachment related to the order.
     */
    id: string;
    /**
     * Displays the attachment's content.
     */
    inputValues: Record<string, any>;
    /**
     * Name of the attachment related to the order.
     */
    name: string;
    /**
     * If this field is set as `true`, when the customer purchases the item sending the attachment is required, and when set as `false`, sending the attachment is optional.
     */
    required: boolean;
}
export declare class UserorderdetailsItemMetadataItems extends SpeakeasyBase {
    /**
     * Displays information about [assembly options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH) related to the item, if there are any.
     */
    assemblyOptions: UserorderdetailsItemMetadataItemsAssemblyOptions[];
    /**
     * URL slug of the item.
     */
    detailUrl: string;
    /**
     * EAN of the item.
     */
    ean: string;
    /**
     * Item's SKU ID, which is a unique numerical identifier.
     */
    id: string;
    /**
     * Item's SKU image URL.
     */
    imageUrl: string;
    /**
     * Name of the item as displayed to customers in the storefront.
     */
    name: string;
    /**
     * ID of the Product associated with the item.
     */
    productId: string;
    /**
     * Item's reference ID.
     */
    refId: string;
    /**
     * Seller ID that identifies the seller the item belongs to.
     */
    seller: string;
    /**
     * Name of the SKU corresponding to the item.
     */
    skuName: string;
}
/**
 * Metadata information about the order's items.
 */
export declare class UserorderdetailsItemMetadata extends SpeakeasyBase {
    /**
     * Metadata items.
     */
    items: UserorderdetailsItemMetadataItems[];
}
/**
 * Information about promotions and marketing. For example, coupon tracking information and internal or external UTMs.
 */
export declare class UserorderdetailsMarketingData extends SpeakeasyBase {
    /**
     * Coupon's code information.
     */
    coupon: string;
    /**
     * Object ID which expected value is `marketingData`.
     */
    id: string;
    /**
     * Marketing tags information. This field can be used to register campaign data or informative tags regarding promotions.
     */
    marketingTags: string[];
    /**
     * Value of the `utm_campaign` parameter of the URL that led to the request.
     */
    utmCampaign: string;
    /**
     * Value of the `utm_medium` parameter of the URL that led to the request.
     */
    utmMedium: string;
    /**
     * UTM Source Parameters.
     */
    utmPartner: string;
    /**
     * Value of the `utm_source` parameter of the URL that led to the request.
     */
    utmSource: string;
    /**
     * Internal UTM value `utmi_cp`.
     */
    utmiCampaign: string;
    /**
     * Internal UTM value `utmi_pc`.
     */
    utmiPart: string;
    /**
     * Internal UTM value `utmi_p`.
     */
    utmipage: string;
}
/**
 * Information about subscriptions' recurrence.
 */
export declare class UserorderdetailsSubscriptionDataSubscriptionsPlanFrequency extends SpeakeasyBase {
    /**
     * Number of the time interval configured between subscription orders, which depends on the periodicity. For a `DAILY` periodicity, the field's value will correspond to days, for `MONTHLY` to months, and so on.
     */
    interval: number;
    /**
     * Defines the subscriptions recurrence period. The possible values are `DAILY`,`WEEKLY`, `MONTHLY` and `YEARLY`.
     */
    periodicity: string;
}
/**
 * Information about the period during which the subscription will be valid.
 */
export declare class UserorderdetailsSubscriptionDataSubscriptionsPlanValidity extends SpeakeasyBase {
    /**
     * Subscriptions' beginning date with the format `yyyy-mm-ddThh:mm:ss`.
     */
    begin: string;
    /**
     * Subscriptions' ending date with the format `yyyy-mm-ddThh:mm:ss`.
     */
    end: string;
}
/**
 * Information about the subscription's validility and frequency.
 */
export declare class UserorderdetailsSubscriptionDataSubscriptionsPlan extends SpeakeasyBase {
    /**
     * Information about subscriptions' recurrence.
     */
    frequency: UserorderdetailsSubscriptionDataSubscriptionsPlanFrequency;
    /**
     * Type of plan.
     */
    type: string;
    /**
     * Information about the period during which the subscription will be valid.
     */
    validity: UserorderdetailsSubscriptionDataSubscriptionsPlanValidity;
}
export declare class UserorderdetailsSubscriptionDataSubscriptions extends SpeakeasyBase {
    /**
     * Position of the order in the subscription cycle. The first order will have the value `0`, the second will have the value `1`, and so on.
     */
    executionCount: number;
    /**
     * Each item in the subscriptions' order is identified by an index. The position starts in`0`, followed by `1`, `2`, and so on.
     */
    itemIndex: number;
    /**
     * Information about the subscription's validility and frequency.
     */
    plan: UserorderdetailsSubscriptionDataSubscriptionsPlan;
    /**
     * Price of the order when the customer signed up for subscriptions. Subscriptions created from Admin UI or APIs do not have an original order, so the field returns `0.0`. This field was valid only for Subscriptions v2 and is deprecated in Subscriptions v3.
     */
    priceAtSubscriptionDate: number;
}
/**
 * Information about [subscriptions](https://help.vtex.com/tutorial/how-subscriptions-work--frequentlyAskedQuestions_4453).
 */
export declare class UserorderdetailsSubscriptionData extends SpeakeasyBase {
    /**
     * ID of the subscription's group. If this field returns `null` and the `executionCount` is `0`, the order is the first one with subscriptions.
     */
    subscriptionGroupId: string;
    /**
     * List with subscriptions and their details.
     */
    subscriptions: UserorderdetailsSubscriptionDataSubscriptions[];
}
export declare class UserorderdetailsTaxDataTaxInfoCollectionPriceTags extends SpeakeasyBase {
    /**
     * If the tax is a percentage (`true`) or note (`false`).
     */
    isPercentual: boolean;
    /**
     * Name that identifies the tax.
     */
    name: string;
    /**
     * The amount that corresponds to the tax.
     */
    rawValue: string;
}
export declare class UserorderdetailsTaxDataTaxInfoCollection extends SpeakeasyBase {
    /**
     * Item's indexing number.
     */
    itemIndex: number;
    /**
     * Price tag information.
     */
    priceTags: UserorderdetailsTaxDataTaxInfoCollectionPriceTags[];
    /**
     * Alphanumeric sequence that identifies an SKU.
     */
    sku: string;
}
/**
 * Order's tax information.
 */
export declare class UserorderdetailsTaxData extends SpeakeasyBase {
    /**
     * If the taxes were designated by the marketplace (`true`), or not (`false`).
     */
    areTaxesDesignatedByMarketplace: boolean;
    /**
     * Array with taxes' details.
     */
    taxInfoCollection: UserorderdetailsTaxDataTaxInfoCollection[];
}
/**
 * OK
 */
export declare class Userorderdetails extends SpeakeasyBase {
    /**
     * Corresponds to the three-digit [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) identification code of the seller responsible for the order.
     */
    affiliateId: string;
    /**
     * When set as `true`, the order can be canceled, and when set as `false`, it is no longer possible to cancel the order.
     */
    allowCancellation: boolean;
    /**
     * When set as `true`, the order can be edited, and when set as `false`, it is no longer possible to edit the order.
     */
    allowEdition: boolean;
    /**
     * Authorized order date.
     */
    authorizedDate: string;
    /**
     * Call center operator responsible for the order.
     */
    callCenterOperatorData: string;
    /**
     * Reason for order cancellation.
     */
    cancelReason: string;
    /**
     * Information about order cancellation, when it applies.
     */
    cancellationData: UserorderdetailsCancellationData;
    /**
     * Information about changes in the order.
     */
    changesAttachment: ChangesAttachment;
    /**
     * If the field `isCheckedIn` is set as `true`, the `checkedInPickupPointId` will retrieve the ID of the physical store where the order was made.
     */
    checkedInPickupPointId: string;
    /**
     * Information about customer's preferences.
     */
    clientPreferencesData: UserorderdetailsClientPreferencesData;
    /**
     * Object with information on the client's profile.
     */
    clientProfileData: ClientProfileData;
    /**
     * Information about commercial conditions.
     */
    commercialConditionData: string;
    /**
     * Order's creation date.
     */
    creationDate: string;
    /**
     * Custom information in the order. This field is useful for storing data not included in other fields, for example, a message for a gift or a name to be printed in a shirt.
     */
    customData: string;
    /**
     * Email of the store's employee responsible for managing the order.
     */
    followUpEmail: string;
    /**
     * Information about gift list, when it applies.
     */
    giftRegistryData: string;
    /**
     * Account Hostname registered in License Manager.
     */
    hostname: string;
    /**
     * Information pertinent to the order's invoice.
     */
    invoiceData: Record<string, any>;
    /**
     * Order's invoice date.
     */
    invoicedDate: string;
    /**
     * This field is set `true` when the order was made via inStore and `false` when it was not.
     */
    isCheckedIn: boolean;
    /**
     * When set as `true`, the order's payment has been settled, and when set as `false`, it has not been settled yet.
     */
    isCompleted: boolean;
    /**
     * Metadata information about the order's items.
     */
    itemMetadata: UserorderdetailsItemMetadata;
    /**
     * Information about order's items.
     */
    items: Item[];
    /**
     * Order's last change date.
     */
    lastChange: string;
    /**
     * Last sent transactional message.
     */
    lastMessage: string;
    /**
     * Information about promotions and marketing. For example, coupon tracking information and internal or external UTMs.
     */
    marketingData: UserorderdetailsMarketingData;
    /**
     * Details about the marketplace related to the order.
     */
    marketplace: Marketplace;
    /**
     * Marketplace details object.
     */
    marketplaceItems: string[];
    /**
     * Marketplace order ID.
     */
    marketplaceOrderId: string;
    /**
     * Marketplace services endpoint.
     */
    marketplaceServicesEndpoint: string;
    /**
     * Name of the merchant.
     */
    merchantName: string;
    /**
     * Optional field with order's additional information. This field must be filled in using the following format:
     *
     * @remarks
     *
  ```
     *
  {
     *     "fieldExample": "ValueExample"
     *   }
     *
  ```
     *
     */
    openTextField: string;
    /**
     * [Order form](https://developers.vtex.com/docs/guides/orderform-fields) ID.
     */
    orderFormId: string;
    /**
     * Order's group ID.
     */
    orderGroup: string;
    /**
     * Order ID is a unique code that identifies an order.
     */
    orderId: string;
    /**
     * Order Origin, if `Marketplace` or `Fulfillment`.
     */
    origin: string;
    /**
     * Package object populated after order invoiced.
     */
    packageAttachment: PackageAttachment;
    /**
     * Object with information about the payment.
     */
    paymentData: PaymentData;
    /**
     * Information on promotions and taxes that apply to the order.
     */
    ratesAndBenefitsData: RatesAndBenefitsData;
    /**
     * Rounding error total amount, if it applies. For example, in orders with a discount over non-integer multiplier items, the rounding price is performed per item, not after the sum of all items. That can cause a difference in the total discount amount, which is informed in this field.
     */
    roundingError: number;
    /**
     * Sales channel (or [trade policy](https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID related to the order.
     */
    salesChannel: string;
    /**
     * ID of the seller related to the order. It can be a VTEX seller or an external seller.
     */
    sellerOrderId: string;
    /**
     * List of all sellers associated with the order.
     */
    sellers: Seller[];
    /**
     * Sequence is a six-digit string that follows the order ID. For example, in order `1268540501456-01 (501456)`, the sequence is `501456`.
     */
    sequence: string;
    /**
     * Object containing shipping data.
     */
    shippingData: ShippingData;
    /**
     * Order [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).
     */
    status: string;
    /**
     * `Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value.
     */
    statusDescription: string;
    /**
     * Object with data from the store's configuration - stored in VTEX's License Manager.
     */
    storePreferencesData: StorePreferencesData;
    /**
     * Information about [subscriptions](https://help.vtex.com/tutorial/how-subscriptions-work--frequentlyAskedQuestions_4453).
     */
    subscriptionData: UserorderdetailsSubscriptionData;
    /**
     * Order's tax information.
     */
    taxData: UserorderdetailsTaxData;
    /**
     * List with details about orders' totals.
     */
    totals: Total[];
    /**
     * Order's total amount.
     */
    value: number;
}
