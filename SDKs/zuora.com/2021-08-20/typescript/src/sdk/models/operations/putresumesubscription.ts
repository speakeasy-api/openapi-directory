import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutResumeSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription-key" })
  subscriptionKey: string;
}


export class PutResumeSubscriptionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class PutResumeSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutResumeSubscriptionPathParams;

  @SpeakeasyMetadata()
  headers: PutResumeSubscriptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutSubscriptionResumeType;
}


export class PutResumeSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putSubscriptionResumeResponseType?: shared.PutSubscriptionResumeResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
