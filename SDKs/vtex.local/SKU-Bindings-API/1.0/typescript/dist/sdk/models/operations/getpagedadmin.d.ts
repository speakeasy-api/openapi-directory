import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetpagedadminRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Defines if the SKU binding is active.
     */
    isActive?: boolean;
    /**
     * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
     */
    sellerId?: string;
    /**
     * SKU ID in the seller's store.
     */
    sellerSkuId?: string;
    /**
     * Amount of results.
     */
    size?: string;
    /**
     * SKU's unique identifier in the marketplace.
     */
    skuId?: string;
}
/**
 * OK
 */
export declare class Getpagedadmin200ApplicationJSON extends SpeakeasyBase {
    /**
     * Defines if the SKU binding is active.
     */
    isActive?: boolean;
    /**
     * Defines if the seller is persisted.
     */
    isPersisted?: boolean;
    /**
     * Defines if the seller is removed.
     */
    isRemoved?: boolean;
    /**
     * Date when an SKU binding update was requested for the last time, in UTC format.
     */
    requestedUpdateDate?: string;
    /**
     * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
     */
    sellerId?: string;
    /**
     * SKU ID in the seller's store.
     */
    sellerStockKeepingUnitId?: string;
    /**
     * SKU Binding ID.
     */
    skuSellerId?: number;
    /**
     * SKU ID in the VTEX marketplace.
     */
    stockKeepingUnitId?: number;
    /**
     * Date when the SKU binding was updated for the last time, in UTC format.
     */
    updateDate?: string;
}
export declare class GetpagedadminResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getpagedadmin200ApplicationJSONObject?: Getpagedadmin200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
