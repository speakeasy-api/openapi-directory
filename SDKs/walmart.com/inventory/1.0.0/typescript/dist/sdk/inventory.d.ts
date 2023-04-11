import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Inventory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inventory
     *
     * @remarks
     * You can use this API to get the inventory for a given item.
     */
    getInventory(req: operations.GetInventoryRequest, config?: AxiosRequestConfig): Promise<operations.GetInventoryResponse>;
    /**
     * Multiple Item Inventory for All Ship Nodes
     *
     * @remarks
     * This API will retrieve the inventory count for all of a seller's items across all ship nodes by item to ship node mapping. Inventory can be zero or non-zero. Please note that NextCursor value changes and it needs to be passed on from the previous call to next call.
     */
    getMultiNodeInventoryForAllSkuAndAllShipNodes(req: operations.GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest, config?: AxiosRequestConfig): Promise<operations.GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse>;
    /**
     * Single Item Inventory by Ship Node
     *
     * @remarks
     * This API will retrieve the inventory count for an item across all ship nodes or one specific ship node. You can specify the ship node for which you want to fetch the inventory
     */
    getMultiNodeInventoryForSkuAndAllShipnodes(req: operations.GetMultiNodeInventoryForSkuAndAllShipnodesRequest, config?: AxiosRequestConfig): Promise<operations.GetMultiNodeInventoryForSkuAndAllShipnodesResponse>;
    /**
     * WFS Inventory
     *
     * @remarks
     * You can use this API to get the current Available to Sell inventory quantities for all WFS items in your catalog. You can also query specific SKUs or filter to only items updated after a specific date in order to reduce the response size.
     */
    getWFSInventory(req: operations.GetWFSInventoryRequest, config?: AxiosRequestConfig): Promise<operations.GetWFSInventoryResponse>;
    /**
     * Bulk Item Inventory Update
     *
     * @remarks
     * Updates inventory for items in bulk.
     * Seller Can either use feed type "inventory" or "MP_INVENTORY"
     * * Inventory spec 1.4 feed type: inventory
     * * Inventory spec 1.5 feed type: MP_INVENTORY
     *
     * Please Note: Multi Node Inventory Update Feed (feedType=MP_INVENTORY) only supports JSON Request and Responses. Refer to "MultiNode_Bulk_Inventory_Update_Request.json" for the corresponding request sample
     *
     * Refer to the <a href="https://developer.walmart.com/doc/us/us-mp/us-mp-inventory/">guide section</a> for more detailed guide around each of the feed types
     *
     *  Refer to the throttling limits before uploading the Feed Files.
     */
    updateBulkInventory(req: operations.UpdateBulkInventoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBulkInventoryResponse>;
    /**
     * Update inventory
     *
     * @remarks
     * Updates the inventory for a given item.
     */
    updateInventoryForAnItemJson(req: operations.UpdateInventoryForAnItemJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInventoryForAnItemJsonResponse>;
    /**
     * Update inventory
     *
     * @remarks
     * Updates the inventory for a given item.
     */
    updateInventoryForAnItemRaw(req: operations.UpdateInventoryForAnItemRawRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInventoryForAnItemRawResponse>;
    /**
     * Update Item Inventory per Ship Node
     *
     * @remarks
     * This API will update the inventory for an item across one or more fulfillment centers, known as ship nodes.
     */
    updateMultiNodeInventory(req: operations.UpdateMultiNodeInventoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMultiNodeInventoryResponse>;
}
