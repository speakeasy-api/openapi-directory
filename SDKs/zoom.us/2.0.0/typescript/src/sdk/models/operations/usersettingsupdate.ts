import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserSettingsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UserSettingsUpdateOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication",
    MeetingSecuirty = "meeting_secuirty"
}


export class UserSettingsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=option" })
  option?: UserSettingsUpdateOptionEnum;
}


export class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternative_host_reminder" })
  alternativeHostReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancel_meeting_reminder" })
  cancelMeetingReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_reminder" })
  jbhReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schedule_for_reminder" })
  scheduleForReminder?: boolean;
}


export class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings extends SpeakeasyBase {
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

export enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}


export class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles extends SpeakeasyBase {
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


// UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
/** 
 * Settings to manage virtual background.
**/
export class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_upload_custom" })
  allowUploadCustom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_videos" })
  allowVideos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles })
  files?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[];
}

export enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}

export enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}


export class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings extends SpeakeasyBase {
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
  entryExitChime?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum;

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
  virtualBackgroundSettings?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;

  @SpeakeasyMetadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen" })
  whoCanShareScreen?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen_when_someone_is_sharing" })
  whoCanShareScreenWhenSomeoneIsSharing?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum;

  @SpeakeasyMetadata({ data: "json, name=workplace_by_facebook" })
  workplaceByFacebook?: boolean;
}


export class UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UserSettingsUpdateApplicationJsonUserSettingsProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recording_storage_location" })
  recordingStorageLocation?: UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation;
}

export enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl
/** 
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
export class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses_or_ranges" })
  ipAddressesOrRanges?: string;
}


// UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
/** 
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
export class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement extends SpeakeasyBase {
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


export class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ask_host_to_confirm_disclaimer" })
  askHostToConfirmDisclaimer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ask_participants_to_consent_disclaimer" })
  askParticipantsToConsentDisclaimer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr" })
  autoDeleteCmr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr_days" })
  autoDeleteCmrDays?: number;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording" })
  cloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_pause_stop_recording" })
  hostPauseStopRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_address_access_control" })
  ipAddressAccessControl?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;

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
  recordingPasswordRequirement?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=save_chat_text" })
  saveChatText?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_timestamp" })
  showTimestamp?: boolean;
}

export enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}


// UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement
/** 
 * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement extends SpeakeasyBase {
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

export enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}


export class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_type" })
  audioType?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum;

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
  meetingPasswordRequirement?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;

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
  requirePasswordForPmiMeetings?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduled_meetings" })
  requirePasswordForScheduledMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduling_new_meetings" })
  requirePasswordForSchedulingNewMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_instant_meetings" })
  usePmiForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_scheduled_meetings" })
  usePmiForScheduledMeetings?: boolean;
}


// UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions
/** 
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export class UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selection_values" })
  selectionValues?: string[];
}


export class UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_conference_info" })
  audioConferenceInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=show_international_numbers_link" })
  showInternationalNumbersLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=telephony_regions" })
  telephonyRegions?: UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions;

  @SpeakeasyMetadata({ data: "json, name=third_party_audio" })
  thirdPartyAudio?: boolean;
}


// UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings
/** 
 * Account Settings: TSP.
**/
export class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_out" })
  callOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=call_out_countries" })
  callOutCountries?: any[];

  @SpeakeasyMetadata({ data: "json, name=show_international_numbers_link" })
  showInternationalNumbersLink?: boolean;
}


export class UserSettingsUpdateApplicationJsonUserSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_notification" })
  emailNotification?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings;

  @SpeakeasyMetadata({ data: "json, name=feature" })
  feature?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: UserSettingsUpdateApplicationJsonUserSettingsProfile;

  @SpeakeasyMetadata({ data: "json, name=recording" })
  recording?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings;

  @SpeakeasyMetadata({ data: "json, name=schedule_meeting" })
  scheduleMeeting?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1;

  @SpeakeasyMetadata({ data: "json, name=telephony" })
  telephony?: UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings;

  @SpeakeasyMetadata({ data: "json, name=tsp" })
  tsp?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings;
}

export enum UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


// UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/** 
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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


// UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/** 
 * Specify the settings to be applied if waiting room is enabled.
**/
export class UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=participants_to_place_in_waiting_room" })
  participantsToPlaceInWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=users_who_can_admit_participants_from_waiting_room" })
  usersWhoCanAdmitParticipantsFromWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelisted_domains_for_waiting_room" })
  whitelistedDomainsForWaitingRoom?: string;
}


export class UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_security" })
  autoSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=end_to_end_encrypted_meetings" })
  endToEndEncryptedMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password" })
  meetingPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;

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
  waitingRoomSettings?: UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;

  @SpeakeasyMetadata({ data: "json, name=webinar_password" })
  webinarPassword?: boolean;
}


export class UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meeting_security" })
  meetingSecurity?: UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}


export class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternative_host_reminder" })
  alternativeHostReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancel_meeting_reminder" })
  cancelMeetingReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_reminder" })
  jbhReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schedule_for_reminder" })
  scheduleForReminder?: boolean;
}


