import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get sellers' data
 */
export declare class SellerCommissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Upsert Seller Commissions in Bulk
     *
     * @remarks
     * This endpoint is used by marketplace operators to define comissions for multiple categories.
     */
    bulkUpsertSellerCommissions(req: operations.BulkUpsertSellerCommissionsRequest, config?: AxiosRequestConfig): Promise<operations.BulkUpsertSellerCommissionsResponse>;
    /**
     * List Seller Commissions by seller ID
     *
     * @remarks
     * This endpoint retrieves all comissions configured for a specific seller.
     */
    listSellerCommissions(req: operations.ListSellerCommissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSellerCommissionsResponse>;
    /**
     * Remove Seller Commissions by Category ID
     *
     * @remarks
     * This endpoint removes a seller comission on the selected category.
     */
    removeSellerCommissions(req: operations.RemoveSellerCommissionsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveSellerCommissionsResponse>;
    /**
     * Get Seller Commissions by Category ID
     *
     * @remarks
     * This endpoint retrieves seller comissions applied to the selected category.
     */
    retrieveSellerCommissions(req: operations.RetrieveSellerCommissionsRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveSellerCommissionsResponse>;
    /**
     * Upsert Seller Commissions by Category ID
     *
     * @remarks
     * This endpoint is used by marketplace operators to define comissions for a single category, by ID.
     */
    upsertSellerCommissions(req: operations.UpsertSellerCommissionsRequest, config?: AxiosRequestConfig): Promise<operations.UpsertSellerCommissionsResponse>;
}
