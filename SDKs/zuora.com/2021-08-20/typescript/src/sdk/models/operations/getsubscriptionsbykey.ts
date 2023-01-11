import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSubscriptionsByKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription-key" })
  subscriptionKey: string;
}


export class GetSubscriptionsByKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=charge-detail" })
  chargeDetail?: string;
}


export class GetSubscriptionsByKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetSubscriptionsByKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsByKeyPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubscriptionsByKeyQueryParams;

  @SpeakeasyMetadata()
  headers: GetSubscriptionsByKeyHeaders;
}


export class GetSubscriptionsByKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSubscriptionTypeWithSuccess?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
