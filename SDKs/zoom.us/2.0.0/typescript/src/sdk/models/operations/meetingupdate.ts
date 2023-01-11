import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


export class MeetingUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurrence_id" })
  occurrenceId?: string;
}

export enum MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}


// MeetingUpdateApplicationJsonRecurrence
/** 
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
**/
export class MeetingUpdateApplicationJsonRecurrence extends SpeakeasyBase {
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
  weeklyDays?: MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum;
}

export enum MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}


// MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions
/** 
 * Approve or block users from specific regions/countries from joining this meeting. 
 * 
**/
export class MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approved_list" })
  approvedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=denied_list" })
  deniedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}

export enum MeetingUpdateApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}


export class MeetingUpdateApplicationJsonSettingsAuthenticationException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum MeetingUpdateApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


export class MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=participants" })
  participants?: string[];
}


// MeetingUpdateApplicationJsonSettingsBreakoutRoom
/** 
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export class MeetingUpdateApplicationJsonSettingsBreakoutRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rooms", elemType: MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms })
  rooms?: MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms[];
}


export class MeetingUpdateApplicationJsonSettingsCustomKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

export enum MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}

export enum MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}


export class MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum;
}


export class MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string;
}


export class MeetingUpdateApplicationJsonSettingsLanguageInterpretation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=interpreters", elemType: MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters })
  interpreters?: MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters[];
}


// MeetingUpdateApplicationJsonSettings
/** 
 * Meeting settings.
**/
export class MeetingUpdateApplicationJsonSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts_email_notification" })
  alternativeHostsEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=approved_or_denied_countries_or_regions" })
  approvedOrDeniedCountriesOrRegions?: MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: MeetingUpdateApplicationJsonSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_exception", elemType: MeetingUpdateApplicationJsonSettingsAuthenticationException })
  authenticationException?: MeetingUpdateApplicationJsonSettingsAuthenticationException[];

  @SpeakeasyMetadata({ data: "json, name=authentication_name" })
  authenticationName?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: MeetingUpdateApplicationJsonSettingsAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=breakout_room" })
  breakoutRoom?: MeetingUpdateApplicationJsonSettingsBreakoutRoom;

  @SpeakeasyMetadata({ data: "json, name=close_registration" })
  closeRegistration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cn_meeting" })
  cnMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_keys", elemType: MeetingUpdateApplicationJsonSettingsCustomKeys })
  customKeys?: MeetingUpdateApplicationJsonSettingsCustomKeys[];

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=enforce_login" })
  enforceLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforce_login_domains" })
  enforceLoginDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_countries" })
  globalDialInCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_numbers", elemType: MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers })
  globalDialInNumbers?: MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers[];

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_time" })
  jbhTime?: number;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language_interpretation" })
  languageInterpretation?: MeetingUpdateApplicationJsonSettingsLanguageInterpretation;

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


export class MeetingUpdateApplicationJsonTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// MeetingUpdateApplicationJson
/** 
 * Base object for sessions.
**/
export class MeetingUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agenda" })
  agenda?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: MeetingUpdateApplicationJsonRecurrence;

  @SpeakeasyMetadata({ data: "json, name=schedule_for" })
  scheduleFor?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: MeetingUpdateApplicationJsonSettings;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=template_id" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_fields", elemType: MeetingUpdateApplicationJsonTrackingFields })
  trackingFields?: MeetingUpdateApplicationJsonTrackingFields[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}


// MeetingUpdateMultipartFormDataRecurrence
/** 
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
**/
export class MeetingUpdateMultipartFormDataRecurrence extends SpeakeasyBase {
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
  weeklyDays?: MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum;
}

export enum MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}


// MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions
/** 
 * Approve or block users from specific regions/countries from joining this meeting. 
 * 
**/
export class MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approved_list" })
  approvedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=denied_list" })
  deniedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}

export enum MeetingUpdateMultipartFormDataSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}


export class MeetingUpdateMultipartFormDataSettingsAuthenticationException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


export class MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=participants" })
  participants?: string[];
}


// MeetingUpdateMultipartFormDataSettingsBreakoutRoom
/** 
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export class MeetingUpdateMultipartFormDataSettingsBreakoutRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rooms", elemType: MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms })
  rooms?: MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms[];
}


export class MeetingUpdateMultipartFormDataSettingsCustomKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

export enum MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}

export enum MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}


export class MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum;
}


export class MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string;
}


export class MeetingUpdateMultipartFormDataSettingsLanguageInterpretation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=interpreters", elemType: MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters })
  interpreters?: MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters[];
}


// MeetingUpdateMultipartFormDataSettings
/** 
 * Meeting settings.
**/
export class MeetingUpdateMultipartFormDataSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts_email_notification" })
  alternativeHostsEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=approved_or_denied_countries_or_regions" })
  approvedOrDeniedCountriesOrRegions?: MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: MeetingUpdateMultipartFormDataSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_exception", elemType: MeetingUpdateMultipartFormDataSettingsAuthenticationException })
  authenticationException?: MeetingUpdateMultipartFormDataSettingsAuthenticationException[];

  @SpeakeasyMetadata({ data: "json, name=authentication_name" })
  authenticationName?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=breakout_room" })
  breakoutRoom?: MeetingUpdateMultipartFormDataSettingsBreakoutRoom;

  @SpeakeasyMetadata({ data: "json, name=close_registration" })
  closeRegistration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cn_meeting" })
  cnMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_keys", elemType: MeetingUpdateMultipartFormDataSettingsCustomKeys })
  customKeys?: MeetingUpdateMultipartFormDataSettingsCustomKeys[];

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=enforce_login" })
  enforceLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforce_login_domains" })
  enforceLoginDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_countries" })
  globalDialInCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_numbers", elemType: MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers })
  globalDialInNumbers?: MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers[];

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_time" })
  jbhTime?: number;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language_interpretation" })
  languageInterpretation?: MeetingUpdateMultipartFormDataSettingsLanguageInterpretation;

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


export class MeetingUpdateMultipartFormDataTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// MeetingUpdateMultipartFormData1
/** 
 * Base object for sessions.
**/
export class MeetingUpdateMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=agenda" })
  agenda?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=recurrence;json=true" })
  recurrence?: MeetingUpdateMultipartFormDataRecurrence;

  @SpeakeasyMetadata({ data: "multipart_form, name=schedule_for" })
  scheduleFor?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=settings;json=true" })
  settings?: MeetingUpdateMultipartFormDataSettings;

  @SpeakeasyMetadata({ data: "multipart_form, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=template_id" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=tracking_fields;json=true", elemType: MeetingUpdateMultipartFormDataTrackingFields })
  trackingFields?: MeetingUpdateMultipartFormDataTrackingFields[];

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: number;
}


export class MeetingUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: MeetingUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: MeetingUpdateMultipartFormData1;
}


export class MeetingUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: MeetingUpdateQueryParams;

  @SpeakeasyMetadata()
  request: MeetingUpdateRequests;

  @SpeakeasyMetadata()
  security: MeetingUpdateSecurity;
}


export class MeetingUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
