import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRevenueAcrossApPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rs-number" })
  rsNumber: string;
}


export class PutRevenueAcrossApHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutRevenueAcrossApRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRevenueAcrossApPathParams;

  @SpeakeasyMetadata()
  headers: PutRevenueAcrossApHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PutRevenueAcrossApResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putRevenueScheduleResponseType?: shared.PutRevenueScheduleResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
