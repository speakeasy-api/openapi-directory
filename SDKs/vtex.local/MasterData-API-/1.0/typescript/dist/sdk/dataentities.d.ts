import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Set of APIs that returns the structure of the data entities.
 */
export declare class DataEntities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get data entity structure
     *
     * @remarks
     * Returns the data entity structure with its respective fields and data type.
     *
     * ### Response status code
     *
     * 1. Status Code `403`: Access not allowed
     * 2. Status Code `200`: Retrieves data entity structure
     *
     * > All headers listed below are required.
     */
    getdataentitystructure(req: operations.GetdataentitystructureRequest, config?: AxiosRequestConfig): Promise<operations.GetdataentitystructureResponse>;
    /**
     * List data entities
     *
     * @remarks
     * Retrieves the list of existing data entities in the store.
     *
     * ### Response status code
     *
     * 1. Status Code `403`: Access not allowed
     * 2. Status Code `200`: Retrieves data entity list
     *
     * > All headers listed below are required.
     */
    listdataentities(req: operations.ListdataentitiesRequest, config?: AxiosRequestConfig): Promise<operations.ListdataentitiesResponse>;
}
