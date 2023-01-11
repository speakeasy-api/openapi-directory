import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRampMetricsBySubscriptionKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionKey" })
  subscriptionKey: string;
}


export class GetRampMetricsBySubscriptionKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRampMetricsBySubscriptionKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRampMetricsBySubscriptionKeyPathParams;

  @SpeakeasyMetadata()
  headers: GetRampMetricsBySubscriptionKeyHeaders;
}


export class GetRampMetricsBySubscriptionKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRampMetricsBySubscriptionKeyResponseType?: shared.GetRampMetricsBySubscriptionKeyResponseType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
