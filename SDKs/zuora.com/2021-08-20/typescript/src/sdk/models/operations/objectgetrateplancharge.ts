import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectGetRatePlanChargePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ObjectGetRatePlanChargeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;
}


export class ObjectGetRatePlanChargeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectGetRatePlanChargeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ObjectGetRatePlanChargePathParams;

  @SpeakeasyMetadata()
  queryParams: ObjectGetRatePlanChargeQueryParams;

  @SpeakeasyMetadata()
  headers: ObjectGetRatePlanChargeHeaders;
}


export class ObjectGetRatePlanChargeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyGetRatePlanCharge?: Record<string, any>;

  @SpeakeasyMetadata()
  proxyNoDataResponse?: shared.ProxyNoDataResponse;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
