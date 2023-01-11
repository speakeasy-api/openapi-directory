import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MeetingCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}


// MeetingCreateApplicationJsonRecurrence
/** 
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
**/
export class MeetingCreateApplicationJsonRecurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_date_time" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=end_times" })
  endTimes?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_day" })
  monthlyDay?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_week" })
  monthlyWeek?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_week_day" })
  monthlyWeekDay?: number;

  @SpeakeasyMetadata({ data: "json, name=repeat_interval" })
  repeatInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;

  @SpeakeasyMetadata({ data: "json, name=weekly_days" })
  weeklyDays?: MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum;
}

export enum MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}


// MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions
/** 
 * Approve or block users from specific regions/countries from joining this meeting. 
 * 
**/
export class MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approved_list" })
  approvedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=denied_list" })
  deniedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}

export enum MeetingCreateApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}

export enum MeetingCreateApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


export class MeetingCreateApplicationJsonSettingsBreakoutRoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=participants" })
  participants?: string[];
}


// MeetingCreateApplicationJsonSettingsBreakoutRoom
/** 
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export class MeetingCreateApplicationJsonSettingsBreakoutRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rooms", elemType: MeetingCreateApplicationJsonSettingsBreakoutRoomRooms })
  rooms?: MeetingCreateApplicationJsonSettingsBreakoutRoomRooms[];
}

export enum MeetingCreateApplicationJsonSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


export class MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string;
}


// MeetingCreateApplicationJsonSettingsLanguageInterpretation
/** 
 * Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings. 
 * 
 * **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
**/
export class MeetingCreateApplicationJsonSettingsLanguageInterpretation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=interpreters", elemType: MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters })
  interpreters?: MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters[];
}


// MeetingCreateApplicationJsonSettings
/** 
 * Meeting settings.
**/
export class MeetingCreateApplicationJsonSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional_data_center_regions" })
  additionalDataCenterRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts_email_notification" })
  alternativeHostsEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=approved_or_denied_countries_or_regions" })
  approvedOrDeniedCountriesOrRegions?: MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: MeetingCreateApplicationJsonSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: MeetingCreateApplicationJsonSettingsAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=breakout_room" })
  breakoutRoom?: MeetingCreateApplicationJsonSettingsBreakoutRoom;

  @SpeakeasyMetadata({ data: "json, name=close_registration" })
  closeRegistration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cn_meeting" })
  cnMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: MeetingCreateApplicationJsonSettingsEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_countries" })
  globalDialInCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_time" })
  jbhTime?: number;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language_interpretation" })
  languageInterpretation?: MeetingCreateApplicationJsonSettingsLanguageInterpretation;

  @SpeakeasyMetadata({ data: "json, name=meeting_authentication" })
  meetingAuthentication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mute_upon_entry" })
  muteUponEntry?: boolean;

  @SpeakeasyMetadata({ data: "json, name=participant_video" })
  participantVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrants_email_notification" })
  registrantsEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registration_type" })
  registrationType?: number;

  @SpeakeasyMetadata({ data: "json, name=show_share_button" })
  showShareButton?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi" })
  usePmi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=watermark" })
  watermark?: boolean;
}


export class MeetingCreateApplicationJsonTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// MeetingCreateApplicationJson
/** 
 * Base object for meeting.
**/
export class MeetingCreateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agenda" })
  agenda?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: MeetingCreateApplicationJsonRecurrence;

  @SpeakeasyMetadata({ data: "json, name=schedule_for" })
  scheduleFor?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: MeetingCreateApplicationJsonSettings;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=template_id" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_fields", elemType: MeetingCreateApplicationJsonTrackingFields })
  trackingFields?: MeetingCreateApplicationJsonTrackingFields[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}


// MeetingCreateMultipartFormDataRecurrence
/** 
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
**/
export class MeetingCreateMultipartFormDataRecurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_date_time" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=end_times" })
  endTimes?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_day" })
  monthlyDay?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_week" })
  monthlyWeek?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_week_day" })
  monthlyWeekDay?: number;

  @SpeakeasyMetadata({ data: "json, name=repeat_interval" })
  repeatInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;

  @SpeakeasyMetadata({ data: "json, name=weekly_days" })
  weeklyDays?: MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum;
}

