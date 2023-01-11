import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletePaymentRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentRunId" })
  paymentRunId: string;
}


export class DeletePaymentRunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class DeletePaymentRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePaymentRunPathParams;

  @SpeakeasyMetadata()
  headers: DeletePaymentRunHeaders;
}


export class DeletePaymentRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
