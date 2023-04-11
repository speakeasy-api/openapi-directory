import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Master Data documents are versioned. This means that for each change a new version is generated. The `versions` APIs allows to query the versions and also apply the state of a document to the most current version.
 */
export declare class Versions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get version
     *
     * @remarks
     * Returns the version of a document.
     */
    getversion(req: operations.GetversionRequest, config?: AxiosRequestConfig): Promise<operations.GetversionResponse>;
    /**
     * List versions
     *
     * @remarks
     * Allows to list the versions of a document.
     */
    listversions(req: operations.ListversionsRequest, config?: AxiosRequestConfig): Promise<operations.ListversionsResponse>;
    /**
     * Put version
     *
     * @remarks
     * Updates document with version values.
     */
    putversion(req: operations.PutversionRequest, config?: AxiosRequestConfig): Promise<operations.PutversionResponse>;
}
