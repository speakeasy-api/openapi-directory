import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountingPeriods {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an accounting period
     *
     * @remarks
     * Deletes an accounting period.
     *
     * Prerequisites
     * -------------
     *
     *  * You must have Zuora Finance enabled on your tenant.
     *
     *  * You must have the Delete Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
     *
     *
     * Limitations
     * -----------
     *
     * The accounting period to be deleted:
     *
     * * Must be the most recent accounting period
     *
     * * Must be an open accounting period
     *
     * * Must have no revenue distributed into it
     *
     * * Must not have any active journal entries
     *
     * * Must not be the open-ended accounting period
     *
     * * Must not be in the process of running a trial balance
     *
     */
    deleteAccountingPeriod(req: operations.DELETEAccountingPeriodRequest, config?: AxiosRequestConfig): Promise<operations.DELETEAccountingPeriodResponse>;
    /**
     * Retrieve an accounting period
     *
     * @remarks
     * Retrieves an accounting period.
     * Prerequisites
     * -------------
     *
     * You must have Zuora Finance enabled on your tenant.
     *
     */
    getAccountingPeriod(req: operations.GETAccountingPeriodRequest, config?: AxiosRequestConfig): Promise<operations.GETAccountingPeriodResponse>;
    /**
     * List all accounting periods
     *
     * @remarks
     * Retrieves all accounting periods on your tenant.
     */
    getAllAccountingPeriods(req: operations.GETAllAccountingPeriodsRequest, config?: AxiosRequestConfig): Promise<operations.GETAllAccountingPeriodsResponse>;
    /**
     * Create an accounting period
     *
     * @remarks
     * Creates an accounting period.
     * Prerequisites
     * -------------
     * * You must have Zuora Finance enabled on your tenant.
     * * You must have the Create Accounting Period user permission.
     *
     * Limitations
     * -----------
     * * When creating the first accounting period on your tenant, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
     * * Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
     * * If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.
     */
    postAccountingPeriod(req: operations.POSTAccountingPeriodRequest, config?: AxiosRequestConfig): Promise<operations.POSTAccountingPeriodResponse>;
    /**
     * Close an accounting period
     *
     * @remarks
     * Close an accounting period by accounting period ID.
     *
     * Prerequisites
     * -------------
     * You must have Zuora Finance enabled on your tenant. You must have the Manage Close Process and Run Trial Balance user permissions.
     *
     * Limitations
     * -----------
     * * The accounting period cannot already be closed.
     * * The accounting period cannot be in the process of running a trial balance.
     * * All earlier accounting periods must be closed.
     * * There must be no required action items for the accounting period. See Reconcile Transactions Before Closing an Accounting Period for more information.
     *
     * Notes
     * -----
     * When you close an accounting period in Zuora, a trial balance is automatically run for that period. A successful response means only that the accounting period is now closed, but does not mean that the trial balance has successfully completed.
     */
    putCloseAccountingPeriod(req: operations.PUTCloseAccountingPeriodRequest, config?: AxiosRequestConfig): Promise<operations.PUTCloseAccountingPeriodResponse>;
    /**
     * Set an accounting period to pending close
     *
     * @remarks
     * Sets an accounting period to pending close.
     *
     *
     * Prerequisites
     * -------------
     *
     * * You must have Zuora Finance enabled on your tenant.
     * * You must have the Manage Close Process and Run Trial Balance user permissions.
     *
     *
     * Limitations
     *  -----------
     *
     *  * The accounting period cannot be closed or pending close.
     *
     *  * The accounting period cannot be in the process of running a trial balance.
     *
     *  * All earlier accounting periods must be closed.
     *
     *
     * Notes
     * -----
     * When you set an accounting period to pending close in Zuora, a trial balance is automatically run for that period. A response of `{ "success": true }`  means only that the accounting period status is now pending close, but does not mean that the trial balance has successfully completed. You can use the Get Accounting Period REST API call to view details about the outcome of the trial balance.
     *
     */
    putPendingCloseAccountingPeriod(req: operations.PUTPendingCloseAccountingPeriodRequest, config?: AxiosRequestConfig): Promise<operations.PUTPendingCloseAccountingPeriodResponse>;
    /**
     * Reopen an accounting period
     *
     * @remarks
     * Re-opens an accounting period.
     * Prerequisites
     * -------------
     * * You must have Zuora Finance enabled on your tenant.
     * * You must have the Manage Close Process and Run Trial Balance user permissions.
     *
     * Limitations
     * -----------
     * * The accounting period must be closed or pending close.
     * * You can only re-open an accounting period that is immediately previous to an open period.
     */
    putReopenAccountingPeriod(req: operations.PUTReopenAccountingPeriodRequest, config?: AxiosRequestConfig): Promise<operations.PUTReopenAccountingPeriodResponse>;
    /**
     * Run trial balance
     *
     * @remarks
     * Runs the trial balance for an accounting period.
     *
     * Prerequisites
     * -------------
     *
     * * You must have Zuora Finance enabled on your tenant.
     *
     * * You must have the Manage Close Process and Run Trial Balance user permissions. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
     *
     *
     * Limitations
     * -----------
     *
     *  * The accounting period must be open.
     *
     *  * The accounting period cannot already be in the process of running a trial balance.
     *
     * Notes
     * -----
     * The trial balance is run asynchronously. A response of `{ "success": true }` means only that the trial balance has started processing, but does not mean that the trial balance has successfully completed. You can use the [Get Accounting Period](https://www.zuora.com/developer/api-reference/#operation/GET_AccountingPeriod) REST API call to view details about the outcome of the trial balance.
     *
     */
    putRunTrialBalance(req: operations.PUTRunTrialBalanceRequest, config?: AxiosRequestConfig): Promise<operations.PUTRunTrialBalanceResponse>;
    /**
     * Update an accounting period
     *
     * @remarks
     *
     * Updates an accounting period.
     *
     * Prerequisites
     * -------------
     *
     * * You must have Zuora Finance enabled on your tenant.
     *
     * * You must have the Create Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
     *
     * Limitations
     * -----------
     *
     * * You can update the start date of only the earliest accounting period on your tenant. You cannot update the start date of later periods.
     *
     * * If you update the earliest accounting period, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
     *
     * * Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
     *
     * * If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.
     *
     * * You cannot update the start date or end date of an accounting period if:
     *   * Any revenue has been distributed into the period.
     *   * The period has any active journal entries.
     *
     */
    putUpdateAccountingPeriod(req: operations.PUTUpdateAccountingPeriodRequest, config?: AxiosRequestConfig): Promise<operations.PUTUpdateAccountingPeriodResponse>;
}
