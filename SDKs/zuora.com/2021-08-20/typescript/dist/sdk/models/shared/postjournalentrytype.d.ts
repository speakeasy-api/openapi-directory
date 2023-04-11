import { SpeakeasyBase } from "../../../internal/utils";
import { POSTJournalEntryItemType } from "./postjournalentryitemtype";
import { POSTJournalEntrySegmentType } from "./postjournalentrysegmenttype";
/**
 * Status shows whether the journal entry has been transferred to an accounting system.
 *
 * @remarks
 *
 */
export declare enum POSTJournalEntryTypeTransferredToAccountingEnum {
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
export declare class POSTJournalEntryType extends SpeakeasyBase {
    /**
     * Name of the accounting period. The open-ended accounting period is named `Open-Ended`.
     *
     * @remarks
     *
     */
    accountingPeriodName: string;
    /**
     * The type of currency used. Currency must be active.
     *
     * @remarks
     *
     */
    currency: string;
    /**
     * Date of the journal entry.
     *
     * @remarks
     *
     */
    journalEntryDate: Date;
    /**
     * Key name that represents the list of journal entry items.
     *
     * @remarks
     *
     */
    journalEntryItems: POSTJournalEntryItemType[];
    /**
     * The number associated with the revenue event.
     *
     * @remarks
     *
     * Character limit: 2,000
     *
     */
    notes?: string;
    /**
     * List of segments that apply to the summary journal entry.
     *
     * @remarks
     *
     */
    segments?: POSTJournalEntrySegmentType[];
    /**
     * Status shows whether the journal entry has been transferred to an accounting system.
     *
     * @remarks
     *
     */
    transferredToAccounting?: POSTJournalEntryTypeTransferredToAccountingEnum;
}
