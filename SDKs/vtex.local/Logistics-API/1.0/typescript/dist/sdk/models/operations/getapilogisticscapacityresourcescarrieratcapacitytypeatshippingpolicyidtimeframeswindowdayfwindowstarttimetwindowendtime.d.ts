import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    /**
     * How the delivery capacity is measured as defined in the shipping policy. Capacity can be measured by maximum number of orders (`"orders_quantity"`) or SKUs (`"skus_quantity"`).
     */
    capacityType: string;
    /**
     * ID of shipping policy to search.
     */
    shippingPolicyId: string;
    /**
     * Day of the specific scheduled delivery window to be consulted for reservations.
     */
    windowDay: string;
    /**
     * End time of specific scheduled delivery window to be consulted for reservations.
     */
    windowEndTime: string;
    /**
     * Start time of specific scheduled delivery window to be consulted for reservations.
     */
    windowStartTime: string;
}
export declare class GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
