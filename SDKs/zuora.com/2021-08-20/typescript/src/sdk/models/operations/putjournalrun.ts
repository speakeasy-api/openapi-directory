import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutJournalRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jr-number" })
  jrNumber: string;
}


export class PutJournalRunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutJournalRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutJournalRunPathParams;

  @SpeakeasyMetadata()
  headers: PutJournalRunHeaders;
}


export class PutJournalRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
