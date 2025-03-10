import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Use the Bill Run call to create ad hoc bill runs and Post, Cancel, Query, and Delete bill runs.
 *
 * @remarks
 *
 */
export declare class BillRun {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Delete a bill run
     *
     * @remarks
     * Deletes a bill run.
     *
     *
     * When deleting a bill run, the logic is the same as when using the UI to delete a bill run. The only required parameter is `BillRunId`. The Status for the bill run must be `Canceled` in order to delete a bill run.
     *
     */
    objectDELETEBillRun(req: operations.ObjectDELETEBillRunRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEBillRunResponse>;
    /**
     * CRUD: Retrieve a bill run
     *
     * @remarks
     * Retrieves information about a bill run.
     *
     *
     * Business operations depending on the completion of the bill run will not be available while the bill run query returns `PostInProgress`. Upon completion of the bill run, a query will return `Posted`.
     *
     */
    objectGETBillRun(req: operations.ObjectGETBillRunRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETBillRunResponse>;
    /**
     * CRUD: Create a bill run
     *
     * @remarks
     * Creates an ad hoc bill run or a single account or multiple customer accounts.
     *
     * When creating a single account ad hoc bill run, your request must include `AccountId` and must not include `Batch` or `BillCycleDay`.
     *
     * If more than 500 bill runs created by using this operation are in Pending status, no more bill runs can be created by using this operation.
     *
     */
    objectPOSTBillRun(req: operations.ObjectPOSTBillRunRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTBillRunResponse>;
    /**
     * CRUD: Post or cancel a bill run
     *
     * @remarks
     * Posts or cancels a bill run.
     *
     *
     * ## Post a Bill Run
     *
     * Posting a bill run is an asynchronous operation. To post a bill run, the current bill run must have a status of `Completed`.
     *
     * When a bill run is posted, its status is changed to `PostInProgress`. Once all invoices for this bill run are posted then its status is changed to `Posted`.
     *
     * When you post a bill run and query the status of a bill run, you will get one of the following results `PostInProgress`, `Completed`, or `Posted`. If all invoices in the bill run are posted, then the status of the bill run is `Posted`. If one or more invoices fail to post, the status will change back to `Completed` and you will need to post the bill run again.
     *
     * ## Cancel a Bill Run
     *
     * Canceling a bill run is an asynchronous operation. When canceling a bill run, the logic is the same as when using the UI to cancel a bill run. You need to provide the `BillRunId`, and set the Status to `Canceled`.
     *
     * When canceling a bill run, consider the following:
     *
     * * Canceling a bill run with a `Completed` status.
     *   * Only the current bill run will be canceled.
     * * Canceling a bill run with a `Pending` status.
     *   * When canceling an Ad-hoc bill run, only the current bill run will be canceled.
     *   * When canceling a scheduled bill, all scheduled bill runs will be canceled.
     *
     * The Cancel operation may not be successful. Its success depends on its current business validation. Only a bill run that has no posted invoices can be canceled. If any posted invoices belong to the bill run then an invalid value exception will be thrown with the message, "The Bill Run cannot be Cancelled, There are Posted invoices."
     *
     */
    objectPUTBillRun(req: operations.ObjectPUTBillRunRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTBillRunResponse>;
    /**
     * Email billing documents generated from a bill run
     *
     * @remarks
     * Manually emails all the billing documents that are generated from a specified bill run to your customers.
     *
     *
     * Bill runs can generate invoices and credit memos based on your [invoice and credit memo generation rule](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/Credit_and_Debit_Memos/Rules_for_Generating_Invoices_and_Credit_Memos). Credit memos are only available if you have the Invoice Settlement feature enabled.
     *
     *
     * Using this API operation, the billing documents are sent to the email addresses specified in the **To Email** field of the email templates. The email template used for each billing document is set in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. See [Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information about how to edit the **To Email** field in the email template.
     *
     *
     *
     *
     *
     * ## Notes
     *   - Even though no field is required in the Request body, you still need to specify `{}` in the request. Otherwise, an error will be returned.
     *
     *
     *   - You can only email posted billing documents.
     *
     *
     *   - You must activate the following notifications before emailing invoices and credit memos:
     *     - **Manual Email For Invoice | Manual Email For Invoice**
     *     - **Email Credit Memo | Manually email Credit Memo**
     *
     *
     *   - To include the invoice PDF in the email, select the **Include Invoice PDF** check box in the **Edit notification** dialog from the Zuora UI. To include the credit memo PDF in the email, select the **Include Credit Memo PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.
     *
     *
     *
     *   - Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the following templates are used for billing documents:
     *     - Invoices: **Invoice Posted Default Email Template**
     *     - Credit memos: **Manual Email for Credit Memo Default Template**
     *
     *     See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.
     *
     *
     *
     */
    postEmailBillingDocumentsfromBillRun(req: operations.POSTEmailBillingDocumentsfromBillRunRequest, config?: AxiosRequestConfig): Promise<operations.POSTEmailBillingDocumentsfromBillRunResponse>;
}
