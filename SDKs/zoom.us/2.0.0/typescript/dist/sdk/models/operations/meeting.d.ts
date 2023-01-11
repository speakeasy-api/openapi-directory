import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingPathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare class MeetingQueryParams extends SpeakeasyBase {
    occurrenceId?: string;
    showPreviousOccurrences?: boolean;
}
export declare class MeetingSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Occurence object. This object is only returned for Recurring Webinars.
**/
export declare class Meeting200ApplicationJsonOccurrences extends SpeakeasyBase {
    duration?: number;
    occurrenceId?: string;
    startTime?: Date;
    status?: string;
}
export declare enum Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum {
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
export declare class Meeting200ApplicationJsonRecurrence extends SpeakeasyBase {
    endDateTime?: Date;
    endTimes?: number;
    monthlyDay?: number;
    monthlyWeek?: number;
    monthlyWeekDay?: number;
    repeatInterval?: number;
    type: number;
    weeklyDays?: Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum;
}
export declare enum Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
export declare class Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
    approvedList?: string[];
    deniedList?: string[];
    enable?: boolean;
    method?: Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}
export declare enum Meeting200ApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare class Meeting200ApplicationJsonSettingsAuthenticationException extends SpeakeasyBase {
    email?: string;
    name?: string;
}
export declare enum Meeting200ApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
export declare class Meeting200ApplicationJsonSettingsBreakoutRoomRooms extends SpeakeasyBase {
    name?: string;
    participants?: string[];
}
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export declare class Meeting200ApplicationJsonSettingsBreakoutRoom extends SpeakeasyBase {
    enable?: boolean;
    rooms?: Meeting200ApplicationJsonSettingsBreakoutRoomRooms[];
}
export declare class Meeting200ApplicationJsonSettingsCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare enum Meeting200ApplicationJsonSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
export declare class Meeting200ApplicationJsonSettingsGlobalDialInNumbers extends SpeakeasyBase {
    city?: string;
    country?: string;
    countryName?: string;
    number?: string;
    type?: Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum;
}
export declare class Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
    email?: string;
    languages?: string;
}
export declare class Meeting200ApplicationJsonSettingsLanguageInterpretation extends SpeakeasyBase {
    enable?: boolean;
    interpreters?: Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters[];
}
/**
 * Meeting settings.
**/
export declare class Meeting200ApplicationJsonSettings extends SpeakeasyBase {
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    alternativeHostsEmailNotification?: boolean;
    approvalType?: number;
    approvedOrDeniedCountriesOrRegions?: Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
    audio?: Meeting200ApplicationJsonSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationException?: Meeting200ApplicationJsonSettingsAuthenticationException[];
    authenticationName?: string;
    authenticationOption?: string;
    autoRecording?: Meeting200ApplicationJsonSettingsAutoRecordingEnum;
    breakoutRoom?: Meeting200ApplicationJsonSettingsBreakoutRoom;
    closeRegistration?: boolean;
    cnMeeting?: boolean;
    contactEmail?: string;
    contactName?: string;
    customKeys?: Meeting200ApplicationJsonSettingsCustomKeys[];
    encryptionType?: Meeting200ApplicationJsonSettingsEncryptionTypeEnum;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    globalDialInCountries?: string[];
    globalDialInNumbers?: Meeting200ApplicationJsonSettingsGlobalDialInNumbers[];
    hostVideo?: boolean;
    inMeeting?: boolean;
    jbhTime?: number;
    joinBeforeHost?: boolean;
    languageInterpretation?: Meeting200ApplicationJsonSettingsLanguageInterpretation;
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
export declare enum Meeting200ApplicationJsonStatusEnum {
    Waiting = "waiting",
    Started = "started"
}
export declare class Meeting200ApplicationJsonTrackingFields extends SpeakeasyBase {
    field?: string;
    value?: string;
    visible?: boolean;
}
/**
 * Meeting object.
**/
export declare class Meeting200ApplicationJson extends SpeakeasyBase {
    agenda?: string;
    assistantId?: string;
    createdAt?: Date;
    duration?: number;
    encryptedPassword?: string;
    h323Password?: string;
    hostEmail?: string;
    hostId?: string;
    id?: number;
    joinUrl?: string;
    occurrences?: Meeting200ApplicationJsonOccurrences[];
    password?: string;
    pmi?: number;
    recurrence?: Meeting200ApplicationJsonRecurrence;
    settings?: Meeting200ApplicationJsonSettings;
    startTime?: Date;
    startUrl?: string;
    status?: Meeting200ApplicationJsonStatusEnum;
    timezone?: string;
    topic?: string;
    trackingFields?: Meeting200ApplicationJsonTrackingFields[];
    type?: number;
    uuid?: string;
}
export declare class MeetingRequest extends SpeakeasyBase {
    pathParams: MeetingPathParams;
    queryParams: MeetingQueryParams;
    security: MeetingSecurity;
}
export declare class MeetingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    meeting200ApplicationJSONObject?: Meeting200ApplicationJson;
}
