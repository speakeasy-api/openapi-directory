import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UnitOfMeasure {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Delete a unit of measure
     */
    objectDELETEUnitOfMeasure(req: operations.ObjectDELETEUnitOfMeasureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEUnitOfMeasureResponse>;
    /**
     * CRUD: Retrieve a unit of measure
     */
    objectGETUnitOfMeasure(req: operations.ObjectGETUnitOfMeasureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETUnitOfMeasureResponse>;
    /**
     * CRUD: Create a unit of measure
     */
    objectPOSTUnitOfMeasure(req: operations.ObjectPOSTUnitOfMeasureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTUnitOfMeasureResponse>;
    /**
     * CRUD: Update a unit of measure
     */
    objectPUTUnitOfMeasure(req: operations.ObjectPUTUnitOfMeasureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTUnitOfMeasureResponse>;
}
