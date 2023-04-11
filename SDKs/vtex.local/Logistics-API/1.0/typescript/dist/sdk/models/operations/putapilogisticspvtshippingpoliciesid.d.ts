import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity extends SpeakeasyBase {
    /**
     * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
     */
    capacityType: string;
    /**
     * Maximum number of orders or SKUs that the store is capable of fulfilling.
     */
    maxValue: number;
}
export declare class PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges extends SpeakeasyBase {
    /**
     * Sets maximum delivery capacity for a given reservation window for scheduled delivery.
     */
    deliveryCapacity?: PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[];
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
export declare class PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery extends SpeakeasyBase {
    /**
     * Day of the week, from `0` (sunday) to `6` (saturday).
     */
    dayOfWeek: number;
    /**
     * Reservation windows for scheduled delivery.
     */
    deliveryRanges: PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges[];
}
/**
 * Settings for the Scheduled Delivery feature.
 */
export declare class PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettings extends SpeakeasyBase {
    /**
     * Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.
     */
    dayOfWeekForDelivery: PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery[];
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
export declare class PutApiLogisticsPvtShippingPoliciesIdRequestBodyMaxDimension extends SpeakeasyBase {
    /**
     * Largest measure of the package.
     */
    largestMeasure: number;
    /**
     * Sum of all maximum measures of the package.
     */
    maxMeasureSum: number;
}
export declare class PutApiLogisticsPvtShippingPoliciesIdRequestBody extends SpeakeasyBase {
    /**
     * If the shipping policy (carrier) delivers on weekends
     */
    deliveryOnWeekends: boolean;
    /**
     * Settings for the Scheduled Delivery feature.
     */
    deliveryScheduleSettings?: PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettings;
    /**
     * If the shipping policy is active or not.
     */
    isActive: boolean;
    /**
     * Object containing attributes of maximum dimension permitted by the shipping policy (carrier).
     */
    maxDimension: PutApiLogisticsPvtShippingPoliciesIdRequestBodyMaxDimension;
    /**
     * Name of the shipping policy
     */
    name: string;
    /**
     * Type of shipping available for this shipping policy (carrier). Options shown on freight simulation.
     */
    shippingMethod: string;
}
export declare class PutApiLogisticsPvtShippingPoliciesIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    requestBody?: PutApiLogisticsPvtShippingPoliciesIdRequestBody;
    /**
     * Shipping policy's ID
     */
    id: string;
}
export declare class PutApiLogisticsPvtShippingPoliciesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
