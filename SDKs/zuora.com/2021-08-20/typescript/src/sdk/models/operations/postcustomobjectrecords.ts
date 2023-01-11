import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCustomObjectRecordsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class PostCustomObjectRecordsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Version" })
  zuoraVersion?: Date;
}


export class PostCustomObjectRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCustomObjectRecordsPathParams;

  @SpeakeasyMetadata()
  headers: PostCustomObjectRecordsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostCustomObjectRecordsRequest;
}


export class PostCustomObjectRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customObjectRecordsErrorResponse?: shared.CustomObjectRecordsErrorResponse;

  @SpeakeasyMetadata()
  customObjectRecordsThrottledResponse?: shared.CustomObjectRecordsThrottledResponse;

  @SpeakeasyMetadata()
  errorResponse401Record?: shared.ErrorResponse401Record;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postCustomObjectRecordsResponse?: shared.PostCustomObjectRecordsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
