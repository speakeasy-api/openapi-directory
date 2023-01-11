import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJournalEntriesInJournalRunType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=journalEntries" })
  journalEntries?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
