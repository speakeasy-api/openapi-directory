import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription-key" })
  subscriptionKey: string;
}


export class PutSubscriptionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class PutSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSubscriptionPathParams;

  @SpeakeasyMetadata()
  headers: PutSubscriptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PutSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putSubscriptionResponseType?: shared.PutSubscriptionResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
