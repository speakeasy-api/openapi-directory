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
     * Retrieve payment transaction
     *
     * @remarks
     * Retrieves transaction details by order ID. All events in the transaction will be registered in this call's response body.
     *
     * In scenarios of [order changes](https://developers.vtex.com/vtex-rest-api/reference/registerchange), it is possible to insert a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). The total value of the order will be updated after the insertion of the invoice, even when there is a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic.
     */
    getPaymenttransaction(req: operations.GetPaymenttransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymenttransactionResponse>;
    /**
     * Send payment notification
     *
     * @remarks
     * Send a payment notification of a given order, by order ID.
     *
     *
  > The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
     */
    sendPaymentNotification(req: operations.SendPaymentNotificationRequest, config?: AxiosRequestConfig): Promise<operations.SendPaymentNotificationResponse>;
}
