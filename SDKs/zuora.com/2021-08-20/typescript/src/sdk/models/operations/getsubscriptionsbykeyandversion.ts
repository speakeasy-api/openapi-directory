import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSubscriptionsByKeyAndVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription-key" })
  subscriptionKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetSubscriptionsByKeyAndVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=charge-detail" })
  chargeDetail?: string;
}


export class GetSubscriptionsByKeyAndVersionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetSubscriptionsByKeyAndVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsByKeyAndVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubscriptionsByKeyAndVersionQueryParams;

  @SpeakeasyMetadata()
  headers: GetSubscriptionsByKeyAndVersionHeaders;
}


export class GetSubscriptionsByKeyAndVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSubscriptionTypeWithSuccess?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
