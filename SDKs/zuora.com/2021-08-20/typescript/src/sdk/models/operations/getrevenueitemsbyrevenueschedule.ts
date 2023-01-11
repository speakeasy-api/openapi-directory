import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRevenueItemsByRevenueSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rs-number" })
  rsNumber: string;
}


export class GetRevenueItemsByRevenueScheduleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetRevenueItemsByRevenueScheduleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRevenueItemsByRevenueScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRevenueItemsByRevenueSchedulePathParams;

  @SpeakeasyMetadata()
  queryParams: GetRevenueItemsByRevenueScheduleQueryParams;

  @SpeakeasyMetadata()
  headers: GetRevenueItemsByRevenueScheduleHeaders;
}


export class GetRevenueItemsByRevenueScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRsRevenueItemsType?: shared.GetRsRevenueItemsType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
