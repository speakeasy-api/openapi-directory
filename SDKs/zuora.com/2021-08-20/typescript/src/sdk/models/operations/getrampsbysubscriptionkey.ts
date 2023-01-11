import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRampsBySubscriptionKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionKey" })
  subscriptionKey: string;
}


export class GetRampsBySubscriptionKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRampsBySubscriptionKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRampsBySubscriptionKeyPathParams;

  @SpeakeasyMetadata()
  headers: GetRampsBySubscriptionKeyHeaders;
}


export class GetRampsBySubscriptionKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRampsBySubscriptionKeyResponseType?: shared.GetRampsBySubscriptionKeyResponseType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
