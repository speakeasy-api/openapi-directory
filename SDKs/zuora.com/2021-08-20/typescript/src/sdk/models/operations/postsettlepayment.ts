import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSettlePaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-id" })
  paymentId: string;
}


export class PostSettlePaymentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostSettlePaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSettlePaymentPathParams;

  @SpeakeasyMetadata()
  headers: PostSettlePaymentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostSettlePaymentRequest;
}


export class PostSettlePaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postSettlePaymentResponse?: shared.PostSettlePaymentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
