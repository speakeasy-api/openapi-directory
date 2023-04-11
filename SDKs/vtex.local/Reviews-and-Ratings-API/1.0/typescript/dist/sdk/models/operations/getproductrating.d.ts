import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetProductRatingRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Product ID.
     */
    productId: string;
}
/**
 * OK
 */
export declare class GetProductRating200ApplicationJSON extends SpeakeasyBase {
    /**
     * Avarage rating of the product.
     */
    average?: number;
    /**
     * Total amount of ranting of the product.
     */
    totalCount?: number;
}
export declare class GetProductRatingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getProductRating200ApplicationJSONObject?: GetProductRating200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
