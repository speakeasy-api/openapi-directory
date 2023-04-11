import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Order ID is a unique code that identifies an order. Instead of using `orderId`, you can also make the request using the sequence, a six-digit string that follows the order ID. For example, in order 1268540501456-01 (501456), the sequence is 501456. To use this parameter, replace the value between `{ }` keys in `seq{sequence-number}` with the sequence. For example: `seq501456`.
     */
    orderId: string;
}
/**
 * Dimension of the item.
 */
export declare class GetOrder200ApplicationJSONItemsAdditionalInfoDimension extends SpeakeasyBase {
    /**
     * The item's cubic weight.
     */
    cubicweight?: number;
    /**
     * The item's height.
     */
    height?: number;
    /**
     * The item's length.
     */
    length?: number;
    /**
     * The item's weight.
     */
    weight?: number;
    /**
     * The item's width.
     */
    width?: number;
}
/**
 * Additional information.
 */
export declare class GetOrder200ApplicationJSONItemsAdditionalInfo extends SpeakeasyBase {
    /**
     * Brand ID.
     */
    brandId?: string;
    /**
     * Brand name.
     */
    brandName?: string;
    /**
     * Dimension of the item.
     */
    dimension?: GetOrder200ApplicationJSONItemsAdditionalInfoDimension;
    /**
     * Offering information.
     */
    offeringInfo?: string;
    /**
     * Offering type.
     */
    offeringType?: string;
    /**
     * Offering type ID.
     */
    offeringTypeId?: string;
}
export declare class GetOrder200ApplicationJSONItemsBundleItems extends SpeakeasyBase {
    /**
     * Service identifier.
     */
    id?: number;
    /**
     * Name.
     */
    name?: string;
    /**
     * Price in cents.
     */
    price?: number;
    /**
     * Type
     */
    type?: string;
}
export declare class GetOrder200ApplicationJSONItemsPriceDefinitionSellingPrices extends SpeakeasyBase {
    /**
     * Quantity.
     */
    quantity?: number;
    /**
     * Value in cents.
     */
    value?: number;
}
/**
 * Price information.
 */
export declare class GetOrder200ApplicationJSONItemsPriceDefinition extends SpeakeasyBase {
    /**
     * Calculated selling price in cents.
     */
    calculatedSellingPrice?: number;
    /**
     * Selling prices.
     */
    sellingPrices?: GetOrder200ApplicationJSONItemsPriceDefinitionSellingPrices[];
    /**
     * Total in cents.
     */
    total?: number;
}
export declare class GetOrder200ApplicationJSONItemsPriceTags extends SpeakeasyBase {
    /**
     * Price tag identifier.
     */
    identifier?: string;
    /**
     * Indicates whether price tag value is applied through a percentage.
     */
    isPercentual?: boolean;
    /**
     * Name.
     */
    name?: string;
    /**
     * Raw value.
     */
    rawValue?: number;
    /**
     * Value.
     */
    value?: number;
}
/**
 * Object, where each field is an ID from `productCategoryIds.
 */
