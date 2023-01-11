import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectPutFeaturePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ObjectPutFeatureQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rejectUnknownFields" })
  rejectUnknownFields?: boolean;
}


export class ObjectPutFeatureHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectPutFeatureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ObjectPutFeaturePathParams;

  @SpeakeasyMetadata()
  queryParams: ObjectPutFeatureQueryParams;

  @SpeakeasyMetadata()
  headers: ObjectPutFeatureHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class ObjectPutFeatureResponse extends SpeakeasyBase {
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
