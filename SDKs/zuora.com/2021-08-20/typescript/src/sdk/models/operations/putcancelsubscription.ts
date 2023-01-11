import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCancelSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription-key" })
  subscriptionKey: string;
}


export class PutCancelSubscriptionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class PutCancelSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCancelSubscriptionPathParams;

  @SpeakeasyMetadata()
  headers: PutCancelSubscriptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostSubscriptionCancellationType;
}


export class PutCancelSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postSubscriptionCancellationResponseType?: shared.PostSubscriptionCancellationResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
