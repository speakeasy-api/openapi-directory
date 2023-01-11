import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UserSettingsLoginTypeEnum {
    Zero = "0",
    One = "1",
    NinetyNine = "99",
    OneHundred = "100",
    OneHundredAndOne = "101"
}

export enum UserSettingsOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication"
}


export class UserSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=custom_query_fields" })
  customQueryFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login_type" })
  loginType?: UserSettingsLoginTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=option" })
  option?: UserSettingsOptionEnum;
}


export class UserSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternative_host_reminder" })
  alternativeHostReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancel_meeting_reminder" })
  cancelMeetingReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_reminder" })
  jbhReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schedule_for_reminder" })
  scheduleForReminder?: boolean;
}


export class UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cn_meeting" })
  cnMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=large_meeting" })
  largeMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=large_meeting_capacity" })
  largeMeetingCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=meeting_capacity" })
  meetingCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=webinar" })
  webinar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webinar_capacity" })
  webinarCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=zoom_phone" })
  zoomPhone?: boolean;
}

export enum UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}


export class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_default" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
/** 
 * Settings to manage virtual background.
**/
export class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_upload_custom" })
  allowUploadCustom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_videos" })
  allowVideos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles })
  files?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[];
}

export enum UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}

export enum UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}


export class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_live_streaming" })
  allowLiveStreaming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=annotation" })
  annotation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attendee_on_hold" })
  attendeeOnHold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_saving_chat" })
  autoSavingChat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=breakout_room" })
  breakoutRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=chat" })
  chat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=closed_caption" })
  closedCaption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=co_host" })
  coHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=custom_data_center_regions" })
  customDataCenterRegions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=custom_live_streaming_service" })
  customLiveStreamingService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=custom_service_instructions" })
  customServiceInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=data_center_regions" })
  dataCenterRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=e2e_encryption" })
  e2eEncryption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=entry_exit_chime" })
  entryExitChime?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum;

  @SpeakeasyMetadata({ data: "json, name=far_end_camera_control" })
  farEndCameraControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=feedback" })
  feedback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=file_transfer" })
  fileTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=group_hd" })
  groupHd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=non_verbal_feedback" })
  nonVerbalFeedback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=polling" })
  polling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=private_chat" })
  privateChat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record_play_voice" })
  recordPlayVoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remote_control" })
  remoteControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remote_support" })
  remoteSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=request_permission_to_unmute" })
  requestPermissionToUnmute?: boolean;

  @SpeakeasyMetadata({ data: "json, name=screen_sharing" })
  screenSharing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_dual_camera" })
  shareDualCamera?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_meeting_control_toolbar" })
  showMeetingControlToolbar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=virtual_background" })
  virtualBackground?: boolean;

  @SpeakeasyMetadata({ data: "json, name=virtual_background_settings" })
  virtualBackgroundSettings?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;

  @SpeakeasyMetadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen" })
  whoCanShareScreen?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen_when_someone_is_sharing" })
  whoCanShareScreenWhenSomeoneIsSharing?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum;

  @SpeakeasyMetadata({ data: "json, name=workplace_by_facebook" })
  workplaceByFacebook?: boolean;
}


export class UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UserSettings200ApplicationJsonUserSettingsProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recording_storage_location" })
  recordingStorageLocation?: UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation;
}

