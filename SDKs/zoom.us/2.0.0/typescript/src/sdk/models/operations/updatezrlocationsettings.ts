import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateZrLocationSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationId" })
  locationId: string;
}


export class UpdateZrLocationSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setting_type" })
  settingType: string;
}


export class UpdateZrLocationSettingsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: Record<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: Record<string, any>;
}


export class UpdateZrLocationSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateZrLocationSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateZrLocationSettingsPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateZrLocationSettingsQueryParams;

  @SpeakeasyMetadata()
  request?: UpdateZrLocationSettingsRequests;

  @SpeakeasyMetadata()
  security: UpdateZrLocationSettingsSecurity;
}


export class UpdateZrLocationSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateZRLocationSettings204ApplicationJSONAny?: any;
}
