import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The unit of measurement. Example: 'EACH'
 */
export declare enum UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum {
    Each = "EACH"
}
/**
 * Quantity that has been ordered by the customers but not yet shipped
 */
export declare class UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum;
}
export declare class UpdateMultiNodeInventoryRequestBodyInventoriesNodes extends SpeakeasyBase {
    /**
     * Quantity that has been ordered by the customers but not yet shipped
     */
    inputQty: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty;
    /**
     * ShipNode Id of the ship node for which the inventory is requested
     */
    shipNode: string;
}
export declare class UpdateMultiNodeInventoryRequestBodyInventories extends SpeakeasyBase {
    nodes: UpdateMultiNodeInventoryRequestBodyInventoriesNodes[];
}
/**
 * Request fields
 */
export declare class UpdateMultiNodeInventoryRequestBody extends SpeakeasyBase {
    inventories: UpdateMultiNodeInventoryRequestBodyInventories;
}
export declare class UpdateMultiNodeInventoryRequest extends SpeakeasyBase {
    /**
     * Request fields
     */
    requestBody: UpdateMultiNodeInventoryRequestBody;
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
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
     */
    sku: string;
}
export declare enum UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum {
    Application = "APPLICATION",
    System = "SYSTEM",
    Request = "REQUEST",
    Data = "DATA"
}
export declare class UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCauses extends SpeakeasyBase {
    code?: string;
    description?: string;
    field?: string;
    type?: string;
}
export declare enum UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}
export declare class UpdateMultiNodeInventory200ApplicationJSONNodesErrors extends SpeakeasyBase {
    category?: UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum;
    causes?: UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCauses[];
    code: string;
    description?: string;
    errorIdentifiers?: Record<string, Record<string, any>>;
    field?: string;
    info?: string;
    severity?: UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum;
}
export declare class UpdateMultiNodeInventory200ApplicationJSONNodes extends SpeakeasyBase {
    /**
     * Node Update Error description.
     */
    errors?: UpdateMultiNodeInventory200ApplicationJSONNodesErrors[];
    /**
     * ShipNode Id of the ship node for which the inventory is requested
     */
    shipNode?: string;
    /**
     * Node Update status. Example: 'Success'
     */
    status?: string;
}
/**
 * Successful Operation
 */
export declare class UpdateMultiNodeInventory200ApplicationJSON extends SpeakeasyBase {
    nodes?: UpdateMultiNodeInventory200ApplicationJSONNodes[];
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     */
    sku?: string;
}
export declare class UpdateMultiNodeInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    updateMultiNodeInventory200ApplicationJSONObject?: UpdateMultiNodeInventory200ApplicationJSON;
}
