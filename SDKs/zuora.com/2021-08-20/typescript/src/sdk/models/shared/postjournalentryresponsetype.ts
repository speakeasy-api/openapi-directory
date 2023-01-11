import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostJournalEntryResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=journalEntryNumber" })
  journalEntryNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
