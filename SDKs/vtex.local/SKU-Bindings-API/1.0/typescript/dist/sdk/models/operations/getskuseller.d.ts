import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSKUsellerRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
     */
    sellerId: string;
    /**
     * SKU ID in the seller's store.
     */
    sellerSkuId: string;
}
/**
 * OK
 */
export declare class GetSKUseller200ApplicationJSON extends SpeakeasyBase {
    /**
     * Defines if the SKU binding is active.
     */
    isActive: boolean;
    /**
     * Defines if the seller is persisted.
     */
    isPersisted: boolean;
    /**
     * Defines if the seller is removed.
     */
    isRemoved: boolean;
    /**
     * Date when an SKU binding update was requested for the last time, in UTC format.
     */
    requestedUpdateDate: string;
    /**
     * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
     */
    sellerId: string;
    /**
     * SKU seller ID.
     */
    sellerStockKeepingUnitId: string;
    /**
     * SKU ID in the seller's store.
     */
    skuSellerId: number;
    /**
     * SKU ID in the VTEX marketplace.
     */
    stockKeepingUnitId: number;
    /**
     * Date when the SKU binding was updated for the last time, in UTC format.
     */
    updateDate: string;
}
export declare class GetSKUsellerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getSKUseller200ApplicationJSONObject?: GetSKUseller200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
