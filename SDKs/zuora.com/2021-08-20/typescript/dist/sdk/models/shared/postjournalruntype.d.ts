import { SpeakeasyBase } from "../../../internal/utils";
import { PostJournalRunTransactionType } from "./postjournalruntransactiontype";
export declare class PostJournalRunType extends SpeakeasyBase {
    accountingPeriodName?: string;
    journalEntryDate: Date;
    targetEndDate?: Date;
    targetStartDate?: Date;
    transactionTypes: PostJournalRunTransactionType[];
}
