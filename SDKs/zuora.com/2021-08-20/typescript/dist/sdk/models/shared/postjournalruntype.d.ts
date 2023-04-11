import { SpeakeasyBase } from "../../../internal/utils";
import { POSTJournalRunTransactionType } from "./postjournalruntransactiontype";
export declare class POSTJournalRunType extends SpeakeasyBase {
    /**
     * Name of the accounting period.
     *
     * @remarks
     *
     * This field determines the target start and end dates of the journal run.
     *
     * Required if you do not include `targetStartDate` and `targetEndDate`.
     *
     */
    accountingPeriodName?: string;
    /**
     * Date of the journal entry.
     *
     * @remarks
     *
     */
    journalEntryDate: Date;
    /**
     * The target end date of the journal run.
     *
     * @remarks
     *
     * If you include `accountingPeriodName`, the `targetEndDate` must be empty or the same as the end date of the accounting period specified in `accountingPeriodName`.
     *
     */
    targetEndDate?: Date;
    /**
     * The target start date of the journal run.
     *
     * @remarks
     *
     * Required if you include targetEndDate.
     *
     * If you include `accountingPeriodName`, the `targetStartDate` must be empty or the same as the start date of the accounting period specified in `accountingPeriodName`.
     *
     */
    targetStartDate?: Date;
    /**
     * Transaction types included in the journal run.
     *
     * @remarks
     *
     * You can include one or more transaction types.
     *
     */
    transactionTypes: POSTJournalRunTransactionType[];
}
