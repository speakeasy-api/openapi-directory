import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetbySkuIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * SKU's unique identifier in the marketplace.
     */
    skuId: string;
}
/**
 * Object with information about an SKU Binding.
 */
export declare class GetbySkuId200ApplicationJSON extends SpeakeasyBase {
    /**
     * SKU Binding ID.
     */
    id?: number;
    /**
     * Defines if the SKU binding is active.
     */
    isActive?: boolean;
    /**
     * Date when the SKU binding was updated for the last time, in UTC format.
     */
    lastUpdateDate?: string;
    /**
     * Sales policy ID.
     */
    salesPolicy?: number;
    /**
     * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
     */
    sellerId?: string;
    /**
     * SKU seller ID.
     */
    sellerSkuId?: string;
    /**
     * SKU ID in the VTEX marketplace.
     */
    stockKeepingUnitId?: number;
}
export declare class GetbySkuIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getbySkuId200ApplicationJSONObjects?: GetbySkuId200ApplicationJSON[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
