import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Request body
 */
export declare class BindtoanotherskuRequestBody extends SpeakeasyBase {
    /**
     * SKU ID in the marketplace.
     */
    stockKeepingUnitId: number;
}
export declare class BindtoanotherskuRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Request body
     */
    requestBody?: BindtoanotherskuRequestBody;
    /**
     * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
     */
    sellerId: string;
    /**
     * SKU ID in the seller's store.
     */
    sellerSkuId: string;
}
export declare class BindtoanotherskuResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
