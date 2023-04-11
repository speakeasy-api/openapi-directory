import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Operations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate a billing preview
     *
     * @remarks
     * **Note:** The Billing Preview feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     *
     * Generates a preview of future invoice items for one customer account. Use the BillingPreview call to calculate how much a single customer will be invoiced from the most recent invoice to a specific end of term date in the future.
     *
     * Additionally, you can use the BillingPreview service to access real-time data on an individual customer's usage consumption.
     *
     * The BillingPreview call does not calculate taxes for charges in the subscription.
     *
     * If you have the Invoice Settlement feature enabled, you can also generate a preview of future credit memo items for one customer account. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    postBillingPreview(req: operations.POSTBillingPreviewRequest, config?: AxiosRequestConfig): Promise<operations.POSTBillingPreviewResponse>;
    /**
     * Invoice and collect
     *
     * @remarks
     * Generates and posts invoices and credit memos and collects payments for posted invoices. Credit memos are only available if you have the Invoice Settlement feature enabled and negative charges exist. Credit memos will not be applied to invoices. If draft invoices and credit memos exist when you run this operation, this operation will post the invoices and credit memos. Note that draft credit memos created from an invoice or a product rate plan charge will not be posted.
     *
     * You can use this operation to generate invoices and collect payments on the posted invoices,
     *  or else simply collect payment on a specified existing
     * invoice. The customer's default payment method is used, and the full
     * amount due is collected. The operation depends on the parameters you
     * specify.
     *
     * - To generate one or more new invoices for that customer and collect
     * payment on the generated and other unpaid invoice(s), leave the **invoiceId** field empty.
     *
     * - To collect payment on an existing invoice, specify the invoice ID.
     *
     *
     * The operation is atomic; if any part is unsuccessful, the entire
     * operation is rolled back.
     *
     * When an error occurs, gateway reason codes and error messages are returned the error response of this operation. The following items are some gateway response code examples.
     *
     * - Orbital: `05 Do Not Honor`; `14 Invalid Credit Card Number`
     * - Vantiv: `301 Invalid Account Number`; `304 Lost/Stolen Card`
     * - CyberSource2: `202 Expired card`; `231 Invalid account number`
     *
     * For more reason code information, see the corresponding payment gateway documentation.
     *
     *
     * ## Notes
     *
     * Timeouts may occur when using this method on an account that
     * has an extremely high number of subscriptions.
     *
     */
    postTransactionInvoicePayment(req: operations.POSTTransactionInvoicePaymentRequest, config?: AxiosRequestConfig): Promise<operations.POSTTransactionInvoicePaymentResponse>;
}
