import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateId" })
  templateId: string;
}


export class GetSettingTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=custom_query_fields" })
  customQueryFields?: string;
}


export class GetSettingTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_start_prompt" })
  recordingStartPrompt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_transcription" })
  recordingTranscription?: boolean;
}


export class GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_calls" })
  recordingCalls?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_start_prompt" })
  recordingStartPrompt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_transcription" })
  recordingTranscription?: boolean;
}


export class GetSettingTemplate200ApplicationJsonPolicySms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=international_sms" })
  internationalSms?: boolean;
}


export class GetSettingTemplate200ApplicationJsonPolicyVoicemail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_transcription" })
  allowTranscription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}


export class GetSettingTemplate200ApplicationJsonPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ad_hoc_call_recording" })
  adHocCallRecording?: GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording;

  @SpeakeasyMetadata({ data: "json, name=auto_call_recording" })
  autoCallRecording?: GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording;

  @SpeakeasyMetadata({ data: "json, name=sms" })
  sms?: GetSettingTemplate200ApplicationJsonPolicySms;

  @SpeakeasyMetadata({ data: "json, name=voicemail" })
  voicemail?: GetSettingTemplate200ApplicationJsonPolicyVoicemail;
}


export class GetSettingTemplate200ApplicationJsonProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area_code" })
  areaCode?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;
}

export enum GetSettingTemplate200ApplicationJsonTypeEnum {
    User = "user",
    Group = "group",
    AutoReceptionist = "autoReceptionist",
    CommonArea = "commonArea",
    Zr = "zr",
    Interop = "interop"
}

export enum GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}


// GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator
/** 
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
export class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
}


export class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=weekday" })
  weekday?: number;
}

export enum GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum {
    Zero = "0",
    One = "1"
}

export enum GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum {
    Fifteen = "15",
    Twenty = "20",
    TwentyFive = "25",
    Thirty = "30",
    ThirtyFive = "35",
    Forty = "40",
    FortyFive = "45",
    Fifty = "50",
    FiftyFive = "55",
    Sixty = "60"
}


export class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=business_hour_action" })
  businessHourAction?: number;

  @SpeakeasyMetadata({ data: "json, name=connect_to_operator" })
  connectToOperator?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator;

  @SpeakeasyMetadata({ data: "json, name=custom_hours", elemType: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours })
  customHours?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours[];

  @SpeakeasyMetadata({ data: "json, name=ring_type" })
  ringType?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ringing_duration" })
  ringingDuration?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}


// GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator
/** 
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
export class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
}

export enum GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum {
    Fifteen = "15",
    Twenty = "20",
    TwentyFive = "25",
    Thirty = "30",
    ThirtyFive = "35",
    Forty = "40",
    FortyFive = "45",
    Fifty = "50",
    FiftyFive = "55",
    Sixty = "60"
}


export class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=close_hour_action" })
  closeHourAction?: number;

  @SpeakeasyMetadata({ data: "json, name=connect_to_operator" })
  connectToOperator?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator;

  @SpeakeasyMetadata({ data: "json, name=max_wait_time" })
  maxWaitTime?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
}


export class GetSettingTemplate200ApplicationJsonUserSettingsCallHandling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=business_hours" })
  businessHours?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours;

  @SpeakeasyMetadata({ data: "json, name=close_hours" })
  closeHours?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours;
}


export class GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pin_code" })
  pinCode?: string;
}

export enum GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum {
    Default = "default",
    Disable = "disable"
}


export class GetSettingTemplate200ApplicationJsonUserSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_prompt_language" })
  audioPromptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=block_calls_without_caller_id" })
  blockCallsWithoutCallerId?: boolean;

  @SpeakeasyMetadata({ data: "json, name=call_handling" })
  callHandling?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandling;

  @SpeakeasyMetadata({ data: "json, name=desk_phone" })
  deskPhone?: GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone;

  @SpeakeasyMetadata({ data: "json, name=hold_music" })
  holdMusic?: GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum;
}


export class GetSettingTemplate200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: GetSettingTemplate200ApplicationJsonPolicy;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: GetSettingTemplate200ApplicationJsonProfile;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetSettingTemplate200ApplicationJsonTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=user_settings" })
  userSettings?: GetSettingTemplate200ApplicationJsonUserSettings;
}


export class GetSettingTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingTemplatePathParams;

  @SpeakeasyMetadata()
  queryParams: GetSettingTemplateQueryParams;

  @SpeakeasyMetadata()
  security: GetSettingTemplateSecurity;
}


export class GetSettingTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSettingTemplate200ApplicationJSONObject?: GetSettingTemplate200ApplicationJson;

  @SpeakeasyMetadata()
  getSettingTemplate404ApplicationJSONAny?: any;
}
