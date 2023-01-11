import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDataQueryJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostDataQueryJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostDataQueryJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SubmitDataQueryRequest;
}


export class PostDataQueryJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataQueryErrorResponse?: shared.DataQueryErrorResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  submitDataQueryResponse?: shared.SubmitDataQueryResponse;
}