export declare class GetOrder200ApplicationJSONItemsProductCategories extends SpeakeasyBase {
    /**
     * Product category corresponding to the ID in the field key.
     */
    id?: string;
}
export declare class GetOrder200ApplicationJSONItems extends SpeakeasyBase {
    /**
     * Additional information.
     */
    additionalInfo?: GetOrder200ApplicationJSONItemsAdditionalInfo;
    /**
     * Array containing information on attachments.
     */
    attachments?: string[];
    /**
     * Availability
     */
    availability?: string;
    /**
     * Information on services sold along with the SKU. Example: a gift package.
     */
    bundleItems?: GetOrder200ApplicationJSONItemsBundleItems[];
    /**
     * Detail URL.
     */
    detailUrl?: string;
    /**
     * European Article Number.
     */
    ean?: string;
    /**
     * ID.
     */
    id?: string;
    /**
     * Image URL.
     */
    imageUrl?: string;
    /**
     * Indicates whether item is a gift.
     */
    isGift?: boolean;
    /**
     * List price in cents.
     */
    listPrice?: number;
    /**
     * Manual price in cents.
     */
    manualPrice?: number;
    /**
     * User that applied the manual price, if that is the case.
     */
    manualPriceAppliedBy?: string;
    /**
     * Manufacturer code.
     */
    manufacturerCode?: string;
    /**
     * Measurement unit
     */
    measurementUnit?: string;
    /**
     * Modal type.
     */
    modalType?: string;
    /**
     * Name.
     */
    name?: string;
    /**
     * Parent assembly binding.
     */
    parentAssemblyBinding?: string;
    /**
     * Parent item index.
     */
    parentItemIndex?: number;
    /**
     * Presale date.
     */
    preSaleDate?: string;
    /**
     * Price in cents.
     */
    price?: number;
    /**
     * Price information.
     */
    priceDefinition?: GetOrder200ApplicationJSONItemsPriceDefinition;
    /**
     * Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.
     */
    priceTags?: GetOrder200ApplicationJSONItemsPriceTags[];
    /**
     * Price expiration date and time.
     */
    priceValidUntil?: string;
    /**
     * Object, where each field is an ID from `productCategoryIds.
     */
    productCategories?: GetOrder200ApplicationJSONItemsProductCategories;
    /**
     * Product category IDs.
     */
    productCategoryIds?: string;
    /**
     * Product ID.
     */
    productId?: string;
    /**
     * Product Ref ID.
     */
    productRefId?: string;
    /**
     * Quantity.
     */
    quantity?: number;
    /**
     * Ref ID.
     */
    refId?: string;
    /**
     * Reward value in cents.
     */
    rewardValue?: number;
    /**
     * Seller.
     */
    seller?: string;
    /**
     * Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.
     */
    sellerChain?: string[];
    /**
     * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
     */
    sellingPrice?: number;
    /**
     * SKU name.
     */
    skuName?: string;
    /**
     * Tax value in cents.
     */
    tax?: number;
    /**
     * Order's item unique ID.
     */
    uniqueId?: string;
    /**
     * Unit multiplier
     */
    unitMultiplier?: number;
}
export declare class GetOrder200ApplicationJSONPackageAttachmentPackagesItems extends SpeakeasyBase {
    /**
     * Description.
     */
    description?: string;
    /**
     * Item index in reference to the position of the item in the `items` array.
     */
    itemIndex?: number;
    /**
     * Price in cents.
     */
    price?: number;
    /**
     * Quantity.
     */
    quantity?: number;
    /**
     * Unit multiplier.
     */
    unitMultiplier?: number;
}
export declare class GetOrder200ApplicationJSONPackageAttachmentPackagesRestitutionsRefundItems extends SpeakeasyBase {
    /**
     * Item index corresponding to the position of the item in the main `items` array.
     */
    itemIndex?: string;
    /**
     * Quantity.
     */
    quantity?: number;
}
/**
 * Information on refunds.
 */
export declare class GetOrder200ApplicationJSONPackageAttachmentPackagesRestitutionsRefund extends SpeakeasyBase {
    /**
     * Information on items.
     */
    items?: GetOrder200ApplicationJSONPackageAttachmentPackagesRestitutionsRefundItems[];
}
/**
 * Information on how restitutions are to be made to the customer, in case of a return (invoice `type` is `input`).
 */
export declare class GetOrder200ApplicationJSONPackageAttachmentPackagesRestitutions extends SpeakeasyBase {
    /**
     * Information on refunds.
     */
    refund?: GetOrder200ApplicationJSONPackageAttachmentPackagesRestitutionsRefund;
}
export declare class GetOrder200ApplicationJSONPackageAttachmentPackages extends SpeakeasyBase {
    /**
     * Fiscal operation code.
     */
    cfop?: string;
    /**
     * The name of the carrier responsible for delivering the order.
     */
    courier?: string;
    /**
     * Courier status.
     */
    courierStatus?: string;
    /**
     * Embedded voice in XML.
     */
    embeddedInvoice?: string;
    /**
     * Invoice key.
     */
    invoiceKey?: string;
    /**
     * Number that identifies the invoice.
     */
    invoiceNumber?: string;
    /**
     * Invoice URL.
     */
    invoiceUrl?: string;
    /**
     * Invoice value in cents.
     */
    invoiceValue?: number;
    /**
     * Issuance date.
     */
    issuanceDate?: string;
    /**
     * Information on each item in the package.
     */
    items?: GetOrder200ApplicationJSONPackageAttachmentPackagesItems[];
    /**
     * Information on how restitutions are to be made to the customer, in case of a return (invoice `type` is `input`).
     */
    restitutions?: GetOrder200ApplicationJSONPackageAttachmentPackagesRestitutions;
    /**
     * The number code that identifies the order tracking. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*
     */
    trackingNumber?: string;
    /**
     * Tracking URL.
     */
    trackingUrl?: string;
    /**
     * Invoice type `Output` for sales and `Input` for returns.
     */
    type?: string;
    /**
     * Quantity of packages involved in the order.
     */
    volumes?: number;
}
/**
 * Package attachment.
 */
