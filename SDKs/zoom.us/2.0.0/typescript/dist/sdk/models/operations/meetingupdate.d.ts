import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingUpdatePathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare class MeetingUpdateQueryParams extends SpeakeasyBase {
    occurrenceId?: string;
}
export declare enum MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
export declare class MeetingUpdateApplicationJsonRecurrence extends SpeakeasyBase {
    endDateTime?: Date;
    endTimes?: number;
    monthlyDay?: number;
    monthlyWeek?: number;
    monthlyWeekDay?: number;
    repeatInterval?: number;
    type: number;
    weeklyDays?: MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum;
}
export declare enum MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
export declare class MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
    approvedList?: string[];
    deniedList?: string[];
    enable?: boolean;
    method?: MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}
export declare enum MeetingUpdateApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare class MeetingUpdateApplicationJsonSettingsAuthenticationException extends SpeakeasyBase {
    email?: string;
    name?: string;
}
export declare enum MeetingUpdateApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
export declare class MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms extends SpeakeasyBase {
    name?: string;
    participants?: string[];
}
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export declare class MeetingUpdateApplicationJsonSettingsBreakoutRoom extends SpeakeasyBase {
    enable?: boolean;
    rooms?: MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms[];
}
export declare class MeetingUpdateApplicationJsonSettingsCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare enum MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
export declare class MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers extends SpeakeasyBase {
    city?: string;
    country?: string;
    countryName?: string;
    number?: string;
    type?: MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum;
}
export declare class MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
    email?: string;
    languages?: string;
}
export declare class MeetingUpdateApplicationJsonSettingsLanguageInterpretation extends SpeakeasyBase {
    enable?: boolean;
    interpreters?: MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters[];
}
/**
 * Meeting settings.
**/
export declare class MeetingUpdateApplicationJsonSettings extends SpeakeasyBase {
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    alternativeHostsEmailNotification?: boolean;
    approvalType?: number;
    approvedOrDeniedCountriesOrRegions?: MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
    audio?: MeetingUpdateApplicationJsonSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationException?: MeetingUpdateApplicationJsonSettingsAuthenticationException[];
    authenticationName?: string;
    authenticationOption?: string;
    autoRecording?: MeetingUpdateApplicationJsonSettingsAutoRecordingEnum;
    breakoutRoom?: MeetingUpdateApplicationJsonSettingsBreakoutRoom;
    closeRegistration?: boolean;
    cnMeeting?: boolean;
    contactEmail?: string;
    contactName?: string;
    customKeys?: MeetingUpdateApplicationJsonSettingsCustomKeys[];
    encryptionType?: MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    globalDialInCountries?: string[];
    globalDialInNumbers?: MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers[];
    hostVideo?: boolean;
    inMeeting?: boolean;
    jbhTime?: number;
    joinBeforeHost?: boolean;
    languageInterpretation?: MeetingUpdateApplicationJsonSettingsLanguageInterpretation;
    meetingAuthentication?: boolean;
    muteUponEntry?: boolean;
    participantVideo?: boolean;
    registrantsConfirmationEmail?: boolean;
    registrantsEmailNotification?: boolean;
    registrationType?: number;
    showShareButton?: boolean;
    usePmi?: boolean;
    waitingRoom?: boolean;
    watermark?: boolean;
}
export declare class MeetingUpdateApplicationJsonTrackingFields extends SpeakeasyBase {
    field?: string;
    value?: string;
}
/**
 * Base object for sessions.
**/
export declare class MeetingUpdateApplicationJson extends SpeakeasyBase {
    agenda?: string;
    duration?: number;
    password?: string;
    recurrence?: MeetingUpdateApplicationJsonRecurrence;
    scheduleFor?: string;
    settings?: MeetingUpdateApplicationJsonSettings;
    startTime?: Date;
    templateId?: string;
    timezone?: string;
    topic?: string;
    trackingFields?: MeetingUpdateApplicationJsonTrackingFields[];
    type?: number;
}
export declare enum MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
export declare class MeetingUpdateMultipartFormDataRecurrence extends SpeakeasyBase {
    endDateTime?: Date;
    endTimes?: number;
    monthlyDay?: number;
    monthlyWeek?: number;
    monthlyWeekDay?: number;
    repeatInterval?: number;
    type: number;
    weeklyDays?: MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum;
}
export declare enum MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
export declare class MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
    approvedList?: string[];
    deniedList?: string[];
    enable?: boolean;
    method?: MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}
