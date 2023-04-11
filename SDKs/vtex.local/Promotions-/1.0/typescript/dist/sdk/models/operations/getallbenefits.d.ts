import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllBenefitsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
}
/**
 * Limit configuration.
 */
export declare class GetAllBenefits200ApplicationJSONLimitConfiguration extends SpeakeasyBase {
    /**
     * Actives count.
     */
    activesCount?: number;
    /**
     * Limit.
     */
    limit?: number;
}
/**
 * Limit configuration max price.
 */
export declare class GetAllBenefits200ApplicationJSONLimitConfigurationMaxPrice extends SpeakeasyBase {
    /**
     * Actives count.
     */
    activesCount?: number;
    /**
     * Limit.
     */
    limit?: number;
}
/**
 * OK
 */
export declare class GetAllBenefits200ApplicationJSON extends SpeakeasyBase {
    /**
     * Archived items.
     */
    archivedItems?: string[];
    /**
     * Disabled items.
     */
    disabledItems?: any[];
    /**
     * Array with promotions.
     */
    items?: shared.GetPromotions[];
    /**
     * Limit configuration.
     */
    limitConfiguration?: GetAllBenefits200ApplicationJSONLimitConfiguration;
    /**
     * Limit configuration max price.
     */
    limitConfigurationMaxPrice?: GetAllBenefits200ApplicationJSONLimitConfigurationMaxPrice;
}
export declare class GetAllBenefitsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getAllBenefits200ApplicationJSONObject?: GetAllBenefits200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