export class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings extends SpeakeasyBase {
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

export enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}


export class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles extends SpeakeasyBase {
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


// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
/** 
 * Settings to manage virtual background.
**/
export class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_upload_custom" })
  allowUploadCustom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_videos" })
  allowVideos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles })
  files?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[];
}

export enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}

export enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}


export class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings extends SpeakeasyBase {
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
  entryExitChime?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum;

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
  virtualBackgroundSettings?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;

  @SpeakeasyMetadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen" })
  whoCanShareScreen?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen_when_someone_is_sharing" })
  whoCanShareScreenWhenSomeoneIsSharing?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum;

  @SpeakeasyMetadata({ data: "json, name=workplace_by_facebook" })
  workplaceByFacebook?: boolean;
}


export class UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UserSettingsUpdateMultipartFormDataUserSettingsProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recording_storage_location" })
  recordingStorageLocation?: UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation;
}

export enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl
/** 
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
export class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses_or_ranges" })
  ipAddressesOrRanges?: string;
}


// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
/** 
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
export class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement extends SpeakeasyBase {
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


export class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ask_host_to_confirm_disclaimer" })
  askHostToConfirmDisclaimer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ask_participants_to_consent_disclaimer" })
  askParticipantsToConsentDisclaimer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr" })
  autoDeleteCmr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr_days" })
  autoDeleteCmrDays?: number;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording" })
  cloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_pause_stop_recording" })
  hostPauseStopRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_address_access_control" })
  ipAddressAccessControl?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;

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
  recordingPasswordRequirement?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=save_chat_text" })
  saveChatText?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_timestamp" })
  showTimestamp?: boolean;
}

export enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}


// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement
/** 
 * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement extends SpeakeasyBase {
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

export enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}


export class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_type" })
  audioType?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum;

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
  meetingPasswordRequirement?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;

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
  requirePasswordForPmiMeetings?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduled_meetings" })
  requirePasswordForScheduledMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduling_new_meetings" })
  requirePasswordForSchedulingNewMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_instant_meetings" })
  usePmiForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_scheduled_meetings" })
  usePmiForScheduledMeetings?: boolean;
}


// UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions
/** 
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export class UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selection_values" })
  selectionValues?: string[];
}


export class UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_conference_info" })
  audioConferenceInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=show_international_numbers_link" })
  showInternationalNumbersLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=telephony_regions" })
  telephonyRegions?: UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions;

  @SpeakeasyMetadata({ data: "json, name=third_party_audio" })
  thirdPartyAudio?: boolean;
}


// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings
/** 
 * Account Settings: TSP.
**/
export class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_out" })
  callOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=call_out_countries" })
  callOutCountries?: any[];

  @SpeakeasyMetadata({ data: "json, name=show_international_numbers_link" })
  showInternationalNumbersLink?: boolean;
}


export class UserSettingsUpdateMultipartFormDataUserSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=email_notification;json=true" })
  emailNotification?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings;

  @SpeakeasyMetadata({ data: "multipart_form, name=feature;json=true" })
  feature?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings;

  @SpeakeasyMetadata({ data: "multipart_form, name=in_meeting;json=true" })
  inMeeting?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings;

  @SpeakeasyMetadata({ data: "multipart_form, name=profile;json=true" })
  profile?: UserSettingsUpdateMultipartFormDataUserSettingsProfile;

  @SpeakeasyMetadata({ data: "multipart_form, name=recording;json=true" })
  recording?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings;

  @SpeakeasyMetadata({ data: "multipart_form, name=schedule_meeting;json=true" })
  scheduleMeeting?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1;

  @SpeakeasyMetadata({ data: "multipart_form, name=telephony;json=true" })
  telephony?: UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings;

  @SpeakeasyMetadata({ data: "multipart_form, name=tsp;json=true" })
  tsp?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings;
}

export enum UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


// UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/** 
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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


// UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/** 
 * Specify the settings to be applied if waiting room is enabled.
**/
export class UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=participants_to_place_in_waiting_room" })
  participantsToPlaceInWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=users_who_can_admit_participants_from_waiting_room" })
  usersWhoCanAdmitParticipantsFromWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelisted_domains_for_waiting_room" })
  whitelistedDomainsForWaitingRoom?: string;
}


export class UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_security" })
  autoSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=end_to_end_encrypted_meetings" })
  endToEndEncryptedMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password" })
  meetingPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;

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
  waitingRoomSettings?: UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;

  @SpeakeasyMetadata({ data: "json, name=webinar_password" })
  webinarPassword?: boolean;
}


export class UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=meeting_security;json=true" })
  meetingSecurity?: UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}


export class UserSettingsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  oneOf?: any;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  oneOf1?: any;
}


export class UserSettingsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UserSettingsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserSettingsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: UserSettingsUpdateQueryParams;

  @SpeakeasyMetadata()
  request: UserSettingsUpdateRequests;

  @SpeakeasyMetadata()
  security: UserSettingsUpdateSecurity;
}


export class UserSettingsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
