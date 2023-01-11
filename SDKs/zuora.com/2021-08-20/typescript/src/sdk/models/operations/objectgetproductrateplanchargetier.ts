import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectGetProductRatePlanChargeTierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ObjectGetProductRatePlanChargeTierQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;
}


export class ObjectGetProductRatePlanChargeTierHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectGetProductRatePlanChargeTierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ObjectGetProductRatePlanChargeTierPathParams;

  @SpeakeasyMetadata()
  queryParams: ObjectGetProductRatePlanChargeTierQueryParams;

  @SpeakeasyMetadata()
  headers: ObjectGetProductRatePlanChargeTierHeaders;
}


export class ObjectGetProductRatePlanChargeTierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyGetProductRatePlanChargeTier?: shared.ProxyGetProductRatePlanChargeTier;

  @SpeakeasyMetadata()
  proxyNoDataResponse?: shared.ProxyNoDataResponse;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
