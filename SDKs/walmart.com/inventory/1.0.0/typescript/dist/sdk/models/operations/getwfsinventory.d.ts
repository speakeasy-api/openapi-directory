import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWFSInventoryRequest extends SpeakeasyBase {
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
     * last inventory modified date - starting range.
     */
    fromModifiedDate?: string;
    /**
     * Number of Sku to be returned. Cannot be larger than 300.
     */
    limit?: string;
    /**
     * Offset is the number of records you wish to skip before selecting records.
     */
    offset?: string;
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.
     */
    sku?: string;
    /**
     * last inventory modified date - starting range.
     */
    toModifiedDate?: string;
}
export declare class GetWFSInventory200ApplicationJSONHeaders extends SpeakeasyBase {
    /**
     * Information about the quantity in inventory
     */
    limit?: number;
    /**
     * Offset is the number of records you wish to skip before selecting results.
     */
    offset?: number;
    /**
     * Total number of results for query.
     */
    totalCount?: number;
}
export declare class GetWFSInventory200ApplicationJSONPayloadInventoryShipNodes extends SpeakeasyBase {
    /**
     * The available quantity is the quantity of an item that is available to be allocated to orders.
     */
    availToSellQty?: number;
    /**
     * Last changes date for the item.
     */
    modifiedDate?: string;
    /**
     * The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected.
     */
    onHandQty?: number;
    /**
     * Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory.
     */
    shipNodeType?: string;
}
export declare class GetWFSInventory200ApplicationJSONPayloadInventory extends SpeakeasyBase {
    shipNodes?: GetWFSInventory200ApplicationJSONPayloadInventoryShipNodes[];
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     */
    sku?: string;
}
export declare class GetWFSInventory200ApplicationJSONPayload extends SpeakeasyBase {
    inventory?: GetWFSInventory200ApplicationJSONPayloadInventory[];
}
/**
 * Successful Operation
 */
export declare class GetWFSInventory200ApplicationJSON extends SpeakeasyBase {
    headers?: GetWFSInventory200ApplicationJSONHeaders;
    payload?: GetWFSInventory200ApplicationJSONPayload;
}
export declare class GetWFSInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    getWFSInventory200ApplicationJSONObject?: GetWFSInventory200ApplicationJSON;
}
