import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PickupPoints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create/Update Pickup Point
     *
     * @remarks
     * Creates or updates [pickup points](https://help.vtex.com/en/subcategory/pickup-points--1c5Btie9ou2Gg2iUo0ggqM#) in your store by Pickup Point ID.
     */
    createUpdatePickupPoint(req: operations.CreateUpdatePickupPointRequest, config?: AxiosRequestConfig): Promise<operations.CreateUpdatePickupPointResponse>;
    /**
     * Delete Pickup Point
     *
     * @remarks
     * Deletes a given pickup point for your store, by pickup point ID.
     */
    delete(req: operations.DeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResponse>;
    /**
     * List Pickup Point By ID
     *
     * @remarks
     * Lists your store's pickup points while searching by ID.
     */
    getById(req: operations.GetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetByIdResponse>;
    /**
     * List paged Pickup Points
     *
     * @remarks
     * Lists paged pickup points in your store.
     */
    getpaged(req: operations.GetpagedRequest, config?: AxiosRequestConfig): Promise<operations.GetpagedResponse>;
    /**
     * List all pickup points
     *
     * @remarks
     * Lists all of your store's pickup points.
     */
    listAllPickupPpoints(req: operations.ListAllPickupPpointsRequest, config?: AxiosRequestConfig): Promise<operations.ListAllPickupPpointsResponse>;
}
