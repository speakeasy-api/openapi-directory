import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TaxationItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a taxation item
     *
     * @remarks
     * Deletes a specific taxation item by ID.
     *
     */
    deleteTaxationItem(req: operations.DELETETaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.DELETETaxationItemResponse>;
    /**
     * Retrieve a taxation item
     *
     *
     * @remarks
     * Retrieves the information about a specific taxation item by ID.
     *
     */
    getTaxationItem(req: operations.GETTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.GETTaxationItemResponse>;
    /**
     * CRUD: Delete a taxation item
     */
    objectDELETETaxationItem(req: operations.ObjectDELETETaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETETaxationItemResponse>;
    /**
     * CRUD: Retrieve a taxation item
     */
    objectGETTaxationItem(req: operations.ObjectGETTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETTaxationItemResponse>;
    /**
     * CRUD: Create a taxation item
     */
    objectPOSTTaxationItem(req: operations.ObjectPOSTTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTTaxationItemResponse>;
    /**
     * CRUD: Update a taxation item
     */
    objectPUTTaxationItem(req: operations.ObjectPUTTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTTaxationItemResponse>;
    /**
     * Update a taxation item
     *
     * @remarks
     * Updates a specific taxation item by ID.
     *
     */
    putTaxationItem(req: operations.PUTTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.PUTTaxationItemResponse>;
}
