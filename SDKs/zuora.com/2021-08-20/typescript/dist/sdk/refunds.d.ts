import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Refunds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRefund - Delete a refund
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Deletes a refund. You can delete a refund with the Canceled or Error status.
     *
     * If you have the Invoice Settlement feature enabled, refunds applied to credit balance cannot be deleted.
     *
    **/
    deleteRefund(req: operations.DeleteRefundRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRefundResponse>;
    /**
     * getRefund - Retrieve a refund
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific refund.
     *
    **/
    getRefund(req: operations.GetRefundRequest, config?: AxiosRequestConfig): Promise<operations.GetRefundResponse>;
    /**
     * getRefundItemPart - Retrieve a refund part item
     *
     * **Note:** This operation is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific refund part item. A refund part item is a single line item in a refund part. A refund part can consist of several different types of items.
     *
    **/
    getRefundItemPart(req: operations.GetRefundItemPartRequest, config?: AxiosRequestConfig): Promise<operations.GetRefundItemPartResponse>;
    /**
     * getRefundItemParts - List all refund part items
     *
     * **Note:** This operation is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all items of a refund part. A refund part item is a single line item in a refund part. A refund part can consist of several different types of items.
     *
    **/
    getRefundItemParts(req: operations.GetRefundItemPartsRequest, config?: AxiosRequestConfig): Promise<operations.GetRefundItemPartsResponse>;
    /**
     * getRefundPart - Retrieve a refund part
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific refund part.
     *
    **/
    getRefundPart(req: operations.GetRefundPartRequest, config?: AxiosRequestConfig): Promise<operations.GetRefundPartResponse>;
    /**
     * getRefundParts - List all parts of a refund
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all parts of a refund.
     *
    **/
    getRefundParts(req: operations.GetRefundPartsRequest, config?: AxiosRequestConfig): Promise<operations.GetRefundPartsResponse>;
    /**
     * getRefunds - List refunds
     *
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
    **/
    getRefunds(req: operations.GetRefundsRequest, config?: AxiosRequestConfig): Promise<operations.GetRefundsResponse>;
    /**
     * objectDeleteRefund - CRUD: Delete a refund
    **/
    objectDeleteRefund(req: operations.ObjectDeleteRefundRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteRefundResponse>;
    /**
     * objectGetRefund - CRUD: Retrieve a refund
    **/
    objectGetRefund(req: operations.ObjectGetRefundRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetRefundResponse>;
    /**
     * objectPostRefund - CRUD: Create a refund
     *
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
    **/
    objectPostRefund(req: operations.ObjectPostRefundRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostRefundResponse>;
    /**
     * objectPutRefund - CRUD: Update a refund
    **/
    objectPutRefund(req: operations.ObjectPutRefundRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutRefundResponse>;
    /**
     * putCancelRefund - Cancel a refund
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Cancels a refund.
     *
     * If you have the Invoice Settlement feature enabled, refunds applied to credit balance cannot be cancelled.
     *
    **/
    putCancelRefund(req: operations.PutCancelRefundRequest, config?: AxiosRequestConfig): Promise<operations.PutCancelRefundResponse>;
    /**
     * putUpdateRefund - Update a refund
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Updates the basic and finance information about a refund.
     *
    **/
    putUpdateRefund(req: operations.PutUpdateRefundRequest, config?: AxiosRequestConfig): Promise<operations.PutUpdateRefundResponse>;
}
