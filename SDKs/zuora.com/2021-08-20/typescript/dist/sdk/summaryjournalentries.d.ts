import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SummaryJournalEntries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a summary journal entry
     *
     * @remarks
     * This reference describes how to delete a summary journal entry using the REST API.
     *
     * You must have the "Delete Cancelled Journal Entry" user permission enabled to delete summary journal entries.
     *
     * A summary journal entry must be canceled before it can be deleted.
     *
     */
    deleteSummaryJournalEntry(req: operations.DELETESummaryJournalEntryRequest, config?: AxiosRequestConfig): Promise<operations.DELETESummaryJournalEntryResponse>;
    /**
     * List all summary journal entries in a journal run
     *
     * @remarks
     *
     * This REST API reference describes how to retrieve information about all summary journal entries in a journal run.
     *
     */
    getAllSummaryJournalEntries(req: operations.GETAllSummaryJournalEntriesRequest, config?: AxiosRequestConfig): Promise<operations.GETAllSummaryJournalEntriesResponse>;
    /**
     * Retrieve a summary journal entry
     *
     * @remarks
     * This REST API reference describes how to get information about a summary journal entry by its journal entry number.
     *
     */
    getSummaryJournalEntry(req: operations.GETSummaryJournalEntryRequest, config?: AxiosRequestConfig): Promise<operations.GETSummaryJournalEntryResponse>;
    /**
     * Create a summary journal entry
     *
     * @remarks
     * This REST API reference describes how to manually create a summary journal entry. Request and response field descriptions and sample code are provided.
     * ## Requirements
     * 1.The sum of debits must equal the sum of credits in the summary journal entry.
     *
     * 2.The following applies only if you use foreign currency conversion:
     *   * If you have configured Aggregate transactions with different currencies during a Journal Run to "Yes", the value of the **currency** field must be the same as your tenant's home currency. That is, you must create journal entries using your home currency.
     *   * All journal entries in an accounting period must either all be aggregated or all be unaggregated. You cannot have a mix of aggregated and unaggregated journal entries in the same accounting period.
     *
     */
    postSummaryJournalEntry(req: operations.POSTSummaryJournalEntryRequest, config?: AxiosRequestConfig): Promise<operations.POSTSummaryJournalEntryResponse>;
    /**
     * Update a summary journal entry
     *
     * @remarks
     *
     * This REST API reference describes how to update the basic information of a summary journal entry. Request and response field descriptions and sample code are provided.
     *
     */
    putBasicSummaryJournalEntry(req: operations.PUTBasicSummaryJournalEntryRequest, config?: AxiosRequestConfig): Promise<operations.PUTBasicSummaryJournalEntryResponse>;
    /**
     * Cancel a summary journal entry
     *
     * @remarks
     *
     * This reference describes how to cancel a summary journal entry using the REST API.
     *
     * You must have the "Cancel Journal Entry" user permission enabled to cancel summary journal entries.
     *
     * A summary journal entry cannot be canceled if its Transferred to Accounting status is "Yes" or "Processing".
     *
     */
    putSummaryJournalEntry(req: operations.PUTSummaryJournalEntryRequest, config?: AxiosRequestConfig): Promise<operations.PUTSummaryJournalEntryResponse>;
}
