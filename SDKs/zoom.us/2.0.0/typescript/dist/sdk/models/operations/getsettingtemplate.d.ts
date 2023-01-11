import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSettingTemplatePathParams extends SpeakeasyBase {
    templateId: string;
}
export declare class GetSettingTemplateQueryParams extends SpeakeasyBase {
    customQueryFields?: string;
}
export declare class GetSettingTemplateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording extends SpeakeasyBase {
    enable?: boolean;
    recordingStartPrompt?: boolean;
    recordingTranscription?: boolean;
}
export declare class GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording extends SpeakeasyBase {
    enable?: boolean;
    recordingCalls?: string;
    recordingStartPrompt?: boolean;
    recordingTranscription?: boolean;
}
export declare class GetSettingTemplate200ApplicationJsonPolicySms extends SpeakeasyBase {
    enable?: boolean;
    internationalSms?: boolean;
}
export declare class GetSettingTemplate200ApplicationJsonPolicyVoicemail extends SpeakeasyBase {
    allowTranscription?: boolean;
    enable?: boolean;
}
export declare class GetSettingTemplate200ApplicationJsonPolicy extends SpeakeasyBase {
    adHocCallRecording?: GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording;
    autoCallRecording?: GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording;
    sms?: GetSettingTemplate200ApplicationJsonPolicySms;
    voicemail?: GetSettingTemplate200ApplicationJsonPolicyVoicemail;
}
export declare class GetSettingTemplate200ApplicationJsonProfile extends SpeakeasyBase {
    areaCode?: string;
    country?: string;
}
export declare enum GetSettingTemplate200ApplicationJsonTypeEnum {
    User = "user",
    Group = "group",
    AutoReceptionist = "autoReceptionist",
    CommonArea = "commonArea",
    Zr = "zr",
    Interop = "interop"
}
export declare enum GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum {
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
export declare class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator extends SpeakeasyBase {
    enable?: boolean;
    id?: string;
    type?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
}
export declare class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours extends SpeakeasyBase {
    from?: string;
    to?: string;
    type?: number;
    weekday?: number;
}
export declare enum GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum {
    Zero = "0",
    One = "1"
}
export declare enum GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum {
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
export declare class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours extends SpeakeasyBase {
    businessHourAction?: number;
    connectToOperator?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator;
    customHours?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours[];
    ringType?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum;
    ringingDuration?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum;
    type?: number;
}
export declare enum GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum {
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
export declare class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator extends SpeakeasyBase {
    enable?: boolean;
    id?: string;
    type?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
}
export declare enum GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum {
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
export declare class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours extends SpeakeasyBase {
    closeHourAction?: number;
    connectToOperator?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator;
    maxWaitTime?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
}
export declare class GetSettingTemplate200ApplicationJsonUserSettingsCallHandling extends SpeakeasyBase {
    businessHours?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours;
    closeHours?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours;
}
export declare class GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone extends SpeakeasyBase {
    pinCode?: string;
}
export declare enum GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum {
    Default = "default",
    Disable = "disable"
}
export declare class GetSettingTemplate200ApplicationJsonUserSettings extends SpeakeasyBase {
    audioPromptLanguage?: string;
    blockCallsWithoutCallerId?: boolean;
    callHandling?: GetSettingTemplate200ApplicationJsonUserSettingsCallHandling;
    deskPhone?: GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone;
    holdMusic?: GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum;
}
export declare class GetSettingTemplate200ApplicationJson extends SpeakeasyBase {
    description?: string;
    id?: string;
    name?: string;
    policy?: GetSettingTemplate200ApplicationJsonPolicy;
    profile?: GetSettingTemplate200ApplicationJsonProfile;
    type?: GetSettingTemplate200ApplicationJsonTypeEnum;
    userSettings?: GetSettingTemplate200ApplicationJsonUserSettings;
}
export declare class GetSettingTemplateRequest extends SpeakeasyBase {
    pathParams: GetSettingTemplatePathParams;
    queryParams: GetSettingTemplateQueryParams;
    security: GetSettingTemplateSecurity;
}
export declare class GetSettingTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getSettingTemplate200ApplicationJSONObject?: GetSettingTemplate200ApplicationJson;
    getSettingTemplate404ApplicationJSONAny?: any;
}
