import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectPutUnitOfMeasurePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ObjectPutUnitOfMeasureQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rejectUnknownFields" })
  rejectUnknownFields?: boolean;
}


export class ObjectPutUnitOfMeasureHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectPutUnitOfMeasureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ObjectPutUnitOfMeasurePathParams;

  @SpeakeasyMetadata()
  queryParams: ObjectPutUnitOfMeasureQueryParams;

  @SpeakeasyMetadata()
  headers: ObjectPutUnitOfMeasureHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProxyModifyUnitOfMeasure;
}


export class ObjectPutUnitOfMeasureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
