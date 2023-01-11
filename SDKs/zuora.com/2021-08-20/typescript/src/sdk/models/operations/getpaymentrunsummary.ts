import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentRunSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentRunId" })
  paymentRunId: string;
}


export class GetPaymentRunSummaryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetPaymentRunSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentRunSummaryPathParams;

  @SpeakeasyMetadata()
  headers: GetPaymentRunSummaryHeaders;
}


export class GetPaymentRunSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPaymentRunSummaryResponse?: shared.GetPaymentRunSummaryResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