export enum MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}


// MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions
/** 
 * Approve or block users from specific regions/countries from joining this meeting. 
 * 
**/
export class MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approved_list" })
  approvedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=denied_list" })
  deniedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}

export enum MeetingCreateMultipartFormDataSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}

export enum MeetingCreateMultipartFormDataSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


export class MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=participants" })
  participants?: string[];
}


// MeetingCreateMultipartFormDataSettingsBreakoutRoom
/** 
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export class MeetingCreateMultipartFormDataSettingsBreakoutRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rooms", elemType: MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms })
  rooms?: MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms[];
}

export enum MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


export class MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string;
}


// MeetingCreateMultipartFormDataSettingsLanguageInterpretation
/** 
 * Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings. 
 * 
 * **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
**/
export class MeetingCreateMultipartFormDataSettingsLanguageInterpretation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=interpreters", elemType: MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters })
  interpreters?: MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters[];
}


// MeetingCreateMultipartFormDataSettings
/** 
 * Meeting settings.
**/
export class MeetingCreateMultipartFormDataSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional_data_center_regions" })
  additionalDataCenterRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts_email_notification" })
  alternativeHostsEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=approved_or_denied_countries_or_regions" })
  approvedOrDeniedCountriesOrRegions?: MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: MeetingCreateMultipartFormDataSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: MeetingCreateMultipartFormDataSettingsAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=breakout_room" })
  breakoutRoom?: MeetingCreateMultipartFormDataSettingsBreakoutRoom;

  @SpeakeasyMetadata({ data: "json, name=close_registration" })
  closeRegistration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cn_meeting" })
  cnMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_countries" })
  globalDialInCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_time" })
  jbhTime?: number;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language_interpretation" })
  languageInterpretation?: MeetingCreateMultipartFormDataSettingsLanguageInterpretation;

  @SpeakeasyMetadata({ data: "json, name=meeting_authentication" })
  meetingAuthentication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mute_upon_entry" })
  muteUponEntry?: boolean;

  @SpeakeasyMetadata({ data: "json, name=participant_video" })
  participantVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrants_email_notification" })
  registrantsEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registration_type" })
  registrationType?: number;

  @SpeakeasyMetadata({ data: "json, name=show_share_button" })
  showShareButton?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi" })
  usePmi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=watermark" })
  watermark?: boolean;
}


export class MeetingCreateMultipartFormDataTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// MeetingCreateMultipartFormData1
/** 
 * Base object for meeting.
**/
export class MeetingCreateMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=agenda" })
  agenda?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=recurrence;json=true" })
  recurrence?: MeetingCreateMultipartFormDataRecurrence;

  @SpeakeasyMetadata({ data: "multipart_form, name=schedule_for" })
  scheduleFor?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=settings;json=true" })
  settings?: MeetingCreateMultipartFormDataSettings;

  @SpeakeasyMetadata({ data: "multipart_form, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=template_id" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=tracking_fields;json=true", elemType: MeetingCreateMultipartFormDataTrackingFields })
  trackingFields?: MeetingCreateMultipartFormDataTrackingFields[];

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: number;
}


export class MeetingCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: MeetingCreateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: MeetingCreateMultipartFormData1;
}


// MeetingCreate201ApplicationJsonOccurrences
/** 
 * Occurence object. This object is only returned for Recurring Webinars.
**/
export class MeetingCreate201ApplicationJsonOccurrences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=occurrence_id" })
  occurrenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

export enum MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}


// MeetingCreate201ApplicationJsonRecurrence
/** 
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
**/
export class MeetingCreate201ApplicationJsonRecurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_date_time" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=end_times" })
  endTimes?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_day" })
  monthlyDay?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_week" })
  monthlyWeek?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_week_day" })
  monthlyWeekDay?: number;

  @SpeakeasyMetadata({ data: "json, name=repeat_interval" })
  repeatInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;

  @SpeakeasyMetadata({ data: "json, name=weekly_days" })
  weeklyDays?: MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum;
}

export enum MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}


// MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions
/** 
 * Approve or block users from specific regions/countries from joining this meeting. 
 * 
**/
export class MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approved_list" })
  approvedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=denied_list" })
  deniedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}

export enum MeetingCreate201ApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}


export class MeetingCreate201ApplicationJsonSettingsAuthenticationException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


export class MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=participants" })
  participants?: string[];
}


// MeetingCreate201ApplicationJsonSettingsBreakoutRoom
/** 
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export class MeetingCreate201ApplicationJsonSettingsBreakoutRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rooms", elemType: MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms })
  rooms?: MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms[];
}


export class MeetingCreate201ApplicationJsonSettingsCustomKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

export enum MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}

export enum MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}


export class MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum;
}


export class MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string;
}


export class MeetingCreate201ApplicationJsonSettingsLanguageInterpretation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=interpreters", elemType: MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters })
  interpreters?: MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters[];
}


// MeetingCreate201ApplicationJsonSettings
/** 
 * Meeting settings.
**/
export class MeetingCreate201ApplicationJsonSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts_email_notification" })
  alternativeHostsEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=approved_or_denied_countries_or_regions" })
  approvedOrDeniedCountriesOrRegions?: MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: MeetingCreate201ApplicationJsonSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_exception", elemType: MeetingCreate201ApplicationJsonSettingsAuthenticationException })
  authenticationException?: MeetingCreate201ApplicationJsonSettingsAuthenticationException[];

  @SpeakeasyMetadata({ data: "json, name=authentication_name" })
  authenticationName?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=breakout_room" })
  breakoutRoom?: MeetingCreate201ApplicationJsonSettingsBreakoutRoom;

  @SpeakeasyMetadata({ data: "json, name=close_registration" })
  closeRegistration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cn_meeting" })
  cnMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_keys", elemType: MeetingCreate201ApplicationJsonSettingsCustomKeys })
  customKeys?: MeetingCreate201ApplicationJsonSettingsCustomKeys[];

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=enforce_login" })
  enforceLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforce_login_domains" })
  enforceLoginDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_countries" })
  globalDialInCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_numbers", elemType: MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers })
  globalDialInNumbers?: MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers[];

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_time" })
  jbhTime?: number;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language_interpretation" })
  languageInterpretation?: MeetingCreate201ApplicationJsonSettingsLanguageInterpretation;

  @SpeakeasyMetadata({ data: "json, name=meeting_authentication" })
  meetingAuthentication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mute_upon_entry" })
  muteUponEntry?: boolean;

  @SpeakeasyMetadata({ data: "json, name=participant_video" })
  participantVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrants_confirmation_email" })
  registrantsConfirmationEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrants_email_notification" })
  registrantsEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registration_type" })
  registrationType?: number;

  @SpeakeasyMetadata({ data: "json, name=show_share_button" })
  showShareButton?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi" })
  usePmi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=watermark" })
  watermark?: boolean;
}


export class MeetingCreate201ApplicationJsonTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}


// MeetingCreate201ApplicationJson
/** 
 * Meeting object
**/
export class MeetingCreate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agenda" })
  agenda?: string;

  @SpeakeasyMetadata({ data: "json, name=assistant_id" })
  assistantId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=h323_password" })
  h323Password?: string;

  @SpeakeasyMetadata({ data: "json, name=host_email" })
  hostEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=join_url" })
  joinUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=occurrences", elemType: MeetingCreate201ApplicationJsonOccurrences })
  occurrences?: MeetingCreate201ApplicationJsonOccurrences[];

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=pmi" })
  pmi?: number;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: MeetingCreate201ApplicationJsonRecurrence;

  @SpeakeasyMetadata({ data: "json, name=registration_url" })
  registrationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: MeetingCreate201ApplicationJsonSettings;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=start_url" })
  startUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_fields", elemType: MeetingCreate201ApplicationJsonTrackingFields })
  trackingFields?: MeetingCreate201ApplicationJsonTrackingFields[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


export class MeetingCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingCreatePathParams;

  @SpeakeasyMetadata()
  request: MeetingCreateRequests;
}


export class MeetingCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  meetingCreate201ApplicationJSONObject?: MeetingCreate201ApplicationJson;
}
