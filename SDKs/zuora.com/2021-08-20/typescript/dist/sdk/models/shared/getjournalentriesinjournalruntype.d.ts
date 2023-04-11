import { SpeakeasyBase } from "../../../internal/utils";
import { GETJournalEntryDetailTypeWithoutSuccess } from "./getjournalentrydetailtypewithoutsuccess";
export declare class GETJournalEntriesInJournalRunType extends SpeakeasyBase {
    /**
     * Key name that represents the list of journal entries.
     *
     * @remarks
     *
     */
    journalEntries?: GETJournalEntryDetailTypeWithoutSuccess[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
