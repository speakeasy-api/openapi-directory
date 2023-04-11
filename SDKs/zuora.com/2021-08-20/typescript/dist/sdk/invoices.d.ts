import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Invoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all application parts of an invoice
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves information about the payments or credit memos that are applied to a specified invoice.
     *
     */
    getInvoiceApplicationParts(req: operations.GETInvoiceApplicationPartsRequest, config?: AxiosRequestConfig): Promise<operations.GETInvoiceApplicationPartsResponse>;
    /**
     * List all files of an invoice
     *
     * @remarks
     * Retrieves the information about all PDF files of a specified invoice.
     *
     * Invoice PDF files are returned in reverse chronological order by the value of the `versionNumber` field.
     *
     * **Note**: This API only retrieves the PDF files that have been generated. If the latest PDF file is being generated, it will not be included in the response.
     *
     * You can use the [Query](https://www.zuora.com/developer/api-reference/#operation/Action_POSTquery) action to get the latest PDF file, for example: `"select Body from Invoice where Id = '2c93808457d787030157e0324aea5158'"`.
     *
     * See [Query an Invoice Body](https://knowledgecenter.zuora.com/Central_Platform/API/G_SOAP_API/E1_SOAP_API_Object_Reference/Invoice/Query_an_Invoice_Body_Field) for more information.
     *
     */
    getInvoiceFiles(req: operations.GETInvoiceFilesRequest, config?: AxiosRequestConfig): Promise<operations.GETInvoiceFilesResponse>;
    /**
     * List all items of an invoice
     *
     * @remarks
     * Retrieves the information about all items of a specified invoice.
     *
     */
    getInvoiceItems(req: operations.GETInvoiceItemsRequest, config?: AxiosRequestConfig): Promise<operations.GETInvoiceItemsResponse>;
    /**
     * List all taxation items of an invoice item
     *
     * @remarks
     * Retrieves information about the taxation items of a specific invoice item.
     *
     */
    getTaxationItemsOfInvoiceItem(req: operations.GETTaxationItemsOfInvoiceItemRequest, config?: AxiosRequestConfig): Promise<operations.GETTaxationItemsOfInvoiceItemResponse>;
    /**
     * CRUD: Delete an invoice
     */
    objectDELETEInvoice(req: operations.ObjectDELETEInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEInvoiceResponse>;
    /**
     * CRUD: Retrieve an invoice
     */
    objectGETInvoice(req: operations.ObjectGETInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETInvoiceResponse>;
    /**
     * CRUD: Update an invoice
     */
    objectPUTInvoice(req: operations.ObjectPUTInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTInvoiceResponse>;
    /**
     * Create a credit memo from an invoice
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates an ad-hoc credit memo from an invoice.
     *
     * You can create a credit memo from an invoice only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     * For a use case of this operation, see [Create credit memo](https://www.zuora.com/developer/api-guides/#Create-credit-memo).
     *
     */
    postCreditMemoFromInvoice(req: operations.POSTCreditMemoFromInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreditMemoFromInvoiceResponse>;
    /**
     * Create a debit memo from an invoice
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates an ad-hoc debit memo from an invoice.
     *
     * You can create a debit memo from an invoice only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     */
    postDebitMemoFromInvoice(req: operations.POSTDebitMemoFromInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.POSTDebitMemoFromInvoiceResponse>;
    /**
     * Email an invoice
     *
     * @remarks
     * Sends a posted invoice to the specified email addresses manually.
     *
     *
     *
     * ## Notes
     *   - You must activate the **Manual Email For Invoice | Manual Email For Invoice** notification before emailing invoices. To include the invoice PDF in the email, select the **Include Invoice PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.
     *
     *
     *   - Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the **Invoice Posted Default Email Template** template is used. See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.
     *
     *
     *   - The invoices are sent only to the work email addresses or personal email addresses of the Bill To contact if the following conditions are all met:
     *
     *     * The `useEmailTemplateSetting` field is set to `false`.
     *     * The email addresses are not specified in the `emailAddresses` field.
     *
     */
    postEmailInvoice(req: operations.POSTEmailInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.POSTEmailInvoiceResponse>;
    /**
     * Create a standalone invoice
     *
     * @remarks
     * **Note:** This operation is only available if you have Unified Invoicing enabled. The Unified Invoicing feature is in the Early Adopter phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Creates a standalone invoice for selling physical goods, services or other items on a non-recurring basis to your subscription customers.
     *
     * To use this operation, you must have the Create Standalone Invoice and Modify Invoice user permissions. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     */
    postStandaloneInvoice(req: operations.POSTStandaloneInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.POSTStandaloneInvoiceResponse>;
    /**
     * Upload a file for an invoice
     *
     * @remarks
     * Uploads an externally generated invoice PDF file for an invoice that is in Draft or Posted status.
     *
     * To use this operation, you must enable the Modify Invoice permission. See [Billing Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     * This operation has the following restrictions:
     * - Only the PDF file format is supported.
     * - The maximum size of the PDF file to upload is 4 MB.
     * - A maximum of 50 PDF files can be uploaded for one invoice.
     *
     */
    postUploadFileForInvoice(req: operations.POSTUploadFileForInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.POSTUploadFileForInvoiceResponse>;
    /**
     * Update invoices
     *
     * @remarks
     * Updates multiple invoices in batches with one call.
     *
     * ## Limitations
     *
     * This operation has the following limitations:
     *
     * * You can update a maximum of 50 invoices by one call.
     *
     */
    putBatchUpdateInvoices(req: operations.PUTBatchUpdateInvoicesRequest, config?: AxiosRequestConfig): Promise<operations.PUTBatchUpdateInvoicesResponse>;
    /**
     * Reverse an invoice
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Reverses a posted invoice.
     *
     * **Restrictions**
     *
     * You are not allowed to reverse an invoice if any of the following restrictions is met:
     *
     * * Payments and credit memos are applied to the invoice.
     * * The invoice is split.
     * * The invoice is not in Posted status.
     * * The total amount of the invoice is less than 0 (a negative invoice).
     * * Using Tax Connector for Extension Platform to calculate taxes.
     * * An invoice contains more than 2,000 items in total, including invoice items, discount items, and taxation items.
     *
     * See [Invoice Reversal](https://knowledgecenter.zuora.com/CB_Billing/IA_Invoices/Reverse_Posted_Invoices) for more information.
     *
     */
    putReverseInvoice(req: operations.PUTReverseInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.PUTReverseInvoiceResponse>;
    /**
     * Update an invoice
     *
     * @remarks
     * Updates a specific invoice.
     *
     */
    putUpdateInvoice(req: operations.PUTUpdateInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.PUTUpdateInvoiceResponse>;
    /**
     * Write off an invoice
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Writes off a posted invoice.
     *
     * By writing off an invoice, a credit memo is created and applied to the invoice. The generated credit memo items and credit memo taxation items are applied to invoice items and invoice taxation items based on the configured default application rule. If an invoice is written off, the balance of each invoice item and invoice taxation item must be zero.
     *
     * If you set the **Create credit memos mirroring invoice items billing rule** to **Yes**, you can write off an invoice even if all its items have zero balance.
     *
     * **Restrictions**
     *
     * You cannot write off an invoice if any of the following restrictions is met:
     *
     * * The balance of an invoice has been changed before Invoice Settlement is enabled.
     *
     *   For example, before Invoice Settlement is enabled, any credit balance adjustments, invoice item adjustments, or invoice adjustments have been applied to an invoice.
     *
     * * An invoice contains more than 2,000 items in total, including invoice items, discount items, and taxation items.
     *
     * See [Invoice Write-off](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/IA_Invoices/Invoice_Write-Off) for more information.
     *
     */
    putWriteOffInvoice(req: operations.PUTWriteOffInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.PUTWriteOffInvoiceResponse>;
}
