import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRampMetricsByRampNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rampNumber" })
  rampNumber: string;
}


export class GetRampMetricsByRampNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRampMetricsByRampNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRampMetricsByRampNumberPathParams;

  @SpeakeasyMetadata()
  headers: GetRampMetricsByRampNumberHeaders;
}


export class GetRampMetricsByRampNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRampMetricsByRampNumberResponseType?: shared.GetRampMetricsByRampNumberResponseType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
