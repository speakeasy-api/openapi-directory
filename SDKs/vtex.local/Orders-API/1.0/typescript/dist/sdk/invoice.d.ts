import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Invoice {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Order invoice notification
     *
     * @remarks
     * Entering the [invoice in the order](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) is a required step for its [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196#order-status-details) to change to Invoiced - a sign that the order has been successfully completed. Remember that once an order is read as invoiced by the system, this status cannot be changed.
     *
     * The total value of the order will be updated after the insertion of the invoice, even when there's a [Partial invoice](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic.
     *
     * We strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided.
     *
     * When returning items, an input invoice must be sent through this call. For that, the `type` field should be filled in with `input`.
     *
     * It is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.
     *
     * For marketplace integrations: once the order is invoiced, the seller should use this request to send the invoice information to the marketplace. Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.
     *
     *
  > The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
     *
     *
  > 📘 Onboarding guide
     * >
     * > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
     *
     *
     */
    invoiceNotification(req: operations.InvoiceNotificationRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceNotificationResponse>;
    /**
     * Update order's partial invoice (send tracking number)
     *
     * @remarks
     * Update a given order, adding its tracking number to its [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe).
     *
     *
  After using this call to add a tracking number to an order, you can use the [Update order tracking status](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus) API request to add tracking events.
     *
     *
  > The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).
     */
    updatepartialinvoiceSendTrackingNumber(req: operations.UpdatepartialinvoiceSendTrackingNumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdatepartialinvoiceSendTrackingNumberResponse>;
}
