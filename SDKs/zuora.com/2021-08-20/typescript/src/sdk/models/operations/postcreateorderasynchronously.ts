import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCreateOrderAsynchronouslyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnIds" })
  returnIds?: boolean;
}


export class PostCreateOrderAsynchronouslyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class PostCreateOrderAsynchronously202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class PostCreateOrderAsynchronouslyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCreateOrderAsynchronouslyQueryParams;

  @SpeakeasyMetadata()
  headers: PostCreateOrderAsynchronouslyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostOrderRequestType;
}


export class PostCreateOrderAsynchronouslyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postCreateOrderAsynchronously202ApplicationJSONObject?: PostCreateOrderAsynchronously202ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
