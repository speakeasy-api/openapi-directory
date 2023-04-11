import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTJournalEntryResponseType extends SpeakeasyBase {
    /**
     * Journal entry number in the format JE-00000001.
     *
     * @remarks
     *
     */
    journalEntryNumber?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
