import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SKUBindings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Activate SKU Binding
     *
     * @remarks
     * Changes the status of an SKU Binding to active, setting `isActive` to `true`.
     *
     *  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/activate/{sellerId}/{skuSellerId}`.
     */
    activateSKUBinding(req: operations.ActivateSKUBindingRequest, config?: AxiosRequestConfig): Promise<operations.ActivateSKUBindingResponse>;
    /**
     * Bind a seller's SKU to another SKU
     *
     * @remarks
     * Associates a seller's SKU to another marketplace SKU.
     *
     *  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.
     *
     * ## Request body example
     *
     * ```json
     * {
     *     "StockKeepingUnitId": 1
     * }
     * ```
     */
    bindtoanothersku(req: operations.BindtoanotherskuRequest, config?: AxiosRequestConfig): Promise<operations.BindtoanotherskuResponse>;
    /**
     * Change Notification with SKU ID
     *
     * @remarks
     * The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.
     *
     * With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.
     *
     * The body of the request should be empty.
     *
     *  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{skuId}`.
     */
    changeNotification(req: operations.ChangeNotificationRequest, config?: AxiosRequestConfig): Promise<operations.ChangeNotificationResponse>;
    /**
     * Deactivate SKU Binding
     *
     * @remarks
     * Changes the status of an SKU Binding to inactive, setting `isActive` to `false`.
     *
     *   > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}`.
     */
    deactivateSKUBinding(req: operations.DeactivateSKUBindingRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateSKUBindingResponse>;
    /**
     * Remove a seller's SKU Binding
     *
     * @remarks
     * Remove a seller's SKU binding, given the Seller ID and the SKU ID in the seller's store.
     *
     *   > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/remove/{sellerId}/{sellerSkuId}`.
     */
    deleteSKUsellerassociation(req: operations.DeleteSKUsellerassociationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSKUsellerassociationResponse>;
    /**
     * Get details of a seller's SKU
     *
     * @remarks
     * Retrieves the details of a seller's SKU given a seller ID and the SKU ID in the seller's store.
     *
     *  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.
     *
     * ## Response body example
     *
     * ```json
     * {
     *     "IsPersisted": true,
     *     "IsRemoved": false,
     *     "SkuSellerId": 102,
     *     "UpdateDate": "2021-04-12T20:06:59.413Z",
     *     "RequestedUpdateDate": null,
     *     "SellerStockKeepingUnitId": "71",
     *     "SellerId": "vtxkfj7352",
     *     "StockKeepingUnitId": 1,
     *     "IsActive": true
     * }
     * ```
     */
    getSKUseller(req: operations.GetSKUsellerRequest, config?: AxiosRequestConfig): Promise<operations.GetSKUsellerResponse>;
    /**
     * Get all SKU Bindings by Seller ID
     *
     * @remarks
     * Retrieves a list of SKU Bindings given a specific Seller ID.
     *
     *  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/list/bysellerId/{sellerId}`.
     *
     * ## Response body example
     *
     * ```json
     * [
     *     {
     *         "SellerStockKeepingUnitId": "24",
     *         "FreightCommissionPercentage": null,
     *         "ProductCommissionPercentage": null,
     *         "SellerId": "vtxkfj7352",
     *         "StockKeepingUnitId": 121,
     *         "IsActive": true
     *     }
     * ]
     * ```
     */
    getallbySellerId(req: operations.GetallbySellerIdRequest, config?: AxiosRequestConfig): Promise<operations.GetallbySellerIdResponse>;
    /**
     * Get SKU Bindings by SKU ID
     *
     * @remarks
     * Retrieves SKU Bindings details by SKU ID.
     *
     * ## Response body example
     *
     * ```json
     * [
     *     {
     *         "Id": 48,
     *         "SellerId": "cosmetics1",
     *         "StockKeepingUnitId": 1,
     *         "SellerSkuId": "42",
     *         "IsActive": true,
     *         "LastUpdateDate": "2020-10-21T19:13:00.657",
     *         "SalesPolicy": 0
     *     }
     * ]
     * ```
     */
    getbySkuId(req: operations.GetbySkuIdRequest, config?: AxiosRequestConfig): Promise<operations.GetbySkuIdResponse>;
    /**
     * Get SKU Bindings information
     *
     * @remarks
     * Retrieves SKU Bindings administrative information using optional query params `sellerId`, `skuId`, `sellerSkuId` and `IsActive` to filter results and `size` to restrict the amount of results.
     *
     *  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/admin`.
     *
     * ## Response body example
     *
     * ```json
     * [
     *     {
     *         "IsPersisted": true,
     *         "IsRemoved": false,
     *         "SkuSellerId": 1,
     *         "UpdateDate": "2019-12-04T01:56:00.673Z",
     *         "RequestedUpdateDate": null,
     *         "SellerStockKeepingUnitId": "12",
     *         "SellerId": "cosmetics1",
     *         "StockKeepingUnitId": 25,
     *         "IsActive": true
     *     }
     * ]
     * ```
     */
    getpagedadmin(req: operations.GetpagedadminRequest, config?: AxiosRequestConfig): Promise<operations.GetpagedadminResponse>;
    /**
     * Get paged SKU Bindings by Seller ID
     *
     * @remarks
     * Retrieves a paged list of SKU Bindings given a specific Seller ID.
     *
     *  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/paged/sellerid/{sellerId}`.
     *
     * ## Response body example
     *
     * ```json
     * [
     *     {
     *         "SellerId": "vtxkfj7352",
     *         "StockKeepingUnitId": 121,
     *         "SellerStockKeepingUnitId": "24",
     *         "IsActive": true,
     *         "FreightCommissionPercentage": null,
     *         "ProductCommissionPercentage": null
     *     },
     *     {
     *         "SellerId": "vtxkfj7352",
     *         "StockKeepingUnitId": 14,
     *         "SellerStockKeepingUnitId": "60",
     *         "IsActive": true,
     *         "FreightCommissionPercentage": null,
     *         "ProductCommissionPercentage": null
     *     }
     * ]
     * ```
     */
    getpagedbySellerId(req: operations.GetpagedbySellerIdRequest, config?: AxiosRequestConfig): Promise<operations.GetpagedbySellerIdResponse>;
    /**
     * Insert SKU Binding
     *
     * @remarks
     * Creates an SKU Binding, associating a seller's SKU with a marketplace's SKU.
     *
     *  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/insertion`.
     */
    insertSKUBinding(req: operations.InsertSKUBindingRequest, config?: AxiosRequestConfig): Promise<operations.InsertSKUBindingResponse>;
    /**
     * Change Notification with Seller ID and Seller SKU ID
     *
     * @remarks
     * The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.
     *
     * With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.
     *
     * There are two information expected by the marketplace in this request: the `sellerId`, which identifies the seller, and the `sellerSkuId`, which identifies the binding of the seller with the SKU.
     *
     * Both information are passed through the request URL. The body of the request should be empty.
     *  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}`.
     *
     * ## Example
     *
     * Let's say your seller has the ID `123` in the marketplace and you want to inform the marketplace that has been a change in the SKU with ID `700`.
     *
     * In this case, you would have to replace the `sellerId` parameter with the value `123` and the `skuId` parameter with the value `700`. The URL of the request would be the following.
     *
     * ```
     * https://{{accountName}}.vtexcommercestable.com.br/api/sku-binding/pvt/skuseller/changenotification/123/700
     * ```
     *
     * ## Response codes
     *
     * The following response codes are possible for this request.
     * * 200: the SKU whose ID was informed in the URL already exists in the marketplace and was found. The marketplace can now proceed with a fulfillment simulation in order to get updated information about this SKU's inventory and price.
     * * 403: Failure in the authentication.
     * * 404: the SKU was not found in the marketplace. The body of the response, in this case, should follow this format: "Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`. This means that the seller can now proceed with sending an offer to the marketplace in order to suggest that this SKU is sold there.
     * * 429: Failure due to too many requests.
     */
    postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId(req: operations.PostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRequest, config?: AxiosRequestConfig): Promise<operations.PostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdResponse>;
}
