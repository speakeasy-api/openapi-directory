import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRampMetricsByOrderNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderNumber" })
  orderNumber: string;
}


export class GetRampMetricsByOrderNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRampMetricsByOrderNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRampMetricsByOrderNumberPathParams;

  @SpeakeasyMetadata()
  headers: GetRampMetricsByOrderNumberHeaders;
}


export class GetRampMetricsByOrderNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRampMetricsByOrderNumberResponseType?: shared.GetRampMetricsByOrderNumberResponseType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
