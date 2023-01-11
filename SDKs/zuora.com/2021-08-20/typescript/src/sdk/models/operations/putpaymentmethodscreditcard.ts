import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutPaymentMethodsCreditCardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-method-id" })
  paymentMethodId: string;
}


export class PutPaymentMethodsCreditCardHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutPaymentMethodsCreditCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPaymentMethodsCreditCardPathParams;

  @SpeakeasyMetadata()
  headers: PutPaymentMethodsCreditCardHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PutPaymentMethodsCreditCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putPaymentMethodResponseType?: shared.PutPaymentMethodResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
