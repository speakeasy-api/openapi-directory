import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutPaymentMethodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-method-id" })
  paymentMethodId: string;
}


export class PutPaymentMethodHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutPaymentMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPaymentMethodPathParams;

  @SpeakeasyMetadata()
  headers: PutPaymentMethodHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PutPaymentMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putPaymentMethodResponse?: shared.PutPaymentMethodResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
