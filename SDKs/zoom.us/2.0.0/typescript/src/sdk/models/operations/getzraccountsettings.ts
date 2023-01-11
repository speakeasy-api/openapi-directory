import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetZrAccountSettingsSettingTypeEnum {
    Meeting = "meeting",
    Alert = "alert"
}


export class GetZrAccountSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setting_type" })
  settingType: GetZrAccountSettingsSettingTypeEnum;
}


export class GetZrAccountSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetZrAccountSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetZrAccountSettingsQueryParams;

  @SpeakeasyMetadata()
  security: GetZrAccountSettingsSecurity;
}


export class GetZrAccountSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getZRAccountSettings200ApplicationJSONObject?: Record<string, any>;
}
