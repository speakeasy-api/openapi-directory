import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Payment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Send payment notification
     *
     * @remarks
     * Send a payment notification of a given order, by order ID and payment ID.
     *
     *
  > The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
     *
     *
  > Learn more about [Transaction Details](https://help.vtex.com/en/tutorial/how-to-view-the-orders-details).
     *
     *
     * ## Request body properties
     *
     * | Attribute    | Type        | Description |
     * | --------------- |:---------:| --------------------------------------:|
     * | `orderId` | string | Order Id |
     * | `paymentId` | string | Payment ID |
     */
    sendPaymentNotification2(req: operations.SendPaymentNotification2Request, config?: AxiosRequestConfig): Promise<operations.SendPaymentNotification2Response>;
}
