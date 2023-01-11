import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DebitMemos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDebitMemo - Delete a debit memo
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Deletes a debit memo. Only debit memos with the Cancelled status can be deleted.
     *
     * You can delete a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
    **/
    deleteDebitMemo(req: operations.DeleteDebitMemoRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDebitMemoResponse>;
    /**
     * getDebitMemo - Retrieve a debit memo
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about a specific debit memo.
     *
    **/
    getDebitMemo(req: operations.GetDebitMemoRequest, config?: AxiosRequestConfig): Promise<operations.GetDebitMemoResponse>;
    /**
     * getDebitMemoApplicationParts - List all application parts of a debit memo
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves information about the payments or credit memos that are applied to a specified debit memo.
     *
    **/
    getDebitMemoApplicationParts(req: operations.GetDebitMemoApplicationPartsRequest, config?: AxiosRequestConfig): Promise<operations.GetDebitMemoApplicationPartsResponse>;
    /**
     * getDebitMemoItem - Retrieve a debit memo item
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves information about a specific item of a debit memo. A debit memo item is a single line item in a debit memo.
     *
    **/
    getDebitMemoItem(req: operations.GetDebitMemoItemRequest, config?: AxiosRequestConfig): Promise<operations.GetDebitMemoItemResponse>;
    /**
     * getDebitMemoItems - List debit memo items
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all items of a debit memo. A debit memo item is a single line item in a debit memo.
     *
     * ### Filtering
     *
     * You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
     *
     * If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.
     *
     * Examples:
     *
     * - /v1/debitmemos/402890245c7ca371015c7cb40b28001f/items?amount=100
     *
     * - /v1/debitmemos/402890245c7ca371015c7cb40b28001f/items?amount=100&sort=createdDate
     *
    **/
    getDebitMemoItems(req: operations.GetDebitMemoItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetDebitMemoItemsResponse>;
    /**
     * getDebitMemos - List debit memos
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the information about all debit memos associated with all customer accounts.
     *
     * ### Filtering
     *
     * You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
     *
     * If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.
     *
     * Examples:
     *
     * - /v1/debitmemos?status=Posted
     *
     * - /v1/debitmemos?referredInvoiceId=null&status=Draft
     *
     * - /v1/debitmemos?status=Posted&type=External&sort=+number
     *
    **/
    getDebitMemos(req: operations.GetDebitMemosRequest, config?: AxiosRequestConfig): Promise<operations.GetDebitMemosResponse>;
    /**
     * getTaxationItemsOfDebitMemoItem - List all taxation items of a debit memo item
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves information about the taxation items of a specific debit memo item.
     *
    **/
    getTaxationItemsOfDebitMemoItem(req: operations.GetTaxationItemsOfDebitMemoItemRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxationItemsOfDebitMemoItemResponse>;
    /**
     * postDmTaxationItems - Create taxation items for a debit memo
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates taxation items for a debit memo.
     *
    **/
    postDmTaxationItems(req: operations.PostDmTaxationItemsRequest, config?: AxiosRequestConfig): Promise<operations.PostDmTaxationItemsResponse>;
    /**
     * postDebitMemoCollect - Collect a posted debit memo
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * This API operation provides an easy way to let the client-side to collect an existing posted debit memo.
     * It supports the following steps:
     *   1. Apply unapplied credit memos to the posted debit memo by Oldest-First-Largest-First rule if there are more than one unapplied credit memos.
     *   2. Apply unapplied payments to the posted debit memo by Oldest-First-Largest-First rule if there are more than one unapplied payments.
     *   3. Process payment to the posted debit memo if there is an open-balance on it.
     *
     * **Reistrictions**
     *
     * Since this API will do lots of works, and some of them are resource consuming, we need to resitrict the usage of this API by the following conditions:
     *   1. If the target debit memo gets more than 10 debit memo items, the request will be rejected.
     *   2. If `CreditMemo` is specified in `applicationOrder`, when there are more than 25 credit memos will be used to apply to the debit memo, the request will be rejected.
     *   3. If `CreditMemo` is specified in `applicationOrder`, when there are more than 100 credit memo items will be used to apply to the debit memo, the request will be rejected.
     *   4. If `UnappliedPayment` is specified in `applicationOrder`, when there are more than 25 payments will be used to apply to the debit memo, the request will be rejected.
     *
    **/
    postDebitMemoCollect(req: operations.PostDebitMemoCollectRequest, config?: AxiosRequestConfig): Promise<operations.PostDebitMemoCollectResponse>;
    /**
     * postDebitMemoFromPrpc - Create a debit memo from a charge
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates an ad-hoc debit memo from a product rate plan charge. Zuora supports the creation of debit memos from any type of product rate plan charge. The charges can also have any amount and any charge model, except for discout charge models.
     *
     * When debit memos are created from product rate plan charges, the specified amount with decimal places is now validated based on the decimal places supported by each currency.
     *
     * You can create a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
    **/
    postDebitMemoFromPrpc(req: operations.PostDebitMemoFromPrpcRequest, config?: AxiosRequestConfig): Promise<operations.PostDebitMemoFromPrpcResponse>;
    /**
     * postDebitMemoPdf - Generate a debit memo PDF file
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates a PDF file for a specified debit memo. To access the generated PDF file, you can download it by clicking **View PDF** on the detailed debit memo page through the Zuora UI.
     *
     * This REST API operation can be used only if you have the billing document file generation feature and the Billing user permission "Regenerate PDF" enabled.
     *
    **/
    postDebitMemoPdf(req: operations.PostDebitMemoPdfRequest, config?: AxiosRequestConfig): Promise<operations.PostDebitMemoPdfResponse>;
    /**
     * postEmailDebitMemo - Email a debit memo
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Sends a posted debit memo to the specified email addresses manually.
     *
     *
     *
     * ## Notes
     *   - You must activate the **Email Debit Memo | Manually email Debit Memo** notification before emailing debit memos. To include the debit memo PDF in the email, select the **Include Debit Memo PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.
     *
     *
     *   - Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the **Manual Email for Debit Memo Default Template** template is used. See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.
     *
     *
     *   - The debit memos are sent only to the work email addresses or personal email addresses of the Bill To contact if the following conditions are all met:
     *
     *     * The `useEmailTemplateSetting` field is set to `false`.
     *     * The email addresses are not specified in the `emailAddresses` field.
     *
    **/
    postEmailDebitMemo(req: operations.PostEmailDebitMemoRequest, config?: AxiosRequestConfig): Promise<operations.PostEmailDebitMemoResponse>;
    /**
     * postUploadFileForDebitMemo - Upload a file for a debit memo
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Uploads an externally generated PDF file for a debit memo that is in Draft or Posted status.
     *
     * To use this operation, you must enable the Modify Debit Memo permission. See [Billing Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
     * This operation has the following restrictions:
     * - Only the PDF file format is supported.
     * - The maximum size of the PDF file to upload is 4 MB.
     * - A maximum of 50 PDF files can be uploaded for one debit memo.
     *
    **/
    postUploadFileForDebitMemo(req: operations.PostUploadFileForDebitMemoRequest, config?: AxiosRequestConfig): Promise<operations.PostUploadFileForDebitMemoResponse>;
    /**
     * putBatchUpdateDebitMemos - Update debit memos
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Updates the due date for multiple debit memos in batches with one call.
     *
    **/
    putBatchUpdateDebitMemos(req: operations.PutBatchUpdateDebitMemosRequest, config?: AxiosRequestConfig): Promise<operations.PutBatchUpdateDebitMemosResponse>;
    /**
     * putCancelDebitMemo - Cancel a debit memo
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Cancels a debit memo. Only debit memos with the Draft status can be cancelled.
     *
     * You can cancel a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
    **/
    putCancelDebitMemo(req: operations.PutCancelDebitMemoRequest, config?: AxiosRequestConfig): Promise<operations.PutCancelDebitMemoResponse>;
    /**
     * putDebitMemo - Update a debit memo
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Updates the basic and finance information about a debit memo. Currently, Zuora supports updating tax-exclusive memo items, but does not support updating tax-inclusive memo items.
     *
     * If the amount of a memo item is updated, the tax will be recalculated in the following conditions:
     *   - The memo is created from a product rate plan charge and you use Avalara to calculate the tax.
     *   - The memo is created from an invoice and you use Avalara or Zuora Tax to calculate the tax.
     *
     * You can update a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
     *
    **/
    putDebitMemo(req: operations.PutDebitMemoRequest, config?: AxiosRequestConfig): Promise<operations.PutDebitMemoResponse>;
    /**
     * putPostDebitMemo - Post a debit memo
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Posts a debit memo to activate it. You can post debit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).
     *
    **/
    putPostDebitMemo(req: operations.PutPostDebitMemoRequest, config?: AxiosRequestConfig): Promise<operations.PutPostDebitMemoResponse>;
    /**
     * putUnpostDebitMemo - Unpost a debit memo
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Unposts a debit memo that is in Posted status. If any credit memo or payment has been applied to a debit memo, you are not allowed to unpost the debit memo. After a debit memo is unposted, its status becomes Draft.
     *
     * You can unpost debit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).
     *
    **/
    putUnpostDebitMemo(req: operations.PutUnpostDebitMemoRequest, config?: AxiosRequestConfig): Promise<operations.PutUnpostDebitMemoResponse>;
}
