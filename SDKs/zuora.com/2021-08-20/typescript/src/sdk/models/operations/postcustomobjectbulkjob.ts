import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCustomObjectBulkJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Version" })
  zuoraVersion?: Date;
}


export class PostCustomObjectBulkJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostCustomObjectBulkJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CustomObjectBulkJobRequest;
}


export class PostCustomObjectBulkJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonErrorResponse?: shared.CommonErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customObjectBulkJobResponse?: shared.CustomObjectBulkJobResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
