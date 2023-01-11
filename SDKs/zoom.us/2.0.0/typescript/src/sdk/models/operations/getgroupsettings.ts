import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}

export enum GetGroupSettingsOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication"
}


export class GetGroupSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=custom_query_fields" })
  customQueryFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=option" })
  option?: GetGroupSettingsOptionEnum;
}


export class GetGroupSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetGroupSettings200ApplicationJson1EmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternative_host_reminder" })
  alternativeHostReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancel_meeting_reminder" })
  cancelMeetingReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_available_reminder" })
  cloudRecordingAvailableReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_reminder" })
  jbhReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schedule_for_host_reminder" })
  scheduleForHostReminder?: boolean;
}


export class GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
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


// GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings
/** 
 * Settings to manage virtual background.
**/
export class GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_upload_custom" })
  allowUploadCustom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_videos" })
  allowVideos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles })
  files?: GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles[];
}

export enum GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}

export enum GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}


export class GetGroupSettings200ApplicationJson1InMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alert_guest_join" })
  alertGuestJoin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_show_zoom_windows" })
  allowShowZoomWindows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=annotation" })
  annotation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attendee_on_hold" })
  attendeeOnHold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_answer" })
  autoAnswer?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=data_center_regions" })
  dataCenterRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=e2e_encryption" })
  e2eEncryption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=entry_exit_chime" })
  entryExitChime?: string;

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

  @SpeakeasyMetadata({ data: "json, name=only_host_view_device_list" })
  onlyHostViewDeviceList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=original_audio" })
  originalAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=polling" })
  polling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=post_meeting_feedback" })
  postMeetingFeedback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=private_chat" })
  privateChat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record_play_own_voice" })
  recordPlayOwnVoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remote_control" })
  remoteControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remote_support" })
  remoteSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=request_permission_to_unmute" })
  requestPermissionToUnmute?: boolean;

  @SpeakeasyMetadata({ data: "json, name=screen_sharing" })
  screenSharing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sending_default_email_invites" })
  sendingDefaultEmailInvites?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_browser_join_link" })
  showBrowserJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_device_list" })
  showDeviceList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_meeting_control_toolbar" })
  showMeetingControlToolbar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stereo_audio" })
  stereoAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_html_format_email" })
  useHtmlFormatEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=virtual_background" })
  virtualBackground?: boolean;

  @SpeakeasyMetadata({ data: "json, name=virtual_background_settings" })
  virtualBackgroundSettings?: GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings;

  @SpeakeasyMetadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=whiteboard" })
  whiteboard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen" })
  whoCanShareScreen?: GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen_when_someone_is_sharing" })
  whoCanShareScreenWhenSomeoneIsSharing?: GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
}


export class GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class GetGroupSettings200ApplicationJson1Profile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recording_storage_location" })
  recordingStorageLocation?: GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation;
}


export class GetGroupSettings200ApplicationJson1RecordingArchiveSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_file" })
  audioFile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cc_transcript_file" })
  ccTranscriptFile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=chat_file" })
  chatFile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=chat_with_sender_email" })
  chatWithSenderEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=video_file" })
  videoFile?: boolean;
}


// GetGroupSettings200ApplicationJson1RecordingArchive
/** 
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
**/
export class GetGroupSettings200ApplicationJson1RecordingArchive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: GetGroupSettings200ApplicationJson1RecordingArchiveSettings;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


// GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl
/** 
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
export class GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses_or_ranges" })
  ipAddressesOrRanges?: string;
}


export class GetGroupSettings200ApplicationJson1Recording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_user_access_recording" })
  accountUserAccessRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archive" })
  archive?: GetGroupSettings200ApplicationJson1RecordingArchive;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: string;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording" })
  cloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_download" })
  cloudRecordingDownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_download_host" })
  cloudRecordingDownloadHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_delete_cloud_recording" })
  hostDeleteCloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_address_access_control" })
  ipAddressAccessControl?: GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl;

  @SpeakeasyMetadata({ data: "json, name=local_recording" })
  localRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=prevent_host_access_recording" })
  preventHostAccessRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record_audio_file" })
  recordAudioFile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record_gallery_view" })
  recordGalleryView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record_speaker_view" })
  recordSpeakerView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_audio_transcript" })
  recordingAudioTranscript?: boolean;

  @SpeakeasyMetadata({ data: "json, name=save_chat_text" })
  saveChatText?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_timestamp" })
  showTimestamp?: boolean;
}

export enum GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    All = "all",
    JbhOnly = "jbh_only",
    None = "none"
}


export class GetGroupSettings200ApplicationJson1ScheduleMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_type" })
  audioType?: string;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=force_pmi_jbh_password" })
  forcePmiJbhPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mute_upon_entry" })
  muteUponEntry?: boolean;

  @SpeakeasyMetadata({ data: "json, name=participant_video" })
  participantVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=personal_meeting" })
  personalMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pstn_password_protected" })
  pstnPasswordProtected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_instant_meetings" })
  requirePasswordForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_pmi_meetings" })
  requirePasswordForPmiMeetings?: GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduled_meetings" })
  requirePasswordForScheduledMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduling_new_meetings" })
  requirePasswordForSchedulingNewMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upcoming_meeting_reminder" })
  upcomingMeetingReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_instant_meetings" })
  usePmiForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_schedule_meetings" })
  usePmiForScheduleMeetings?: boolean;
}


// GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions
/** 
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export class GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selection_values" })
  selectionValues?: string[];
}


export class GetGroupSettings200ApplicationJson1Telephony extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_conference_info" })
  audioConferenceInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=telephony_regions" })
  telephonyRegions?: GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions;

  @SpeakeasyMetadata({ data: "json, name=third_party_audio" })
  thirdPartyAudio?: boolean;
}


export class GetGroupSettings200ApplicationJson1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_notification" })
  emailNotification?: GetGroupSettings200ApplicationJson1EmailNotification;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: GetGroupSettings200ApplicationJson1InMeeting;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: GetGroupSettings200ApplicationJson1Profile;

  @SpeakeasyMetadata({ data: "json, name=recording" })
  recording?: GetGroupSettings200ApplicationJson1Recording;

  @SpeakeasyMetadata({ data: "json, name=schedule_meeting" })
  scheduleMeeting?: GetGroupSettings200ApplicationJson1ScheduleMeeting;

  @SpeakeasyMetadata({ data: "json, name=telephony" })
  telephony?: GetGroupSettings200ApplicationJson1Telephony;
}

export enum GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


// GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/** 
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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


// GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/** 
 * Specify the settings to be applied if waiting room is enabled.
**/
export class GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=participants_to_place_in_waiting_room" })
  participantsToPlaceInWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=users_who_can_admit_participants_from_waiting_room" })
  usersWhoCanAdmitParticipantsFromWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelisted_domains_for_waiting_room" })
  whitelistedDomainsForWaitingRoom?: string;
}


export class GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_security" })
  autoSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=end_to_end_encrypted_meetings" })
  endToEndEncryptedMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password" })
  meetingPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;

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
  waitingRoomSettings?: GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;

  @SpeakeasyMetadata({ data: "json, name=webinar_password" })
  webinarPassword?: boolean;
}


export class GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meeting_security" })
  meetingSecurity?: GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}


export class GetGroupSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupSettingsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGroupSettingsQueryParams;

  @SpeakeasyMetadata()
  security: GetGroupSettingsSecurity;
}


export class GetGroupSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGroupSettings200ApplicationJSONOneOf?: any;
}
