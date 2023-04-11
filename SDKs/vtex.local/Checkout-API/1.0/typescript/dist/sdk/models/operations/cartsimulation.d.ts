import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CartSimulationRequestBodyItems extends SpeakeasyBase {
    /**
     * The SKU ID.
     */
    id?: string;
    /**
     * The quantity of items of this specific SKU in the cart to be simulated.
     */
    quantity?: number;
    /**
     * The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.
     */
    seller?: string;
}
export declare class CartSimulationRequestBody extends SpeakeasyBase {
    /**
     * Three letter ISO code of the country of the shipping address. This value must be sent along with the `postalCode` or `geoCoordinates` values.
     */
    country?: string;
    /**
     * Array containing two floats with geocoordinates, first longitude, then latitude.
     */
    geoCoordinates?: number[];
    /**
     * Array containing information about the SKUs inside the cart to be simulated.
     */
    items?: CartSimulationRequestBodyItems[];
    /**
     * Postal code.
     */
    postalCode?: string;
}
export declare class CartSimulationRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: CartSimulationRequestBody;
    /**
     * This parameter defines which promotions apply to the simulation. Use `0` for simulations at cart stage, which means all promotions apply. In case of window simulation use `1`, which indicates promotions that apply nominal discounts over the total purchase value shouldn't be considered on the simulation.
     *
     * @remarks
     *
     *
  Note that if this not sent, the parameter is `1`.
     */
    rnbBehavior?: number;
    /**
     * Trade Policy (Sales Channel) identification.
     */
    sc?: number;
}
export declare class CartSimulation200ApplicationJSONItemsPriceDefinitionSellingPrices extends SpeakeasyBase {
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
export declare class CartSimulation200ApplicationJSONItemsPriceDefinition extends SpeakeasyBase {
    /**
     * Item's calculated unitary selling price in cents.
     */
    calculatedSellingPrice?: number;
    /**
     * Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.
     */
    sellingPrices?: CartSimulation200ApplicationJSONItemsPriceDefinitionSellingPrices[];
    /**
     * Total value for all units of the item in cents.
     */
    total?: number;
}
export declare class CartSimulation200ApplicationJSONItemsPriceTags extends SpeakeasyBase {
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
     * Identification of the responsible for the price tag.
     */
    owner?: string;
    /**
     * Price tag raw value.
     */
    rawValue?: number;
    /**
     * Price tag value.
     */
    value?: number;
}
export declare class CartSimulation200ApplicationJSONItems extends SpeakeasyBase {
    /**
     * Availability.
     */
    availability?: string;
    /**
     * ID of the item.
     */
    id?: string;
    /**
     * List price in cents.
     */
    listPrice?: number;
    /**
     * Measurement unit.
     */
    measurementUnit?: string;
    /**
     * Array containing offering information.
     */
    offerings?: any[];
    /**
     * Parent assembly binding.
     */
    parentAssemblyBinding?: string;
    /**
     * Parent item index.
     */
    parentItemIndex?: number;
    /**
     * Price in cents.
     */
    price?: number;
    /**
     * Price information for all units of a specific item.
     */
    priceDefinition?: CartSimulation200ApplicationJSONItemsPriceDefinition;
    /**
     * Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.
     */
    priceTags?: CartSimulation200ApplicationJSONItemsPriceTags[];
    /**
     * Price expiration date and time.
     */
    priceValidUntil?: string;
    /**
     * The quantity of the item the cart.
     */
    quantity?: number;
    /**
     * Request index information.
     */
    requestIndex?: number;
    /**
     * Reward value in cents.
     */
    rewardValue?: number;
    /**
     * The seller responsible for the SKU.
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
     * Tax value in cents.
     */
    tax?: number;
    /**
     * Unit multiplier.
     */
    unitMultiplier?: number;
}
export declare class CartSimulation200ApplicationJSONLogisticsInfoDeliveryChannels extends SpeakeasyBase {
    /**
     * Delivery channel ID.
     */
    id?: string;
}
export declare class CartSimulation200ApplicationJSONLogisticsInfoItemMetadataItems extends SpeakeasyBase {
    /**
     * Assembly options information.
     */
    assemblyOptions?: any[];
    /**
     * Item ID.
     */
    id?: string;
    /**
     * Seller.
     */
    seller?: string;
}
/**
 * Item metadata.
 */
export declare class CartSimulation200ApplicationJSONLogisticsInfoItemMetadata extends SpeakeasyBase {
    /**
     * List of objects containing metadata on each item in the order.
     */
    items?: CartSimulation200ApplicationJSONLogisticsInfoItemMetadataItems[];
}
/**
 * This object contains information about the delivery window available to the shopper.
 */
export declare class CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindows extends SpeakeasyBase {
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
export declare class CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIds extends SpeakeasyBase {
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
 * In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.
 */
export declare class CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindow extends SpeakeasyBase {
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
/**
 * Information on the pickup store.
 */
export declare class CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfo extends SpeakeasyBase {
    /**
     * Additional information.
     */
    additionalInfo?: string;
    /**
     * Address information.
     */
    address?: Record<string, any>;
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
export declare class CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlas extends SpeakeasyBase {
    /**
     * This object contains information about the delivery window available to the shopper.
     */
    availableDeliveryWindows?: CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindows;
    /**
     * Delivery channel.
     */
    deliveryChannel?: string;
    /**
     * Information on each delivery ID.
     */
    deliveryIds?: CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIds[];
    /**
     * In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.
     */
    deliveryWindow?: CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindow;
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
    pickupStoreInfo?: CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfo;
    /**
     * Polygon name.
     */
    polygonName?: string;
    /**
     * Price in cents.
     */
    price?: number;
    /**
     * Shipping estimate. For instance, "three business days" will be represented as `3bd`.
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
     * Transit time. For instance, "three business days" is represented as `3bd`.
     */
    transitTime?: string;
}
export declare class CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditions extends SpeakeasyBase {
    /**
     * Item ID.
     */
    id?: string;
    /**
     * List price in cents.
     */
    listPrice?: number;
    /**
     * Price in cents.
     */
    price?: number;
    /**
     * Seller.
     */
    seller?: string;
    /**
     * Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.
     */
    sellerChain?: any[];
    /**
     * Information on available SLAs.
     */
    slas?: CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlas[];
}
/**
 * Purchase conditions information.
 */
export declare class CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditions extends SpeakeasyBase {
    /**
     * List of objects containing purchase condition information on each item in the order.
     */
    itemPurchaseConditions?: CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditionsItemPurchaseConditions[];
}
/**
 * This object contains information about the delivery window available to the shopper.
 */
export declare class CartSimulation200ApplicationJSONLogisticsInfoSlasAvailableDeliveryWindows extends SpeakeasyBase {
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
export declare class CartSimulation200ApplicationJSONLogisticsInfoSlasDeliveryIds extends SpeakeasyBase {
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
 * In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.
 */
export declare class CartSimulation200ApplicationJSONLogisticsInfoSlasDeliveryWindow extends SpeakeasyBase {
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
/**
 * Information on the pickup store.
 */
export declare class CartSimulation200ApplicationJSONLogisticsInfoSlasPickupStoreInfo extends SpeakeasyBase {
    /**
     * Additional information.
     */
    additionalInfo?: string;
    /**
     * Address information.
     */
    address?: Record<string, any>;
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
export declare class CartSimulation200ApplicationJSONLogisticsInfoSlas extends SpeakeasyBase {
    /**
     * This object contains information about the delivery window available to the shopper.
     */
    availableDeliveryWindows?: CartSimulation200ApplicationJSONLogisticsInfoSlasAvailableDeliveryWindows;
    /**
     * Delivery channel.
     */
    deliveryChannel?: string;
    /**
     * Information on each delivery ID.
     */
    deliveryIds?: CartSimulation200ApplicationJSONLogisticsInfoSlasDeliveryIds[];
    /**
     * In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.
     */
    deliveryWindow?: CartSimulation200ApplicationJSONLogisticsInfoSlasDeliveryWindow;
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
    pickupStoreInfo?: CartSimulation200ApplicationJSONLogisticsInfoSlasPickupStoreInfo;
    /**
     * Polygon name.
     */
    polygonName?: string;
    /**
     * Price in cents.
     */
    price?: number;
    /**
     * Shipping estimate. For instance, "three business days" will be represented as `3bd`.
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
     * Transit time. For instance, "three business days" is represented as `3bd`.
     */
    transitTime?: string;
}
export declare class CartSimulation200ApplicationJSONLogisticsInfoTotals extends SpeakeasyBase {
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
export declare class CartSimulation200ApplicationJSONLogisticsInfo extends SpeakeasyBase {
    /**
     * Address ID.
     */
    addressId?: string;
    /**
     * List of available delivery channels.
     */
    deliveryChannels?: CartSimulation200ApplicationJSONLogisticsInfoDeliveryChannels[];
    /**
     * Index of item in items array.
     */
    itemIndex?: number;
    /**
     * Item metadata.
     */
    itemMetadata?: CartSimulation200ApplicationJSONLogisticsInfoItemMetadata;
    /**
     * Array containing an object for each message generated by our servers while processing the request.
     */
    messages?: any[];
    /**
     * Array containing pickup points information.
     */
    pickupPoints?: any[];
    /**
     * Purchase conditions information.
     */
    purchaseConditions?: CartSimulation200ApplicationJSONLogisticsInfoPurchaseConditions;
    /**
     * Quantity.
     */
    quantity?: number;
    /**
     * Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`.
     */
    selectedDeliveryChannel?: string;
    /**
     * Selected SLA. For example, `"normal"` or `"express"`.
     */
    selectedSla?: string;
    /**
     * List of countries that the item may be shipped to.
     */
    shipsTo?: any[];
    /**
     * Information on available SLAs.
     */
    slas?: CartSimulation200ApplicationJSONLogisticsInfoSlas[];
    /**
     * Subscription information.
     */
    subscriptionData?: Record<string, any>;
    /**
     * Information on order totals.
     */
    totals?: CartSimulation200ApplicationJSONLogisticsInfoTotals[];
}
export declare class CartSimulation200ApplicationJSONPaymentDataPaymentSystems extends SpeakeasyBase {
    /**
     * Availability of payment.
     */
    availablePayments?: string;
    /**
     * Description.
     */
    description?: string;
    /**
     * Indicates whether a document is shown.
     */
    displayDocument?: boolean;
    /**
     * Payment due date.
     */
    dueDate?: string;
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
     * Indicates whether a authentication is required.
     */
    requiresAuthentication?: boolean;
    /**
     * Indicates whether a document is required.
     */
    requiresDocument?: boolean;
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
    validator?: Record<string, any>;
}
/**
 * Payment data information.
 */
export declare class CartSimulation200ApplicationJSONPaymentData extends SpeakeasyBase {
    /**
     * Available accounts.
     */
    availableAccounts?: any[];
    /**
     * Available associations.
     */
    availableAssociations?: Record<string, any>;
    /**
     * Available tokens.
     */
    availableTokens?: any[];
    /**
     * Array of gift card messages.
     */
    giftCardMessages?: any[];
    /**
     * Gift card information, if it applies to the order.
     */
    giftCards?: any[];
    /**
     * Installment options information.
     */
    installmentOptions?: any[];
    /**
     * Information on payment systems.
     */
    paymentSystems?: CartSimulation200ApplicationJSONPaymentDataPaymentSystems[];
    /**
     * Information on each payment.
     */
    payments?: any[];
}
/**
 * Information on rates and benefits that apply to the order.
 */
export declare class CartSimulation200ApplicationJSONRatesAndBenefitsData extends SpeakeasyBase {
    /**
     * List with rates and benefits identifiers.
     */
    rateAndBenefitsIdentifiers?: any[];
    /**
     * List with rates and benefits teasers.
     */
    teaser?: any[];
}
/**
 * OK
 */
export declare class CartSimulation200ApplicationJSON extends SpeakeasyBase {
    /**
     * Three letter ISO code of the country of the shipping address.
     */
    country?: string;
    /**
     * Information on each item in the cart.
     */
    items?: CartSimulation200ApplicationJSONItems[];
    /**
     * Array with logistics information on each item of the `items` array in the `orderForm`.
     */
    logisticsInfo?: CartSimulation200ApplicationJSONLogisticsInfo[];
    /**
     * Object containing promotion data such as coupon tracking information and internal or external UTMs.
     */
    marketingData?: Record<string, any>;
    /**
     * Payment data information.
     */
    paymentData?: CartSimulation200ApplicationJSONPaymentData;
    /**
     * Postal Code.
     */
    postalCode?: string;
    /**
     * Information on rates and benefits that apply to the order.
     */
    ratesAndBenefitsData?: CartSimulation200ApplicationJSONRatesAndBenefitsData;
    /**
     * Array containing the data of the item selected as a gift.
     */
    selectableGifts?: any[];
}
export declare class CartSimulationResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cartSimulation200ApplicationJSONObject?: CartSimulation200ApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
