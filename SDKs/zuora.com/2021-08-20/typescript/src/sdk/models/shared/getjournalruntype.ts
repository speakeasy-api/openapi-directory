import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetJournalRunTransactionType } from "./getjournalruntransactiontype";


export enum GetJournalRunTypeStatusEnum {
    Pending = "Pending",
    Processing = "Processing",
    Completed = "Completed",
    Error = "Error",
    CancelInprogress = "CancelInprogress",
    Cancelled = "Cancelled",
    DeleteInprogress = "DeleteInprogress"
}


export class GetJournalRunType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregateCurrency" })
  aggregateCurrency?: boolean;

  @SpeakeasyMetadata({ data: "json, name=executedOn" })
  executedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=journalEntryDate" })
  journalEntryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=segmentationRuleName" })
  segmentationRuleName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetJournalRunTypeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetEndDate" })
  targetEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=targetStartDate" })
  targetStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=totalJournalEntryCount" })
  totalJournalEntryCount?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionTypes", elemType: GetJournalRunTransactionType })
  transactionTypes?: GetJournalRunTransactionType[];
}
