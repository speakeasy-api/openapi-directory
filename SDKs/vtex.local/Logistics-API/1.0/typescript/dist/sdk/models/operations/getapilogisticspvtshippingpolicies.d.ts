import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiLogisticsPvtShippingPoliciesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    /**
     * Desired number of pages to retrieve information from your Shipping Policies.
     */
    page: string;
    /**
     * Desired number of items per page, to retrieve information from your Shipping Policies.
     */
    perPage: string;
}
export declare class GetApiLogisticsPvtShippingPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
