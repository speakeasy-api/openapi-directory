import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteUserSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingType" })
  settingType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteUserSettingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shared_id" })
  sharedId: string;
}


export class DeleteUserSettingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DeleteUserSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserSettingPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteUserSettingQueryParams;

  @SpeakeasyMetadata()
  security: DeleteUserSettingSecurity;
}


export class DeleteUserSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteUserSetting204ApplicationJSONAny?: any;
}
