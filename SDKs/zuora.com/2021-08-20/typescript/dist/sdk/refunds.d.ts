import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Refunds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a refund
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Deletes a refund. You can delete a refund with the Canceled or Error status.
     *
     * If you have the Invoice Settlement feature enabled, refunds applied to credit balance cannot be deleted.
     *
     */
    deleteRefund(req: operations.DELETERefundRequest, config?: AxiosRequestConfig): Promise<operations.DELETERefundResponse>;
    /**
     * Retrieve a refund
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific refund.
     *
     */
    getRefund(req: operations.GETRefundRequest, config?: AxiosRequestConfig): Promise<operations.GETRefundResponse>;
    /**
     * Retrieve a refund part item
     *
     * @remarks
     * **Note:** This operation is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific refund part item. A refund part item is a single line item in a refund part. A refund part can consist of several different types of items.
     *
     */
    getRefundItemPart(req: operations.GETRefundItemPartRequest, config?: AxiosRequestConfig): Promise<operations.GETRefundItemPartResponse>;
    /**
     * List all refund part items
     *
     * @remarks
     * **Note:** This operation is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all items of a refund part. A refund part item is a single line item in a refund part. A refund part can consist of several different types of items.
     *
     */
    getRefundItemParts(req: operations.GETRefundItemPartsRequest, config?: AxiosRequestConfig): Promise<operations.GETRefundItemPartsResponse>;
    /**
     * Retrieve a refund part
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific refund part.
     *
     */
    getRefundPart(req: operations.GETRefundPartRequest, config?: AxiosRequestConfig): Promise<operations.GETRefundPartResponse>;
    /**
     * List all parts of a refund
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all parts of a refund.
     *
     */
    getRefundParts(req: operations.GETRefundPartsRequest, config?: AxiosRequestConfig): Promise<operations.GETRefundPartsResponse>;
    /**
     * List refunds
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all refunds. Two types of refunds are available, electronic refunds and external refunds.
     *
     * ### Filtering
     *
     * You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
     *
     * If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.
     *
     * Examples:
     *
     * - /v1/refunds?status=Processed
     *
     * - /v1/refunds?amount=4&status=Processed
     *
     * - /v1/refunds?status=Processed&type=External&sort=+number
     *
     */
    getRefunds(req: operations.GETRefundsRequest, config?: AxiosRequestConfig): Promise<operations.GETRefundsResponse>;
    /**
     * CRUD: Delete a refund
     */
    objectDELETERefund(req: operations.ObjectDELETERefundRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETERefundResponse>;
    /**
     * CRUD: Retrieve a refund
     */
    objectGETRefund(req: operations.ObjectGETRefundRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETRefundResponse>;
    /**
     * CRUD: Create a refund
     *
     * @remarks
     * Creates a refund.
     *
     * If you have the Invoice Settlement feature enabled, you can use this operation to unapply the payment from an invoice or multiple invoices, and refund the payment.
     *
     * If the unapplied payment is left in the following scenarios, you have to reapply the unapplied payment to the original invoices:
     *
     * - An electronic refund in Processing status is handled to change to Error. An unapplied payment is left.
     * - An electronic refund gets to Error, and payment reapplying fails due to the concurrent issue.
     * - The refund canceling operation updates the status of a refund from Processed to Canceled. When it is successful, an unapplied payment is left.
     *
     */
    objectPOSTRefund(req: operations.ObjectPOSTRefundRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTRefundResponse>;
    /**
     * CRUD: Update a refund
     */
    objectPUTRefund(req: operations.ObjectPUTRefundRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTRefundResponse>;
    /**
     * Cancel a refund
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Cancels a refund.
     *
     * If you have the Invoice Settlement feature enabled, refunds applied to credit balance cannot be cancelled.
     *
     */
    putCancelRefund(req: operations.PUTCancelRefundRequest, config?: AxiosRequestConfig): Promise<operations.PUTCancelRefundResponse>;
    /**
     * Update a refund
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Updates the basic and finance information about a refund.
     *
     */
    putUpdateRefund(req: operations.PUTUpdateRefundRequest, config?: AxiosRequestConfig): Promise<operations.PUTUpdateRefundResponse>;
}
