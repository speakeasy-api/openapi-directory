import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCustomObjectRecordsBatchUpdateOrDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class PostCustomObjectRecordsBatchUpdateOrDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Version" })
  zuoraVersion?: Date;
}


export class PostCustomObjectRecordsBatchUpdateOrDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCustomObjectRecordsBatchUpdateOrDeletePathParams;

  @SpeakeasyMetadata()
  headers: PostCustomObjectRecordsBatchUpdateOrDeleteHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CustomObjectRecordBatchRequest;
}


export class PostCustomObjectRecordsBatchUpdateOrDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customObjectRecordsBatchUpdatePartialSuccessResponse?: shared.CustomObjectRecordsBatchUpdatePartialSuccessResponse;

  @SpeakeasyMetadata()
  customObjectRecordsErrorResponse?: shared.CustomObjectRecordsErrorResponse;

  @SpeakeasyMetadata()
  customObjectRecordsThrottledResponse?: shared.CustomObjectRecordsThrottledResponse;

  @SpeakeasyMetadata()
  errorResponse401Record?: shared.ErrorResponse401Record;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
