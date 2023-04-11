import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Warehouses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Activate warehouse
     *
     * @remarks
     * Activates a given warehouse, by warehouse ID.
     */
    activateWarehouse(req: operations.ActivateWarehouseRequest, config?: AxiosRequestConfig): Promise<operations.ActivateWarehouseResponse>;
    /**
     * List all warehouses
     *
     * @remarks
     * Lists information about all warehouses set up in your store.
     */
    allWarehouses(req: operations.AllWarehousesRequest, config?: AxiosRequestConfig): Promise<operations.AllWarehousesResponse>;
    /**
     * Create/update warehouse
     *
     * @remarks
     * Creates or updates your store's warehouses
     */
    createUpdateWarehouse(req: operations.CreateUpdateWarehouseRequest, config?: AxiosRequestConfig): Promise<operations.CreateUpdateWarehouseResponse>;
    /**
     * Deactivate warehouse
     *
     * @remarks
     * Deactivates a given warehouse by warehouse ID.
     */
    deactivateWarehouse(req: operations.DeactivateWarehouseRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateWarehouseResponse>;
    /**
     * Remove warehouse
     *
     * @remarks
     * Deletes given warehouse by warehouse ID.
     */
    removeWarehouse(req: operations.RemoveWarehouseRequest, config?: AxiosRequestConfig): Promise<operations.RemoveWarehouseResponse>;
    /**
     * List warehouse by ID
     *
     * @remarks
     * Lists the information of a given warehouse, searching by warehouse ID.
     */
    warehouseById(req: operations.WarehouseByIdRequest, config?: AxiosRequestConfig): Promise<operations.WarehouseByIdResponse>;
}
