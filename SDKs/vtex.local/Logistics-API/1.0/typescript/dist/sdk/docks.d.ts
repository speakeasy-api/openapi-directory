import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Docks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Activate dock
     *
     * @remarks
     * Activates dock through dock ID.
     */
    activateDock(req: operations.ActivateDockRequest, config?: AxiosRequestConfig): Promise<operations.ActivateDockResponse>;
    /**
     * List all  docks
     *
     * @remarks
     * Informs a list of all docks.
     */
    allDocks(req: operations.AllDocksRequest, config?: AxiosRequestConfig): Promise<operations.AllDocksResponse>;
    /**
     * Create/update dock
     *
     * @remarks
     * Creates or updates docks to be used in your logistic operation.
     */
    createUpdateDock(req: operations.CreateUpdateDockRequest, config?: AxiosRequestConfig): Promise<operations.CreateUpdateDockResponse>;
    /**
     * Deactivate dock
     *
     * @remarks
     * Deactivate dock by dock ID
     */
    deactivateDock(req: operations.DeactivateDockRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateDockResponse>;
    /**
     * Delete dock
     *
     * @remarks
     * Deletes dock by dock ID.
     */
    dock(req: operations.DockRequest, config?: AxiosRequestConfig): Promise<operations.DockResponse>;
    /**
     * List dock by ID
     *
     * @remarks
     * Informs a given dock's information, searching by dock ID.
     */
    dockById(req: operations.DockByIdRequest, config?: AxiosRequestConfig): Promise<operations.DockByIdResponse>;
}
