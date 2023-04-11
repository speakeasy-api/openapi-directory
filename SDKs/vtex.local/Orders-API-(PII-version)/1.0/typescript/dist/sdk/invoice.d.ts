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
     * Once the order is invoiced, the seller should use this request to send the invoice information to the marketplace.
     *
     * We strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided.
     *
     * It is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.
     *
     * Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.
     *
     *
  > The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
     */
    invoiceNotification2(req: operations.InvoiceNotification2Request, config?: AxiosRequestConfig): Promise<operations.InvoiceNotification2Response>;
}
