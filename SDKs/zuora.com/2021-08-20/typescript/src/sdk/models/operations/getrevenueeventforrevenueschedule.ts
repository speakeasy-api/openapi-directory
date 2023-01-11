import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRevenueEventForRevenueSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rs-number" })
  rsNumber: string;
}


export class GetRevenueEventForRevenueScheduleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetRevenueEventForRevenueScheduleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRevenueEventForRevenueScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRevenueEventForRevenueSchedulePathParams;

  @SpeakeasyMetadata()
  queryParams: GetRevenueEventForRevenueScheduleQueryParams;

  @SpeakeasyMetadata()
  headers: GetRevenueEventForRevenueScheduleHeaders;
}


export class GetRevenueEventForRevenueScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRevenueEventDetailsType?: shared.GetRevenueEventDetailsType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
