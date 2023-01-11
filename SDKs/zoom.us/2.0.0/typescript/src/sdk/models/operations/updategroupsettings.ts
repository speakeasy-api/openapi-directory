import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateGroupSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}

export enum UpdateGroupSettingsOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication",
    MeetingSecurity = "meeting_security"
}


export class UpdateGroupSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=custom_query_fields" })
  customQueryFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=option" })
  option?: UpdateGroupSettingsOptionEnum;
}


export class UpdateGroupSettingsApplicationJson1EmailNotification extends SpeakeasyBase {
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

export enum UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}

export enum UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}


export class UpdateGroupSettingsApplicationJson1InMeeting extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=whiteboard" })
  whiteboard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen" })
  whoCanShareScreen?: UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen_when_someone_is_sharing" })
  whoCanShareScreenWhenSomeoneIsSharing?: UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
}


export class UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateGroupSettingsApplicationJson1Profile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recording_storage_location" })
  recordingStorageLocation?: UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation;
}


export class UpdateGroupSettingsApplicationJson1RecordingArchiveSettings extends SpeakeasyBase {
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


// UpdateGroupSettingsApplicationJson1RecordingArchive
/** 
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
**/
export class UpdateGroupSettingsApplicationJson1RecordingArchive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: UpdateGroupSettingsApplicationJson1RecordingArchiveSettings;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


// UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl
/** 
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
export class UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses_or_ranges" })
  ipAddressesOrRanges?: string;
}


export class UpdateGroupSettingsApplicationJson1Recording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_user_access_recording" })
  accountUserAccessRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archive" })
  archive?: UpdateGroupSettingsApplicationJson1RecordingArchive;

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
  ipAddressAccessControl?: UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl;

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

export enum UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    All = "all",
    JbhOnly = "jbh_only",
    None = "none"
}


export class UpdateGroupSettingsApplicationJson1ScheduleMeeting extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=pstn_password_protected" })
  pstnPasswordProtected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_all_meetings" })
  requirePasswordForAllMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_instant_meetings" })
  requirePasswordForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_pmi_meetings" })
  requirePasswordForPmiMeetings?: UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduled_meetings" })
  requirePasswordForScheduledMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduling_new_meetings" })
  requirePasswordForSchedulingNewMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upcoming_meeting_reminder" })
  upcomingMeetingReminder?: boolean;
}


export class UpdateGroupSettingsApplicationJson1Telephony extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_conference_info" })
  audioConferenceInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=third_party_audio" })
  thirdPartyAudio?: boolean;
}


export class UpdateGroupSettingsApplicationJson1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_notification" })
  emailNotification?: UpdateGroupSettingsApplicationJson1EmailNotification;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: UpdateGroupSettingsApplicationJson1InMeeting;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: UpdateGroupSettingsApplicationJson1Profile;

  @SpeakeasyMetadata({ data: "json, name=recording" })
  recording?: UpdateGroupSettingsApplicationJson1Recording;

  @SpeakeasyMetadata({ data: "json, name=schedule_meeting" })
  scheduleMeeting?: UpdateGroupSettingsApplicationJson1ScheduleMeeting;

  @SpeakeasyMetadata({ data: "json, name=telephony" })
  telephony?: UpdateGroupSettingsApplicationJson1Telephony;
}

export enum UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


// UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/** 
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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


// UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/** 
 * Specify the settings to be applied if waiting room is enabled.
**/
export class UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=participants_to_place_in_waiting_room" })
  participantsToPlaceInWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=users_who_can_admit_participants_from_waiting_room" })
  usersWhoCanAdmitParticipantsFromWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelisted_domains_for_waiting_room" })
  whitelistedDomainsForWaitingRoom?: string;
}


export class UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_security" })
  autoSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=end_to_end_encrypted_meetings" })
  endToEndEncryptedMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password" })
  meetingPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;

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
  waitingRoomSettings?: UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;

  @SpeakeasyMetadata({ data: "json, name=webinar_password" })
  webinarPassword?: boolean;
}


export class UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meeting_security" })
  meetingSecurity?: UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}


