import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetInventoryRequest extends SpeakeasyBase {
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
     * The shipNode for which the inventory is requested
     */
    shipNode?: string;
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’, '{', '}' as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
     */
    sku: string;
}
/**
 * The unit of measurement. Example: 'EACH'
 */
export declare enum GetInventory200ApplicationXMLQuantityUnitEnum {
    Each = "EACH"
}
/**
 * Quantity that has been ordered by the customers but not yet shipped
 */
export declare class GetInventory200ApplicationXMLQuantity extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: GetInventory200ApplicationXMLQuantityUnitEnum;
}
/**
 * Successful Operation
 */
export declare class GetInventory200ApplicationXML extends SpeakeasyBase {
    /**
     * Quantity that has been ordered by the customers but not yet shipped
     */
    quantity: GetInventory200ApplicationXMLQuantity;
    /**
     * A seller-provided Product ID. Response will have decoded value.
     */
    sku: string;
}
/**
 * The unit of measurement. Example: 'EACH'
 */
export declare enum GetInventory200ApplicationJSONQuantityUnitEnum {
    Each = "EACH"
}
/**
 * Quantity that has been ordered by the customers but not yet shipped
 */
export declare class GetInventory200ApplicationJSONQuantity extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: GetInventory200ApplicationJSONQuantityUnitEnum;
}
/**
 * Successful Operation
 */
export declare class GetInventory200ApplicationJSON extends SpeakeasyBase {
    /**
     * Quantity that has been ordered by the customers but not yet shipped
     */
    quantity: GetInventory200ApplicationJSONQuantity;
    /**
     * A seller-provided Product ID. Response will have decoded value.
     */
    sku: string;
}
export declare class GetInventoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    getInventory200ApplicationJSONObject?: GetInventory200ApplicationJSON;
}
