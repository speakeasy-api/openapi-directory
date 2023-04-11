import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetaccountconfigRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
     */
    accountName: string;
}
/**
 * OK
 */
export declare class Getaccountconfig200ApplicationJSON extends SpeakeasyBase {
    /**
     * This field determines the type of approval configuration applied to SKUs received from a seller.
     */
    matchFlux?: string;
    /**
     * All Matchers configured on the marketplace, and their respective details.
     */
    matchers?: any[];
    /**
     * Items and products.
     */
    rules?: Record<string, any>;
    /**
     * Matcher scores for approving and rejecting SKUs received from sellers.
     */
    score?: Record<string, any>;
    /**
     * Mapping of product and SKU specifications, per seller.
     */
    specificationsMapping?: any[];
}
export declare class GetaccountconfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getaccountconfig200ApplicationJSONObject?: Getaccountconfig200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
