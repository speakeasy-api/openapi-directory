import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TaxationItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteTaxationItem - Delete a taxation item
     *
     * Deletes a specific taxation item by ID.
     *
    **/
    deleteTaxationItem(req: operations.DeleteTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTaxationItemResponse>;
    /**
     * getTaxationItem - Retrieve a taxation item
     *
     *
     * Retrieves the information about a specific taxation item by ID.
     *
    **/
    getTaxationItem(req: operations.GetTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxationItemResponse>;
    /**
     * objectDeleteTaxationItem - CRUD: Delete a taxation item
    **/
    objectDeleteTaxationItem(req: operations.ObjectDeleteTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteTaxationItemResponse>;
    /**
     * objectGetTaxationItem - CRUD: Retrieve a taxation item
    **/
    objectGetTaxationItem(req: operations.ObjectGetTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetTaxationItemResponse>;
    /**
     * objectPostTaxationItem - CRUD: Create a taxation item
    **/
    objectPostTaxationItem(req: operations.ObjectPostTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostTaxationItemResponse>;
    /**
     * objectPutTaxationItem - CRUD: Update a taxation item
    **/
    objectPutTaxationItem(req: operations.ObjectPutTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutTaxationItemResponse>;
    /**
     * putTaxationItem - Update a taxation item
     *
     * Updates a specific taxation item by ID.
     *
    **/
    putTaxationItem(req: operations.PutTaxationItemRequest, config?: AxiosRequestConfig): Promise<operations.PutTaxationItemResponse>;
}
