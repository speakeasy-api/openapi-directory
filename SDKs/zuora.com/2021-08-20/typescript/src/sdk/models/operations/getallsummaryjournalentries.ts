import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllSummaryJournalEntriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jr-number" })
  jrNumber: string;
}


export class GetAllSummaryJournalEntriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetAllSummaryJournalEntriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetAllSummaryJournalEntriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllSummaryJournalEntriesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAllSummaryJournalEntriesQueryParams;

  @SpeakeasyMetadata()
  headers: GetAllSummaryJournalEntriesHeaders;
}


export class GetAllSummaryJournalEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getJournalEntriesInJournalRunType?: shared.GetJournalEntriesInJournalRunType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
