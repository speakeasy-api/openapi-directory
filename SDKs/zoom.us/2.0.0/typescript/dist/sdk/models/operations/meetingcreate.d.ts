import { SpeakeasyBase } from "../../../internal/utils";
export declare class MeetingCreatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum {
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
export declare class MeetingCreateApplicationJsonRecurrence extends SpeakeasyBase {
    endDateTime?: Date;
    endTimes?: number;
    monthlyDay?: number;
    monthlyWeek?: number;
    monthlyWeekDay?: number;
    repeatInterval?: number;
    type: number;
    weeklyDays?: MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum;
}
export declare enum MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
export declare class MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
    approvedList?: string[];
    deniedList?: string[];
    enable?: boolean;
    method?: MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}
export declare enum MeetingCreateApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare enum MeetingCreateApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
export declare class MeetingCreateApplicationJsonSettingsBreakoutRoomRooms extends SpeakeasyBase {
    name?: string;
    participants?: string[];
}
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export declare class MeetingCreateApplicationJsonSettingsBreakoutRoom extends SpeakeasyBase {
    enable?: boolean;
    rooms?: MeetingCreateApplicationJsonSettingsBreakoutRoomRooms[];
}
export declare enum MeetingCreateApplicationJsonSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare class MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
    email?: string;
    languages?: string;
}
/**
 * Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings.
 *
 * **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
**/
export declare class MeetingCreateApplicationJsonSettingsLanguageInterpretation extends SpeakeasyBase {
    enable?: boolean;
    interpreters?: MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters[];
}
/**
 * Meeting settings.
**/
export declare class MeetingCreateApplicationJsonSettings extends SpeakeasyBase {
    additionalDataCenterRegions?: string[];
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    alternativeHostsEmailNotification?: boolean;
    approvalType?: number;
    approvedOrDeniedCountriesOrRegions?: MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
    audio?: MeetingCreateApplicationJsonSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationOption?: string;
    autoRecording?: MeetingCreateApplicationJsonSettingsAutoRecordingEnum;
    breakoutRoom?: MeetingCreateApplicationJsonSettingsBreakoutRoom;
    closeRegistration?: boolean;
    cnMeeting?: boolean;
    contactEmail?: string;
    contactName?: string;
    encryptionType?: MeetingCreateApplicationJsonSettingsEncryptionTypeEnum;
    globalDialInCountries?: string[];
    hostVideo?: boolean;
    inMeeting?: boolean;
    jbhTime?: number;
    joinBeforeHost?: boolean;
    languageInterpretation?: MeetingCreateApplicationJsonSettingsLanguageInterpretation;
    meetingAuthentication?: boolean;
    muteUponEntry?: boolean;
    participantVideo?: boolean;
    registrantsEmailNotification?: boolean;
    registrationType?: number;
    showShareButton?: boolean;
    usePmi?: boolean;
    waitingRoom?: boolean;
    watermark?: boolean;
}
export declare class MeetingCreateApplicationJsonTrackingFields extends SpeakeasyBase {
    field: string;
    value?: string;
}
/**
 * Base object for meeting.
**/
export declare class MeetingCreateApplicationJson extends SpeakeasyBase {
    agenda?: string;
    duration?: number;
    password?: string;
    recurrence?: MeetingCreateApplicationJsonRecurrence;
    scheduleFor?: string;
    settings?: MeetingCreateApplicationJsonSettings;
    startTime?: Date;
    templateId?: string;
    timezone?: string;
    topic?: string;
    trackingFields?: MeetingCreateApplicationJsonTrackingFields[];
    type?: number;
}
export declare enum MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum {
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
export declare class MeetingCreateMultipartFormDataRecurrence extends SpeakeasyBase {
    endDateTime?: Date;
    endTimes?: number;
    monthlyDay?: number;
    monthlyWeek?: number;
    monthlyWeekDay?: number;
    repeatInterval?: number;
    type: number;
    weeklyDays?: MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum;
}
export declare enum MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
export declare class MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
    approvedList?: string[];
    deniedList?: string[];
    enable?: boolean;
    method?: MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}
export declare enum MeetingCreateMultipartFormDataSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare enum MeetingCreateMultipartFormDataSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
export declare class MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms extends SpeakeasyBase {
    name?: string;
    participants?: string[];
}
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export declare class MeetingCreateMultipartFormDataSettingsBreakoutRoom extends SpeakeasyBase {
    enable?: boolean;
    rooms?: MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms[];
}
export declare enum MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare class MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
    email?: string;
    languages?: string;
}
/**
 * Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings.
 *
 * **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
**/
export declare class MeetingCreateMultipartFormDataSettingsLanguageInterpretation extends SpeakeasyBase {
    enable?: boolean;
    interpreters?: MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters[];
}
/**
 * Meeting settings.
**/
export declare class MeetingCreateMultipartFormDataSettings extends SpeakeasyBase {
    additionalDataCenterRegions?: string[];
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    alternativeHostsEmailNotification?: boolean;
    approvalType?: number;
    approvedOrDeniedCountriesOrRegions?: MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions;
    audio?: MeetingCreateMultipartFormDataSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationOption?: string;
    autoRecording?: MeetingCreateMultipartFormDataSettingsAutoRecordingEnum;
    breakoutRoom?: MeetingCreateMultipartFormDataSettingsBreakoutRoom;
    closeRegistration?: boolean;
    cnMeeting?: boolean;
    contactEmail?: string;
    contactName?: string;
    encryptionType?: MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum;
    globalDialInCountries?: string[];
    hostVideo?: boolean;
    inMeeting?: boolean;
    jbhTime?: number;
    joinBeforeHost?: boolean;
    languageInterpretation?: MeetingCreateMultipartFormDataSettingsLanguageInterpretation;
    meetingAuthentication?: boolean;
    muteUponEntry?: boolean;
    participantVideo?: boolean;
    registrantsEmailNotification?: boolean;
    registrationType?: number;
    showShareButton?: boolean;
    usePmi?: boolean;
    waitingRoom?: boolean;
    watermark?: boolean;
}
export declare class MeetingCreateMultipartFormDataTrackingFields extends SpeakeasyBase {
    field: string;
    value?: string;
}
/**
 * Base object for meeting.
**/
export declare class MeetingCreateMultipartFormData1 extends SpeakeasyBase {
    agenda?: string;
    duration?: number;
    password?: string;
    recurrence?: MeetingCreateMultipartFormDataRecurrence;
    scheduleFor?: string;
    settings?: MeetingCreateMultipartFormDataSettings;
    startTime?: Date;
    templateId?: string;
    timezone?: string;
    topic?: string;
    trackingFields?: MeetingCreateMultipartFormDataTrackingFields[];
    type?: number;
}
export declare class MeetingCreateRequests extends SpeakeasyBase {
    object?: MeetingCreateApplicationJson;
    object1?: MeetingCreateMultipartFormData1;
}
/**
 * Occurence object. This object is only returned for Recurring Webinars.
**/
export declare class MeetingCreate201ApplicationJsonOccurrences extends SpeakeasyBase {
    duration?: number;
    occurrenceId?: string;
    startTime?: Date;
    status?: string;
}
export declare enum MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum {
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
export declare class MeetingCreate201ApplicationJsonRecurrence extends SpeakeasyBase {
    endDateTime?: Date;
    endTimes?: number;
    monthlyDay?: number;
    monthlyWeek?: number;
    monthlyWeekDay?: number;
    repeatInterval?: number;
    type: number;
    weeklyDays?: MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum;
}
export declare enum MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
export declare class MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
    approvedList?: string[];
    deniedList?: string[];
    enable?: boolean;
    method?: MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}
export declare enum MeetingCreate201ApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare class MeetingCreate201ApplicationJsonSettingsAuthenticationException extends SpeakeasyBase {
    email?: string;
    name?: string;
}
export declare enum MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
export declare class MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms extends SpeakeasyBase {
    name?: string;
    participants?: string[];
}
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export declare class MeetingCreate201ApplicationJsonSettingsBreakoutRoom extends SpeakeasyBase {
    enable?: boolean;
    rooms?: MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms[];
}
export declare class MeetingCreate201ApplicationJsonSettingsCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare enum MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
export declare class MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers extends SpeakeasyBase {
    city?: string;
    country?: string;
    countryName?: string;
    number?: string;
    type?: MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum;
}
export declare class MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
    email?: string;
    languages?: string;
}
export declare class MeetingCreate201ApplicationJsonSettingsLanguageInterpretation extends SpeakeasyBase {
    enable?: boolean;
    interpreters?: MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters[];
}
/**
 * Meeting settings.
**/
export declare class MeetingCreate201ApplicationJsonSettings extends SpeakeasyBase {
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    alternativeHostsEmailNotification?: boolean;
    approvalType?: number;
    approvedOrDeniedCountriesOrRegions?: MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
    audio?: MeetingCreate201ApplicationJsonSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationException?: MeetingCreate201ApplicationJsonSettingsAuthenticationException[];
    authenticationName?: string;
    authenticationOption?: string;
    autoRecording?: MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum;
    breakoutRoom?: MeetingCreate201ApplicationJsonSettingsBreakoutRoom;
    closeRegistration?: boolean;
    cnMeeting?: boolean;
    contactEmail?: string;
    contactName?: string;
    customKeys?: MeetingCreate201ApplicationJsonSettingsCustomKeys[];
    encryptionType?: MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    globalDialInCountries?: string[];
    globalDialInNumbers?: MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers[];
    hostVideo?: boolean;
    inMeeting?: boolean;
    jbhTime?: number;
    joinBeforeHost?: boolean;
    languageInterpretation?: MeetingCreate201ApplicationJsonSettingsLanguageInterpretation;
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
export declare class MeetingCreate201ApplicationJsonTrackingFields extends SpeakeasyBase {
    field?: string;
    value?: string;
    visible?: boolean;
}
/**
 * Meeting object
**/
export declare class MeetingCreate201ApplicationJson extends SpeakeasyBase {
    agenda?: string;
    assistantId?: string;
    createdAt?: Date;
    duration?: number;
    h323Password?: string;
    hostEmail?: string;
    id?: number;
    joinUrl?: string;
    occurrences?: MeetingCreate201ApplicationJsonOccurrences[];
    password?: string;
    pmi?: number;
    recurrence?: MeetingCreate201ApplicationJsonRecurrence;
    registrationUrl?: string;
    settings?: MeetingCreate201ApplicationJsonSettings;
    startTime?: Date;
    startUrl?: string;
    timezone?: string;
    topic?: string;
    trackingFields?: MeetingCreate201ApplicationJsonTrackingFields[];
    type?: number;
}
export declare class MeetingCreateRequest extends SpeakeasyBase {
    pathParams: MeetingCreatePathParams;
    request: MeetingCreateRequests;
}
export declare class MeetingCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    meetingCreate201ApplicationJSONObject?: MeetingCreate201ApplicationJson;
}
