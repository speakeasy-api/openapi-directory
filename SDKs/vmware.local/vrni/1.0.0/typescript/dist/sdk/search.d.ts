import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search APIs
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
     * Search entities
     *
     * @remarks
     * Using search API you can search vRealize Network Insight entities by specifying entity type and filter expression.
     * A filter expression is a predicate expression (similar to SQL where clause) used to define the search criteria.
     * Please refer to API Guide on details of how to construct filter expression. A successful search request will return a
     * list of entity ids that matches the search criteria.
     */
    searchEntities(req: shared.SearchRequest, security: operations.SearchEntitiesSecurity, config?: AxiosRequestConfig): Promise<operations.SearchEntitiesResponse>;
}
