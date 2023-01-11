import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPreviewOrderAsynchronouslyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostPreviewOrderAsynchronously202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;
}


export class PostPreviewOrderAsynchronouslyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPreviewOrderAsynchronouslyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostOrderPreviewRequestType;
}


export class PostPreviewOrderAsynchronouslyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postPreviewOrderAsynchronously202ApplicationJSONObject?: PostPreviewOrderAsynchronously202ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
