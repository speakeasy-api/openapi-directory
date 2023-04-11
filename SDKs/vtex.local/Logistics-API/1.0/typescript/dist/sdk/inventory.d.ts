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
     * List supply lots
     *
     * @remarks
     * Returns a list of the supply lots of an SKU in a specific warehouse.
     */
    getSupplyLots(req: operations.GetSupplyLotsRequest, config?: AxiosRequestConfig): Promise<operations.GetSupplyLotsResponse>;
    /**
     * List inventory with dispatched reservations
     *
     * @remarks
     * Lists inventory with dispatched reservations. When the number of active reservations is more than 2000 the return is an error with status code 400 (BadRequest) and the message: Too many active reservations.
     */
    getinventorywithdispatchedreservations(req: operations.GetinventorywithdispatchedreservationsRequest, config?: AxiosRequestConfig): Promise<operations.GetinventorywithdispatchedreservationsResponse>;
    /**
     * List inventory by SKU
     *
     * @remarks
     * Lists your store's inventory by SKU ID
     */
    inventoryBySku(req: operations.InventoryBySkuRequest, config?: AxiosRequestConfig): Promise<operations.InventoryBySkuResponse>;
    /**
     * List inventory per dock
     *
     * @remarks
     * Lists inventory information per dock set up in your store.
     */
    inventoryperdock(req: operations.InventoryperdockRequest, config?: AxiosRequestConfig): Promise<operations.InventoryperdockResponse>;
    /**
     * List inventory per dock and warehouse
     *
     * @remarks
     * Lists information of inventory per dock and warehouse.
     */
    inventoryperdockandwarehouse(req: operations.InventoryperdockandwarehouseRequest, config?: AxiosRequestConfig): Promise<operations.InventoryperdockandwarehouseResponse>;
    /**
     * List inventory per warehouse
     *
     * @remarks
     * Lists inventory information per warehouse on your store.
     */
    inventoryperwarehouse(req: operations.InventoryperwarehouseRequest, config?: AxiosRequestConfig): Promise<operations.InventoryperwarehouseResponse>;
    /**
     * Save supply lot
     *
     * @remarks
     * Creates a new Supply Lot. A Supply Lot lets the store sell products that are not currently available in stock but whose arrival is already scheduled.
     *
     * Check out our [documentation](https://help.vtex.com/en/tutorial/setting-up-future-inventory--UMSGjooqRfkRbeoh94kS4) about this feature.
     */
    saveSupplyLot(req: operations.SaveSupplyLotRequest, config?: AxiosRequestConfig): Promise<operations.SaveSupplyLotResponse>;
    /**
     * Transfer supply lot
     *
     * @remarks
     * Transfers an SKU from a Supply Lot to the currently available inventory.
     *
     * Check out how this transfer works in further detail by reading our [documentation](https://help.vtex.com/pt/tutorial/configurar-estoque-futuro--UMSGjooqRfkRbeoh94kS4) about this feature.
     */
    transferSupplyLot(req: operations.TransferSupplyLotRequest, config?: AxiosRequestConfig): Promise<operations.TransferSupplyLotResponse>;
    /**
     * Update inventory by SKU and warehouse
     *
     * @remarks
     * Updates inventory for a given SKU and warehouse.
     */
    updateInventoryBySkuandWarehouse(req: operations.UpdateInventoryBySkuandWarehouseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInventoryBySkuandWarehouseResponse>;
}
