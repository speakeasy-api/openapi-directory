import { SpeakeasyBase } from "../../../internal/utils";
import { GETJournalRunTransactionType } from "./getjournalruntransactiontype";
/**
 * Status of the journal run.
 *
 * @remarks
 *
 */
export declare enum GETJournalRunTypeStatusEnum {
    Pending = "Pending",
    Processing = "Processing",
    Completed = "Completed",
    Error = "Error",
    CancelInprogress = "CancelInprogress",
    Cancelled = "Cancelled",
    DeleteInprogress = "DeleteInprogress"
}
export declare class GETJournalRunType extends SpeakeasyBase {
    aggregateCurrency?: boolean;
    /**
     * Date and time the journal run was executed.
     *
     * @remarks
     *
     */
    executedOn?: Date;
    /**
     * Date of the journal entry.
     *
     * @remarks
     *
     */
    journalEntryDate?: Date;
    /**
     * Journal run number.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * Name of GL segmentation rule used in the journal run.
     *
     * @remarks
     *
     */
    segmentationRuleName?: string;
    /**
     * Status of the journal run.
     *
     * @remarks
     *
     */
    status?: GETJournalRunTypeStatusEnum;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * The target end date of the journal run.
     *
     * @remarks
     *
     */
    targetEndDate?: Date;
    /**
     * The target start date of the journal run.
     *
     * @remarks
     *
     */
    targetStartDate?: Date;
    /**
     * Total number of journal entries in the journal run.
     *
     * @remarks
     *
     */
    totalJournalEntryCount?: number;
    /**
     * Transaction types included in the journal run.
     *
     * @remarks
     *
     */
    transactionTypes?: GETJournalRunTransactionType[];
}
