import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSubscriptionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class PostSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostSubscriptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postSubscriptionResponseType?: shared.PostSubscriptionResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
