import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get sellers' data
 */
export declare class Sellers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Sellers
     *
     * @remarks
     * This endpoint lists all Sellers. This call's results can be filtered by [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data) through the `sc` query param.
     */
    getListSellers(req: operations.GetListSellersRequest, config?: AxiosRequestConfig): Promise<operations.GetListSellersResponse>;
    /**
     * Get Seller data by ID
     *
     * @remarks
     * Marketplace operator may call this endpoint to retrieve information about a specific seller by filtering by ID. It is also possible to filter results by sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) through the `sc` query param.
     */
    getRetrieveSeller(req: operations.GetRetrieveSellerRequest, config?: AxiosRequestConfig): Promise<operations.GetRetrieveSellerResponse>;
    /**
     * Update Seller by Seller ID
     *
     * @remarks
     * This endpoint allows marketplace operators to update the information of sellers connected to their account. You can replace a path's value with another value in order to update that single information. There is no need to fill all the body params available, only the one you wish to update.
     */
    updateSeller(req: operations.UpdateSellerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSellerResponse>;
    /**
     * Configure Seller Account
     *
     * @remarks
     * This endpoint is used by marketplace operators to configure the accounts of sellers that have already accepted the invitation to join their marketplaces.
     *
     * For marketplaces to [add sellers](https://help.vtex.com/en/tutorial/adding-a-seller--tutorials_392) without the [Seller Invite](https://help.vtex.com/en/tutorial/marketplace-invited-sellers--6rb2FkcslmDueJ689Ulb9A) feature, call this endpoint directly.
     *
     * This call includes all the information a seller needs to activate their account.
     */
    upsertSellerRequest(req: operations.UpsertSellerRequestRequest, config?: AxiosRequestConfig): Promise<operations.UpsertSellerRequestResponse>;
}
