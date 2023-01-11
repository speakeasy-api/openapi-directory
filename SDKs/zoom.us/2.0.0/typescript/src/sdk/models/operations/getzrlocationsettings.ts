import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetZrLocationSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationId" })
  locationId: string;
}


export class GetZrLocationSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setting_type" })
  settingType: string;
}


export class GetZrLocationSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetZrLocationSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetZrLocationSettingsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetZrLocationSettingsQueryParams;

  @SpeakeasyMetadata()
  security: GetZrLocationSettingsSecurity;
}


export class GetZrLocationSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getZRLocationSettings200ApplicationJSONObject?: Record<string, any>;
}
