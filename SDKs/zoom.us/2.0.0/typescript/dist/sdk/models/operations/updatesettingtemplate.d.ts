import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSettingTemplatePathParams extends SpeakeasyBase {
    templateId: string;
}
export declare class UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording extends SpeakeasyBase {
    enable?: boolean;
    recordingStartPrompt?: boolean;
    recordingTranscription?: boolean;
}
export declare enum UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    Both = "both"
}
export declare class UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording extends SpeakeasyBase {
    enable?: boolean;
    recordingCalls?: UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum;
    recordingStartPrompt?: boolean;
    recordingTranscription?: boolean;
}
export declare class UpdateSettingTemplateApplicationJsonPolicySms extends SpeakeasyBase {
    enable?: boolean;
    internationalSms?: boolean;
}
export declare class UpdateSettingTemplateApplicationJsonPolicyVoicemail extends SpeakeasyBase {
    allowTranscription?: boolean;
    enable?: boolean;
}
export declare class UpdateSettingTemplateApplicationJsonPolicy extends SpeakeasyBase {
    adHocCallRecording?: UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording;
    autoCallRecording?: UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording;
    sms?: UpdateSettingTemplateApplicationJsonPolicySms;
    voicemail?: UpdateSettingTemplateApplicationJsonPolicyVoicemail;
}
export declare class UpdateSettingTemplateApplicationJsonProfile extends SpeakeasyBase {
    areaCode?: string;
    country?: string;
}
export declare enum UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
export declare class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator extends SpeakeasyBase {
    enable?: boolean;
    id?: string;
    type?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
}
export declare class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours extends SpeakeasyBase {
    from?: string;
    to?: string;
    type?: number;
    weekday?: number;
}
export declare enum UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum {
    Zero = "0",
    One = "1"
}
export declare enum UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum {
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
export declare class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours extends SpeakeasyBase {
    businessHourAction?: number;
    connectToOperator?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator;
    customHours?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours[];
    ringType?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum;
    ringingDuration?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum;
    type?: number;
}
export declare enum UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
export declare class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator extends SpeakeasyBase {
    enable?: boolean;
    id?: string;
    type?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
}
export declare enum UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum {
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
export declare class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours extends SpeakeasyBase {
    closeHourAction?: number;
    connectToOperator?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator;
    maxWaitTime?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
}
export declare class UpdateSettingTemplateApplicationJsonUserSettingsCallHandling extends SpeakeasyBase {
    businessHours?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours;
    closeHours?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours;
}
export declare class UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone extends SpeakeasyBase {
    pinCode?: string;
}
export declare enum UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum {
    Default = "default",
    Disable = "disable"
}
export declare class UpdateSettingTemplateApplicationJsonUserSettings extends SpeakeasyBase {
    audioPromptLanguage?: string;
    blockCallsWithoutCallerId?: boolean;
    callHandling?: UpdateSettingTemplateApplicationJsonUserSettingsCallHandling;
    deskPhone?: UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone;
    holdMusic?: UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum;
}
export declare class UpdateSettingTemplateApplicationJson extends SpeakeasyBase {
    description?: string;
    name?: string;
    policy?: UpdateSettingTemplateApplicationJsonPolicy;
    profile?: UpdateSettingTemplateApplicationJsonProfile;
    userSettings?: UpdateSettingTemplateApplicationJsonUserSettings;
}
export declare class UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording extends SpeakeasyBase {
    enable?: boolean;
    recordingStartPrompt?: boolean;
    recordingTranscription?: boolean;
}
export declare enum UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    Both = "both"
}
export declare class UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording extends SpeakeasyBase {
    enable?: boolean;
    recordingCalls?: UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum;
    recordingStartPrompt?: boolean;
    recordingTranscription?: boolean;
}
export declare class UpdateSettingTemplateMultipartFormDataPolicySms extends SpeakeasyBase {
    enable?: boolean;
    internationalSms?: boolean;
}
export declare class UpdateSettingTemplateMultipartFormDataPolicyVoicemail extends SpeakeasyBase {
    allowTranscription?: boolean;
    enable?: boolean;
}
export declare class UpdateSettingTemplateMultipartFormDataPolicy extends SpeakeasyBase {
    adHocCallRecording?: UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording;
    autoCallRecording?: UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording;
    sms?: UpdateSettingTemplateMultipartFormDataPolicySms;
    voicemail?: UpdateSettingTemplateMultipartFormDataPolicyVoicemail;
}
export declare class UpdateSettingTemplateMultipartFormDataProfile extends SpeakeasyBase {
    areaCode?: string;
    country?: string;
}
export declare enum UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
export declare class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator extends SpeakeasyBase {
    enable?: boolean;
    id?: string;
    type?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
}
export declare class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours extends SpeakeasyBase {
    from?: string;
    to?: string;
    type?: number;
    weekday?: number;
}
export declare enum UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum {
    Zero = "0",
    One = "1"
}
export declare enum UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum {
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
export declare class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours extends SpeakeasyBase {
    businessHourAction?: number;
    connectToOperator?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator;
    customHours?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours[];
    ringType?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum;
    ringingDuration?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum;
    type?: number;
}
export declare enum UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
export declare class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator extends SpeakeasyBase {
    enable?: boolean;
    id?: string;
    type?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
}
export declare enum UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum {
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
export declare class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours extends SpeakeasyBase {
    closeHourAction?: number;
    connectToOperator?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator;
    maxWaitTime?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
}
export declare class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling extends SpeakeasyBase {
    businessHours?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours;
    closeHours?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours;
}
export declare class UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone extends SpeakeasyBase {
    pinCode?: string;
}
export declare enum UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum {
    Default = "default",
    Disable = "disable"
}
export declare class UpdateSettingTemplateMultipartFormDataUserSettings extends SpeakeasyBase {
    audioPromptLanguage?: string;
    blockCallsWithoutCallerId?: boolean;
    callHandling?: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling;
    deskPhone?: UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone;
    holdMusic?: UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum;
}
export declare class UpdateSettingTemplateMultipartFormData extends SpeakeasyBase {
    description?: string;
    name?: string;
    policy?: UpdateSettingTemplateMultipartFormDataPolicy;
    profile?: UpdateSettingTemplateMultipartFormDataProfile;
    userSettings?: UpdateSettingTemplateMultipartFormDataUserSettings;
}
export declare class UpdateSettingTemplateRequests extends SpeakeasyBase {
    object?: UpdateSettingTemplateApplicationJson;
    object1?: UpdateSettingTemplateMultipartFormData;
}
export declare class UpdateSettingTemplateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateSettingTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateSettingTemplatePathParams;
    request?: UpdateSettingTemplateRequests;
    security: UpdateSettingTemplateSecurity;
}
export declare class UpdateSettingTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSettingTemplate204ApplicationJSONAny?: any;
}
