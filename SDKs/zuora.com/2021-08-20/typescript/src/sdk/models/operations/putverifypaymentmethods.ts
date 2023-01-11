import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutVerifyPaymentMethodsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-method-id" })
  paymentMethodId: string;
}


export class PutVerifyPaymentMethodsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutVerifyPaymentMethodsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutVerifyPaymentMethodsPathParams;

  @SpeakeasyMetadata()
  headers: PutVerifyPaymentMethodsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutVerifyPaymentMethodType;
}


export class PutVerifyPaymentMethodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putVerifyPaymentMethodResponseType?: shared.PutVerifyPaymentMethodResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
