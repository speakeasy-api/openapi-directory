import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Customer's profile information. The `email` functions as a customer's ID.
 *
 * @remarks
 *
 *
For customers already in your database, sending only the email address is enough to register the order to the shopper’s existing account.
 *
 *
> If the shopper exists in you database but is not logged in, sending other profile information along with the email will cause the platform to fail placing the order. This happens because this action is interpreted as an attempt to edit profile data, which is not possible unless the customer is logged in to the store.
 */
export declare class PlaceOrderRequestBodyClientProfileData extends SpeakeasyBase {
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
     * Document number informed by the customer.
     */
    document?: string;
    /**
     * Type of the document informed by the customer.
     */
    documentType?: string;
    /**
     * Customer's email address.
     */
    email: string;
    /**
     * Customer's first name.
     */
    firstName?: string;
    /**
     * `true` if the customer is a legal entity.
     */
    isCorporate?: boolean;
    /**
     * Customer's last name.
     */
    lastName?: string;
    /**
     * Customer's phone number.
     */
    phone?: string;
    /**
     * State inscription, if the customer is a legal entity.
     */
    stateInscription?: string;
    /**
     * Trade name, if the customer is a legal entity.
     */
    tradeName?: string;
}
export declare class PlaceOrderRequestBodyItemsBundleItems extends SpeakeasyBase {
    /**
     * Service identifier.
     */
    id?: string;
    /**
     * Service name.
     */
    name?: string;
    /**
     * Service price. The last two digits are the cents.
     */
    price?: number;
    /**
     * Service type.
     */
    type?: string;
}
/**
 * Item attachment.
 */
export declare class PlaceOrderRequestBodyItemsItemAttachment extends SpeakeasyBase {
    /**
     * Content referring to the customization requested by the customer.
     */
    content?: string;
    /**
     * Attachment name.
     */
    name?: string;
}
export declare class PlaceOrderRequestBodyItemsPriceTags extends SpeakeasyBase {
    /**
     * Price tag identifier.
     */
    identifier?: string;
    /**
     * `true` if price tag value is applied through a percentage.
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
export declare class PlaceOrderRequestBodyItems extends SpeakeasyBase {
    /**
     * Array containing information on attachments.
     */
    attachments?: string[];
    /**
     * Information on services sold along with the SKU. Example: a gift package.
     */
    bundleItems?: PlaceOrderRequestBodyItemsBundleItems[];
    /**
     * Comission.
     */
    commission?: number;
    /**
     * Freight comission
     */
    freightCommission?: number;
    /**
     * The SKU ID.
     */
    id: string;
    /**
     * Indicates whether the order is a gift.
     */
    isGift?: boolean;
    /**
     * Item attachment.
     */
    itemAttachment?: PlaceOrderRequestBodyItemsItemAttachment;
    /**
     * SKU measurement unit.
     */
    measurementUnit?: string;
    /**
     * Item price within the context of the order without separating cents. For example, $24.99 is represented `2499`.
     */
    price?: number;
    /**
     * Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.
     */
    priceTags?: PlaceOrderRequestBodyItemsPriceTags[];
    /**
     * The quantity of items of this specific SKU in the cart to be simulated.
     */
    quantity: number;
    /**
     * The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.
     */
    seller: string;
    /**
     * SKU unit multiplier.
     */
    unitMultiplier?: number;
}
export declare class PlaceOrderRequestBodyMarketingData extends SpeakeasyBase {
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
     * utmi_campaign (internal utm)
     */
    utmiCampaign?: string;
    /**
     * utmi_page (internal utm)
     */
    utmiPage?: string;
    /**
     * utmi_part (internal utm)
     */
    utmiPart?: string;
}
export declare class PlaceOrderRequestBodyPaymentDataGiftCards extends SpeakeasyBase {
    /**
     * Gift card balance.
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
    redemptionCode: string;
    /**
     * Gift card value.
     */
    value: number;
}
/**
 * Payment system validator.
 */
