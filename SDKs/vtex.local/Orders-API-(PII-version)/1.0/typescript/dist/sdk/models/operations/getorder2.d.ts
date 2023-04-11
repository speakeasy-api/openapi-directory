import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrder2Request extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * ID of the order.
     */
    orderId: string;
    /**
     * Reason for requesting unmasked data.
     */
    reason?: string;
}
/**
 * Additional information.
 */
export declare class GetOrder2200ApplicationJSONItemsAdditionalInfo extends SpeakeasyBase {
    /**
     * Brand ID.
     */
    brandId?: string;
    /**
     * Brand name.
     */
    brandName?: string;
    /**
     * Dimension.
     */
    dimension?: string;
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
export declare class GetOrder2200ApplicationJSONItemsBundleItems extends SpeakeasyBase {
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
export declare class GetOrder2200ApplicationJSONItemsPriceDefinitionSellingPrices extends SpeakeasyBase {
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
export declare class GetOrder2200ApplicationJSONItemsPriceDefinition extends SpeakeasyBase {
    /**
     * Calculated selling price in cents.
     */
    calculatedSellingPrice?: number;
    /**
     * Selling prices.
     */
    sellingPrices?: GetOrder2200ApplicationJSONItemsPriceDefinitionSellingPrices[];
    /**
     * Total in cents.
     */
    total?: number;
}
export declare class GetOrder2200ApplicationJSONItemsPriceTags extends SpeakeasyBase {
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
export declare class GetOrder2200ApplicationJSONItemsProductCategories extends SpeakeasyBase {
    /**
     * Product category corresponding to the ID in the field key.
     */
    id?: string;
}
export declare class GetOrder2200ApplicationJSONItems extends SpeakeasyBase {
    /**
     * Additional information.
     */
    additionalInfo?: GetOrder2200ApplicationJSONItemsAdditionalInfo;
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
    bundleItems?: GetOrder2200ApplicationJSONItemsBundleItems[];
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
    priceDefinition?: GetOrder2200ApplicationJSONItemsPriceDefinition;
    /**
     * Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.
     */
    priceTags?: GetOrder2200ApplicationJSONItemsPriceTags[];
    /**
     * Price expiration date and time.
     */
    priceValidUntil?: string;
    /**
     * Object, where each field is an ID from `productCategoryIds.
     */
    productCategories?: GetOrder2200ApplicationJSONItemsProductCategories;
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
export declare class GetOrder2200ApplicationJSONPackageAttachmentPackagesItems extends SpeakeasyBase {
    /**
     * Item description.
     */
    description?: string;
    /**
     * Item index in reference to the position of the item in the `items` array.
     */
    itemIndex?: number;
    /**
     * Item price in cents.
     */
    price?: number;
    /**
     * Item quantity.
     */
    quantity?: number;
    /**
     * Item unit multiplier.
     */
    unitMultiplier?: number;
}
export declare class GetOrder2200ApplicationJSONPackageAttachmentPackagesRestitutionsRefundItems extends SpeakeasyBase {
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
export declare class GetOrder2200ApplicationJSONPackageAttachmentPackagesRestitutionsRefund extends SpeakeasyBase {
    /**
     * Information on items.
     */
    items?: GetOrder2200ApplicationJSONPackageAttachmentPackagesRestitutionsRefundItems[];
}
/**
 * Information on how restitutions are to be made to the customer, in case of a return (invoice `type` is `input`).
 */
export declare class GetOrder2200ApplicationJSONPackageAttachmentPackagesRestitutions extends SpeakeasyBase {
    /**
     * Information on refunds.
     */
    refund?: GetOrder2200ApplicationJSONPackageAttachmentPackagesRestitutionsRefund;
}
export declare class GetOrder2200ApplicationJSONPackageAttachmentPackages extends SpeakeasyBase {
    /**
     * Fiscal operation code.
     */
    cfop?: string;
    /**
     * Courier.
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
     * Invoice number.
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
    items?: GetOrder2200ApplicationJSONPackageAttachmentPackagesItems[];
    /**
     * Information on how restitutions are to be made to the customer, in case of a return (invoice `type` is `input`).
     */
    restitutions?: GetOrder2200ApplicationJSONPackageAttachmentPackagesRestitutions;
    /**
     * Tracking number.
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
export declare class GetOrder2200ApplicationJSONPackageAttachment extends SpeakeasyBase {
    /**
     * Information on each package.
     */
    packages?: GetOrder2200ApplicationJSONPackageAttachmentPackages[];
}
export declare class GetOrder2200ApplicationJSONTotals extends SpeakeasyBase {
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
export declare class GetOrder2200ApplicationJSON extends SpeakeasyBase {
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
    /**
     * Call center operator data.
     */
    callCenterOperatorData?: string;
    /**
     * Reason for cancelation.
     */
    cancelReason?: string;
    /**
     * User that canceled the order.
     */
    cancelledBy?: string;
    changesAttachment?: shared.ChangesAttachment;
    clientProfileData?: shared.ClientProfileData;
    /**
     * Commercial condition data.
     */
    commercialConditionData?: string;
    /**
     * Creation date.
     */
    creationDate?: string;
    /**
     * Custom data.
     */
    customData?: string;
    /**
     * Email tracked.
     */
    emailTracked?: string;
    /**
     * Follow up email.
     */
    followUpEmail?: string;
    /**
     * Gift registry data.
     */
    giftRegistryData?: string;
    /**
     * Host name.
     */
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
    /**
     * Indicates whether order is completed.
     */
    isCompleted?: boolean;
    /**
     * Information on each item in the order.
     */
    items?: GetOrder2200ApplicationJSONItems[];
    /**
     * Date of last change.
     */
    lastChange?: string;
    /**
     * Last message.
     */
    lastMessage?: string;
    /**
     * Marketing data.
     */
    marketingData?: string;
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
    /**
     * Open text field.
     */
    openTextField?: string;
    /**
     * ID of the shopping cart from which the order was created.
     */
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
    packageAttachment?: GetOrder2200ApplicationJSONPackageAttachment;
    paymentData?: shared.PaymentData;
    ratesAndBenefitsData?: shared.RatesAndBenefitsData;
    /**
     * Rounding error in cents.
     */
    roundingError?: number;
    /**
     * Sales channel.
     */
    salesChannel?: string;
    /**
     * Seller order ID.
     */
    sellerOrderId?: string;
    /**
     * Array with sellers information.
     */
    sellers?: shared.Seller[];
    /**
     * Sequence number.
     */
    sequence?: string;
    shippingData?: shared.ShippingData;
    /**
     * Status in the order workflow.
     */
    status?: string;
    /**
     * Status description which is displayed on the Admin panel.
     */
    statusDescription?: string;
    storePreferencesData?: shared.StorePreferencesData;
    /**
     * Information on each of the order's totals.
     */
    totals?: GetOrder2200ApplicationJSONTotals[];
    /**
     * Value in cents.
     */
    value?: number;
}
export declare class GetOrder2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getOrder2200ApplicationJSONObject?: GetOrder2200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
