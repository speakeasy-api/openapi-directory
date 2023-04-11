import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MatchedOffers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Matched Offer's Data by Product ID
     *
     * @remarks
     * Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.
     *
     * This endpoint retrieves the available offers for a speciic Product ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog.
     *
     * The call returns a list of offers for that ID, that contain the following data:
     *
     * - Seller that sells the SKU
     *
     * - Correspondent SKU ID
     *
     * - SKU's price value
     *
     * - Inventory level
     *
     * - Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.
     */
    getProductoffers(req: operations.GetProductoffersRequest, config?: AxiosRequestConfig): Promise<operations.GetProductoffersResponse>;
    /**
     * Get Matched Offer's Data by SKU ID
     *
     * @remarks
     * Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.
     *
     * This endpoint retrieves the available offers for a speciic SKU ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog.
     *
     * The call returns a list of offers for that ID, that contain the following data:
     *
     * - Seller that sells the SKU
     *
     * - Correspondent SKU ID
     *
     * - SKU's price value
     *
     * - Inventory level
     *
     * - Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.
     */
    getSKUoffers(req: operations.GetSKUoffersRequest, config?: AxiosRequestConfig): Promise<operations.GetSKUoffersResponse>;
    /**
     * Get Matched Offers List
     *
     * @remarks
     * Offers are seller's products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.
     *
     *  This endpoint retrieves the available offers in a marketplace. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace, and are currently in its catalog.
     *
     * It is possible to filter the search through the following parameters:
     *
     * - rows
     * - sort
     *
     * - start
     *
     * - fq
     */
    getofferslist(req: operations.GetofferslistRequest, config?: AxiosRequestConfig): Promise<operations.GetofferslistResponse>;
}
