import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMultiNodeInventoryForSkuAndAllShipnodesRequest extends SpeakeasyBase {
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
     * ShipNode Id of the ship node for which the inventory is requested
     */
    shipNode?: string;
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
     */
    sku: string;
}
/**
 * The unit of measurement. Example: 'EACH'
 */
export declare enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnum {
    Each = "EACH"
}
/**
 * Quantity of an item that is available to be allocated to orders
 */
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQty extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnum;
}
export declare enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum {
    Application = "APPLICATION",
    System = "SYSTEM",
    Request = "REQUEST",
    Data = "DATA"
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCauses extends SpeakeasyBase {
    code?: string;
    description?: string;
    field?: string;
    type?: string;
}
export declare enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors extends SpeakeasyBase {
    category?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum;
    causes?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCauses[];
    code: string;
    description?: string;
    errorIdentifiers?: Record<string, Record<string, any>>;
    field?: string;
    info?: string;
    severity?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum;
}
/**
 * The unit of measurement. Example: 'EACH'
 */
export declare enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnum {
    Each = "EACH"
}
/**
 * Quantity of an item that is input by the seller
 */
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQty extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnum;
}
/**
 * The unit of measurement. Example: 'EACH'
 */
export declare enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesReservedQtyUnitEnum {
    Each = "EACH"
}
/**
 * Quantity that has been ordered by the customers but not yet shipped
 */
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesReservedQty extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesReservedQtyUnitEnum;
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodes extends SpeakeasyBase {
    /**
     * Quantity of an item that is available to be allocated to orders
     */
    availToSellQty?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQty;
    errors?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors[];
    /**
     * Quantity of an item that is input by the seller
     */
    inputQty?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQty;
    /**
     * Quantity that has been ordered by the customers but not yet shipped
     */
    reservedQty?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesReservedQty;
    /**
     * ShipNode Id of the ship node for which the inventory is requested
     */
    shipNode?: string;
}
/**
 * Successful Operation
 */
export declare class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON extends SpeakeasyBase {
    nodes?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodes[];
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     */
    sku?: string;
}
export declare class GetMultiNodeInventoryForSkuAndAllShipnodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    getMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONObject?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON;
}
