import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeZrLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class ChangeZrLocationApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;
}


export class ChangeZrLocationMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=location_id" })
  locationId?: string;
}


export class ChangeZrLocationRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: ChangeZrLocationApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: ChangeZrLocationMultipartFormData;
}


export class ChangeZrLocationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ChangeZrLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeZrLocationPathParams;

  @SpeakeasyMetadata()
  request?: ChangeZrLocationRequests;

  @SpeakeasyMetadata()
  security: ChangeZrLocationSecurity;
}


export class ChangeZrLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  changeZRLocation204ApplicationJSONAny?: any;
}
