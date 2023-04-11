import { SpeakeasyBase } from "../../../internal/utils";
import { GETJournalEntryItemType } from "./getjournalentryitemtype";
import { GETJournalEntrySegmentType } from "./getjournalentrysegmenttype";
/**
 * Status of journal entry.
 *
 * @remarks
 *
 */
export declare enum GETJournalEntryDetailTypeStatusEnum {
    Created = "Created",
    Cancelled = "Cancelled"
}
/**
 * Status shows whether the journal entry has been transferred to an accounting system.
 */
export declare enum GETJournalEntryDetailTypeTransferredToAccountingEnum {
    No = "No",
    Processing = "Processing",
    Yes = "Yes",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for custom fields of a Journal Entry object.
 *
 * @remarks
 *
 */
export declare class GETJournalEntryDetailType extends SpeakeasyBase {
    /**
     * Name of the accounting period that the journal entry belongs to.
     *
     * @remarks
     *
     */
    accountingPeriodName?: string;
    /**
     * Returns true if the journal entry is aggregating currencies. That is, if the journal entry was created when the `Aggregate transactions with different currencies during a Journal Run` setting was configured to `Yes`. Otherwise, returns `false`.
     *
     * @remarks
     *
     */
    aggregateCurrency?: boolean;
    /**
     * Currency used.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * Home currency used.
     *
     * @remarks
     *
     */
    homeCurrency?: string;
    /**
     * Date of the journal entry.
     *
     * @remarks
     *
     */
    journalEntryDate?: Date;
    /**
     * Key name that represents the list of journal entry items.
     *
     * @remarks
     *
     */
    journalEntryItems?: GETJournalEntryItemType[];
    /**
     *
     * @remarks
     * Additional information about this record.
     * Character limit: 2,000
     *
     */
    notes?: string;
    /**
     * Journal entry number in the format JE-00000001.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * List of segments that apply to the summary journal entry.
     *
     * @remarks
     *
     */
    segments?: GETJournalEntrySegmentType[];
    /**
     * Status of journal entry.
     *
     * @remarks
     *
     */
    status?: GETJournalEntryDetailTypeStatusEnum;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * End date of time period included in the journal entry.
     *
     * @remarks
     *
     */
    timePeriodEnd?: Date;
    /**
     * Start date of time period included in the journal entry.
     *
     * @remarks
     *
     */
    timePeriodStart?: Date;
    /**
     * Transaction type of the transactions included in the summary journal entry.
     *
     * @remarks
     *
     */
    transactionType?: string;
    /**
     * Date and time that transferredToAccounting was changed to `Yes`. This field is returned only when transferredToAccounting is `Yes`. Otherwise, this field is `null`.
     *
     * @remarks
     *
     */
    transferDateTime?: Date;
    /**
     * User ID of the person who changed transferredToAccounting to `Yes`. This field is returned only when transferredToAccounting is `Yes`. Otherwise, this field is `null`.
     *
     * @remarks
     *
     */
    transferredBy?: string;
    /**
     * Status shows whether the journal entry has been transferred to an accounting system.
     */
    transferredToAccounting?: GETJournalEntryDetailTypeTransferredToAccountingEnum;
}
