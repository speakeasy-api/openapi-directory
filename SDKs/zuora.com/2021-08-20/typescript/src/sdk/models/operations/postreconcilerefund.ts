import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostReconcileRefundPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=refund-id" })
  refundId: string;
}


export class PostReconcileRefundHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostReconcileRefundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostReconcileRefundPathParams;

  @SpeakeasyMetadata()
  headers: PostReconcileRefundHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostReconcileRefundRequest;
}


export class PostReconcileRefundResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postReconcileRefundResponse?: shared.PostReconcileRefundResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
