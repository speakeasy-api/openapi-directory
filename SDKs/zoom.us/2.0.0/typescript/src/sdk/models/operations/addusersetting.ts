import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddUserSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingType" })
  settingType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


// AddUserSettingApplicationJsonVoiceMail
/** 
 * Update the voicemail setting.
**/
export class AddUserSettingApplicationJsonVoiceMail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_user_id" })
  accessUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;
}


export class AddUserSettingApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=voice_mail" })
  voiceMail?: AddUserSettingApplicationJsonVoiceMail;
}


// AddUserSettingMultipartFormDataVoiceMail
/** 
 * Update the voicemail setting.
**/
export class AddUserSettingMultipartFormDataVoiceMail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_user_id" })
  accessUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;
}


export class AddUserSettingMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=voice_mail;json=true" })
  voiceMail?: AddUserSettingMultipartFormDataVoiceMail;
}


export class AddUserSettingRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddUserSettingApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddUserSettingMultipartFormData;
}


export class AddUserSettingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AddUserSetting201ApplicationJsonVoiceMail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_user_id" })
  accessUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shared_id" })
  sharedId?: string;
}


export class AddUserSetting201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=voice_mail" })
  voiceMail?: AddUserSetting201ApplicationJsonVoiceMail;
}


export class AddUserSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddUserSettingPathParams;

  @SpeakeasyMetadata()
  request?: AddUserSettingRequests;

  @SpeakeasyMetadata()
  security: AddUserSettingSecurity;
}


export class AddUserSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addUserSetting201ApplicationJSONObject?: AddUserSetting201ApplicationJson;

  @SpeakeasyMetadata()
  addUserSetting400ApplicationJSONAny?: any;
}
