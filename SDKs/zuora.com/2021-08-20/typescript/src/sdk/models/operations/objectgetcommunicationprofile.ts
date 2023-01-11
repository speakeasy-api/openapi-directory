import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectGetCommunicationProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ObjectGetCommunicationProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;
}


export class ObjectGetCommunicationProfileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectGetCommunicationProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ObjectGetCommunicationProfilePathParams;

  @SpeakeasyMetadata()
  queryParams: ObjectGetCommunicationProfileQueryParams;

  @SpeakeasyMetadata()
  headers: ObjectGetCommunicationProfileHeaders;
}


export class ObjectGetCommunicationProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyGetCommunicationProfile?: shared.ProxyGetCommunicationProfile;

  @SpeakeasyMetadata()
  proxyNoDataResponse?: shared.ProxyNoDataResponse;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
