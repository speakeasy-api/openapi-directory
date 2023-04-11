import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The unit of measurement. Example: 'EACH'
 */
export declare enum UpdateInventoryForAnItemApplicationXMLQuantityUnitEnum {
    Each = "EACH"
}
/**
 * Quantity that has been ordered by the customers but not yet shipped
 */
export declare class UpdateInventoryForAnItemApplicationXMLQuantity extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: UpdateInventoryForAnItemApplicationXMLQuantityUnitEnum;
}
export declare class UpdateInventoryForAnItemApplicationXML extends SpeakeasyBase {
    /**
     * Quantity that has been ordered by the customers but not yet shipped
     */
    quantity: UpdateInventoryForAnItemApplicationXMLQuantity;
    /**
     * A seller-provided Product ID. Response will have decoded value.
     */
    sku: string;
}
export declare class UpdateInventoryForAnItemRawRequest extends SpeakeasyBase {
    /**
     * File fields
     */
    requestBody: Uint8Array;
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
     * The shipNode for which the inventory is to be updated.
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
export declare enum UpdateInventoryForAnItemRaw200ApplicationXMLQuantityUnitEnum {
    Each = "EACH"
}
/**
 * Quantity that has been ordered by the customers but not yet shipped
 */
export declare class UpdateInventoryForAnItemRaw200ApplicationXMLQuantity extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: UpdateInventoryForAnItemRaw200ApplicationXMLQuantityUnitEnum;
}
/**
 * Successful Operation
 */
export declare class UpdateInventoryForAnItemRaw200ApplicationXML extends SpeakeasyBase {
    /**
     * Quantity that has been ordered by the customers but not yet shipped
     */
    quantity: UpdateInventoryForAnItemRaw200ApplicationXMLQuantity;
    /**
     * A seller-provided Product ID. Response will have decoded value.
     */
    sku: string;
}
/**
 * The unit of measurement. Example: 'EACH'
 */
export declare enum UpdateInventoryForAnItemRaw200ApplicationJSONQuantityUnitEnum {
    Each = "EACH"
}
/**
 * Quantity that has been ordered by the customers but not yet shipped
 */
export declare class UpdateInventoryForAnItemRaw200ApplicationJSONQuantity extends SpeakeasyBase {
    /**
     * Inventory Count
     */
    amount: number;
    /**
     * The unit of measurement. Example: 'EACH'
     */
    unit: UpdateInventoryForAnItemRaw200ApplicationJSONQuantityUnitEnum;
}
/**
 * Successful Operation
 */
export declare class UpdateInventoryForAnItemRaw200ApplicationJSON extends SpeakeasyBase {
    /**
     * Quantity that has been ordered by the customers but not yet shipped
     */
    quantity: UpdateInventoryForAnItemRaw200ApplicationJSONQuantity;
    /**
     * A seller-provided Product ID. Response will have decoded value.
     */
    sku: string;
}
export declare class UpdateInventoryForAnItemRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    updateInventoryForAnItemRaw200ApplicationJSONObject?: UpdateInventoryForAnItemRaw200ApplicationJSON;
}
