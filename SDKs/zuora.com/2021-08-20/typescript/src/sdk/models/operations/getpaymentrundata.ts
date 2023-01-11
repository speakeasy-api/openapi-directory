import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentRunDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentRunId" })
  paymentRunId: string;
}


export class GetPaymentRunDataHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetPaymentRunDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentRunDataPathParams;

  @SpeakeasyMetadata()
  headers: GetPaymentRunDataHeaders;
}


export class GetPaymentRunDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPaymentRunDataArrayResponse?: shared.GetPaymentRunDataArrayResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
