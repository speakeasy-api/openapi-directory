import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRSforSubscChargePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=charge-key" })
  chargeKey: string;
}


export class GetRSforSubscChargeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetRSforSubscChargeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRSforSubscChargeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRSforSubscChargePathParams;

  @SpeakeasyMetadata()
  queryParams: GetRSforSubscChargeQueryParams;

  @SpeakeasyMetadata()
  headers: GetRSforSubscChargeHeaders;
}


export class GetRSforSubscChargeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getrsDetailsByChargeType?: shared.GetrsDetailsByChargeType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
