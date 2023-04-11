import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InventoryBySkuRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    skuId: string;
}
export declare class InventoryBySku200ApplicationJSONBalance extends SpeakeasyBase {
    hasUnlimitedQuantity: boolean;
    reservedQuantity: number;
    totalQuantity: number;
    warehouseId: string;
    warehouseName: string;
}
export declare class InventoryBySku200ApplicationJSON extends SpeakeasyBase {
    balance: InventoryBySku200ApplicationJSONBalance[];
    skuId: string;
}
export declare class InventoryBySkuResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    inventoryBySku200ApplicationJSONObject?: InventoryBySku200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
