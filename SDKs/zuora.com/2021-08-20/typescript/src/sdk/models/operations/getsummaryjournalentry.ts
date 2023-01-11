import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSummaryJournalEntryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=je-number" })
  jeNumber: string;
}


export class GetSummaryJournalEntryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetSummaryJournalEntryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSummaryJournalEntryPathParams;

  @SpeakeasyMetadata()
  headers: GetSummaryJournalEntryHeaders;
}


export class GetSummaryJournalEntryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getJournalEntryDetailType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
