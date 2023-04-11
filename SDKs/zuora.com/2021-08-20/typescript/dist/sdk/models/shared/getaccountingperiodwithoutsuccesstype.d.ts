import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File IDs of the reports available for the accounting period. You can retrieve the reports by specifying the file ID in a [Get Files](https://www.zuora.com/developer/api-reference/#operation/GET_Files) REST API call.
 *
 * @remarks
 *
 */
export declare class GETAccountingPeriodWithoutSuccessTypeFileIds extends SpeakeasyBase {
    /**
     * File ID of the Accounts Receivable Aging Account Detail report.
     *
     * @remarks
     *
     */
    accountsReceivableAccountAgingDetailExportFileId?: string;
    /**
     * File ID of the Accounts Receivable Aging Invoice Detail report.
     *
     * @remarks
     *
     */
    accountsReceivableInvoiceAgingDetailExportFileId?: string;
    /**
     * File ID of the Accounts Receivable Detail report.
     *
     * @remarks
     *
     */
    arRollForwardDetailExportFileId?: string;
    /**
     * File ID of the Realized Gain and Loss Detail report.
     *
     * @remarks
     *
     * Returned only if you have Foreign Currency Conversion enabled.
     *
     */
    fxRealizedGainAndLossDetailExportFileId?: string;
    /**
     * File ID of the Unrealized Gain and Loss Detail report.
     *
     * @remarks
     *
     * Returned only if you have Foreign Currency Conversion enabled
     *
     */
    fxUnrealizedGainAndLossDetailExportFileId?: string;
    /**
     * File ID of the Revenue Detail report in CSV format.
     *
     * @remarks
     *
     */
    revenueDetailCsvFileId?: string;
    /**
     * File ID of the Revenue Detail report in XLSX format.
     *
     * @remarks
     *
     */
    revenueDetailExcelFileId?: string;
    /**
     * File ID of a report containing all unprocessed charges for the accounting period.
     *
     * @remarks
     *
     */
    unprocessedChargesFileId?: string;
}
/**
 * Container for custom fields of an Accounting Period object.
 *
 * @remarks
 *
 */
export declare class GETAccountingPeriodWithoutSuccessType extends SpeakeasyBase {
    /**
     * ID of the user who created the accounting period.
     *
     * @remarks
     *
     */
    createdBy?: string;
    /**
     * Date and time when the accounting period was created.
     *
     * @remarks
     *
     */
    createdOn?: Date;
    /**
     * The end date of the accounting period.
     *
     * @remarks
     *
     */
    endDate?: Date;
    /**
     * File IDs of the reports available for the accounting period. You can retrieve the reports by specifying the file ID in a [Get Files](https://www.zuora.com/developer/api-reference/#operation/GET_Files) REST API call.
     *
     * @remarks
     *
     */
    fileIds?: GETAccountingPeriodWithoutSuccessTypeFileIds;
    /**
     * Fiscal year of the accounting period.
     *
     * @remarks
     *
     */
    fiscalYear?: string;
    fiscalQuarter?: number;
    /**
     * ID of the accounting period.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Name of the accounting period.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * Any optional notes about the accounting period.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * Date and time that the trial balance was completed. If the trial balance status is `Pending`, `Processing`, or `Error`, this field is `null`.
     *
     * @remarks
     *
     */
    runTrialBalanceEnd?: Date;
    /**
     * If trial balance status is Error, an error message is returned in this field.
     *
     * @remarks
     *
     */
    runTrialBalanceErrorMessage?: string;
    /**
     * Date and time that the trial balance was run. If the trial balance status is `Pending`, this field is `null`.
     *
     * @remarks
     *
     */
    runTrialBalanceStart?: Date;
    /**
     * Status of the trial balance for the accounting period. Possible values:
     *
     * @remarks
     *
     * * `Pending`
     * * `Processing`
     * * `Completed`
     * * `Error`
     *
     */
    runTrialBalanceStatus?: string;
    /**
     * The start date of the accounting period.
     *
     * @remarks
     *
     */
    startDate?: Date;
    /**
     * Status of the accounting period. Possible values:
     *
     * @remarks
     *
     * * `Open`
     * * `PendingClose`
     * * `Closed`
     *
     */
    status?: string;
    /**
     * D of the user who last updated the accounting period.
     *
     * @remarks
     *
     */
    updatedBy?: string;
    /**
     * Date and time when the accounting period was last updated.
     *
     * @remarks
     *
     */
    updatedOn?: Date;
}
