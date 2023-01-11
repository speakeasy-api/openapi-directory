import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSiteDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteId" })
  siteId: string;
}


export class UpdateSiteDetailsApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=site_code" })
  siteCode?: number;
}


export class UpdateSiteDetailsMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_code" })
  siteCode?: number;
}


export class UpdateSiteDetailsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateSiteDetailsApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateSiteDetailsMultipartFormData;
}


export class UpdateSiteDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateSiteDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSiteDetailsPathParams;

  @SpeakeasyMetadata()
  request?: UpdateSiteDetailsRequests;

  @SpeakeasyMetadata()
  security: UpdateSiteDetailsSecurity;
}


export class UpdateSiteDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSiteDetails204ApplicationJSONAny?: any;
}
