import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostJournalRunTransactionType } from "./postjournalruntransactiontype";



export class PostJournalRunType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingPeriodName" })
  accountingPeriodName?: string;

  @SpeakeasyMetadata({ data: "json, name=journalEntryDate" })
  journalEntryDate: Date;

  @SpeakeasyMetadata({ data: "json, name=targetEndDate" })
  targetEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=targetStartDate" })
  targetStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionTypes", elemType: PostJournalRunTransactionType })
  transactionTypes: PostJournalRunTransactionType[];
}
