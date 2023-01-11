import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChargeMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromTimestamp" })
  fromTimestamp: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toTimestamp" })
  toTimestamp: Date;
}


export class GetChargeMetricsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetChargeMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChargeMetricsQueryParams;

  @SpeakeasyMetadata()
  headers: GetChargeMetricsHeaders;
}


export class GetChargeMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chargeMetricsResponse?: shared.ChargeMetricsResponse;

  @SpeakeasyMetadata()
  commonReasonsErrorResponse?: shared.CommonReasonsErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
