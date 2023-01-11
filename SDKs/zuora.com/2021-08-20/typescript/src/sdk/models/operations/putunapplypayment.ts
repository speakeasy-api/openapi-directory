import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUnapplyPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class PutUnapplyPaymentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutUnapplyPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUnapplyPaymentPathParams;

  @SpeakeasyMetadata()
  headers: PutUnapplyPaymentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UnapplyPaymentType;
}


export class PutUnapplyPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getarPaymentType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
