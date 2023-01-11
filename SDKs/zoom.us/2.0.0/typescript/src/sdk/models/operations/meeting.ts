import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


export class MeetingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurrence_id" })
  occurrenceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_previous_occurrences" })
  showPreviousOccurrences?: boolean;
}


export class MeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// Meeting200ApplicationJsonOccurrences
/** 
 * Occurence object. This object is only returned for Recurring Webinars.
**/
export class Meeting200ApplicationJsonOccurrences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=occurrence_id" })
  occurrenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

export enum Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}


// Meeting200ApplicationJsonRecurrence
/** 
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
**/
export class Meeting200ApplicationJsonRecurrence extends SpeakeasyBase {
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
  weeklyDays?: Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum;
}

export enum Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}


// Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions
/** 
 * Approve or block users from specific regions/countries from joining this meeting. 
 * 
**/
export class Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approved_list" })
  approvedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=denied_list" })
  deniedList?: string[];

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}

export enum Meeting200ApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}


export class Meeting200ApplicationJsonSettingsAuthenticationException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum Meeting200ApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


export class Meeting200ApplicationJsonSettingsBreakoutRoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=participants" })
  participants?: string[];
}


// Meeting200ApplicationJsonSettingsBreakoutRoom
/** 
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
export class Meeting200ApplicationJsonSettingsBreakoutRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rooms", elemType: Meeting200ApplicationJsonSettingsBreakoutRoomRooms })
  rooms?: Meeting200ApplicationJsonSettingsBreakoutRoomRooms[];
}


export class Meeting200ApplicationJsonSettingsCustomKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

export enum Meeting200ApplicationJsonSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}

export enum Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}


export class Meeting200ApplicationJsonSettingsGlobalDialInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum;
}


export class Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string;
}


export class Meeting200ApplicationJsonSettingsLanguageInterpretation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=interpreters", elemType: Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters })
  interpreters?: Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters[];
}


// Meeting200ApplicationJsonSettings
/** 
 * Meeting settings.
**/
export class Meeting200ApplicationJsonSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts_email_notification" })
  alternativeHostsEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=approved_or_denied_countries_or_regions" })
  approvedOrDeniedCountriesOrRegions?: Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: Meeting200ApplicationJsonSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_exception", elemType: Meeting200ApplicationJsonSettingsAuthenticationException })
  authenticationException?: Meeting200ApplicationJsonSettingsAuthenticationException[];

  @SpeakeasyMetadata({ data: "json, name=authentication_name" })
  authenticationName?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: Meeting200ApplicationJsonSettingsAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=breakout_room" })
  breakoutRoom?: Meeting200ApplicationJsonSettingsBreakoutRoom;

  @SpeakeasyMetadata({ data: "json, name=close_registration" })
  closeRegistration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cn_meeting" })
  cnMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_keys", elemType: Meeting200ApplicationJsonSettingsCustomKeys })
  customKeys?: Meeting200ApplicationJsonSettingsCustomKeys[];

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: Meeting200ApplicationJsonSettingsEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=enforce_login" })
  enforceLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforce_login_domains" })
  enforceLoginDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_countries" })
  globalDialInCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_numbers", elemType: Meeting200ApplicationJsonSettingsGlobalDialInNumbers })
  globalDialInNumbers?: Meeting200ApplicationJsonSettingsGlobalDialInNumbers[];

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_time" })
  jbhTime?: number;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language_interpretation" })
  languageInterpretation?: Meeting200ApplicationJsonSettingsLanguageInterpretation;

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

export enum Meeting200ApplicationJsonStatusEnum {
    Waiting = "waiting",
    Started = "started"
}


export class Meeting200ApplicationJsonTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}


// Meeting200ApplicationJson
/** 
 * Meeting object.
**/
export class Meeting200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agenda" })
  agenda?: string;

  @SpeakeasyMetadata({ data: "json, name=assistant_id" })
  assistantId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=encrypted_password" })
  encryptedPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=h323_password" })
  h323Password?: string;

  @SpeakeasyMetadata({ data: "json, name=host_email" })
  hostEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=host_id" })
  hostId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=join_url" })
  joinUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=occurrences", elemType: Meeting200ApplicationJsonOccurrences })
  occurrences?: Meeting200ApplicationJsonOccurrences[];

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=pmi" })
  pmi?: number;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: Meeting200ApplicationJsonRecurrence;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: Meeting200ApplicationJsonSettings;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=start_url" })
  startUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Meeting200ApplicationJsonStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_fields", elemType: Meeting200ApplicationJsonTrackingFields })
  trackingFields?: Meeting200ApplicationJsonTrackingFields[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class MeetingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingPathParams;

  @SpeakeasyMetadata()
  queryParams: MeetingQueryParams;

  @SpeakeasyMetadata()
  security: MeetingSecurity;
}


export class MeetingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  meeting200ApplicationJSONObject?: Meeting200ApplicationJson;
}
