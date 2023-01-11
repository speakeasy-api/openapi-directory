import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostBillingPreviewHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostBillingPreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostBillingPreviewHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostBillingPreviewParam;
}


export class PostBillingPreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billingPreviewResult?: shared.BillingPreviewResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
