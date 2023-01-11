import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostJournalRunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostJournalRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostJournalRunHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostJournalRunType;
}


export class PostJournalRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postJournalRunResponseType?: shared.PostJournalRunResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
