import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Object containing business hour configuration.
 */
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettingsCarrierBusinessHours extends SpeakeasyBase {
    /**
     * Closing time.
     */
    closingTime: string;
    /**
     * Day of the week, from `0` (sunday) to `6` (saturday).
     */
    dayOfWeek: number;
    /**
     * Opening time.
     */
    openingTime: string;
}
/**
 * Business hour configuration.
 */
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettings extends SpeakeasyBase {
    /**
     * Array containing objects with business hour configurations.
     */
    carrierBusinessHours: PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettingsCarrierBusinessHours[];
    /**
     * Select whether the shipping policy allows deliveries outside business hours.
     */
    isOpenOutsideBusinessHours: boolean;
}
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyCarrierSchedule extends SpeakeasyBase {
    /**
     * Day of the week, from `0` (sunday) to `6` (saturday).
     */
    dayOfWeek?: number;
    /**
     * Time limit.
     */
    timeLimit?: string;
}
/**
 * Measure that accounts package's volume, and not only weight.
 */
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyCubicWeightSettings extends SpeakeasyBase {
    minimunAcceptableVolumetricWeight: number;
    /**
     * Factor that will be used on the cubic weight calculation.
     */
    volumetricFactor: number;
}
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity extends SpeakeasyBase {
    /**
     * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
     */
    capacityType: string;
    /**
     * Maximum number of orders or SKUs that the store is capable of fulfilling.
     */
    maxValue: number;
}
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges extends SpeakeasyBase {
    /**
     * Sets maximum delivery capacity for a given reservation window for scheduled delivery.
     */
    deliveryCapacity?: PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[];
    /**
     * End time for day of the week.
     */
    endTime: string;
    /**
     * List price for day of the week.
     */
    listPrice: number;
    /**
     * Start time for day of the week.
     */
    startTime: string;
}
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery extends SpeakeasyBase {
    /**
     * Day of the week, from `0` (sunday) to `6` (saturday).
     */
    dayOfWeek: number;
    /**
     * Reservation windows for scheduled delivery.
     */
    deliveryRanges: PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges[];
}
/**
 * Settings for the Scheduled Delivery feature.
 */
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettings extends SpeakeasyBase {
    /**
     * Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.
     */
    dayOfWeekForDelivery: PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery[];
    /**
     * Range of days available within a delivery window, for the customer to choose the scheduled delivery. For example, if the configured maxRangeDelivery is equal 7, and the customer buys something on a Tuesday, the options for scheduled delivery will be shown until the following Tuesday (7 days from the purchase day). If no options are available within the maxRangeDelivery set, this shipping policy won't be shown on the checkout.
     */
    maxRangeDelivery: number;
    /**
     * Select the Scheduled Delivery configuration.
     */
    useDeliverySchedule: boolean;
}
/**
 * Object containing attributes of maximum dimension permitted by the shipping policy (carrier).
 */
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyMaxDimension extends SpeakeasyBase {
    /**
     * Largest measure of the package.
     */
    largestMeasure: number;
    /**
     * Sum of all maximum measures of the package.
     */
    maxMeasureSum: number;
}
/**
 * Configurations for the [modal](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125), which is the attachement of a specific product to a carrier specialized in delivering that type of product.
 */
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyModalSettings extends SpeakeasyBase {
    /**
     * Type of special freight.
     */
    modals: any[];
    /**
     * When set as `true`, the modal's configurations will apply only for items with a defined modal.
     */
    useOnlyItemsWithDefinedModal: boolean;
}
/**
 * Configuration for Pickup Points.
 */
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyPickupPointsSettings extends SpeakeasyBase {
    /**
     * Insert the IDs for pickup points previously configured in your store.
     */
    pickupPointIds: any[];
    /**
     * Insert the tags for pickup points previously configured in your store.
     */
    pickupPointTags: any[];
    /**
     * Sellers that will be associated with the [pickup points](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) of the shipping policy being created.
     */
    sellers: any[];
}
/**
 * If the shipping policy includes deliveries on weekends and holidays.
 */
export declare class PostApiLogisticsPvtShippingPoliciesRequestBodyWeekendAndHolidays extends SpeakeasyBase {
    /**
     * Does the shipping policy allow deliveries onholidays?
     */
    holiday: boolean;
    /**
     * Does the shipping policy allow deliveries on saturdays?
     */
    saturday: boolean;
    /**
     * Does the shipping policy allow deliveries on sundays?
     */
    sunday: boolean;
}
export declare class PostApiLogisticsPvtShippingPoliciesRequestBody extends SpeakeasyBase {
    /**
     * Business hour configuration.
     */
    businessHourSettings: PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettings;
    /**
     * Schedule sent by the carrier, to configure Shipping policy
     */
    carrierSchedule?: PostApiLogisticsPvtShippingPoliciesRequestBodyCarrierSchedule[];
    /**
     * Measure that accounts package's volume, and not only weight.
     */
    cubicWeightSettings: PostApiLogisticsPvtShippingPoliciesRequestBodyCubicWeightSettings;
    /**
     * Settings for the Scheduled Delivery feature.
     */
    deliveryScheduleSettings: PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettings;
    /**
     * ID of the shipping policy.
     */
    id: string;
    /**
     * Indicates whether shipping policy is active or not.
     */
    isActive: boolean;
    /**
     * Object containing attributes of maximum dimension permitted by the shipping policy (carrier).
     */
    maxDimension: PostApiLogisticsPvtShippingPoliciesRequestBodyMaxDimension;
    /**
     * Maximum value accepted by the carrier, to realize the shipping.
     */
    maximumValueAceptable: number;
    /**
     * Minimum value accepted by the carrier, to realize the shipping.
     */
    minimumValueAceptable: number;
    /**
     * Configurations for the [modal](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125), which is the attachement of a specific product to a carrier specialized in delivering that type of product.
     */
    modalSettings: PostApiLogisticsPvtShippingPoliciesRequestBodyModalSettings;
    /**
     * Name of the shipping policy.
     */
    name: string;
    /**
     * Capacity of your store's logistics of shipment, determines number of items permitted per shipment.
     */
    numberOfItemsPerShipment: number;
    /**
     * Configuration for Pickup Points.
     */
    pickupPointsSettings: PostApiLogisticsPvtShippingPoliciesRequestBodyPickupPointsSettings;
    /**
     * Type of shipping available for this shipping policy (carrier). Options shown on freight simulation
     */
    shippingMethod: string;
    /**
     * If the shipping policy includes deliveries on weekends and holidays.
     */
    weekendAndHolidays: PostApiLogisticsPvtShippingPoliciesRequestBodyWeekendAndHolidays;
}
export declare class PostApiLogisticsPvtShippingPoliciesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    requestBody?: PostApiLogisticsPvtShippingPoliciesRequestBody;
}
export declare class PostApiLogisticsPvtShippingPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
