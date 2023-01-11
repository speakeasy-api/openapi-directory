import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PhoneUserSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PhoneUserSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary_number" })
  primaryNumber?: string;
}


// PhoneUserSettings200ApplicationJsonDeskPhone
/** 
 * Contains information on phones or devices provisioned for the user.
**/
export class PhoneUserSettings200ApplicationJsonDeskPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keys_positions" })
  keysPositions?: PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions;
}


// PhoneUserSettings200ApplicationJsonOutboundCaller
/** 
 * Outbound Caller Info
**/
export class PhoneUserSettings200ApplicationJsonOutboundCaller extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class PhoneUserSettings200ApplicationJsonOutboundCallerIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_default" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


// PhoneUserSettings200ApplicationJsonVoiceMail
/** 
 * [Shared voicemail access](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) assigned to user.
**/
export class PhoneUserSettings200ApplicationJsonVoiceMail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_user_id" })
  accessUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shared_id" })
  sharedId?: string;
}


// PhoneUserSettings200ApplicationJson
/** 
 * Phone User Setting
**/
export class PhoneUserSettings200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area_code" })
  areaCode?: string;

  @SpeakeasyMetadata({ data: "json, name=company_number" })
  companyNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=desk_phone" })
  deskPhone?: PhoneUserSettings200ApplicationJsonDeskPhone;

  @SpeakeasyMetadata({ data: "json, name=outbound_caller" })
  outboundCaller?: PhoneUserSettings200ApplicationJsonOutboundCaller;

  @SpeakeasyMetadata({ data: "json, name=outbound_caller_ids" })
  outboundCallerIds?: PhoneUserSettings200ApplicationJsonOutboundCallerIds;

  @SpeakeasyMetadata({ data: "json, name=voice_mail" })
  voiceMail?: PhoneUserSettings200ApplicationJsonVoiceMail;
}


export class PhoneUserSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PhoneUserSettingsPathParams;

  @SpeakeasyMetadata()
  security: PhoneUserSettingsSecurity;
}


export class PhoneUserSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  phoneUserSettings200ApplicationJSONObject?: PhoneUserSettings200ApplicationJson;
}
