import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingType" })
  settingType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


// UpdateUserSettingApplicationJsonVoiceMail
/** 
 * Update the voicemail setting.
**/
export class UpdateUserSettingApplicationJsonVoiceMail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_user_id" })
  accessUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shared_id" })
  sharedId?: string;
}


export class UpdateUserSettingApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=voice_mail" })
  voiceMail?: UpdateUserSettingApplicationJsonVoiceMail;
}


// UpdateUserSettingMultipartFormDataVoiceMail
/** 
 * Update the voicemail setting.
**/
export class UpdateUserSettingMultipartFormDataVoiceMail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_user_id" })
  accessUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shared_id" })
  sharedId?: string;
}


export class UpdateUserSettingMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=voice_mail;json=true" })
  voiceMail?: UpdateUserSettingMultipartFormDataVoiceMail;
}


export class UpdateUserSettingRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateUserSettingApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateUserSettingMultipartFormData;
}


export class UpdateUserSettingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateUserSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserSettingPathParams;

  @SpeakeasyMetadata()
  request?: UpdateUserSettingRequests;

  @SpeakeasyMetadata()
  security: UpdateUserSettingSecurity;
}


export class UpdateUserSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateUserSetting204ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateUserSetting400ApplicationJSONObject?: Record<string, any>;
}
