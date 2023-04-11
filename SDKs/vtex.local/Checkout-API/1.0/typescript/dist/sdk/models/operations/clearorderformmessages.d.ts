import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ClearorderFormMessagesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: Record<string, any>;
    /**
     * ID of the orderForm corresponding to the cart whose messages you want to remove.
     */
    orderFormId: string;
}
export declare class ClearorderFormMessages200ApplicationJSONAvailableAddresses extends SpeakeasyBase {
    /**
     * Address ID.
     */
    addressId?: string;
    /**
     * Address type.
     */
    addressType?: string;
    /**
     * City of the address.
     */
    city?: string;
    /**
     * Complement to the address.
     */
    complement?: string;
    /**
     * Country of the address. ISO three-letter code.
     */
    country?: string;
    /**
     * Array containing two floats with geocoordinates, first longitude, then latitude.
     */
    geoCoordinates?: number[];
    /**
     * Indicates whether address is disposable.
     */
    isDisposable?: boolean;
    /**
     * Neighborhood of the address.
     */
    neighborhood?: string;
    /**
     * Number of the address.
     */
    number?: string;
    /**
     * Name of the receiver.
     */
    receiverName?: string;
    /**
     * Reference that may help in the location of the address.
     */
    reference?: string;
    /**
     * State of the address.
     */
    state?: string;
    /**
     * Street of the address.
     */
    street?: string;
}
/**
 * Object containing preferences from the client who placed the order.
 */
export declare class ClearorderFormMessages200ApplicationJSONClientPreferencesData extends SpeakeasyBase {
    /**
     * Client's locale. Examples: `pt-BR` and `en-US`.
     */
    locale?: string;
    /**
     * `true` if the client opted to receive newsletter from the store.
     */
    optinNewsLetter?: boolean;
}
/**
 * Customer's profile information.
 */
export declare class ClearorderFormMessages200ApplicationJSONClientProfileData extends SpeakeasyBase {
    /**
     * Corporate document, if the customer is a legal entity.
     */
    corporateDocument?: string;
    /**
     * Company name, if the customer is a legal entity.
     */
    corporateName?: string;
    /**
     * Corporate phone number, if the customer is a legal entity.
     */
    corporatePhone?: string;
    /**
     * Customer class.
     */
    customerClass?: string;
    /**
     * Document informed by the customer.
     */
    document?: string;
    /**
     * Type of the document informed by the customer.
     */
    documentType?: string;
    /**
     * Email address.
     */
    email?: string;
    /**
     * First name.
     */
    firstName?: string;
    /**
     * Indicates whether the customer is a legal entity.
     */
    isCorporate?: boolean;
    /**
     * Last name.
     */
    lastName?: string;
    /**
     * Phone number.
     */
    phone?: string;
    /**
     * Indicates whether profile is complete on loading.
     */
    profileCompleteOnLoading?: boolean;
    /**
     * Indicates whether profile presents error on loading.
     */
    profileErrorOnLoading?: boolean;
    /**
     * State inscription, if the customer is a legal entity.
     */
    stateInscription?: string;
    /**
     * Trade name, if the customer is a legal entity.
     */
    tradeName?: string;
}
export declare class ClearorderFormMessages200ApplicationJSONItemMetadataItems extends SpeakeasyBase {
    /**
     * Detail URL.
     */
    detailUrl?: string;
    /**
     * European Article Number.
     */
    ean?: string;
    /**
     * Item ID.
     */
    id?: string;
    /**
     * Image URL.
     */
    imageUrl?: string;
    /**
     * Product name.
     */
    name?: string;
    /**
     * Product ID.
     */
    productId?: string;
    /**
     * Ref ID.
     */
    refId?: string;
    /**
     * Seller.
     */
    seller?: string;
    /**
     * SKU name.
     */
    skuName?: string;
}
/**
 * Item metadata.
 */
export declare class ClearorderFormMessages200ApplicationJSONItemMetadata extends SpeakeasyBase {
    /**
     * List of objects containing metadata on each item in the order.
     */
    items?: ClearorderFormMessages200ApplicationJSONItemMetadataItems[];
}
/**
 * Additional information.
 */
