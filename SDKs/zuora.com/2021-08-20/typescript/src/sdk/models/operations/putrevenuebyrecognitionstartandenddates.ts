import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRevenueByRecognitionStartandEndDatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rs-number" })
  rsNumber: string;
}


export class PutRevenueByRecognitionStartandEndDatesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutRevenueByRecognitionStartandEndDatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRevenueByRecognitionStartandEndDatesPathParams;

  @SpeakeasyMetadata()
  headers: PutRevenueByRecognitionStartandEndDatesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PutRevenueByRecognitionStartandEndDatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putRevenueScheduleResponseType?: shared.PutRevenueScheduleResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
