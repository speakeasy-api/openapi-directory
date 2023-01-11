import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetZrSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class GetZrSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setting_type" })
  settingType: string;
}


export class GetZrSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetZrSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetZrSettingsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetZrSettingsQueryParams;

  @SpeakeasyMetadata()
  security: GetZrSettingsSecurity;
}


export class GetZrSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getZRSettings200ApplicationJSONObject?: Record<string, any>;
}
