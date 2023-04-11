import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductListPage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get list of banners registered for query
     *
     * @remarks
     * Lists the banners registered for a given query. Check the [configuring banners documentation](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5) for a full explanation of the banner feature.
     */
    getBannersFacets(req: operations.GetBannersFacetsRequest, config?: AxiosRequestConfig): Promise<operations.GetBannersFacetsResponse>;
    /**
     * Get attempt of correction of a misspelled term
     *
     * @remarks
     * Tries to correct a misspelled term from the search.
     */
    getCorrectionSearch(req: operations.GetCorrectionSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetCorrectionSearchResponse>;
    /**
     * Get list of the possible facets for a given query
     *
     * @remarks
     * Lists the possible facets for a given query
     */
    getFacetsFacets(req: operations.GetFacetsFacetsRequest, config?: AxiosRequestConfig): Promise<operations.GetFacetsFacetsResponse>;
    /**
     * Get list of products for a query
     *
     * @remarks
     * Lists the products for a given query.
     */
    getProductSearchFacets(req: operations.GetProductSearchFacetsRequest, config?: AxiosRequestConfig): Promise<operations.GetProductSearchFacetsResponse>;
    /**
     * Get list of suggested terms similar to the search term
     *
     * @remarks
     * Lists suggested terms similar to the search term.
     */
    getSearchSuggestions(req: operations.GetSearchSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchSuggestionsResponse>;
}
