import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSuspendSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription-key" })
  subscriptionKey: string;
}


export class PutSuspendSubscriptionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class PutSuspendSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSuspendSubscriptionPathParams;

  @SpeakeasyMetadata()
  headers: PutSuspendSubscriptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutSubscriptionSuspendType;
}


export class PutSuspendSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putSubscriptionSuspendResponseType?: shared.PutSubscriptionSuspendResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
