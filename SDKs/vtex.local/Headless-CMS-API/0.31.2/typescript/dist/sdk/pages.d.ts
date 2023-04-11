import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all Content Types
     *
     * @remarks
     * Gets data from all Content Types.
     */
    getAllContentTypes(req: operations.GetAllContentTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetAllContentTypesResponse>;
    /**
     * Get CMS page
     *
     * @remarks
     * Gets all data from a given page.
     */
    getCMSpage(req: operations.GetCMSpageRequest, config?: AxiosRequestConfig): Promise<operations.GetCMSpageResponse>;
    /**
     * Get all CMS pages by Content Type
     *
     * @remarks
     * Gets data from all pages of a given Content Type.
     */
    getPagesbyContentType(req: operations.GetPagesbyContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetPagesbyContentTypeResponse>;
}
