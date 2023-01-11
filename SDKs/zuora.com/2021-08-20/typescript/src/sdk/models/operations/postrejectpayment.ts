import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRejectPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-id" })
  paymentId: string;
}


export class PostRejectPaymentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostRejectPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRejectPaymentPathParams;

  @SpeakeasyMetadata()
  headers: PostRejectPaymentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostRejectPaymentRequest;
}


export class PostRejectPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postRejectPaymentResponse?: shared.PostRejectPaymentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