export declare class ClearorderFormMessages200ApplicationJSONItemsAdditionalInfo extends SpeakeasyBase {
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
export declare class ClearorderFormMessages200ApplicationJSONItemsBundleItems extends SpeakeasyBase {
    /**
     * Service identifier.
     */
    id?: number;
    /**
     * Service name.
     */
    name?: string;
    /**
     * Service price in cents.
     */
    price?: number;
    /**
     * Service type.
     */
    type?: string;
}
export declare class ClearorderFormMessages200ApplicationJSONItemsPriceDefinitionSellingPrices extends SpeakeasyBase {
    /**
     * Rounding quantity, meaning how many items are rounded to this value.
     */
    quantity?: number;
    /**
     * Value in cents for that specific rounding.
     */
    value?: number;
}
/**
 * Price information for all units of a specific item.
 */
export declare class ClearorderFormMessages200ApplicationJSONItemsPriceDefinition extends SpeakeasyBase {
    /**
     * Item's calculated unitary selling price in cents.
     */
    calculatedSellingPrice?: number;
    /**
     * Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.
     */
    sellingPrices?: ClearorderFormMessages200ApplicationJSONItemsPriceDefinitionSellingPrices[];
    /**
     * Total value for all units of the item in cents.
     */
    total?: number;
}
export declare class ClearorderFormMessages200ApplicationJSONItemsPriceTags extends SpeakeasyBase {
    /**
     * Price tag identifier.
     */
    identifier?: string;
    /**
     * Indicates whether price tag value is applied through a percentage.
     */
    isPercentual?: boolean;
    /**
     * Price tag name.
     */
    name?: string;
    /**
     * Price tag raw value.
     */
    rawValue?: number;
    /**
     * Price tag value.
     */
    value?: number;
}
/**
 * Object, where each field is an ID from `productCategoryIds`.
 */
export declare class ClearorderFormMessages200ApplicationJSONItemsProductCategories extends SpeakeasyBase {
    /**
     * Product category corresponding to the ID in the field key.
     */
    id?: string;
}
export declare class ClearorderFormMessages200ApplicationJSONItems extends SpeakeasyBase {
    /**
     * Additional information.
     */
    additionalInfo?: ClearorderFormMessages200ApplicationJSONItemsAdditionalInfo;
    /**
     * Array containing information on attachments.
     */
    attachments?: string[];
    /**
     * Availability.
     */
    availability?: string;
    /**
     * Information on services sold along with the SKU. Example: a gift package.
     */
    bundleItems?: ClearorderFormMessages200ApplicationJSONItemsBundleItems[];
    /**
     * Detail URL.
     */
    detailUrl?: string;
    /**
     * European Article Number.
     */
    ean?: string;
    /**
     * ID of the item.
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
     * Measurement unit.
     */
    measurementUnit?: string;
    /**
     * Modal type.
     */
    modalType?: string;
    /**
     * Product name.
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
     * Price information for all units of a specific item.
     */
    priceDefinition?: ClearorderFormMessages200ApplicationJSONItemsPriceDefinition;
    /**
     * Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.
     */
    priceTags?: ClearorderFormMessages200ApplicationJSONItemsPriceTags[];
    /**
     * Price expiration date and time.
     */
    priceValidUntil?: string;
    /**
     * Object, where each field is an ID from `productCategoryIds`.
     */
    productCategories?: ClearorderFormMessages200ApplicationJSONItemsProductCategories;
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
     * Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.
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
     * Unique ID.
     */
    uniqueId?: string;
    /**
     * Unit multiplier.
     */
    unitMultiplier?: number;
}
/**
 * Object containing information about the ordering of items within the orderForm.
 */
export declare class ClearorderFormMessages200ApplicationJSONItemsOrdination extends SpeakeasyBase {
    /**
     * Indicates whether the ordering is ascending.
     */
    ascending?: boolean;
    /**
     * Criteria adopted to order the items in the list.
     */
    criteria?: string;
}
/**
 * Object containing promotion data such as coupon tracking information and internal or external UTMs.
 */
export declare class ClearorderFormMessages200ApplicationJSONMarketingData extends SpeakeasyBase {
    /**
     * Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.
     */
    coupon?: string;
    /**
     * UTM campaign
     */
    utmCampaign?: string;
    /**
     * UTM medium.
     */
    utmMedium?: string;
    /**
     * UTM source.
     */
    utmSource?: string;
    /**
     * utmi_campaign (internal utm).
     */
    utmiCampaign?: string;
    /**
     * utmi_page (internal utm)
     */
    utmiPage?: string;
    /**
     * utmi_part (internal utm).
     */
    utmiPart?: string;
}
export declare class ClearorderFormMessages200ApplicationJSONPaymentDataGiftCards extends SpeakeasyBase {
    /**
     * Gift card balance in cents.
     */
    balance?: number;
    /**
     * Gift card ID.
     */
    id?: string;
    /**
     * Indicates whether gift card is in use.
     */
    inUse?: boolean;
    /**
     * Indicates whether gift card is special.
     */
    isSpecialCard?: boolean;
    /**
     * Gift card name.
     */
    name?: string;
    /**
     * Gift card redemption code.
     */
    redemptionCode?: string;
    /**
     * Gift card value in cents.
     */
    value?: number;
}
export declare class ClearorderFormMessages200ApplicationJSONPaymentDataTransactionsPayments extends SpeakeasyBase {
    /**
     * Account ID.
     */
    accountId?: string;
    /**
     * Bin.
     */
    bin?: string;
    /**
     * Number of installments.
     */
    installments?: number;
    /**
     * Payment system.
     */
    paymentSystem?: string;
    /**
     * Reference value for calculating interest rates, in case it applies. Displayed in cents.
     */
    referenceValue?: number;
    /**
     * Value including interest, in case it applies. Displayed in cents.
     */
    value?: number;
}
export declare class ClearorderFormMessages200ApplicationJSONPaymentDataTransactions extends SpeakeasyBase {
    /**
     * Indicates whether transaction is active.
     */
    isActive?: boolean;
    /**
     * Merchant name.
     */
    merchantName?: string;
    /**
     * Information on each payment.
     */
    payments?: ClearorderFormMessages200ApplicationJSONPaymentDataTransactionsPayments[];
    /**
     * Indicates whather transaction is shared.
     */
    sharedTransaction?: boolean;
    /**
     * Transaction ID.
     */
    transactionId?: string;
}
/**
 * Information on the order's payment.
 */
export declare class ClearorderFormMessages200ApplicationJSONPaymentData extends SpeakeasyBase {
    /**
     * Gift card information, if it applies to the order.
     */
    giftCards?: ClearorderFormMessages200ApplicationJSONPaymentDataGiftCards[];
    /**
     * Information on each transaction pertinent to the order.
     */
    transactions?: ClearorderFormMessages200ApplicationJSONPaymentDataTransactions[];
}
/**
 * Information on rates and benefits that apply to the order.
 */
export declare class ClearorderFormMessages200ApplicationJSONRatesAndBenefitsData extends SpeakeasyBase {
    /**
     * List with rates and benefits identifiers.
     */
    rateAndBenefitsIdentifiers?: string[];
    /**
     * List with rates and benefits teasers.
     */
    teaser?: string[];
}
export declare class ClearorderFormMessages200ApplicationJSONSellers extends SpeakeasyBase {
    /**
     * Seller ID.
     */
    id?: string;
    /**
     * Seller logo.
     */
    logo?: string;
    /**
     * Seller name.
     */
    name?: string;
}
/**
 * Address information.
 */
export declare class ClearorderFormMessages200ApplicationJSONShippingDataAddress extends SpeakeasyBase {
    /**
     * Address ID.
     */
    addressId?: string;
    /**
     * Type of address. For example, `Residential` or `Pickup`.
     */
    addressType?: string;
    /**
     * City of the shipping address.
     */
    city?: string;
    /**
     * Complement to the shipping address, in case it applies.
     */
    complement?: string;
    /**
     * Three letter ISO code of the country of the shipping address.
     */
    country?: string;
    /**
     * Array containing two floats with geocoordinates, first longitude, then latitude.
     */
    geoCoordinates?: number[];
    /**
     * Indicates whether address is disposable.
     */
    isDisposable?: boolean;
    /**
     * Neighborhood of the shipping address.
     */
    neighborhood?: string;
    /**
     * Number of the building, house or apartment in the shipping address.
     */
    number?: string;
    /**
     * Postal code.
     */
    postalCode?: string;
    /**
     * Name of the person who is going to receive the order.
     */
    receiverName?: string;
    /**
     * Complement that might help locate the shipping address more precisely in case of delivery.
     */
    reference?: string;
    /**
     * State of the shipping address.
     */
    state?: string;
    /**
     * Street of the shipping address.
     */
    street?: string;
}
export declare class ClearorderFormMessages200ApplicationJSONShippingDataAvailableAddresses extends SpeakeasyBase {
    /**
     * Address ID.
     */
    addressId?: string;
    /**
     * Type of address. For example, `Residential` or `Pickup`.
     */
    addressType?: string;
    /**
     * City of the shipping address.
     */
    city?: string;
    /**
     * Complement to the shipping address, in case it applies.
     */
    complement?: string;
    /**
     * Three letter ISO code of the country of the shipping address.
     */
    country?: string;
    /**
     * Array containing two floats with geocoordinates, first longitude, then latitude.
     */
    geoCoordinates?: number[];
    /**
     * Indicates whether address is disposable.
     */
    isDisposable?: boolean;
    /**
     * Neighborhood of the shipping address.
     */
    neighborhood?: string;
    /**
     * Number of the building, house or apartment in the shipping address.
     */
    number?: string;
    /**
     * Postal code.
     */
    postalCode?: string;
    /**
     * Name of the person who is going to receive the order.
     */
    receiverName?: string;
    /**
     * Complement that might help locate the shipping address more precisely in case of delivery.
     */
    reference?: string;
    /**
     * State of the shipping address.
     */
    state?: string;
    /**
     * Street of the shipping address.
     */
    street?: string;
}
export declare class ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfoDeliveryChannels extends SpeakeasyBase {
    /**
     * Delivery channel ID.
     */
    id?: string;
}
export declare class ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfoSlasDeliveryIds extends SpeakeasyBase {
    /**
     * Courier ID.
     */
    courierId?: string;
    /**
     * Courier name.
     */
    courierName?: string;
    /**
     * Warehouse ID.
     */
    dockId?: string;
    /**
     * Quantity.
     */
    quantity?: number;
    /**
     * Warehouse ID.
     */
    warehouseId?: string;
}
/**
 * Address information.
 */
export declare class ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfoSlasPickupStoreInfoAddress extends SpeakeasyBase {
    /**
     * Type of address. For example, `Residential` or `Pickup`.
     */
    addressType?: string;
    /**
     * City of the shipping address.
     */
    city?: string;
    /**
     * Complement to the shipping address, in case it applies.
     */
    complement?: string;
    /**
     * Three letter ISO code of the country of the shipping address.
     */
    country?: string;
    /**
     * Array containing two floats with geocoordinates, first longitude, then latitude.
     */
    geoCoordinates?: number[];
    /**
     * Neighborhood of the shipping address.
     */
    neighborhood?: string;
    /**
     * Number of the building, house or apartment in the shipping address.
     */
    number?: string;
    /**
     * Postal code.
     */
    postalCode?: string;
    /**
     * Complement that might help locate the shipping address more precisely in case of delivery.
     */
    reference?: string;
    /**
     * State of the shipping address.
     */
    state?: string;
    /**
     * Street of the shipping address.
     */
    street?: string;
}
/**
 * Information on the pickup store.
 */
export declare class ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfoSlasPickupStoreInfo extends SpeakeasyBase {
    /**
     * Additional information.
     */
    additionalInfo?: string;
    /**
     * Address information.
     */
    address?: ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfoSlasPickupStoreInfoAddress;
    /**
     * Corresponding dock ID.
     */
    dockId?: string;
    /**
     * Friendly name.
     */
    friendlyName?: string;
    /**
     * Indicates whether it is the pickup store.
     */
    isPickupStore?: boolean;
}
export declare class ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfoSlas extends SpeakeasyBase {
    /**
     * Delivery channel.
     */
    deliveryChannel?: string;
    /**
     * Information on each delivery ID.
     */
    deliveryIds?: ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfoSlasDeliveryIds[];
    /**
     * SLA ID.
     */
    id?: string;
    /**
     * List price in cents.
     */
    listPrice?: number;
    /**
     * Estimate date of delivery.
     */
    lockTTL?: string;
    /**
     * SLA name.
     */
    name?: string;
    /**
     * Pickup point distance.
     */
    pickupDistance?: number;
    /**
     * Pickup point ID.
     */
    pickupPointId?: string;
    /**
     * Information on the pickup store.
     */
    pickupStoreInfo?: ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfoSlasPickupStoreInfo;
    /**
     * Polygon name.
     */
    polygonName?: string;
    /**
     * Price in cents.
     */
    price?: number;
    /**
     * Shipping estimate. For instance, Three business days will be represented `3bd`.
     */
    shippingEstimate?: string;
    /**
     * Shipping estimate date.
     */
    shippingEstimateDate?: string;
    /**
     * Tax in cents.
     */
    tax?: number;
    /**
     * Transit time. For instance, "three business days" is represented `3bd`.
     */
    transitTime?: string;
}
export declare class ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfo extends SpeakeasyBase {
    /**
     * Address ID.
     */
    addressId?: string;
    /**
     * List of available delivery channels.
     */
    deliveryChannels?: ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfoDeliveryChannels[];
    /**
     * Item ID.
     */
    itemId?: string;
    /**
     * Index corresponding to the position of the object in the `items` array.
     */
    itemIndex?: number;
    /**
     * Delivery channel selected by the customer.
     */
    selectedDeliveryChannel?: string;
    /**
     * SLA selected by the customer.
     */
    selectedSla?: string;
    /**
     * List of countries that the item may be shipped to.
     */
    shipsTo?: string[];
    /**
     * Information on available SLAs.
     */
    slas?: ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfoSlas[];
}
export declare class ClearorderFormMessages200ApplicationJSONShippingDataSelectedAddresses extends SpeakeasyBase {
    /**
     * Address ID.
     */
    addressId?: string;
    /**
     * Type of address. For example, `Residential` or `Pickup`.
     */
    addressType?: string;
    /**
     * City of the shipping address.
     */
    city?: string;
    /**
     * Complement to the shipping address, in case it applies.
     */
    complement?: string;
    /**
     * Three letter ISO code of the country of the shipping address.
     */
    country?: string;
    /**
     * Array containing two floats with geocoordinates, first longitude, then latitude.
     */
    geoCoordinates?: number[];
    /**
     * Indicates whether address is disposable.
     */
    isDisposable?: boolean;
    /**
     * Neighborhood of the shipping address.
     */
    neighborhood?: string;
    /**
     * Number of the building, house or apartment in the shipping address.
     */
    number?: string;
    /**
     * Postal code.
     */
    postalCode?: string;
    /**
     * Name of the person who is going to receive the order.
     */
    receiverName?: string;
    /**
     * Complement that might help locate the shipping address more precisely in case of delivery.
     */
    reference?: string;
    /**
     * State of the shipping address.
     */
    state?: string;
    /**
     * Street of the shipping address.
     */
    street?: string;
}
/**
 * Shipping information pertinent to the order.
 */
export declare class ClearorderFormMessages200ApplicationJSONShippingData extends SpeakeasyBase {
    /**
     * Address information.
     */
    address?: ClearorderFormMessages200ApplicationJSONShippingDataAddress;
    /**
     * Array with information on the available addresses for the order.
     */
    availableAddresses?: ClearorderFormMessages200ApplicationJSONShippingDataAvailableAddresses[];
    /**
     * Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.
     */
    logisticsInfo?: ClearorderFormMessages200ApplicationJSONShippingDataLogisticsInfo[];
    /**
     * Array with information on the selected addresses for the order.
     */
    selectedAddresses?: ClearorderFormMessages200ApplicationJSONShippingDataSelectedAddresses[];
}
/**
 * OK
 */
export declare class ClearorderFormMessages200ApplicationJSON extends SpeakeasyBase {
    /**
     * Permission to modify item price manually.
     */
    allowManualPrice?: boolean;
    /**
     * Available accounts.
     */
    availableAccounts?: string[];
    /**
     * Information on each available address.
     */
    availableAddresses?: ClearorderFormMessages200ApplicationJSONAvailableAddresses[];
    /**
     * Data can be edited.
     */
    canEditData?: boolean;
    /**
     * Object containing preferences from the client who placed the order.
     */
    clientPreferencesData?: ClearorderFormMessages200ApplicationJSONClientPreferencesData;
    /**
     * Customer's profile information.
     */
    clientProfileData?: ClearorderFormMessages200ApplicationJSONClientProfileData;
    /**
     * Object containing commercial condition information.
     */
    commercialConditionData?: Record<string, any>;
    /**
     * Customer additional information.
     */
    customData?: Record<string, any>;
    /**
     * Gift registry list information.
     */
    giftRegistryData?: Record<string, any>;
    /**
     * Hooks information.
     */
    hooksData?: Record<string, any>;
    /**
     * Ignore customer profile data.
     */
    ignoreProfileData?: boolean;
    /**
     * Object containing information pertinent to the order's invoice.
     */
    invoiceData?: Record<string, any>;
    /**
     * Indicates whether order is checked in.
     */
    isCheckedIn?: boolean;
    /**
     * Item metadata.
     */
    itemMetadata?: ClearorderFormMessages200ApplicationJSONItemMetadata;
    /**
     * Information on each item in the order.
     */
    items?: ClearorderFormMessages200ApplicationJSONItems[];
    /**
     * Object containing information about the ordering of items within the orderForm.
     */
    itemsOrdination?: ClearorderFormMessages200ApplicationJSONItemsOrdination;
    /**
     * Indicates whether the user is logged into the store.
     */
    loggedIn?: boolean;
    /**
     * Object containing promotion data such as coupon tracking information and internal or external UTMs.
     */
    marketingData?: ClearorderFormMessages200ApplicationJSONMarketingData;
    /**
     * Array containing an object for each message generated by our servers while processing the request.
     */
    messages?: any[];
    /**
     * Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1).
     */
    openTextField?: string;
    /**
     * ID of the orderForm corresponding to a specific cart.
     */
    orderFormId?: string;
    /**
     * Information on the order's payment.
     */
    paymentData?: ClearorderFormMessages200ApplicationJSONPaymentData;
    /**
     * Profile provider.
     */
    profileProvider?: string;
    /**
     * Information on rates and benefits that apply to the order.
     */
    ratesAndBenefitsData?: ClearorderFormMessages200ApplicationJSONRatesAndBenefitsData;
    /**
     * Attribute created by the seller, in their VTEX store configuration.
     */
    salesChannel?: string;
    /**
     * Array containing the data of the item selected as a gift.
     */
    selectableGifts?: any[];
    /**
     * Information on each seller.
     */
    sellers?: ClearorderFormMessages200ApplicationJSONSellers[];
    /**
     * Shipping information pertinent to the order.
     */
    shippingData?: ClearorderFormMessages200ApplicationJSONShippingData;
    /**
     * ID of the store.
     */
    storeId?: string;
    /**
     * Object containing data from the store's configuration (stored in VTEX's License Manager).
     */
    storePreferencesData?: Record<string, any>;
    /**
     * Subscription information.
     */
    subscriptionData?: Record<string, any>;
    /**
     * Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value).
     */
    totalizers?: any[];
    /**
     * Unique ID associated with the customer profile.
     */
    userProfileId?: string;
    /**
     * User type.
     */
    userType?: string;
    /**
     * Total value of the order without separating cents. For example, $24.99 is represented `2499`.
     */
    value?: number;
}
export declare class ClearorderFormMessagesResponse extends SpeakeasyBase {
    /**
     * OK
     */
    clearorderFormMessages200ApplicationJSONObject?: ClearorderFormMessages200ApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