export enum UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl
/** 
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
export class UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses_or_ranges" })
  ipAddressesOrRanges?: string;
}


// UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
/** 
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
export class UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=have_letter" })
  haveLetter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=have_number" })
  haveNumber?: boolean;

  @SpeakeasyMetadata({ data: "json, name=have_special_character" })
  haveSpecialCharacter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=only_allow_numeric" })
  onlyAllowNumeric?: boolean;
}


export class UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ask_host_to_confirm_disclaimer" })
  askHostToConfirmDisclaimer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ask_participants_to_consent_disclaimer" })
  askParticipantsToConsentDisclaimer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr" })
  autoDeleteCmr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr_days" })
  autoDeleteCmrDays?: number;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording" })
  cloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_pause_stop_recording" })
  hostPauseStopRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_address_access_control" })
  ipAddressAccessControl?: UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;

  @SpeakeasyMetadata({ data: "json, name=local_recording" })
  localRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record_audio_file" })
  recordAudioFile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record_gallery_view" })
  recordGalleryView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record_speaker_view" })
  recordSpeakerView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_audio_transcript" })
  recordingAudioTranscript?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_disclaimer" })
  recordingDisclaimer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_password_requirement" })
  recordingPasswordRequirement?: UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=save_chat_text" })
  saveChatText?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_timestamp" })
  showTimestamp?: boolean;
}

export enum UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}


// UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement
/** 
 * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consecutive_characters_length" })
  consecutiveCharactersLength?: number;

  @SpeakeasyMetadata({ data: "json, name=have_letter" })
  haveLetter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=have_number" })
  haveNumber?: boolean;

  @SpeakeasyMetadata({ data: "json, name=have_special_character" })
  haveSpecialCharacter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=have_upper_and_lower_characters" })
  haveUpperAndLowerCharacters?: boolean;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=only_allow_numeric" })
  onlyAllowNumeric?: boolean;

  @SpeakeasyMetadata({ data: "json, name=weak_enhance_detection" })
  weakEnhanceDetection?: boolean;
}

export enum UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}


export class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_type" })
  audioType?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=default_password_for_scheduled_meetings" })
  defaultPasswordForScheduledMeetings?: string;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=force_pmi_jbh_password" })
  forcePmiJbhPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=participants_video" })
  participantsVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=personal_meeting" })
  personalMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pmi_password" })
  pmiPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=pstn_password_protected" })
  pstnPasswordProtected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_instant_meetings" })
  requirePasswordForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_pmi_meetings" })
  requirePasswordForPmiMeetings?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduled_meetings" })
  requirePasswordForScheduledMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduling_new_meetings" })
  requirePasswordForSchedulingNewMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_instant_meetings" })
  usePmiForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_scheduled_meetings" })
  usePmiForScheduledMeetings?: boolean;
}


// UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions
/** 
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=selection_values" })
  selectionValues?: string[];
}


export class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_conference_info" })
  audioConferenceInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=show_international_numbers_link" })
  showInternationalNumbersLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=telephony_regions" })
  telephonyRegions?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions;

  @SpeakeasyMetadata({ data: "json, name=third_party_audio" })
  thirdPartyAudio?: boolean;
}


// UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings
/** 
 * Account Settings: TSP.
**/
export class UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_out" })
  callOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=call_out_countries" })
  callOutCountries?: any[];

  @SpeakeasyMetadata({ data: "json, name=show_international_numbers_link" })
  showInternationalNumbersLink?: boolean;
}


export class UserSettings200ApplicationJsonUserSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_notification" })
  emailNotification?: UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings;

  @SpeakeasyMetadata({ data: "json, name=feature" })
  feature?: UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: UserSettings200ApplicationJsonUserSettingsProfile;

  @SpeakeasyMetadata({ data: "json, name=recording" })
  recording?: UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings;

  @SpeakeasyMetadata({ data: "json, name=schedule_meeting" })
  scheduleMeeting?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1;

  @SpeakeasyMetadata({ data: "json, name=telephony" })
  telephony?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2;

  @SpeakeasyMetadata({ data: "json, name=tsp" })
  tsp?: UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings;
}

export enum UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


// UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/** 
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consecutive_characters_length" })
  consecutiveCharactersLength?: number;

  @SpeakeasyMetadata({ data: "json, name=have_letter" })
  haveLetter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=have_number" })
  haveNumber?: boolean;

  @SpeakeasyMetadata({ data: "json, name=have_special_character" })
  haveSpecialCharacter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=have_upper_and_lower_characters" })
  haveUpperAndLowerCharacters?: boolean;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=only_allow_numeric" })
  onlyAllowNumeric?: boolean;

  @SpeakeasyMetadata({ data: "json, name=weak_enhance_detection" })
  weakEnhanceDetection?: boolean;
}


// UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/** 
 * Specify the settings to be applied if waiting room is enabled.
**/
export class UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=participants_to_place_in_waiting_room" })
  participantsToPlaceInWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=users_who_can_admit_participants_from_waiting_room" })
  usersWhoCanAdmitParticipantsFromWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelisted_domains_for_waiting_room" })
  whitelistedDomainsForWaitingRoom?: string;
}


export class UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_security" })
  autoSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=end_to_end_encrypted_meetings" })
  endToEndEncryptedMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password" })
  meetingPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=phone_password" })
  phonePassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pmi_password" })
  pmiPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduled_meeting" })
  requirePasswordForScheduledMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduled_webinar" })
  requirePasswordForScheduledWebinar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waiting_room_settings" })
  waitingRoomSettings?: UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;

  @SpeakeasyMetadata({ data: "json, name=webinar_password" })
  webinarPassword?: boolean;
}


export class UserSettings200ApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meeting_security" })
  meetingSecurity?: UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}


export class UserSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserSettingsPathParams;

  @SpeakeasyMetadata()
  queryParams: UserSettingsQueryParams;

  @SpeakeasyMetadata()
  security: UserSettingsSecurity;
}


export class UserSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userSettings200ApplicationJSONOneOf?: any;
}
