import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupLockedSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class GroupLockedSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=custom_query_fields" })
  customQueryFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=option" })
  option?: string;
}


export class GroupLockedSettingsApplicationJson1EmailNotification extends SpeakeasyBase {
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


export class GroupLockedSettingsApplicationJson1InMeeting extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=original_audio" })
  originalAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=polling" })
  polling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=post_meeting_feedback" })
  postMeetingFeedback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=private_chat" })
  privateChat?: boolean;

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
}


// GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl
/** 
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
export class GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses_or_ranges" })
  ipAddressesOrRanges?: string;
}


export class GroupLockedSettingsApplicationJson1Recording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_user_access_recording" })
  accountUserAccessRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr" })
  autoDeleteCmr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: string;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording" })
  cloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_download" })
  cloudRecordingDownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_delete_cloud_recording" })
  hostDeleteCloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_address_access_control" })
  ipAddressAccessControl?: GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl;

  @SpeakeasyMetadata({ data: "json, name=local_recording" })
  localRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_authentication" })
  recordingAuthentication?: string;
}


export class GroupLockedSettingsApplicationJson1ScheduleMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_type" })
  audioType?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=force_pmi_jbh_password" })
  forcePmiJbhPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_authentication" })
  meetingAuthentication?: boolean;

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
  requirePasswordForPmiMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduling_new_meetings" })
  requirePasswordForSchedulingNewMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upcoming_meeting_reminder" })
  upcomingMeetingReminder?: boolean;
}


export class GroupLockedSettingsApplicationJson1Telephony extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=telephony_regions" })
  telephonyRegions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=third_party_audio" })
  thirdPartyAudio?: boolean;
}


export class GroupLockedSettingsApplicationJson1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_notification" })
  emailNotification?: GroupLockedSettingsApplicationJson1EmailNotification;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: GroupLockedSettingsApplicationJson1InMeeting;

  @SpeakeasyMetadata({ data: "json, name=recording" })
  recording?: GroupLockedSettingsApplicationJson1Recording;

  @SpeakeasyMetadata({ data: "json, name=schedule_meeting" })
  scheduleMeeting?: GroupLockedSettingsApplicationJson1ScheduleMeeting;

  @SpeakeasyMetadata({ data: "json, name=telephony" })
  telephony?: GroupLockedSettingsApplicationJson1Telephony;
}

export enum GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


// GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/** 
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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


// GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/** 
 * Specify the settings to be applied if waiting room is enabled.
**/
export class GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=participants_to_place_in_waiting_room" })
  participantsToPlaceInWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=users_who_can_admit_participants_from_waiting_room" })
  usersWhoCanAdmitParticipantsFromWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelisted_domains_for_waiting_room" })
  whitelistedDomainsForWaitingRoom?: string;
}


export class GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_security" })
  autoSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=end_to_end_encrypted_meetings" })
  endToEndEncryptedMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password" })
  meetingPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;

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
  waitingRoomSettings?: GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;

  @SpeakeasyMetadata({ data: "json, name=webinar_password" })
  webinarPassword?: boolean;
}


export class GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meeting_security" })
  meetingSecurity?: GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}


export class GroupLockedSettingsMultipartFormData1EmailNotification extends SpeakeasyBase {
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


export class GroupLockedSettingsMultipartFormData1InMeeting extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=original_audio" })
  originalAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=polling" })
  polling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=post_meeting_feedback" })
  postMeetingFeedback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=private_chat" })
  privateChat?: boolean;

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
}


// GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl
/** 
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
export class GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses_or_ranges" })
  ipAddressesOrRanges?: string;
}


export class GroupLockedSettingsMultipartFormData1Recording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_user_access_recording" })
  accountUserAccessRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr" })
  autoDeleteCmr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: string;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording" })
  cloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_download" })
  cloudRecordingDownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_delete_cloud_recording" })
  hostDeleteCloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_address_access_control" })
  ipAddressAccessControl?: GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl;

  @SpeakeasyMetadata({ data: "json, name=local_recording" })
  localRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_authentication" })
  recordingAuthentication?: string;
}


export class GroupLockedSettingsMultipartFormData1ScheduleMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_type" })
  audioType?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=force_pmi_jbh_password" })
  forcePmiJbhPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_authentication" })
  meetingAuthentication?: boolean;

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
  requirePasswordForPmiMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduling_new_meetings" })
  requirePasswordForSchedulingNewMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upcoming_meeting_reminder" })
  upcomingMeetingReminder?: boolean;
}


export class GroupLockedSettingsMultipartFormData1Telephony extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=telephony_regions" })
  telephonyRegions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=third_party_audio" })
  thirdPartyAudio?: boolean;
}


export class GroupLockedSettingsMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=email_notification;json=true" })
  emailNotification?: GroupLockedSettingsMultipartFormData1EmailNotification;

  @SpeakeasyMetadata({ data: "multipart_form, name=in_meeting;json=true" })
  inMeeting?: GroupLockedSettingsMultipartFormData1InMeeting;

  @SpeakeasyMetadata({ data: "multipart_form, name=recording;json=true" })
  recording?: GroupLockedSettingsMultipartFormData1Recording;

  @SpeakeasyMetadata({ data: "multipart_form, name=schedule_meeting;json=true" })
  scheduleMeeting?: GroupLockedSettingsMultipartFormData1ScheduleMeeting;

  @SpeakeasyMetadata({ data: "multipart_form, name=telephony;json=true" })
  telephony?: GroupLockedSettingsMultipartFormData1Telephony;
}

export enum GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


// GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/** 
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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


// GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/** 
 * Specify the settings to be applied if waiting room is enabled.
**/
export class GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=participants_to_place_in_waiting_room" })
  participantsToPlaceInWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=users_who_can_admit_participants_from_waiting_room" })
  usersWhoCanAdmitParticipantsFromWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelisted_domains_for_waiting_room" })
  whitelistedDomainsForWaitingRoom?: string;
}


export class GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_security" })
  autoSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=end_to_end_encrypted_meetings" })
  endToEndEncryptedMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password" })
  meetingPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;

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
  waitingRoomSettings?: GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;

  @SpeakeasyMetadata({ data: "json, name=webinar_password" })
  webinarPassword?: boolean;
}


export class GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=meeting_security;json=true" })
  meetingSecurity?: GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}


export class GroupLockedSettingsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  oneOf?: any;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  oneOf1?: any;
}


export class GroupLockedSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GroupLockedSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupLockedSettingsPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupLockedSettingsQueryParams;

  @SpeakeasyMetadata()
  request?: GroupLockedSettingsRequests;

  @SpeakeasyMetadata()
  security: GroupLockedSettingsSecurity;
}


export class GroupLockedSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  groupLockedSettings204ApplicationJSONAny?: any;
}
