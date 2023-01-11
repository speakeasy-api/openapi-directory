import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostReversePaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-id" })
  paymentId: string;
}


export class PostReversePaymentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostReversePaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostReversePaymentPathParams;

  @SpeakeasyMetadata()
  headers: PostReversePaymentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostReversePaymentRequest;
}


export class PostReversePaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postReversePaymentResponse?: shared.PostReversePaymentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
