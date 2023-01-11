import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectPostUnitOfMeasureQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rejectUnknownFields" })
  rejectUnknownFields?: boolean;
}


export class ObjectPostUnitOfMeasureHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectPostUnitOfMeasureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ObjectPostUnitOfMeasureQueryParams;

  @SpeakeasyMetadata()
  headers: ObjectPostUnitOfMeasureHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProxyCreateUnitOfMeasure;
}


export class ObjectPostUnitOfMeasureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyBadRequestResponse?: shared.ProxyBadRequestResponse;

  @SpeakeasyMetadata()
  proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
