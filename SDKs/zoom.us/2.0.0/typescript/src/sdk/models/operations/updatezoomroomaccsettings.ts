import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateZoomRoomAccSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setting_type" })
  settingType: string;
}


export class UpdateZoomRoomAccSettingsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: Record<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: Record<string, any>;
}


export class UpdateZoomRoomAccSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateZoomRoomAccSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateZoomRoomAccSettingsQueryParams;

  @SpeakeasyMetadata()
  request?: UpdateZoomRoomAccSettingsRequests;

  @SpeakeasyMetadata()
  security: UpdateZoomRoomAccSettingsSecurity;
}


export class UpdateZoomRoomAccSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateZoomRoomAccSettings204ApplicationJSONObject?: Record<string, any>;
}
