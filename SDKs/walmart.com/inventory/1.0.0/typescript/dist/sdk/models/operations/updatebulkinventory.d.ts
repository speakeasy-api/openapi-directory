import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateBulkInventoryRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UpdateBulkInventoryRequestBody extends SpeakeasyBase {
    /**
     * Feed file to upload
     */
    file: UpdateBulkInventoryRequestBodyFile;
}
/**
 * The feed Type
 */
export declare enum UpdateBulkInventoryFeedTypeEnum {
    Inventory = "inventory",
    MpInventory = "MP_INVENTORY"
}
export declare class UpdateBulkInventoryRequest extends SpeakeasyBase {
    requestBody?: UpdateBulkInventoryRequestBody;
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
     * The feed Type
     */
    feedType: UpdateBulkInventoryFeedTypeEnum;
    /**
     * The shipNode for which the inventory is to be updated. Not required in case of Multi Node Inventory Update Feed (feedType=MP_INVENTORY)
     */
    shipNode?: string;
}
/**
 * Successful Operation
 */
export declare class UpdateBulkInventory200ApplicationXML extends SpeakeasyBase {
    additionalAttributes?: Record<string, any>;
    errors?: Record<string, any>;
    /**
     * A unique ID, returned from the Bulk Upload API, used for tracking the feed file
     */
    feedId?: string;
}
/**
 * Successful Operation
 */
export declare class UpdateBulkInventory200ApplicationJSON extends SpeakeasyBase {
    additionalAttributes?: Record<string, any>;
    errors?: Record<string, any>;
    /**
     * A unique ID, returned from the Bulk Upload API, used for tracking the feed file
     */
    feedId?: string;
}
export declare class UpdateBulkInventoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    updateBulkInventory200ApplicationJSONObject?: UpdateBulkInventory200ApplicationJSON;
}