export declare class GetOrder200ApplicationJSONPackageAttachment extends SpeakeasyBase {
    /**
     * Information on each package.
     */
    packages?: GetOrder200ApplicationJSONPackageAttachmentPackages[];
}
export declare class GetOrder200ApplicationJSONTotals extends SpeakeasyBase {
    /**
     * Order's total ID.
     */
    id?: string;
    /**
     * Order's total name.
     */
    name?: string;
    /**
     * Order's total value.
     */
    value?: number;
}
/**
 * OK
 */
export declare class GetOrder200ApplicationJSON extends SpeakeasyBase {
    /**
     * Three letter code identifying the marketplace where the order was placed.
     */
    affiliateId?: string;
    /**
     * Indicates whether cancelation is allowed for the order.
     */
    allowCancellation?: boolean;
    /**
     * Indicates whether edition is allowed for the order.
     */
    allowEdition?: boolean;
    /**
     * User that approved the order, in case of manual approval.
     */
    approvedBy?: string;
    /**
     * Date in which the order was authorized in UTC.
     */
    authorizedDate?: string;
    callCenterOperatorData?: string;
    /**
     * Reason for cancelation.
     */
    cancelReason?: string;
    /**
     * User that canceled the order.
     */
    cancelledBy?: string;
    /**
     * Information about changes in the order.
     */
    changesAttachment?: shared.ChangesAttachment;
    /**
     * Object with information on the client's profile.
     */
    clientProfileData?: shared.ClientProfileData;
    commercialConditionData?: string;
    /**
     * Creation date.
     */
    creationDate?: string;
    customData?: string;
    /**
     * Email tracked.
     */
    emailTracked?: string;
    followUpEmail?: string;
    giftRegistryData?: string;
    hostname?: string;
    /**
     * Information pertinent to the order's invoice.
     */
    invoiceData?: Record<string, any>;
    /**
     * Date in which the order was invoiced in UTC.
     */
    invoicedDate?: string;
    /**
     * Indicates whether client is checked in.
     */
    isCheckedIn?: boolean;
    isCompleted?: boolean;
    /**
     * Information on each item in the order.
     */
    items?: GetOrder200ApplicationJSONItems[];
    /**
     * Date of last change.
     */
    lastChange?: string;
    lastMessage?: string;
    marketingData?: string;
    /**
     * Details about the marketplace related to the order.
     */
    marketplace?: shared.Marketplace;
    /**
     * Marketplace items.
     */
    marketplaceItems?: string[];
    /**
     * ID of the order in the marketplace.
     */
    marketplaceOrderId?: string;
    /**
     * Marketplace endpoint for post purchase communication.
     */
    marketplaceServicesEndpoint?: string;
    /**
     * Merchant name.
     */
    merchantName?: string;
    openTextField?: string;
    orderFormId?: string;
    /**
     * Order group.
     */
    orderGroup?: string;
    /**
     * Order ID.
     */
    orderId?: string;
    /**
     * Origin.
     */
    origin?: string;
    /**
     * Package attachment.
     */
    packageAttachment?: GetOrder200ApplicationJSONPackageAttachment;
    /**
     * Object with information about the payment.
     */
    paymentData?: shared.PaymentData;
    /**
     * Information on promotions and taxes that apply to the order.
     */
    ratesAndBenefitsData?: shared.RatesAndBenefitsData;
    roundingError?: number;
    /**
     * Sales channel.
     */
    salesChannel?: string;
    /**
     * Seller order ID.
     */
    sellerOrderId?: string;
    sellers?: shared.Seller[];
    /**
     * Sequence number.
     */
    sequence?: string;
    /**
     * Object containing shipping data.
     */
    shippingData?: shared.ShippingData;
    /**
     * Status in the order workflow.
     */
    status?: string;
    /**
     * `Deprecated`. Status description which is displayed on the Admin panel.
     */
    statusDescription?: string;
    /**
     * Object with data from the store's configuration - stored in VTEX's License Manager.
     */
    storePreferencesData?: shared.StorePreferencesData;
    /**
     * Information on each of the order's totals.
     */
    totals?: GetOrder200ApplicationJSONTotals[];
    /**
     * Value in cents.
     */
    value?: number;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getOrder200ApplicationJSONObject?: GetOrder200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