export class UpdateGroupSettingsMultipartFormData1EmailNotification extends SpeakeasyBase {
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

export enum UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}

export enum UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}


export class UpdateGroupSettingsMultipartFormData1InMeeting extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=whiteboard" })
  whiteboard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen" })
  whoCanShareScreen?: UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen_when_someone_is_sharing" })
  whoCanShareScreenWhenSomeoneIsSharing?: UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
}


export class UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateGroupSettingsMultipartFormData1Profile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recording_storage_location" })
  recordingStorageLocation?: UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation;
}


export class UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings extends SpeakeasyBase {
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


// UpdateGroupSettingsMultipartFormData1RecordingArchive
/** 
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
**/
export class UpdateGroupSettingsMultipartFormData1RecordingArchive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


// UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl
/** 
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
export class UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses_or_ranges" })
  ipAddressesOrRanges?: string;
}


export class UpdateGroupSettingsMultipartFormData1Recording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_user_access_recording" })
  accountUserAccessRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archive" })
  archive?: UpdateGroupSettingsMultipartFormData1RecordingArchive;

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
  ipAddressAccessControl?: UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl;

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

export enum UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    All = "all",
    JbhOnly = "jbh_only",
    None = "none"
}


export class UpdateGroupSettingsMultipartFormData1ScheduleMeeting extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=pstn_password_protected" })
  pstnPasswordProtected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_all_meetings" })
  requirePasswordForAllMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_instant_meetings" })
  requirePasswordForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_pmi_meetings" })
  requirePasswordForPmiMeetings?: UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduled_meetings" })
  requirePasswordForScheduledMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduling_new_meetings" })
  requirePasswordForSchedulingNewMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upcoming_meeting_reminder" })
  upcomingMeetingReminder?: boolean;
}


export class UpdateGroupSettingsMultipartFormData1Telephony extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_conference_info" })
  audioConferenceInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=third_party_audio" })
  thirdPartyAudio?: boolean;
}


export class UpdateGroupSettingsMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=email_notification;json=true" })
  emailNotification?: UpdateGroupSettingsMultipartFormData1EmailNotification;

  @SpeakeasyMetadata({ data: "multipart_form, name=in_meeting;json=true" })
  inMeeting?: UpdateGroupSettingsMultipartFormData1InMeeting;

  @SpeakeasyMetadata({ data: "multipart_form, name=profile;json=true" })
  profile?: UpdateGroupSettingsMultipartFormData1Profile;

  @SpeakeasyMetadata({ data: "multipart_form, name=recording;json=true" })
  recording?: UpdateGroupSettingsMultipartFormData1Recording;

  @SpeakeasyMetadata({ data: "multipart_form, name=schedule_meeting;json=true" })
  scheduleMeeting?: UpdateGroupSettingsMultipartFormData1ScheduleMeeting;

  @SpeakeasyMetadata({ data: "multipart_form, name=telephony;json=true" })
  telephony?: UpdateGroupSettingsMultipartFormData1Telephony;
}

export enum UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


// UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/** 
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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


// UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/** 
 * Specify the settings to be applied if waiting room is enabled.
**/
export class UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=participants_to_place_in_waiting_room" })
  participantsToPlaceInWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=users_who_can_admit_participants_from_waiting_room" })
  usersWhoCanAdmitParticipantsFromWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelisted_domains_for_waiting_room" })
  whitelistedDomainsForWaitingRoom?: string;
}


export class UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_security" })
  autoSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=end_to_end_encrypted_meetings" })
  endToEndEncryptedMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password" })
  meetingPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;

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
  waitingRoomSettings?: UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;

  @SpeakeasyMetadata({ data: "json, name=webinar_password" })
  webinarPassword?: boolean;
}


export class UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=meeting_security;json=true" })
  meetingSecurity?: UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}


export class UpdateGroupSettingsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  oneOf?: any;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  oneOf1?: any;
}


export class UpdateGroupSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupSettingsPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateGroupSettingsQueryParams;

  @SpeakeasyMetadata()
  request?: UpdateGroupSettingsRequests;
}


export class UpdateGroupSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateGroupSettings204ApplicationJSONAny?: any;
}
