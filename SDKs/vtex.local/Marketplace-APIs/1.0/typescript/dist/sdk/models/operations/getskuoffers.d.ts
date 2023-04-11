import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSKUoffersRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the VTEX account. Used as part of the URL.
     */
    accountName: string;
    /**
     * Environment to use. Used as part of the URL.
     */
    environment: string;
    /**
     * A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product, such as price and inventory notifications.
     */
    productId: string;
    /**
     * A string that identifies the seller's SKU. This is the ID that the marketplace will use for all references to this SKU, such as price and inventory notifications.
     */
    skuId: string;
}
export declare class GetSKUoffersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
