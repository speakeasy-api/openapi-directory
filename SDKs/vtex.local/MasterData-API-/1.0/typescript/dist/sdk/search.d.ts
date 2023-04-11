import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `search` API is intended to query a collection of documents.
 */
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search documents
     *
     * @remarks
     * Search documents by the query parameters described below.
     *
     *
  > Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.
     */
    searchdocuments(req: operations.SearchdocumentsRequest, config?: AxiosRequestConfig): Promise<operations.SearchdocumentsResponse>;
}
