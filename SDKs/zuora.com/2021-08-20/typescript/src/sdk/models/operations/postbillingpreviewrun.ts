import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostBillingPreviewRunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostBillingPreviewRun200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingPreviewRunId" })
  billingPreviewRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class PostBillingPreviewRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostBillingPreviewRunHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostBillingPreviewRunParam;
}


export class PostBillingPreviewRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postBillingPreviewRun200ApplicationJSONObject?: PostBillingPreviewRun200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
