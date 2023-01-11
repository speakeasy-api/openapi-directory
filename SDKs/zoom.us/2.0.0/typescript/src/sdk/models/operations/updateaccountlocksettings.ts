import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAccountLockSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class UpdateAccountLockSettingsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: Record<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: Record<string, any>;
}


export class UpdateAccountLockSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateAccountLockSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAccountLockSettingsPathParams;

  @SpeakeasyMetadata()
  request?: UpdateAccountLockSettingsRequests;

  @SpeakeasyMetadata()
  security: UpdateAccountLockSettingsSecurity;
}


export class UpdateAccountLockSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAccountLockSettings200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateAccountLockSettings204ApplicationJSONObject?: Record<string, any>;
}
