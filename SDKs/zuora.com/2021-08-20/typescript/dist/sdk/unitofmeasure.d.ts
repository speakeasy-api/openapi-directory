import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UnitOfMeasure {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectDeleteUnitOfMeasure - CRUD: Delete a unit of measure
    **/
    objectDeleteUnitOfMeasure(req: operations.ObjectDeleteUnitOfMeasureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteUnitOfMeasureResponse>;
    /**
     * objectGetUnitOfMeasure - CRUD: Retrieve a unit of measure
    **/
    objectGetUnitOfMeasure(req: operations.ObjectGetUnitOfMeasureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetUnitOfMeasureResponse>;
    /**
     * objectPostUnitOfMeasure - CRUD: Create a unit of measure
    **/
    objectPostUnitOfMeasure(req: operations.ObjectPostUnitOfMeasureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostUnitOfMeasureResponse>;
    /**
     * objectPutUnitOfMeasure - CRUD: Update a unit of measure
    **/
    objectPutUnitOfMeasure(req: operations.ObjectPutUnitOfMeasureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutUnitOfMeasureResponse>;
}
