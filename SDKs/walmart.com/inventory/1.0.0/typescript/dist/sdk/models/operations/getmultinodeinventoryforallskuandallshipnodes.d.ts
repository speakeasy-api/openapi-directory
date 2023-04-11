import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest extends SpeakeasyBase {
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     */
    wmConsumerChannelType?: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /**
     * The access token retrieved in the Token API call
     */
    wmSecAccessToken: string;
    /**
     * Walmart Service Name
     */
    wmSvcName: string;
    /**
     * The number of items returned. Cannot be more than 50.
     */
    limit?: string;
    /**
     * String returned from initial API call to indicate pagination. Specify nextCursor value to retrieve the next 50 items.
     */
    nextCursor?: string;
}
/**
 * The unit of measurement. Example: 'EACH'
 */
export declare enum GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnum {
    Each = "EACH"
}
/**
 * Quantity of an item that is available to be allocated to orders
 */
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnum;
}
/**
 * The unit of measurement. Example: 'EACH'
 */
export declare enum GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnum {
    Each = "EACH"
}
/**
 * Quantity of an item that is input by the seller
 */
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnum;
}
/**
 * The unit of measurement. Example: 'EACH'
 */
export declare enum GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesReservedQtyUnitEnum {
    Each = "EACH"
}
/**
 * Quantity that has been ordered by the customers but not yet shipped
 */
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesReservedQty extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesReservedQtyUnitEnum;
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodes extends SpeakeasyBase {
    /**
     * Quantity of an item that is available to be allocated to orders
     */
    availToSellQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty;
    /**
     * Quantity of an item that is input by the seller
     */
    inputQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty;
    /**
     * Quantity that has been ordered by the customers but not yet shipped
     */
    reservedQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesReservedQty;
    /**
     * ShipNode Id of the ship node for which the inventory is requested
     */
    shipNode?: string;
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventories extends SpeakeasyBase {
    nodes?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodes[];
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     */
    sku?: string;
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElements extends SpeakeasyBase {
    inventories?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventories[];
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONMeta extends SpeakeasyBase {
    /**
     * Used for pagination to fetch the next set of items.
     */
    nextCursor?: string;
    /**
     * Total number of Skus of the Seller. Example: '235'
     */
    totalCount?: number;
}
/**
 * Successful Operation
 */
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSON extends SpeakeasyBase {
    elements?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElements;
    meta?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONMeta;
}
export declare class GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    getMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONObject?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSON;
}