export declare class PlaceOrderRequestBodyPaymentDataPaymentSystemsValidator extends SpeakeasyBase {
    /**
     * Card code mask.
     */
    cardCodeMask?: string;
    /**
     * Card code regular expression.
     */
    cardCodeRegex?: string;
    /**
     * Validator mask.
     */
    mask?: string;
    regex?: string;
    /**
     * Weights.
     */
    weights?: number[];
}
export declare class PlaceOrderRequestBodyPaymentDataPaymentSystems extends SpeakeasyBase {
    /**
     * Description.
     */
    description?: string;
    /**
     * Payment group name.
     */
    groupName?: string;
    /**
     * Payment system ID.
     */
    id?: number;
    /**
     * Indicates whether it is custom.
     */
    isCustom?: boolean;
    /**
     * Payment system name.
     */
    name?: string;
    /**
     * Indicates whether a document is required.
     */
    requiresDocument?: boolean;
    /**
     * Indicates whether this payment system has been selected.
     */
    selected?: boolean;
    /**
     * String ID.
     */
    stringId?: string;
    /**
     * Template.
     */
    template?: string;
    /**
     * Payment system validator.
     */
    validator?: PlaceOrderRequestBodyPaymentDataPaymentSystemsValidator;
}
export declare class PlaceOrderRequestBodyPaymentDataPayments extends SpeakeasyBase {
    /**
     * Account ID.
     */
    accountId?: string;
    /**
     * Payment bin.
     */
    bin?: string;
    /**
     * Number of installments.
     */
    installments: number;
    /**
     * Payment system.
     */
    paymentSystem: string;
    /**
     * Reference value for calculating interest rates, in case it applies.
     */
    referenceValue: number;
    /**
     * Value including interest, in case it applies.
     */
    value: number;
}
/**
 * Payment infomation.
 */
export declare class PlaceOrderRequestBodyPaymentData extends SpeakeasyBase {
    /**
     * Array of gift card messages.
     */
    giftCardMessages?: any[];
    /**
     * Gift card information, if it applies to the order.
     */
    giftCards?: PlaceOrderRequestBodyPaymentDataGiftCards[];
    /**
     * Information on payment systems.
     */
    paymentSystems?: PlaceOrderRequestBodyPaymentDataPaymentSystems[];
    /**
     * Payment information.
     */
    payments: PlaceOrderRequestBodyPaymentDataPayments[];
    /**
     * Indicates whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"`
     */
    updateStatus?: string;
}
/**
 * Sales Associate information.
 */
export declare class PlaceOrderRequestBodySalesAssociateData extends SpeakeasyBase {
    /**
     * Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters.
     */
    salesAssociateId?: string;
}
/**
 * Shipping address.
 *
 * @remarks
 *
 *
For customers already in your data base, it is enough to send this object only with an `addressId`, which you may obtain from a [Cart simulation request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#cartsimulation), for example.
 */
export declare class PlaceOrderRequestBodyShippingDataAddress extends SpeakeasyBase {
    /**
     * Address ID.
     */
    addressId?: string;
    /**
     * Type of address. For example, `Residential` or `Pickup`, among others.
     */
    addressType?: string;
    /**
     * City of the shipping address.
     */
    city?: string;
    /**
     * Complement to the shipping address in case it applies.
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
     * Postal Code.
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
 * In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.
 */
export declare class PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow extends SpeakeasyBase {
    /**
     * Delivery window ending day and time in UTC.
     */
    endDateUtc?: string;
    /**
     * Delivery window list price.
     */
    lisPrice?: number;
    /**
     * Delivery window price.
     */
    price?: number;
    /**
     * Delivery window starting day and time in UTC.
     */
    startDateUtc?: string;
    /**
     * Delivery window tax.
     */
    tax?: number;
}
export declare class PlaceOrderRequestBodyShippingDataLogisticsInfo extends SpeakeasyBase {
    /**
     * In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.
     */
    deliveryWindow?: PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow;
    /**
     * Index of the item in the `items` array, starting from 0.
     */
    itemIndex: number;
    /**
     * Logistics reservation waiting time.
     */
    lockTTL?: string;
    /**
     * Shipping price for the item. Does not account for the whole order's shipping price.
     */
    price: number;
    /**
     * Selected shipping option
     */
    selectedSla: string;
    /**
     * Estimated time until delivery for the item.
     */
    shippingEstimate?: string;
}
/**
 * Shipping information.
 */
export declare class PlaceOrderRequestBodyShippingData extends SpeakeasyBase {
    /**
     * Shipping address.
     *
     * @remarks
     *
     *
  For customers already in your data base, it is enough to send this object only with an `addressId`, which you may obtain from a [Cart simulation request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#cartsimulation), for example.
     */
    address?: PlaceOrderRequestBodyShippingDataAddress;
    /**
     * Array of objects containing logistics information of each item.
     */
    logisticsInfo?: PlaceOrderRequestBodyShippingDataLogisticsInfo[];
    /**
     * Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"`
     */
    updateStatus?: string;
}
export declare class PlaceOrderRequestBody extends SpeakeasyBase {
    /**
     * Customer's profile information. The `email` functions as a customer's ID.
     *
     * @remarks
     *
     *
  For customers already in your database, sending only the email address is enough to register the order to the shopper’s existing account.
     *
     *
  > If the shopper exists in you database but is not logged in, sending other profile information along with the email will cause the platform to fail placing the order. This happens because this action is interpreted as an attempt to edit profile data, which is not possible unless the customer is logged in to the store.
     */
    clientProfileData: PlaceOrderRequestBodyClientProfileData;
    /**
     * Array of objects containing information on each of the order's items.
     */
    items: PlaceOrderRequestBodyItems[];
    marketingData?: PlaceOrderRequestBodyMarketingData;
    /**
     * Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)
     */
    openTextField?: string;
    /**
     * Payment infomation.
     */
    paymentData: PlaceOrderRequestBodyPaymentData;
    /**
     * Sales Associate information.
     */
    salesAssociateData?: PlaceOrderRequestBodySalesAssociateData;
    /**
     * Shipping information.
     */
    shippingData: PlaceOrderRequestBodyShippingData;
}
export declare class PlaceOrderRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: PlaceOrderRequestBody;
    /**
     * Trade Policy (Sales Channel) identification. This query can be used to create an order for a specific sales channel.
     */
    sc?: number;
}
/**
 * Customer's profile information.
 */
