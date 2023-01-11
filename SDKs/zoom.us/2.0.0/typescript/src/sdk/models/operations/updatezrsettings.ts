import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateZrSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class UpdateZrSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setting_type" })
  settingType?: string;
}


export class UpdateZrSettingsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: Record<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: Record<string, any>;
}


export class UpdateZrSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateZrSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateZrSettingsPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateZrSettingsQueryParams;

  @SpeakeasyMetadata()
  request?: UpdateZrSettingsRequests;

  @SpeakeasyMetadata()
  security: UpdateZrSettingsSecurity;
}


export class UpdateZrSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateZRSettings204ApplicationJSONAny?: any;
}
