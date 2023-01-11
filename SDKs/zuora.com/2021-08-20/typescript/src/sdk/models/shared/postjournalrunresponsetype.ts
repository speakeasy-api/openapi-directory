import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostJournalRunResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=journalRunNumber" })
  journalRunNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
