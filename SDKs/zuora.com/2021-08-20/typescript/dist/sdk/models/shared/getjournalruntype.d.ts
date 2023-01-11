import { SpeakeasyBase } from "../../../internal/utils";
import { GetJournalRunTransactionType } from "./getjournalruntransactiontype";
export declare enum GetJournalRunTypeStatusEnum {
    Pending = "Pending",
    Processing = "Processing",
    Completed = "Completed",
    Error = "Error",
    CancelInprogress = "CancelInprogress",
    Cancelled = "Cancelled",
    DeleteInprogress = "DeleteInprogress"
}
export declare class GetJournalRunType extends SpeakeasyBase {
    aggregateCurrency?: boolean;
    executedOn?: Date;
    journalEntryDate?: Date;
    number?: string;
    segmentationRuleName?: string;
    status?: GetJournalRunTypeStatusEnum;
    success?: boolean;
    targetEndDate?: Date;
    targetStartDate?: Date;
    totalJournalEntryCount?: number;
    transactionTypes?: GetJournalRunTransactionType[];
}
