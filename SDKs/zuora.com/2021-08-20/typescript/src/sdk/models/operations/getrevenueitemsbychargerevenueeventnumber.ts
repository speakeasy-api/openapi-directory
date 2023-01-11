import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRevenueItemsByChargeRevenueEventNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event-number" })
  eventNumber: string;
}


export class GetRevenueItemsByChargeRevenueEventNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetRevenueItemsByChargeRevenueEventNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRevenueItemsByChargeRevenueEventNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRevenueItemsByChargeRevenueEventNumberPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRevenueItemsByChargeRevenueEventNumberQueryParams;

  @SpeakeasyMetadata()
  headers: GetRevenueItemsByChargeRevenueEventNumberHeaders;
}


export class GetRevenueItemsByChargeRevenueEventNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRevenueItemsType?: shared.GetRevenueItemsType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
