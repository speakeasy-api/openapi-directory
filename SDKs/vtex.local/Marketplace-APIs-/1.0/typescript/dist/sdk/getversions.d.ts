import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search and filter all versions of suggestions, using specific criteria
 */
export declare class GetVersions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Version by ID
     *
     * @remarks
     * Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions.
     *
     * This endpoint retrieves a specific *version* of a chosen SKU sent by the seller. Add the Seller's ID, Seller's SKU ID, and version ID in the path to detail your search.
     */
    getSuggestionbyversion(req: operations.GetSuggestionbyversionRequest, config?: AxiosRequestConfig): Promise<operations.GetSuggestionbyversionResponse>;
    /**
     * Get all Versions
     *
     * @remarks
     * Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions.
     *
     * This endpoint retrieves the data of *all* previous and latest versions of a specific SKU suggestion, sent by the seller. Whenever an SKU is updated, it is important to map previous versions, to compare and identify changes.
     *
     * The response's object [latestversion] provides the information of the most recent version of that SKU suggestion.
     */
    getVersions(req: operations.GetVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionsResponse>;
}
