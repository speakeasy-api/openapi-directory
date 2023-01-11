import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSettingTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateId" })
  templateId: string;
}


export class UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_start_prompt" })
  recordingStartPrompt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_transcription" })
  recordingTranscription?: boolean;
}

export enum UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    Both = "both"
}


export class UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_calls" })
  recordingCalls?: UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum;

  @SpeakeasyMetadata({ data: "json, name=recording_start_prompt" })
  recordingStartPrompt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_transcription" })
  recordingTranscription?: boolean;
}


export class UpdateSettingTemplateApplicationJsonPolicySms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=international_sms" })
  internationalSms?: boolean;
}


export class UpdateSettingTemplateApplicationJsonPolicyVoicemail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_transcription" })
  allowTranscription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}


export class UpdateSettingTemplateApplicationJsonPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ad_hoc_call_recording" })
  adHocCallRecording?: UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording;

  @SpeakeasyMetadata({ data: "json, name=auto_call_recording" })
  autoCallRecording?: UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording;

  @SpeakeasyMetadata({ data: "json, name=sms" })
  sms?: UpdateSettingTemplateApplicationJsonPolicySms;

  @SpeakeasyMetadata({ data: "json, name=voicemail" })
  voicemail?: UpdateSettingTemplateApplicationJsonPolicyVoicemail;
}


export class UpdateSettingTemplateApplicationJsonProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area_code" })
  areaCode?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;
}

export enum UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}


// UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator
/** 
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
export class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
}


export class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=weekday" })
  weekday?: number;
}

export enum UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum {
    Zero = "0",
    One = "1"
}

export enum UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum {
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


export class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=business_hour_action" })
  businessHourAction?: number;

  @SpeakeasyMetadata({ data: "json, name=connect_to_operator" })
  connectToOperator?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator;

  @SpeakeasyMetadata({ data: "json, name=custom_hours", elemType: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours })
  customHours?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours[];

  @SpeakeasyMetadata({ data: "json, name=ring_type" })
  ringType?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ringing_duration" })
  ringingDuration?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}


// UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator
/** 
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
export class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
}

export enum UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum {
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


export class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=close_hour_action" })
  closeHourAction?: number;

  @SpeakeasyMetadata({ data: "json, name=connect_to_operator" })
  connectToOperator?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator;

  @SpeakeasyMetadata({ data: "json, name=max_wait_time" })
  maxWaitTime?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
}


export class UpdateSettingTemplateApplicationJsonUserSettingsCallHandling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=business_hours" })
  businessHours?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours;

  @SpeakeasyMetadata({ data: "json, name=close_hours" })
  closeHours?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours;
}


export class UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pin_code" })
  pinCode?: string;
}

export enum UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum {
    Default = "default",
    Disable = "disable"
}


export class UpdateSettingTemplateApplicationJsonUserSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_prompt_language" })
  audioPromptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=block_calls_without_caller_id" })
  blockCallsWithoutCallerId?: boolean;

  @SpeakeasyMetadata({ data: "json, name=call_handling" })
  callHandling?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandling;

  @SpeakeasyMetadata({ data: "json, name=desk_phone" })
  deskPhone?: UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone;

  @SpeakeasyMetadata({ data: "json, name=hold_music" })
  holdMusic?: UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum;
}


export class UpdateSettingTemplateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: UpdateSettingTemplateApplicationJsonPolicy;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: UpdateSettingTemplateApplicationJsonProfile;

  @SpeakeasyMetadata({ data: "json, name=user_settings" })
  userSettings?: UpdateSettingTemplateApplicationJsonUserSettings;
}


export class UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_start_prompt" })
  recordingStartPrompt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_transcription" })
  recordingTranscription?: boolean;
}

export enum UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    Both = "both"
}


export class UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_calls" })
  recordingCalls?: UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum;

  @SpeakeasyMetadata({ data: "json, name=recording_start_prompt" })
  recordingStartPrompt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_transcription" })
  recordingTranscription?: boolean;
}


export class UpdateSettingTemplateMultipartFormDataPolicySms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=international_sms" })
  internationalSms?: boolean;
}


export class UpdateSettingTemplateMultipartFormDataPolicyVoicemail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_transcription" })
  allowTranscription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}


export class UpdateSettingTemplateMultipartFormDataPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ad_hoc_call_recording" })
  adHocCallRecording?: UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording;

  @SpeakeasyMetadata({ data: "json, name=auto_call_recording" })
  autoCallRecording?: UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording;

  @SpeakeasyMetadata({ data: "json, name=sms" })
  sms?: UpdateSettingTemplateMultipartFormDataPolicySms;

  @SpeakeasyMetadata({ data: "json, name=voicemail" })
  voicemail?: UpdateSettingTemplateMultipartFormDataPolicyVoicemail;
}


export class UpdateSettingTemplateMultipartFormDataProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area_code" })
  areaCode?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;
}

export enum UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}


// UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator
/** 
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
export class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
}


export class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=weekday" })
  weekday?: number;
}

export enum UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum {
    Zero = "0",
    One = "1"
}

export enum UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum {
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


export class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=business_hour_action" })
  businessHourAction?: number;

  @SpeakeasyMetadata({ data: "json, name=connect_to_operator" })
  connectToOperator?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator;

  @SpeakeasyMetadata({ data: "json, name=custom_hours", elemType: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours })
  customHours?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours[];

  @SpeakeasyMetadata({ data: "json, name=ring_type" })
  ringType?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ringing_duration" })
  ringingDuration?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}


// UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator
/** 
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
export class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
}

export enum UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum {
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


export class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=close_hour_action" })
  closeHourAction?: number;

  @SpeakeasyMetadata({ data: "json, name=connect_to_operator" })
  connectToOperator?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator;

  @SpeakeasyMetadata({ data: "json, name=max_wait_time" })
  maxWaitTime?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
}


export class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=business_hours" })
  businessHours?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours;

  @SpeakeasyMetadata({ data: "json, name=close_hours" })
  closeHours?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours;
}


export class UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pin_code" })
  pinCode?: string;
}

export enum UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum {
    Default = "default",
    Disable = "disable"
}


export class UpdateSettingTemplateMultipartFormDataUserSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_prompt_language" })
  audioPromptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=block_calls_without_caller_id" })
  blockCallsWithoutCallerId?: boolean;

  @SpeakeasyMetadata({ data: "json, name=call_handling" })
  callHandling?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling;

  @SpeakeasyMetadata({ data: "json, name=desk_phone" })
  deskPhone?: UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone;

  @SpeakeasyMetadata({ data: "json, name=hold_music" })
  holdMusic?: UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum;
}


export class UpdateSettingTemplateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=policy;json=true" })
  policy?: UpdateSettingTemplateMultipartFormDataPolicy;

  @SpeakeasyMetadata({ data: "multipart_form, name=profile;json=true" })
  profile?: UpdateSettingTemplateMultipartFormDataProfile;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_settings;json=true" })
  userSettings?: UpdateSettingTemplateMultipartFormDataUserSettings;
}


export class UpdateSettingTemplateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateSettingTemplateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateSettingTemplateMultipartFormData;
}


export class UpdateSettingTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateSettingTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSettingTemplatePathParams;

  @SpeakeasyMetadata()
  request?: UpdateSettingTemplateRequests;

  @SpeakeasyMetadata()
  security: UpdateSettingTemplateSecurity;
}


export class UpdateSettingTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSettingTemplate204ApplicationJSONAny?: any;
}
