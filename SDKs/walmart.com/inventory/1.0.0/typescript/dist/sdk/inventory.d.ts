import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Inventory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getInventory - Inventory
     *
     * You can use this API to get the inventory for a given item.
    **/
    getInventory(req: operations.GetInventoryRequest, config?: AxiosRequestConfig): Promise<operations.GetInventoryResponse>;
    /**
     * getMultiNodeInventoryForAllSkuAndAllShipNodes - Multiple Item Inventory for All Ship Nodes
     *
     * This API will retrieve the inventory count for all of a seller's items across all ship nodes by item to ship node mapping. Inventory can be zero or non-zero.
    **/
    getMultiNodeInventoryForAllSkuAndAllShipNodes(req: operations.GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest, config?: AxiosRequestConfig): Promise<operations.GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse>;
    /**
     * getMultiNodeInventoryForSkuAndAllShipnodes - Single Item Inventory by Ship Node
     *
     * This API will retrieve the inventory count for an item across all ship nodes or one specific ship node. You can specify the ship node for which you want to fetch the inventory
    **/
    getMultiNodeInventoryForSkuAndAllShipnodes(req: operations.GetMultiNodeInventoryForSkuAndAllShipnodesRequest, config?: AxiosRequestConfig): Promise<operations.GetMultiNodeInventoryForSkuAndAllShipnodesResponse>;
    /**
     * getWfsInventory - WFS Inventory
     *
     * You can use this API to get the current Available to Sell inventory quantities for all WFS items in your catalog. You can also query specific SKUs or filter to only items updated after a specific date in order to reduce the response size.
    **/
    getWfsInventory(req: operations.GetWfsInventoryRequest, config?: AxiosRequestConfig): Promise<operations.GetWfsInventoryResponse>;
    /**
     * updateBulkInventory - Bulk Item Inventory Update
     *
     * Updates inventory for items in bulk. Refer to the throttling limits before uploading the Feed files.
    **/
    updateBulkInventory(req: operations.UpdateBulkInventoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBulkInventoryResponse>;
    /**
     * updateInventoryForAnItem - Update inventory
     *
     * Updates the inventory for a given item.
    **/
    updateInventoryForAnItem(req: operations.UpdateInventoryForAnItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInventoryForAnItemResponse>;
    /**
     * updateMultiNodeInventory - Update Item Inventory per Ship Node
     *
     * This API will update the inventory for an item across one or more fulfillment centers, known as ship nodes.
    **/
    updateMultiNodeInventory(req: operations.UpdateMultiNodeInventoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMultiNodeInventoryResponse>;
}
