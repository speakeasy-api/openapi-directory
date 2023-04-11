import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Autocomplete {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get list of suggested terms and attributes similar to the search term
     *
     * @remarks
     * Lists the suggested terms and attributes similar to the search term.
     */
    getAutocompleteSuggestions(req: operations.GetAutocompleteSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAutocompleteSuggestionsResponse>;
    /**
     * Get list of the 10 most searched terms
     *
     * @remarks
     * Lists the 10 most searched terms.
     */
    getTopSearches(req: operations.GetTopSearchesRequest, config?: AxiosRequestConfig): Promise<operations.GetTopSearchesResponse>;
}
