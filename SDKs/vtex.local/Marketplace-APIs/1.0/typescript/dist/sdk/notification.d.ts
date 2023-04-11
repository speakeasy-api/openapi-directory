import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Notification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Notify marketplace of inventory update
     *
     * @remarks
     * This endpoint is used by *sellers* to notify marketplaces that the inventory level has changed for one of their SKUs.
     *
     * There is no request body in this call, indicating the new inventory level, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the inventory level of an SKU (`skuId`).
     *
     * *Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated inventory  information.
     */
    inventoryNotification(req: operations.InventoryNotificationRequest, config?: AxiosRequestConfig): Promise<operations.InventoryNotificationResponse>;
    /**
     * Notify marketplace of price update
     *
     * @remarks
     * This endpoint is used by *sellers* to notify marketplaces that the price has changed for one of their SKUs.
     *
     * There is no request body in this call, indicating the new price value, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the price of an SKU (`skuId`).
     *
     * *Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated price information.
     */
    priceNotification(req: operations.PriceNotificationRequest, config?: AxiosRequestConfig): Promise<operations.PriceNotificationResponse>;
}
