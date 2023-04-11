import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Schemas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete schema by name
     *
     * @remarks
     * Deletes an existing schema for a given data entity.
     */
    deleteschemabyname(req: operations.DeleteschemabynameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteschemabynameResponse>;
    /**
     * Get schema by name
     *
     * @remarks
     * Returns an existing schema for a given data entity.
     */
    getschemabyname(req: operations.GetschemabynameRequest, config?: AxiosRequestConfig): Promise<operations.GetschemabynameResponse>;
    /**
     * Get schemas
     *
     * @remarks
     * Return the schemas saved.
     */
    getschemas(req: operations.GetschemasRequest, config?: AxiosRequestConfig): Promise<operations.GetschemasResponse>;
    /**
     * Save schema by name
     *
     * @remarks
     * Creates or edits a data entity schema. Learn more about [Master Data schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle)
     *
     * > Note that if you send a `schemaName` that does not exist for that data entity, this request will create it.
     *
     * This request can also be used to [create or edit Master Data v2 triggers](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2).
     */
    saveschemabyname(req: operations.SaveschemabynameRequest, config?: AxiosRequestConfig): Promise<operations.SaveschemabynameResponse>;
}
