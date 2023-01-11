import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rs-number" })
  rsNumber: string;
}


export class PutCustomFieldsonRevenueItemsByRevenueScheduleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutCustomFieldsonRevenueItemsByRevenueScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams;

  @SpeakeasyMetadata()
  headers: PutCustomFieldsonRevenueItemsByRevenueScheduleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutScheduleRiDetailType;
}


export class PutCustomFieldsonRevenueItemsByRevenueScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
