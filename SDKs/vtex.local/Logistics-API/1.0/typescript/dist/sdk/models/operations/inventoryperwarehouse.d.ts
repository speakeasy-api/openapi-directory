import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InventoryperwarehouseRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    skuId: string;
    warehouseId: string;
}
export declare class Inventoryperwarehouse200ApplicationJSON extends SpeakeasyBase {
    /**
     * Amount of items available for sale. Difference between total quantity and reserved quantity.
     */
    availableQuantity?: number;
    /**
     * Date of supply lot in UTC.
     */
    dateOfSupplyUtc?: string;
    /**
     * List of delivery channels available.
     */
    deliveryChannel?: string[];
    /**
     * Dock ID.
     */
    dockId?: string;
    /**
     * Indicates whether the SKU's availability is unlimited ("infinite inventory").
     */
    isUnlimited?: boolean;
    /**
     * Indicates whether SKU can continue to be sold after the available quantity gets to 0.
     */
    keepSellingAfterExpiration?: boolean;
    /**
     * Reserved quantity of the SKU.
     */
    reservedQuantity?: number;
    /**
     * List of sales channels associated.
     */
    salesChannel?: string[];
    /**
     * SKU ID.
     */
    skuId?: string;
    /**
     * Time to refill (deprecated).
     */
    timeToRefill?: string;
    /**
     * Total quantity of SKU.
     */
    totalQuantity?: number;
    /**
     * Transfer.
     */
    transfer?: string;
    /**
     * Warehouse ID.
     */
    warehouseId?: string;
}
export declare class InventoryperwarehouseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    inventoryperwarehouse200ApplicationJSONObjects?: Inventoryperwarehouse200ApplicationJSON[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
