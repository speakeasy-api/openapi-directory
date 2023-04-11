import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create alternative keys for data entities.
 */
export declare class Indices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete index by name
     *
     * @remarks
     * Delete an index.
     */
    deleteindexbyname(req: operations.DeleteindexbynameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteindexbynameResponse>;
    /**
     * Get index by name
     *
     * @remarks
     * Returns an index.
     */
    getindexbyname(req: operations.GetindexbynameRequest, config?: AxiosRequestConfig): Promise<operations.GetindexbynameResponse>;
    /**
     * Get indices
     *
     * @remarks
     * Returns the list of indices by data entity.
     */
    getindices(req: operations.GetindicesRequest, config?: AxiosRequestConfig): Promise<operations.GetindicesResponse>;
    /**
     * Put indices
     *
     * @remarks
     * Create an index.
     */
    putindices(req: operations.PutindicesRequest, config?: AxiosRequestConfig): Promise<operations.PutindicesResponse>;
}
