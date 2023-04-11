import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class JournalRuns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a journal run
     *
     * @remarks
     * This reference describes how to delete a journal run using the REST API.
     *
     *  You can only delete journal runs that have already been canceled.
     *
     *  You must have the "Delete Cancelled Journal Run" Zuora Finance user permission enabled to delete journal runs.
     *
     */
    deleteJournalRun(req: operations.DELETEJournalRunRequest, config?: AxiosRequestConfig): Promise<operations.DELETEJournalRunResponse>;
    /**
     * Retrieve a journal run
     *
     * @remarks
     * This REST API reference describes how to get information about a journal run. Request and response field descriptions and sample code are provided.
     *
     */
    getJournalRun(req: operations.GETJournalRunRequest, config?: AxiosRequestConfig): Promise<operations.GETJournalRunResponse>;
    /**
     * Create a journal run
     *
     * @remarks
     * This REST API reference describes how to create a journal run. Request and response field descriptions and sample code are provided.
     *
     */
    postJournalRun(req: operations.POSTJournalRunRequest, config?: AxiosRequestConfig): Promise<operations.POSTJournalRunResponse>;
    /**
     * Cancel a journal run
     *
     * @remarks
     * This reference describes how to cancel a journal run using the REST API.
     *
     * The summary journal entries in the journal run are canceled asynchronously. See the "Example" section below for details.
     *
     * You must have the "Cancel Journal Run" Zuora Finance user permission enabled to cancel journal runs.
     *
     * ## Notes
     * When you cancel a journal run, the summary journal entries associated with that journal run are canceled asynchronously. A response of `{ "success": true }` means only that the specified journal run has a status of "Pending", "Error", or "Completed" and therefore can be canceled, but does not mean that the whole journal run was successfully canceled.
     *
     * For example, let's say you want to cancel journal run JR-00000075. The journal run status is "Completed" and it contains ten journal entries. One of the journal entries has its Transferred to Accounting status set to "Yes", meaning that the entry cannot be canceled. The workflow might go as follows:
     * 1. You make an API call to cancel the journal run.
     * 2. The journal run status is "Completed", so you receive a response of `{ "success": true }`.
     * 3. Zuora begins asynchronously canceling journal entries associated with the journal run. The journal entry whose Transferred to Accounting status is "Yes" fails to be canceled. The cancelation process continues, and the other journal entries are successfully canceled.
     * 4. The journal run status remains as "Completed". The status does not change to "Canceled" because the journal run still contains a journey entry that is not canceled.
     *
     */
    putJournalRun(req: operations.PUTJournalRunRequest, config?: AxiosRequestConfig): Promise<operations.PUTJournalRunResponse>;
}
