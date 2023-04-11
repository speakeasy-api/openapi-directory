import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PriceTables {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get rules for a price table
     *
     * @remarks
     * This method will retrieve the rules from a specific Price Table.
     *
     * ## Response body example
     *
     * ```json
     * {
     *     "tradePolicyId": "b2c",
     *     "rules": [{
     *         "id": 0,
     *         "context": {
     *             "categories": {},
     *             "brands": {
     *                 "2000009": "Whiskas"
     *             },
     *             "stockStatuses": null,
     *             "internalCategories": null,
     *             "markupRange": null,
     *             "dateRange": null
     *         },
     *         "percentualModifier": 15
     *     }]
     * }
     * ```
     */
    getrulesforapricetable(req: operations.GetrulesforapricetableRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.GetrulesforapricetableResponse>;
    /**
     * List price tables
     *
     * @remarks
     * This method will list all price tables.
     *
     * ## Response body example
     *
     * ```json
     * [
     *     "1",
     *     "2",
     *     "3",
     *     "b2c",
     *     "b2b",
     *     "gold"
     * ]
     * ```
     */
    listpricetables(req: operations.ListpricetablesRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListpricetablesResponse>;
    /**
     * Get all price tables and their rules
     *
     * @remarks
     * This method will retrieve all price tables and their rules.
     *
     * ## Response body example
     *
     * ```json
     * [
     *     {
     *         "tradePolicyId": "2",
     *         "rules": [
     *             {
     *                 "id": 0,
     *                 "context": {
     *                     "categories": {},
     *                     "brands": {},
     *                     "stockStatuses": null,
     *                     "internalCategories": null,
     *                     "markupRange": null,
     *                     "dateRange": null
     *                 },
     *                 "percentualModifier": 20
     *             }
     *         ]
     *     },
     *     {
     *         "tradePolicyId": "b2c",
     *         "rules": [
     *             {
     *                 "id": 0,
     *                 "context": {
     *                     "categories": {},
     *                     "brands": {
     *                         "2000009": "Whiskas"
     *                     },
     *                     "stockStatuses": null,
     *                     "internalCategories": null,
     *                     "markupRange": null,
     *                     "dateRange": null
     *                 },
     *                 "percentualModifier": 15
     *             }
     *         ]
     *     }
     * ]
     * ```
     */
    getallpricetablesandrules(req: operations.GetallpricetablesandrulesRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.GetallpricetablesandrulesResponse>;
    /**
     * Update rules for a price table
     *
     * @remarks
     * This method will update the rules from a specific Price Table. It will delete all the rules from the requested Price Table and create new rules based on the content of the request.
     *
     * ## Request body example
     *
     * ```json
     * {
     *     "rules": [
     *           {
     *                "id": 1,
     *                "context": {
     *                     "categories": {
     *                          "Category ID": "1",
     *                          "Category Name": "Alimentação"
     *                     },
     *                     "brands": {
     *                          "Brand ID": "2000002",
     *                          "Brand Name": "Whiskas"
     *                     },
     *                     "markupRange": {
     *                          "from": 0,
     *                          "to": 200
     *                     },
     *                     "dateRange": {
     *                          "from": "2022-01-23T19:00:00.000Z",
     *                          "to": "2023-10-26T00:00:00.000Z"
     *                     }
     *                },
     *                "percentualModifier": 0
     *           }
     *     ]
     * }
     * ```
     */
    putPricingPipelineCatalogPriceTableId(req: operations.PutPricingPipelineCatalogPriceTableIdRequest, config?: AxiosRequestConfig): Promise<operations.PutPricingPipelineCatalogPriceTableIdResponse>;
}
