import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRevenueItemsByChargeRevenueSummaryNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=crs-number" })
  crsNumber: string;
}


export class GetRevenueItemsByChargeRevenueSummaryNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetRevenueItemsByChargeRevenueSummaryNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRevenueItemsByChargeRevenueSummaryNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRevenueItemsByChargeRevenueSummaryNumberPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRevenueItemsByChargeRevenueSummaryNumberQueryParams;

  @SpeakeasyMetadata()
  headers: GetRevenueItemsByChargeRevenueSummaryNumberHeaders;
}


export class GetRevenueItemsByChargeRevenueSummaryNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRevenueItemsType?: shared.GetRevenueItemsType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
