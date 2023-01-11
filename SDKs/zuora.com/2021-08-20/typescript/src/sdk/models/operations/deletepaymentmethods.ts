import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletePaymentMethodsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-method-id" })
  paymentMethodId: string;
}


export class DeletePaymentMethodsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class DeletePaymentMethodsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePaymentMethodsPathParams;

  @SpeakeasyMetadata()
  headers: DeletePaymentMethodsHeaders;
}


export class DeletePaymentMethodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
