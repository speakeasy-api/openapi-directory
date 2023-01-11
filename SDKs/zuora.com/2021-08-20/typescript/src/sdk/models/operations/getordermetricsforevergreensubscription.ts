import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderMetricsforEvergreenSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderNumber" })
  orderNumber: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionNumber" })
  subscriptionNumber: string;
}


export class GetOrderMetricsforEvergreenSubscriptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;
}


export class GetOrderMetricsforEvergreenSubscriptionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetOrderMetricsforEvergreenSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrderMetricsforEvergreenSubscriptionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrderMetricsforEvergreenSubscriptionQueryParams;

  @SpeakeasyMetadata()
  headers: GetOrderMetricsforEvergreenSubscriptionHeaders;
}


export class GetOrderMetricsforEvergreenSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getOrderResponseForEvergreen?: shared.GetOrderResponseForEvergreen;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
