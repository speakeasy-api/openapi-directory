import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Payments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePayment - Delete a payment
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Deletes a payment. Only payments with the Cancelled status can be deleted.
     *
     * If you have the Invoice Settlement feature enabled, overpayments applied to credit balance cannot be deleted.
     *
    **/
    deletePayment(req: operations.DeletePaymentRequest, config?: AxiosRequestConfig): Promise<operations.DeletePaymentResponse>;
    /**
     * getPayment - Retrieve a payment
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about one specific payment.
     *
    **/
    getPayment(req: operations.GetPaymentRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentResponse>;
    /**
     * getPaymentItemPart - Retrieve a payment part item
     *
     * **Note:** This operation is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific payment part item. A payment part item is a single line item in a payment part. A payment part can consist of several different types of items.
     *
    **/
    getPaymentItemPart(req: operations.GetPaymentItemPartRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentItemPartResponse>;
    /**
     * getPaymentItemParts - List all payment part items
     *
     * **Note:** This operation is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all items of a payment part. A payment part item is a single line item in a payment part. A payment part can consist of several different types of items.
     *
    **/
    getPaymentItemParts(req: operations.GetPaymentItemPartsRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentItemPartsResponse>;
    /**
     * getPaymentPart - Retrieve a payment part
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific payment part. A payment can consist of an unapplied part, and several parts applied to invoices and debit memos.
     *
    **/
    getPaymentPart(req: operations.GetPaymentPartRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentPartResponse>;
    /**
     * getPaymentParts - List all parts of a payment
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all parts of a payment. A payment can consist of an unapplied part, and several parts applied to invoices and debit memos. You can use this operation to get all the applied and unapplied portions of a payment.
     *
    **/
    getPaymentParts(req: operations.GetPaymentPartsRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentPartsResponse>;
    /**
     * getRetrieveAllPayments - List payments
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all payments from all your customer accounts.
     *
     * ### Filtering
     *
     * You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
     *
     * If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.
     *
     * Examples:
     *
     * - /v1/payments?status=Processed
     *
     * - /v1/payments?currency=USD&status=Processed
     *
     * - /v1/payments?status=Processed&type=External&sort=+number
     *
    **/
    getRetrieveAllPayments(req: operations.GetRetrieveAllPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRetrieveAllPaymentsResponse>;
    /**
     * objectDeletePayment - CRUD: Delete a payment
     *
     * Deletes a payment. Only payments with the Cancelled status can be deleted.
     *
    **/
    objectDeletePayment(req: operations.ObjectDeletePaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeletePaymentResponse>;
    /**
     * objectGetPayment - CRUD: Retrieve a payment
     *
     * Retrieves the information about one specific payment.
     *
    **/
    objectGetPayment(req: operations.ObjectGetPaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetPaymentResponse>;
    /**
     * objectPostPayment - CRUD: Create a payment
     *
     * Creates a payment for one or multiple invoices.
     *
    **/
    objectPostPayment(req: operations.ObjectPostPaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostPaymentResponse>;
    /**
     * objectPutPayment - CRUD: Update a payment
     *
     * Updates a payment.
     *
    **/
    objectPutPayment(req: operations.ObjectPutPaymentRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutPaymentResponse>;
    /**
     * postCreatePayment - Create a payment
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates a payment in the following scenarios:
     *
     * - A full or partial payment on an invoice or a debit memo
     * - A full or partial payment on several invoices and debit memos
     * - An unapplied payment in the following situations:
     *   - You do not know which customer account the payment belongs to.
     *   - You know which customer account the payment belongs to, but you do not know which invoice the payment is applied to.
     *   - You receive a payment from your customer that exceeds the balance on the invoice.
     *   - You receive a payment from your customer before the invoice has been created.
     *   - You intend to create a payment without any invoices or debit memos.
     * - A standalone payment. If you only need to create and process an electronic payment in Zuora through a Zuora gateway integration but settle the payment outside of Zuora, you can create a standalone payment. For a standalone payment, you can specify a currency different from the payment currency in the customer account settings.
     *
     *   The support for standalone payments is in the Early Adopter phase. If you want to use this feature, submit a request at [Zuora Global Support](http://support.zuora.com/) to enable it.
     *
     * If you do not know to which customer account the payment belongs, you can create a payment without specifying a customer account.
     *
     * When you create a payment, the total number of invoice items and debit memo items that the payment will apply to should be less than or equal to 10,000.
     *
     * For more information, see [Create Payments](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/AA_Create_Payments) and [Create Payments Without Specifying Customer Accounts](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/AA_Create_Payments_Without_Specifying_Customer_Accounts).
     *
     *
    **/
    postCreatePayment(req: operations.PostCreatePaymentRequest, config?: AxiosRequestConfig): Promise<operations.PostCreatePaymentResponse>;
    /**
     * postRefundPayment - Refund a payment
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Refunds a full or partial unapplied payment to your customers. To refund applied payments, you must unapply the applied payments from the invoices or debit memos, and then refund the unapplied payments to customers.
     *
     * For more information, see [Refund Payments](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/Z_Refund_Payments).
     *
     * For a use case of this operation, see [Refund processing](https://www.zuora.com/developer/api-guides/#Refund-processing).
     *
    **/
    postRefundPayment(req: operations.PostRefundPaymentRequest, config?: AxiosRequestConfig): Promise<operations.PostRefundPaymentResponse>;
    /**
     * putApplyPayment - Apply a payment
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Applies an unapplied payment to invoices and debit memos.
     *
     * When you apply a payment, the total number of invoice items and debit memo items that the payment will apply to must be less than or equal to 10,000.
     *
     * If the limit is hit, you can follow the instructions:
     * - If you want to apply one payment to multiple invoices or debit memos, decrease the number of invoices or debit memos in the request.
     * - If you want to apply one payment to a single invoice or debit memo with a large volume of items, you have to specify invoice items in the request. The maximum number of invoice items that you can specify in the request is 1,000.
     *
     * For more information, see [Apply Unapplied Payments to Invoices and Debit Memos](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/Apply_Unapplied_Payments_to_Invoices_and_Debit_Memos).
     *
    **/
    putApplyPayment(req: operations.PutApplyPaymentRequest, config?: AxiosRequestConfig): Promise<operations.PutApplyPaymentResponse>;
    /**
     * putCancelPayment - Cancel a payment
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Cancels a payment.
     *
     * If you have the Invoice Settlement feature enabled, overpayments applied to credit balance cannot be cancelled.
     *
    **/
    putCancelPayment(req: operations.PutCancelPaymentRequest, config?: AxiosRequestConfig): Promise<operations.PutCancelPaymentResponse>;
    /**
     * putTransferPayment - Transfer a payment
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Transfers an unapplied payment.
     *
     * For more information, see [Transfer Unapplied Payments](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/Transfer_Unapplied_Payments).
     *
    **/
    putTransferPayment(req: operations.PutTransferPaymentRequest, config?: AxiosRequestConfig): Promise<operations.PutTransferPaymentResponse>;
    /**
     * putUnapplyPayment - Unapply a payment
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Unapplies an applied payment from invoices and debit memos.
     *
     * When you unapply a payment, the total number of invoice items and debit memo items that the payment will unapply from must be less than or equal to 10,000.
     *
     * If the limit is hit, you can follow the instructions:
     * - If you want to unapply one payment without specifying invoices or debit memos, you have to specify the invoices or debit memos in the request.
     * - If you want to unapply one payment from multiple specified invoices or debit memos, decrease the number of invoices or debit memos in the request.
     * - If you want to unapply one payment from a single invoice or debit memo with a large volume of items, you have to specify invoice items in the request. The maximum number of invoice items that you can specify in the request is 1,000.
     *
     * For more information, see [Unapply Payments from Invoices and Debit Memos](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/Unapply_Payments_from_Invoices_and_Debit_Memos).
     *
    **/
    putUnapplyPayment(req: operations.PutUnapplyPaymentRequest, config?: AxiosRequestConfig): Promise<operations.PutUnapplyPaymentResponse>;
    /**
     * putUpdatePayment - Update a payment
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Updates a payment.
     *
    **/
    putUpdatePayment(req: operations.PutUpdatePaymentRequest, config?: AxiosRequestConfig): Promise<operations.PutUpdatePaymentResponse>;
}
