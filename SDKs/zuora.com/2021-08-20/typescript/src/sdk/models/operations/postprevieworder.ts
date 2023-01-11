import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPreviewOrderHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostPreviewOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPreviewOrderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostOrderPreviewRequestType;
}


export class PostPreviewOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postOrderPreviewResponseType?: shared.PostOrderPreviewResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
