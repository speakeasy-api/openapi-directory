import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The ```search``` API is intended to query a collection of documents.
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
     * Retrieves documents' information, while choosing which fields will be returned and filtering documents by specific fields.
     *
     * > The response header `REST-Content-Range` indicates the total amount of results for that specific search. For example, it may return `resources 0-100/136108`, which indicates it has returned results from 0 to 100 of a total 136108.
     *
     * Below you can see some query examples and learn more about each query parameter.
     *
     *
  > Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.
     *
     * ## Query examples
     *
     * ### Simple filter
     *
     * ```
     * /dataentities/Client/search?email=my@email.com
     * ```
     *
     * ### Complex filter
     *
     * ```
     * /dataentities/Client/search?_where=(firstName=Jon OR lastName=Smith) OR (createdIn between 2001-01-01 AND 2016-01-01)
     * ```
     *
     * ### Date Range
     *
     * ```
     * /dataentities/Client/search?_where=createdIn between 2001-01-01 AND 2016-01-01
     * ```
     *
     * ### Range numeric fields
     *
     * ```
     * /dataentities/Client/search?_where=age between 18 AND 25
     * ```
     *
     * ### Partial filter
     *
     * ```
     * /dataentities/Client/search?firstName=*Maria*
     * ```
     *
     * ### Filter for null values
     *
     * ```
     * /dataentities/Client/search?_where=firstName is null
     * ```
     *
     * ### Filter for non-null values
     *
     * ```
     * /dataentities/Client/search?_where=firstName is not null
     * ```
     *
     * ### Filter for difference
     * ```
     * /dataentities/Client/search?_where=firstName<>maria
     * ```
     *
     * ### Filter greater than or less than
     * ```
     * /dataentities/Client/search?_where=number>5
     * /dataentities/Client/search?_where=date<2001-01-01
     * ```
     */
    searchdocuments(req: operations.SearchdocumentsRequest, config?: AxiosRequestConfig): Promise<operations.SearchdocumentsResponse>;
}
