import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllTaxesRequest extends SpeakeasyBase {
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
export declare class GetAllTaxes200ApplicationJSONLimitConfiguration extends SpeakeasyBase {
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
export declare class GetAllTaxes200ApplicationJSON extends SpeakeasyBase {
    /**
     * Archived items.
     */
    archivedItems?: string[];
    /**
     * Disabled items.
     */
    disabledItems?: string[];
    /**
     * Array with taxes.
     */
    items?: shared.GetTaxes[];
    /**
     * Limit configuration.
     */
    limitConfiguration?: GetAllTaxes200ApplicationJSONLimitConfiguration;
}
export declare class GetAllTaxesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getAllTaxes200ApplicationJSONObject?: GetAllTaxes200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