export declare class PlaceOrder200ApplicationJSONOrdersClientProfileData extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersItemMetadataItems extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersItemMetadata extends SpeakeasyBase {
    /**
     * List of objects containing metadata on each item in the order.
     */
    items?: PlaceOrder200ApplicationJSONOrdersItemMetadataItems[];
}
/**
 * Additional information.
 */
export declare class PlaceOrder200ApplicationJSONOrdersItemsAdditionalInfo extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersItemsBundleItems extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersItemsPriceDefinitionSellingPrices extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersItemsPriceDefinition extends SpeakeasyBase {
    /**
     * Item's calculated unitary selling price in cents.
     */
    calculatedSellingPrice?: number;
    /**
     * Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.
     */
    sellingPrices?: PlaceOrder200ApplicationJSONOrdersItemsPriceDefinitionSellingPrices[];
    /**
     * Total value for all units of the item in cents.
     */
    total?: number;
}
export declare class PlaceOrder200ApplicationJSONOrdersItemsPriceTags extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersItemsProductCategories extends SpeakeasyBase {
    /**
     * Product category corresponding to the ID in the field key.
     */
    id?: string;
}
export declare class PlaceOrder200ApplicationJSONOrdersItems extends SpeakeasyBase {
    /**
     * Additional information.
     */
    additionalInfo?: PlaceOrder200ApplicationJSONOrdersItemsAdditionalInfo;
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
    bundleItems?: PlaceOrder200ApplicationJSONOrdersItemsBundleItems[];
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
     * Measurement unit
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
    priceDefinition?: PlaceOrder200ApplicationJSONOrdersItemsPriceDefinition;
    /**
     * Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.
     */
    priceTags?: PlaceOrder200ApplicationJSONOrdersItemsPriceTags[];
    /**
     * Price expiration date and time.
     */
    priceValidUntil?: string;
    /**
     * Object, where each field is an ID from `productCategoryIds`.
     */
    productCategories?: PlaceOrder200ApplicationJSONOrdersItemsProductCategories;
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
     * Unique ID.
     */
    uniqueId?: string;
    /**
     * Unit multiplier
     */
    unitMultiplier?: number;
}
export declare class PlaceOrder200ApplicationJSONOrdersPaymentDataGiftCards extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersPaymentDataTransactionsPayments extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersPaymentDataTransactions extends SpeakeasyBase {
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
    payments?: PlaceOrder200ApplicationJSONOrdersPaymentDataTransactionsPayments[];
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
export declare class PlaceOrder200ApplicationJSONOrdersPaymentData extends SpeakeasyBase {
    /**
     * Gift card information, if it applies to the order.
     */
    giftCards?: PlaceOrder200ApplicationJSONOrdersPaymentDataGiftCards[];
    /**
     * Information on each transaction pertinent to the order.
     */
    transactions?: PlaceOrder200ApplicationJSONOrdersPaymentDataTransactions[];
}
/**
 * Information on rates and benefits that apply to the order.
 */
export declare class PlaceOrder200ApplicationJSONOrdersRatesAndBenefitsData extends SpeakeasyBase {
    /**
     * List with rates and benefits identifiers.
     */
    rateAndBenefitsIdentifiers?: string[];
    /**
     * List with rates and benefits teasers.
     */
    teaser?: string[];
}
export declare class PlaceOrder200ApplicationJSONOrdersSellers extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersShippingDataAddress extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersShippingDataAvailableAddresses extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfoDeliveryChannels extends SpeakeasyBase {
    /**
     * Delivery channel ID.
     */
    id?: string;
}
export declare class PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfoSlasDeliveryIds extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfoSlasPickupStoreInfoAddress extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfoSlasPickupStoreInfo extends SpeakeasyBase {
    /**
     * Additional information.
     */
    additionalInfo?: string;
    /**
     * Address information.
     */
    address?: PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfoSlasPickupStoreInfoAddress;
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
export declare class PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfoSlas extends SpeakeasyBase {
    /**
     * Delivery channel.
     */
    deliveryChannel?: string;
    /**
     * Information on each delivery ID.
     */
    deliveryIds?: PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfoSlasDeliveryIds[];
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
    pickupStoreInfo?: PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfoSlasPickupStoreInfo;
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
export declare class PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfo extends SpeakeasyBase {
    /**
     * Address ID.
     */
    addressId?: string;
    /**
     * List of available delivery channels.
     */
    deliveryChannels?: PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfoDeliveryChannels[];
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
    slas?: PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfoSlas[];
}
export declare class PlaceOrder200ApplicationJSONOrdersShippingDataSelectedAddresses extends SpeakeasyBase {
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
export declare class PlaceOrder200ApplicationJSONOrdersShippingData extends SpeakeasyBase {
    /**
     * Address information.
     */
    address?: PlaceOrder200ApplicationJSONOrdersShippingDataAddress;
    /**
     * Array with information on the available addresses for the order.
     */
    availableAddresses?: PlaceOrder200ApplicationJSONOrdersShippingDataAvailableAddresses[];
    /**
     * Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.
     */
    logisticsInfo?: PlaceOrder200ApplicationJSONOrdersShippingDataLogisticsInfo[];
    /**
     * Array with information on the selected addresses for the order.
     */
    selectedAddresses?: PlaceOrder200ApplicationJSONOrdersShippingDataSelectedAddresses[];
}
export declare class PlaceOrder200ApplicationJSONOrdersTotals extends SpeakeasyBase {
    /**
     * Total ID.
     */
    id?: string;
    /**
     * Total name.
     */
    name?: string;
    /**
     * Total value.
     */
    value?: number;
}
export declare class PlaceOrder200ApplicationJSONOrders extends SpeakeasyBase {
    /**
     * Indicates whether cancelation is allowed.
     */
    allowCancelation?: boolean;
    /**
     * Indicates whether seller changing is allowed.
     */
    allowChangeSeller?: boolean;
    /**
     * Indicates whether edition is allowed.
     */
    allowEdition?: boolean;
    /**
     * Checked in pickuppoint.
     */
    checkedInPickupPointId?: string;
    /**
     * Customer's profile information.
     */
    clientProfileData?: PlaceOrder200ApplicationJSONOrdersClientProfileData;
    /**
     * Creation date.
     */
    creationDate?: string;
    /**
     * Follow up email address.
     */
    followUpEmail?: string;
    /**
     * Host name.
     */
    hostName?: string;
    /**
     * Indicates whether order is checked in.
     */
    isCheckedIn?: boolean;
    /**
     * Indicates whether order is completed.
     */
    isCompleted?: boolean;
    /**
     * Indicates whether user data is visible.
     */
    isUserDataVisible?: boolean;
    /**
     * Item metadata.
     */
    itemMetadata?: PlaceOrder200ApplicationJSONOrdersItemMetadata;
    /**
     * Information on each item in the order.
     */
    items?: PlaceOrder200ApplicationJSONOrdersItems[];
    /**
     * Last change.
     */
    lastChange?: string;
    /**
     * Merchant name.
     */
    merchantName?: string;
    /**
     * `orderForm` creation date.
     */
    orderFormCreationDate?: string;
    /**
     * Order group. Orders that involve different sellers are split into different orders of a same order group.
     */
    orderGroup?: string;
    /**
     * ID of the order in the Order Management System (OMS).
     */
    orderId?: string;
    /**
     * Information on the order's payment.
     */
    paymentData?: PlaceOrder200ApplicationJSONOrdersPaymentData;
    /**
     * Information on rates and benefits that apply to the order.
     */
    ratesAndBenefitsData?: PlaceOrder200ApplicationJSONOrdersRatesAndBenefitsData;
    /**
     * Rounding error.
     */
    roundingError?: number;
    /**
     * Sales Associate (Seller) identification code.
     */
    salesAssociateId?: string;
    /**
     * Sales channel.
     */
    salesChannel?: string;
    /**
     * ID of the order in the seller.
     */
    sellerOrderId?: string;
    /**
     * Information on each seller.
     */
    sellers?: PlaceOrder200ApplicationJSONOrdersSellers[];
    /**
     * Shipping information pertinent to the order.
     */
    shippingData?: PlaceOrder200ApplicationJSONOrdersShippingData;
    /**
     * State.
     */
    state?: string;
    /**
     * Store ID.
     */
    storeId?: string;
    /**
     * Time zone creation date.
     */
    timeZoneCreationDate?: string;
    /**
     * Time zone last change.
     */
    timeZoneLastChange?: string;
    /**
     * Information on order totals.
     */
    totals?: PlaceOrder200ApplicationJSONOrdersTotals[];
    /**
     * User type.
     */
    userType?: string;
    /**
     * Value of the order.
     */
    value?: number;
}
export declare class PlaceOrder200ApplicationJSONTransactionDataMerchantTransactionsPayments extends SpeakeasyBase {
    /**
     * Account ID.
     */
    accountId?: string;
    /**
     * Payment bin.
     */
    bin?: string;
    /**
     * Gift card ID.
     */
    giftCardId?: string;
    /**
     * Gift card provider.
     */
    giftCardProvider?: string;
    /**
     * Gift card redemption code.
     */
    giftCardRedemptionCode?: string;
    /**
     * Payment system.
     */
    paymentSystem?: string;
    /**
     * Reference value over which interests may be applied.
     */
    referenceValue?: number;
    /**
     * Token ID.
     */
    tokenId?: string;
    /**
     * Total value to be paid in this payment.
     */
    value?: number;
}
export declare class PlaceOrder200ApplicationJSONTransactionDataMerchantTransactions extends SpeakeasyBase {
    /**
     * ID of the seller.
     */
    id?: string;
    /**
     * Name of the merchant responsible for the sale.
     */
    merchantName?: string;
    /**
     * Information on each payment pertinent to the transaction.
     */
    payments?: PlaceOrder200ApplicationJSONTransactionDataMerchantTransactionsPayments[];
    /**
     * ID of the transaction in the platform.
     */
    transactionId?: string;
}
/**
 * Information on each transaction pertinent to the order placed.
 */
export declare class PlaceOrder200ApplicationJSONTransactionData extends SpeakeasyBase {
    /**
     * Template of the gateway callback path, which may later be used to send information about the transaction.
     */
    gatewayCallbackTemplatePath?: string;
    /**
     * Information on each merchant transaction.
     */
    merchantTransactions?: PlaceOrder200ApplicationJSONTransactionDataMerchantTransactions[];
    /**
     * Receiver URI.
     */
    receiverUri?: string;
}
/**
 * OK
 */
export declare class PlaceOrder200ApplicationJSON extends SpeakeasyBase {
    /**
     * This is `null` since this request does not depend on any previously existing orderForm information in the platform.
     */
    orderForm?: string;
    /**
     * Information on each of the orders created.
     */
    orders?: PlaceOrder200ApplicationJSONOrders[];
    /**
     * Information on each transaction pertinent to the order placed.
     */
    transactionData?: PlaceOrder200ApplicationJSONTransactionData;
}
export declare class PlaceOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    placeOrder200ApplicationJSONObject?: PlaceOrder200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
