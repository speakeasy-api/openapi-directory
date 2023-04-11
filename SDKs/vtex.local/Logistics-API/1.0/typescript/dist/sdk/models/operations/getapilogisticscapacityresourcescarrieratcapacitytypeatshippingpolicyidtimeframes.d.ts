import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesRequest extends SpeakeasyBase {
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
     * End date of time range.
     */
    rangeEnd: string;
    /**
     * Starting date of time range
     */
    rangeStart: string;
    /**
     * ID of shipping policy to search.
     */
    shippingPolicyId: string;
}
export declare class GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
