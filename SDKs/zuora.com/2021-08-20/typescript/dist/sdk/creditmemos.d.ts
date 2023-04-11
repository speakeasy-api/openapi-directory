import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CreditMemos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Deletes a credit memo. Only credit memos with the Cancelled status can be deleted.
     *
     * You can delete a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     */
    deleteCreditMemo(req: operations.DELETECreditMemoRequest, config?: AxiosRequestConfig): Promise<operations.DELETECreditMemoResponse>;
    /**
     * Retrieve a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific credit memo.
     *
     * For a use case of this operation, see [Get credit memo](https://www.zuora.com/developer/api-guides/#Get-credit-memo).
     *
     */
    getCreditMemo(req: operations.GETCreditMemoRequest, config?: AxiosRequestConfig): Promise<operations.GETCreditMemoResponse>;
    /**
     * Retrieve a credit memo item
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific item of a credit memo. A credit memo item is a single line item in a credit memo.
     *
     */
    getCreditMemoItem(req: operations.GETCreditMemoItemRequest, config?: AxiosRequestConfig): Promise<operations.GETCreditMemoItemResponse>;
    /**
     * Retrieve a credit memo part item
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific credit memo part item.  A credit memo part item is a single line item in a credit memo part. A credit memo part can consist of several different types of items.
     *
     */
    getCreditMemoItemPart(req: operations.GETCreditMemoItemPartRequest, config?: AxiosRequestConfig): Promise<operations.GETCreditMemoItemPartResponse>;
    /**
     * List all credit memo part items
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all items of a credit memo part. A credit memo part item is a single line item in a credit memo part. A credit memo part can consist of several different types of items.
     *
     */
    getCreditMemoItemParts(req: operations.GETCreditMemoItemPartsRequest, config?: AxiosRequestConfig): Promise<operations.GETCreditMemoItemPartsResponse>;
    /**
     * List credit memo items
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all items of a credit memo. A credit memo item is a single line item in a credit memo.
     *
     * ### Filtering
     *
     * You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
     *
     * If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.
     *
     * Examples:
     *
     *   - /v1/creditmemos/402890245c7ca371015c7cb40ac30015/items?amount=100
     *
     *   - /v1/creditmemos/402890245c7ca371015c7cb40ac30015/items?amount=100&sort=createdDate
     *
     *
     */
    getCreditMemoItems(req: operations.GETCreditMemoItemsRequest, config?: AxiosRequestConfig): Promise<operations.GETCreditMemoItemsResponse>;
    /**
     * Retrieve a credit memo part
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific credit memo part. A credit memo can consist of an unapplied part, and several parts applied to invoices and debit memos.
     *
     */
    getCreditMemoPart(req: operations.GETCreditMemoPartRequest, config?: AxiosRequestConfig): Promise<operations.GETCreditMemoPartResponse>;
    /**
     * List all parts of a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all parts of a credit memo. A credit memo can consist of an unapplied part, and several parts applied to invoices and debit memos. You can use this operation to get all the applied and unapplied portions of a credit memo.
     *
     */
    getCreditMemoParts(req: operations.GETCreditMemoPartsRequest, config?: AxiosRequestConfig): Promise<operations.GETCreditMemoPartsResponse>;
    /**
     * List credit memos
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all credit memos.
     *
     * For a use case of this operation, see [Get credit memo](https://www.zuora.com/developer/api-guides/#Get-credit-memo).
     *
     *
     * ### Filtering
     *
     * You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
     *
     * If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.
     *
     * Examples:
     *
     * - /v1/creditmemos?status=Posted
     *
     * - /v1/creditmemos?referredInvoiceId=null&status=Draft
     *
     * - /v1/creditmemos?status=Posted&type=External&sort=+number
     *
     */
    getCreditMemos(req: operations.GETCreditMemosRequest, config?: AxiosRequestConfig): Promise<operations.GETCreditMemosResponse>;
    /**
     * List all taxation items of a credit memo item
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves information about the taxation items of a specific credit memo item.
     *
     */
    getTaxationItemsOfCreditMemoItem(req: operations.GETTaxationItemsOfCreditMemoItemRequest, config?: AxiosRequestConfig): Promise<operations.GETTaxationItemsOfCreditMemoItemResponse>;
    /**
     * Create taxation items for a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates taxation items for a credit memo.
     *
     */
    postCMTaxationItems(req: operations.POSTCMTaxationItemsRequest, config?: AxiosRequestConfig): Promise<operations.POSTCMTaxationItemsResponse>;
    /**
     * Create a credit memo from a charge
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates an ad-hoc credit memo from a product rate plan charge. Zuora supports the creation of credit memos from any type of product rate plan charge. The charges can also have any amount and any charge model, except for discout charge models.
     *
     * When credit memos are created from product rate plan charges, the specified amount with decimal places is now validated based on the decimal places supported by each currency.
     *
     * You can create a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     * For a use case of this operation, see [Create credit memo](https://www.zuora.com/developer/api-guides/#Create-credit-memo).
     *
     */
    postCreditMemoFromPrpc(req: operations.POSTCreditMemoFromPrpcRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreditMemoFromPrpcResponse>;
    /**
     * Generate a credit memo PDF file
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates a PDF file for a specified credit memo. To access the generated PDF file, you can download it by clicking **View PDF** on the detailed credit memo page through the Zuora UI.
     *
     * This REST API operation can be used only if you have the billing document file generation feature and the Billing user permission "Regenerate PDF" enabled.
     *
     */
    postCreditMemoPDF(req: operations.POSTCreditMemoPDFRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreditMemoPDFResponse>;
    /**
     * Email a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Sends a posted credit memo to the specified email addresses manually.
     *
     *
     *
     * ## Notes
     *   - You must activate the **Email Credit Memo | Manually email Credit Memo** notification before emailing credit memos. To include the credit memo PDF in the email, select the **Include Credit Memo PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.
     *
     *
     *   - Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the **Manual Email for Credit Memo Default Template** template is used. See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.
     *
     *
     *   - The credit memos are sent only to the work email addresses or personal email addresses of the Bill To contact if the following conditions are all met:
     *
     *     * The `useEmailTemplateSetting` field is set to `false`.
     *     * The email addresses are not specified in the `emailAddresses` field.
     *
     */
    postEmailCreditMemo(req: operations.POSTEmailCreditMemoRequest, config?: AxiosRequestConfig): Promise<operations.POSTEmailCreditMemoResponse>;
    /**
     * Refund a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Refunds a full or partial posted credit memo to your customers. Only the amount of unapplied part could be refunded.
     *
     * You can refund a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     * When you refund a credit memo, the total number of credit memo items to be refunded must be less than or equal to 10,000.
     *
     * For a use case of this operation, see [Refund processing](https://www.zuora.com/developer/api-guides/#Refund-processing).
     *
     */
    postRefundCreditMemo(req: operations.POSTRefundCreditMemoRequest, config?: AxiosRequestConfig): Promise<operations.POSTRefundCreditMemoResponse>;
    /**
     * Upload a file for a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Uploads an externally generated PDF file for a credit memo that is in Draft or Posted status.
     *
     * To use this operation, you must enable the Modify Modify Credit Memo permission. See [Billing Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     * This operation has the following restrictions:
     * - Only the PDF file format is supported.
     * - The maximum size of the PDF file to upload is 4 MB.
     * - A maximum of 50 PDF files can be uploaded for one credit memo.
     *
     */
    postUploadFileForCreditMemo(req: operations.POSTUploadFileForCreditMemoRequest, config?: AxiosRequestConfig): Promise<operations.POSTUploadFileForCreditMemoResponse>;
    /**
     * Apply a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Applies a posted credit memo to one or more invoices and debit memos.
     *
     * You can apply a credit memo to an invoice or a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     * When you apply a credit memo, the total number of credit memo items and the items that credit memo items to be applied to must be less than or equal to 10,000.
     *
     * If the limit is hit, you can follow the following instructions:
     *
     * - If you want to apply one credit memo to multiple invoices or debit memos, decrease the number of invoices or debit memos in the request.
     * - If you want to apply one credit memo to a single invoice or debit memo with a large volume of items, you have to specify invoice items or debit memo items in the request. The maximum number of invoice items or debit memo items that you can specify in the request is 1,000.
     * - If a credit memo has a large volume of items, you have to specify credit memo items in the request. The maximum number of credit memo items that you can specify in the request is 1,000.
     *
     * If the Proration application rule is used, when applying credit memos, the following quantity must be less than or equal to 10,000:
     *
     * (number of invoice items + number of debit memo items) * number of credit memo items
     *
     * Otherwise, the First In First Out rule will be used instead of the Proration rule.
     *
     */
    putApplyCreditMemo(req: operations.PUTApplyCreditMemoRequest, config?: AxiosRequestConfig): Promise<operations.PUTApplyCreditMemoResponse>;
    /**
     * Cancel a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Cancels a credit memo. Only credit memos with the Draft status can be cancelled.
     *
     * You can cancel a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     */
    putCancelCreditMemo(req: operations.PUTCancelCreditMemoRequest, config?: AxiosRequestConfig): Promise<operations.PUTCancelCreditMemoResponse>;
    /**
     * Post a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Posts a credit memo to activate it. You can post credit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).
     *
     */
    putPostCreditMemo(req: operations.PUTPostCreditMemoRequest, config?: AxiosRequestConfig): Promise<operations.PUTPostCreditMemoResponse>;
    /**
     * Unapply a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Unapplies an applied credit memo from one or more invoices and debit memos. The full applied amount from invoices and debit memos is transferred into the unapplied amount of the credit memo.
     *
     * You can unapply a credit memo from an invoice or a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     * When you unapply a credit memo, the total number of credit memo items and the items that credit memo items to be unapplied from must be less than or equal to 10,000.
     *
     * If the limit is hit, you can follow the following instructions:
     *
     * - If you want to unapply one credit memo without specifying invoices or debit memos, you have to specify the invoices or debit memos in the request.
     * - If you want to unapply one credit memo from multiple specified invoices or debit memos, decrease the number of invoices or debit memos in the request.
     * - If you want to unapply one credit memo from a single invoice or debit memo with a large volume of items, you have to specify invoice items or debit memo items in the request. The maximum number of invoice items or debit memo items that you can specify in the request is 1,000.
     * - If a credit memo has a large volume of items, you have to specify credit memo items in the request. The maximum number of credit memo items that you can specify in the request is 1,000.
     *
     *
     * If the Proration application rule is used, when unapplying credit memos, the following quantity must be less than or equal to 10,000:
     *
     * (number of invoice items + number of debit memo items) * number of credit memo items
     *
     * Otherwise, the First In First Out rule will be used instead of the Proration rule.
     *
     */
    putUnapplyCreditMemo(req: operations.PUTUnapplyCreditMemoRequest, config?: AxiosRequestConfig): Promise<operations.PUTUnapplyCreditMemoResponse>;
    /**
     * Unpost a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Unposts a credit memo that is in Posted status. If a credit memo has been applied or refunded, you are not allowed to unpost it. After a credit memo is unposted, its status becomes Draft.
     *
     * You can unpost credit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).
     *
     */
    putUnpostCreditMemo(req: operations.PUTUnpostCreditMemoRequest, config?: AxiosRequestConfig): Promise<operations.PUTUnpostCreditMemoResponse>;
    /**
     * Update a credit memo
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Updates the basic and finance information about a credit memo. Currently, Zuora supports updating tax-exclusive memo items, but does not support updating tax-inclusive memo items.
     *
     * If the amount of a memo item is updated, the tax will be recalculated in the following conditions:
     *   - The memo is created from a product rate plan charge and you use Avalara to calculate the tax.
     *   - The memo is created from an invoice and you use Avalara or Zuora Tax to calculate the tax.
     *
     * You can update a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     */
    putUpdateCreditMemo(req: operations.PUTUpdateCreditMemoRequest, config?: AxiosRequestConfig): Promise<operations.PUTUpdateCreditMemoResponse>;
}
