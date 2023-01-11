import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Attachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAttachments - Delete an attachment
     *
     * Use the Delete Attachment REST request to delete an attachment from a Zuora object.
    **/
    deleteAttachments(req: operations.DeleteAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttachmentsResponse>;
    /**
     * getAttachments - Retrieve an attachment
     *
     * Use the View Attachment REST request to retrieve information about an attachment document.
     *
    **/
    getAttachments(req: operations.GetAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachmentsResponse>;
    /**
     * getAttachmentsList - List attachments by object type and key
     *
     * Use the View Attachment REST request to get a list of attachments on an account, an invoice, a subscription, a credit memo, or a debit memo.
     *
     * **Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
    **/
    getAttachmentsList(req: operations.GetAttachmentsListRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachmentsListResponse>;
    /**
     * postAttachments - Create an attachment
     *
     * Use the Add Attachment REST request with a multipart/form-data to attach a document file to an Account, a Subscription, an Invoice, a Credit Memo, or a Debit Memo.
     *
     * **Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
    **/
    postAttachments(req: operations.PostAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.PostAttachmentsResponse>;
    /**
     * putAttachments - Update an attachment
     *
     * Use the Edit Attachment REST request to make changes to the descriptive fields of an attachment, such as the description and the file name. You cannot change the actual content of the attached file in Zuora. If you need to change the actual content, you need to delete the attachment and add the updated file as a new attachment.
    **/
    putAttachments(req: operations.PutAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.PutAttachmentsResponse>;
}
