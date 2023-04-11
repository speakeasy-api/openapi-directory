import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Request body
 */
export declare class InsertSKUBindingRequestBody extends SpeakeasyBase {
    /**
     * Defines if the SKU binding is active.
     */
    isActive: boolean;
    /**
     * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
     */
    sellerId: string;
    /**
     * SKU seller ID.
     */
    sellerStockKeepingUnitId: string;
    /**
     * SKU ID in the marketplace.
     */
    stockKeepingUnitId: number;
}
export declare class InsertSKUBindingRequest extends SpeakeasyBase {
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
    requestBody: InsertSKUBindingRequestBody;
}
export declare class InsertSKUBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
