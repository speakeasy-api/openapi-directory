import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BillingDocuments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a job of hard deleting billing document files
     *
     * @remarks
     * Retrieves information about an asynchronous job of permanently deleting all billing document PDF files for specific accounts.
     *
     * **Note**: This operation can be used only if you have the Billing user permission "Hard Delete Billing Document Files" enabled.
     *
     */
    getBillingDocumentFilesDeletionJob(req: operations.GETBillingDocumentFilesDeletionJobRequest, config?: AxiosRequestConfig): Promise<operations.GETBillingDocumentFilesDeletionJobResponse>;
    /**
     * List billing documents for an account
     *
     * @remarks
     * Retrieves the information about all billing documents associated with a specified account. The billing documents contain invoices, credit memos, and debit memos.
     *
     * To retrieve information about credit memos and debit memos, you must have the Invoice Settlement feature enabled.
     *
     * You can use query parameters to restrict the data returned in the response.
     *
     * Examples:
     * - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&sort=+documentDate
     * - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&status=Posted
     *
     */
    getBillingDocuments(req: operations.GETBillingDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GETBillingDocumentsResponse>;
    /**
     * Create a job to hard delete billing document files
     *
     * @remarks
     * Creates an asynchronous job to permanently delete all billing document PDF files for specific accounts.
     *
     * After the deletion job is completed, all billing document PDF files are permanently deleted. To retrieve the status of a deletion job, call [Retrieve a job of hard deleting billing document files](https://www.zuora.com/developer/api-reference/#operation/GET_BillingDocumentFilesDeletionJob).
     *
     * **Note**: This operation can be used only if you have the Billing user permission "Hard Delete Billing Document Files" enabled.
     *
     */
    postBillingDocumentFilesDeletionJob(req: operations.POSTBillingDocumentFilesDeletionJobRequest, config?: AxiosRequestConfig): Promise<operations.POSTBillingDocumentFilesDeletionJobResponse>;
    /**
     * Generate billing documents by account ID
     *
     * @remarks
     * Generates draft or posted billing documents for a specified account. You can also generate billing documents for specified subscriptions of a specified account. The billing documents contain invoices and credit memos. To generate credit memos, you must have the Invoice Settlement feature enabled.
     *
     * **Note**: You cannot generate billing documents for cancelled or suspended subscriptions.
     *
     */
    postGenerateBillingDocuments(req: operations.POSTGenerateBillingDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGenerateBillingDocumentsResponse>;
}