export declare enum MeetingUpdateMultipartFormDataSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare class MeetingUpdateMultipartFormDataSettingsAuthenticationException extends SpeakeasyBase {
    email?: string;
    name?: string;
}
export declare enum MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
export declare class MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms extends SpeakeasyBase {
    name?: string;
    participants?: string[];
}
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export declare class MeetingUpdateMultipartFormDataSettingsBreakoutRoom extends SpeakeasyBase {
    enable?: boolean;
    rooms?: MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms[];
}
export declare class MeetingUpdateMultipartFormDataSettingsCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare enum MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
export declare class MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers extends SpeakeasyBase {
    city?: string;
    country?: string;
    countryName?: string;
    number?: string;
    type?: MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum;
}
export declare class MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
    email?: string;
    languages?: string;
}
export declare class MeetingUpdateMultipartFormDataSettingsLanguageInterpretation extends SpeakeasyBase {
    enable?: boolean;
    interpreters?: MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters[];
}
/**
 * Meeting settings.
**/
export declare class MeetingUpdateMultipartFormDataSettings extends SpeakeasyBase {
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    alternativeHostsEmailNotification?: boolean;
    approvalType?: number;
    approvedOrDeniedCountriesOrRegions?: MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions;
    audio?: MeetingUpdateMultipartFormDataSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationException?: MeetingUpdateMultipartFormDataSettingsAuthenticationException[];
    authenticationName?: string;
    authenticationOption?: string;
    autoRecording?: MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum;
    breakoutRoom?: MeetingUpdateMultipartFormDataSettingsBreakoutRoom;
    closeRegistration?: boolean;
    cnMeeting?: boolean;
    contactEmail?: string;
    contactName?: string;
    customKeys?: MeetingUpdateMultipartFormDataSettingsCustomKeys[];
    encryptionType?: MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    globalDialInCountries?: string[];
    globalDialInNumbers?: MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers[];
    hostVideo?: boolean;
    inMeeting?: boolean;
    jbhTime?: number;
    joinBeforeHost?: boolean;
    languageInterpretation?: MeetingUpdateMultipartFormDataSettingsLanguageInterpretation;
    meetingAuthentication?: boolean;
    muteUponEntry?: boolean;
    participantVideo?: boolean;
    registrantsConfirmationEmail?: boolean;
    registrantsEmailNotification?: boolean;
    registrationType?: number;
    showShareButton?: boolean;
    usePmi?: boolean;
    waitingRoom?: boolean;
    watermark?: boolean;
}
export declare class MeetingUpdateMultipartFormDataTrackingFields extends SpeakeasyBase {
    field?: string;
    value?: string;
}
/**
 * Base object for sessions.
**/
export declare class MeetingUpdateMultipartFormData1 extends SpeakeasyBase {
    agenda?: string;
    duration?: number;
    password?: string;
    recurrence?: MeetingUpdateMultipartFormDataRecurrence;
    scheduleFor?: string;
    settings?: MeetingUpdateMultipartFormDataSettings;
    startTime?: Date;
    templateId?: string;
    timezone?: string;
    topic?: string;
    trackingFields?: MeetingUpdateMultipartFormDataTrackingFields[];
    type?: number;
}
export declare class MeetingUpdateRequests extends SpeakeasyBase {
    object?: MeetingUpdateApplicationJson;
    object1?: MeetingUpdateMultipartFormData1;
}
export declare class MeetingUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingUpdateRequest extends SpeakeasyBase {
    pathParams: MeetingUpdatePathParams;
    queryParams: MeetingUpdateQueryParams;
    request: MeetingUpdateRequests;
    security: MeetingUpdateSecurity;
}
export declare class MeetingUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
