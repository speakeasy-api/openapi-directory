import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search and filter all suggestions using specific criteria
 */
export declare class GetSuggestions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get SKU Suggestion by ID
     *
     * @remarks
     * This endpoint retrieves the data of a specific SKU sent by the seller, to the marketplace. Marketplaces or external matchers can call this endpoint when they want to check the information about a single SKU.
     *
     * Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher.
     *
     * Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been:
     *
     * `Approved`: score equal to or greater than 80 points.
     *
     * `Pending`: from 31 to 79 points.
     *
     * `Denied`: from 0 to 30 points.
     *
     * Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.
     */
    getSuggestion(req: operations.GetSuggestionRequest, config?: AxiosRequestConfig): Promise<operations.GetSuggestionResponse>;
    /**
     * Get all SKU suggestions
     *
     * @remarks
     * This endpoint retrieves a list of all SKUs sent by the seller for the Marketplace's approval. Marketplace operators should use this endpoint whenever they want to check the full list of received SKUs and their  information.
     *
     * Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher.
     *
     * Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been:
     *
     * `Approved`: score equal to or greater than 80 points.
     *
     * `Pending`: from 31 to 79 points.
     *
     * `Denied`: from 0 to 30 points.
     *
     * Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.
     */
    getsuggestions(req: operations.GetsuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetsuggestionsResponse>;
}
