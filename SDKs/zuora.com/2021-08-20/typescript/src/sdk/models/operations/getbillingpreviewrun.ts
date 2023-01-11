import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBillingPreviewRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billingPreviewRunId" })
  billingPreviewRunId: string;
}


export class GetBillingPreviewRunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetBillingPreviewRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBillingPreviewRunPathParams;

  @SpeakeasyMetadata()
  headers: GetBillingPreviewRunHeaders;
}


export class GetBillingPreviewRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getBillingPreviewRunResponse?: shared.GetBillingPreviewRunResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
