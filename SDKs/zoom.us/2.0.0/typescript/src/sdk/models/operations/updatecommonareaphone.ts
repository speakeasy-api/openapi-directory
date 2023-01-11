import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCommonAreaPhonePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commonAreaPhoneId" })
  commonAreaPhoneId: string;
}


export class UpdateCommonAreaPhoneApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;
}


export class UpdateCommonAreaPhoneMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_id" })
  siteId?: string;
}


export class UpdateCommonAreaPhoneRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateCommonAreaPhoneApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateCommonAreaPhoneMultipartFormData;
}


export class UpdateCommonAreaPhoneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateCommonAreaPhoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCommonAreaPhonePathParams;

  @SpeakeasyMetadata()
  request?: UpdateCommonAreaPhoneRequests;

  @SpeakeasyMetadata()
  security: UpdateCommonAreaPhoneSecurity;
}


export class UpdateCommonAreaPhoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCommonAreaPhone204ApplicationJSONAny?: any;
}
