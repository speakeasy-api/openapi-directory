import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectGetRatePlanChargeTierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ObjectGetRatePlanChargeTierQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;
}


export class ObjectGetRatePlanChargeTierHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectGetRatePlanChargeTierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ObjectGetRatePlanChargeTierPathParams;

  @SpeakeasyMetadata()
  queryParams: ObjectGetRatePlanChargeTierQueryParams;

  @SpeakeasyMetadata()
  headers: ObjectGetRatePlanChargeTierHeaders;
}


export class ObjectGetRatePlanChargeTierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyGetRatePlanChargeTier?: shared.ProxyGetRatePlanChargeTier;

  @SpeakeasyMetadata()
  proxyNoDataResponse?: shared.ProxyNoDataResponse;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
