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
     * Create or update profile schema
     *
     * @remarks
     * Creates or updates profile schema.
     *
     *
  > Each account has one profile schema. Updating it with this request will substitute the previous version.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    createOrUpdateProfileSchema(req: operations.CreateOrUpdateProfileSchemaRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrUpdateProfileSchemaResponse>;
}
