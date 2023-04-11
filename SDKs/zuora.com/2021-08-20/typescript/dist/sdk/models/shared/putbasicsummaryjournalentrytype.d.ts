import { SpeakeasyBase } from "../../../internal/utils";
import { PUTJournalEntryItemType } from "./putjournalentryitemtype";
/**
 * Status shows whether the journal entry has been transferred to an accounting system.
 *
 * @remarks
 *
 * This field cannot be changed after the summary journal entry has been canceled.
 *
 * **Note:** The Zuora Finance ***Override Transferred to Accounting*** permission is required to change `transferredToAccounting` from `Yes` to any other value.
 *
 */
export declare enum PUTBasicSummaryJournalEntryTypeTransferredToAccountingEnum {
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
export declare class PUTBasicSummaryJournalEntryType extends SpeakeasyBase {
    /**
     * Key name that represents the list of journal entry items.
     *
     * @remarks
     *
     */
    journalEntryItems?: PUTJournalEntryItemType[];
    /**
     * Additional information about this record.
     *
     * @remarks
     *
     * ***Character limit:*** 2,000
     *
     */
    notes?: string;
    /**
     * Status shows whether the journal entry has been transferred to an accounting system.
     *
     * @remarks
     *
     * This field cannot be changed after the summary journal entry has been canceled.
     *
     * **Note:** The Zuora Finance ***Override Transferred to Accounting*** permission is required to change `transferredToAccounting` from `Yes` to any other value.
     *
     */
    transferredToAccounting?: PUTBasicSummaryJournalEntryTypeTransferredToAccountingEnum;
}
