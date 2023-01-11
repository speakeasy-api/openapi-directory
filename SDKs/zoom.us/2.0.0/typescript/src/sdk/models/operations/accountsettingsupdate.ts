import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountSettingsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}

export enum AccountSettingsUpdateOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication",
    Security = "security",
    MeetingSecurity = "meeting_security"
}


export class AccountSettingsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=option" })
  option?: AccountSettingsUpdateOptionEnum;
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification
/** 
 * Account Settings: Notification.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternative_host_reminder" })
  alternativeHostReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancel_meeting_reminder" })
  cancelMeetingReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_avaliable_reminder" })
  cloudRecordingAvaliableReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_reminder" })
  jbhReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=low_host_count_reminder" })
  lowHostCountReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schedule_for_reminder" })
  scheduleForReminder?: boolean;
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature
/** 
 * Account Settings: Feature.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meeting_capacity" })
  meetingCapacity?: number;
}

export enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}


export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
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


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings
/** 
 * Settings to manage virtual background.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_upload_custom" })
  allowUploadCustom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_videos" })
  allowVideos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles })
  files?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles[];
}

export enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}

export enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting
/** 
 * Account Settings: In Meeting.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alert_guest_join" })
  alertGuestJoin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_live_streaming" })
  allowLiveStreaming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_participants_to_rename" })
  allowParticipantsToRename?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_show_zoom_windows" })
  allowShowZoomWindows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=annotation" })
  annotation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=anonymous_question_answer" })
  anonymousQuestionAnswer?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=custom_live_streaming_service" })
  customLiveStreamingService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=custom_service_instructions" })
  customServiceInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=data_center_regions" })
  dataCenterRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=dscp_audio" })
  dscpAudio?: number;

  @SpeakeasyMetadata({ data: "json, name=dscp_marking" })
  dscpMarking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dscp_video" })
  dscpVideo?: number;

  @SpeakeasyMetadata({ data: "json, name=e2e_encryption" })
  e2eEncryption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=entry_exit_chime" })
  entryExitChime?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum;

  @SpeakeasyMetadata({ data: "json, name=far_end_camera_control" })
  farEndCameraControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=feedback" })
  feedback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=file_transfer" })
  fileTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=group_hd" })
  groupHd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_reactions" })
  meetingReactions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=original_audio" })
  originalAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=p2p_connetion" })
  p2pConnetion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=p2p_ports" })
  p2pPorts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=polling" })
  polling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ports_range" })
  portsRange?: string;

  @SpeakeasyMetadata({ data: "json, name=post_meeting_feedback" })
  postMeetingFeedback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=private_chat" })
  privateChat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record_play_own_voice" })
  recordPlayOwnVoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remote_control" })
  remoteControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=request_permission_to_unmute" })
  requestPermissionToUnmute?: boolean;

  @SpeakeasyMetadata({ data: "json, name=screen_sharing" })
  screenSharing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sending_default_email_invites" })
  sendingDefaultEmailInvites?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_a_join_from_your_browser_link" })
  showAJoinFromYourBrowserLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_meeting_control_toolbar" })
  showMeetingControlToolbar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stereo_audio" })
  stereoAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_html_format_email" })
  useHtmlFormatEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=virtual_background" })
  virtualBackground?: boolean;

  @SpeakeasyMetadata({ data: "json, name=virtual_background_settings" })
  virtualBackgroundSettings?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings;

  @SpeakeasyMetadata({ data: "json, name=watermark" })
  watermark?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webinar_question_answer" })
  webinarQuestionAnswer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=whiteboard" })
  whiteboard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen" })
  whoCanShareScreen?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen_when_someone_is_sharing" })
  whoCanShareScreenWhenSomeoneIsSharing?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;

  @SpeakeasyMetadata({ data: "json, name=workplace_by_facebook" })
  workplaceByFacebook?: boolean;
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration
/** 
 * Account Settings: Integration.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=box" })
  box?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dropbox" })
  dropbox?: boolean;

  @SpeakeasyMetadata({ data: "json, name=google_calendar" })
  googleCalendar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=google_drive" })
  googleDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kubi" })
  kubi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=microsoft_one_drive" })
  microsoftOneDrive?: boolean;
}


export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recording_storage_location" })
  recordingStorageLocation?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation;
}


export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings extends SpeakeasyBase {
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


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive
/** 
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl
/** 
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses_or_ranges" })
  ipAddressesOrRanges?: string;
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement
/** 
 * This object represents the minimum password requirements set for recordings via Account Recording Settings.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement extends SpeakeasyBase {
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


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording
/** 
 * Account Settings: Recording.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_user_access_recording" })
  accountUserAccessRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_recovery_deleted_cloud_recordings" })
  allowRecoveryDeletedCloudRecordings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archive" })
  archive?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr" })
  autoDeleteCmr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr_days" })
  autoDeleteCmrDays?: number;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording" })
  cloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_download" })
  cloudRecordingDownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_download_host" })
  cloudRecordingDownloadHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_delete_cloud_recording" })
  hostDeleteCloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_address_access_control" })
  ipAddressAccessControl?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl;

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

  @SpeakeasyMetadata({ data: "json, name=recording_disclaimer" })
  recordingDisclaimer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_password_requirement" })
  recordingPasswordRequirement?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=required_password_for_existing_cloud_recordings" })
  requiredPasswordForExistingCloudRecordings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=save_chat_text" })
  saveChatText?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_timestamp" })
  showTimestamp?: boolean;
}

export enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement
/** 
 * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement extends SpeakeasyBase {
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

export enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting
/** 
 * Account Settings: Schedule Meeting.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_type" })
  audioType?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=enforce_login" })
  enforceLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforce_login_domains" })
  enforceLoginDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=enforce_login_with_domains" })
  enforceLoginWithDomains?: boolean;

  @SpeakeasyMetadata({ data: "json, name=force_pmi_jbh_password" })
  forcePmiJbhPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=not_store_meeting_topic" })
  notStoreMeetingTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=participant_video" })
  participantVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=personal_meeting" })
  personalMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_instant_meetings" })
  requirePasswordForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_pmi_meetings" })
  requirePasswordForPmiMeetings?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduled_meetings" })
  requirePasswordForScheduledMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduling_new_meetings" })
  requirePasswordForSchedulingNewMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_instant_meetings" })
  usePmiForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_scheduled_meetings" })
  usePmiForScheduledMeetings?: boolean;
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement
/** 
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password. 
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consecutive_characters_length" })
  consecutiveCharactersLength?: number;

  @SpeakeasyMetadata({ data: "json, name=have_special_character" })
  haveSpecialCharacter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=minimum_password_length" })
  minimumPasswordLength?: number;

  @SpeakeasyMetadata({ data: "json, name=weak_enhance_detection" })
  weakEnhanceDetection?: boolean;
}

export enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity
/** 
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin_change_name_pic" })
  adminChangeNamePic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hide_billing_info" })
  hideBillingInfo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=import_photos_from_devices" })
  importPhotosFromDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_requirement" })
  passwordRequirement?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=sign_again_period_for_inactivity_on_client" })
  signAgainPeriodForInactivityOnClient?: number;

  @SpeakeasyMetadata({ data: "json, name=sign_again_period_for_inactivity_on_web" })
  signAgainPeriodForInactivityOnWeb?: number;

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth" })
  signInWithTwoFactorAuth?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum;

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth_groups" })
  signInWithTwoFactorAuthGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth_roles" })
  signInWithTwoFactorAuthRoles?: string[];
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions
/** 
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selection_values" })
  selectionValues?: string[];
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony
/** 
 * Account Settings Update: Telephony.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_conference_info" })
  audioConferenceInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=telephony_regions" })
  telephonyRegions?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions;

  @SpeakeasyMetadata({ data: "json, name=third_party_audio" })
  thirdPartyAudio?: boolean;
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp
/** 
 * Account Settings: TSP.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_out" })
  callOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=call_out_countries" })
  callOutCountries?: any[];

  @SpeakeasyMetadata({ data: "json, name=display_toll_free_numbers" })
  displayTollFreeNumbers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_international_numbers_link" })
  showInternationalNumbersLink?: boolean;
}


// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms
/** 
 * Account Settings: Zoom Rooms.
**/
export class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_start_stop_scheduled_meetings" })
  autoStartStopScheduledMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cmr_for_instant_meeting" })
  cmrForInstantMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=force_private_meeting" })
  forcePrivateMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hide_host_information" })
  hideHostInformation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=list_meetings_with_calendar" })
  listMeetingsWithCalendar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=start_airplay_manually" })
  startAirplayManually?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ultrasonic" })
  ultrasonic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upcoming_meeting_alert" })
  upcomingMeetingAlert?: boolean;

  @SpeakeasyMetadata({ data: "json, name=weekly_system_restart" })
  weeklySystemRestart?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zr_post_meeting_feedback" })
  zrPostMeetingFeedback?: boolean;
}


export class AccountSettingsUpdateApplicationJsonUpdateAccountSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_notification" })
  emailNotification?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=feature" })
  feature?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting;

  @SpeakeasyMetadata({ data: "json, name=integration" })
  integration?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile;

  @SpeakeasyMetadata({ data: "json, name=recording" })
  recording?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording;

  @SpeakeasyMetadata({ data: "json, name=schedule_meeting" })
  scheduleMeeting?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting;

  @SpeakeasyMetadata({ data: "json, name=security" })
  security?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity;

  @SpeakeasyMetadata({ data: "json, name=telephony" })
  telephony?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony;

  @SpeakeasyMetadata({ data: "json, name=tsp" })
  tsp?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp;

  @SpeakeasyMetadata({ data: "json, name=zoom_rooms" })
  zoomRooms?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms;
}

export enum AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


// AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/** 
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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


// AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/** 
 * Specify the settings to be applied if waiting room is enabled.
**/
export class AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=participants_to_place_in_waiting_room" })
  participantsToPlaceInWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=users_who_can_admit_participants_from_waiting_room" })
  usersWhoCanAdmitParticipantsFromWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelisted_domains_for_waiting_room" })
  whitelistedDomainsForWaitingRoom?: string;
}


export class AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_security" })
  autoSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=end_to_end_encrypted_meetings" })
  endToEndEncryptedMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password" })
  meetingPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;

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
  waitingRoomSettings?: AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;

  @SpeakeasyMetadata({ data: "json, name=webinar_password" })
  webinarPassword?: boolean;
}


export class AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meeting_security" })
  meetingSecurity?: AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification
/** 
 * Account Settings: Notification.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternative_host_reminder" })
  alternativeHostReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancel_meeting_reminder" })
  cancelMeetingReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_avaliable_reminder" })
  cloudRecordingAvaliableReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jbh_reminder" })
  jbhReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=low_host_count_reminder" })
  lowHostCountReminder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schedule_for_reminder" })
  scheduleForReminder?: boolean;
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature
/** 
 * Account Settings: Feature.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meeting_capacity" })
  meetingCapacity?: number;
}

export enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}


export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
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


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings
/** 
 * Settings to manage virtual background.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_upload_custom" })
  allowUploadCustom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_videos" })
  allowVideos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles })
  files?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles[];
}

export enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}

export enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting
/** 
 * Account Settings: In Meeting.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alert_guest_join" })
  alertGuestJoin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_live_streaming" })
  allowLiveStreaming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_participants_to_rename" })
  allowParticipantsToRename?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_show_zoom_windows" })
  allowShowZoomWindows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=annotation" })
  annotation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=anonymous_question_answer" })
  anonymousQuestionAnswer?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=custom_live_streaming_service" })
  customLiveStreamingService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=custom_service_instructions" })
  customServiceInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=data_center_regions" })
  dataCenterRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=dscp_audio" })
  dscpAudio?: number;

  @SpeakeasyMetadata({ data: "json, name=dscp_marking" })
  dscpMarking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dscp_video" })
  dscpVideo?: number;

  @SpeakeasyMetadata({ data: "json, name=e2e_encryption" })
  e2eEncryption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=entry_exit_chime" })
  entryExitChime?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum;

  @SpeakeasyMetadata({ data: "json, name=far_end_camera_control" })
  farEndCameraControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=feedback" })
  feedback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=file_transfer" })
  fileTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=group_hd" })
  groupHd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_reactions" })
  meetingReactions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=original_audio" })
  originalAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=p2p_connetion" })
  p2pConnetion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=p2p_ports" })
  p2pPorts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=polling" })
  polling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ports_range" })
  portsRange?: string;

  @SpeakeasyMetadata({ data: "json, name=post_meeting_feedback" })
  postMeetingFeedback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=private_chat" })
  privateChat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record_play_own_voice" })
  recordPlayOwnVoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remote_control" })
  remoteControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=request_permission_to_unmute" })
  requestPermissionToUnmute?: boolean;

  @SpeakeasyMetadata({ data: "json, name=screen_sharing" })
  screenSharing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sending_default_email_invites" })
  sendingDefaultEmailInvites?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_a_join_from_your_browser_link" })
  showAJoinFromYourBrowserLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_meeting_control_toolbar" })
  showMeetingControlToolbar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stereo_audio" })
  stereoAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_html_format_email" })
  useHtmlFormatEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=virtual_background" })
  virtualBackground?: boolean;

  @SpeakeasyMetadata({ data: "json, name=virtual_background_settings" })
  virtualBackgroundSettings?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings;

  @SpeakeasyMetadata({ data: "json, name=watermark" })
  watermark?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webinar_question_answer" })
  webinarQuestionAnswer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=whiteboard" })
  whiteboard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen" })
  whoCanShareScreen?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen_when_someone_is_sharing" })
  whoCanShareScreenWhenSomeoneIsSharing?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;

  @SpeakeasyMetadata({ data: "json, name=workplace_by_facebook" })
  workplaceByFacebook?: boolean;
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration
/** 
 * Account Settings: Integration.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=box" })
  box?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dropbox" })
  dropbox?: boolean;

  @SpeakeasyMetadata({ data: "json, name=google_calendar" })
  googleCalendar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=google_drive" })
  googleDrive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kubi" })
  kubi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=microsoft_one_drive" })
  microsoftOneDrive?: boolean;
}


export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recording_storage_location" })
  recordingStorageLocation?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation;
}


export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings extends SpeakeasyBase {
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


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive
/** 
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl
/** 
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses_or_ranges" })
  ipAddressesOrRanges?: string;
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement
/** 
 * This object represents the minimum password requirements set for recordings via Account Recording Settings.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement extends SpeakeasyBase {
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


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording
/** 
 * Account Settings: Recording.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_user_access_recording" })
  accountUserAccessRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_recovery_deleted_cloud_recordings" })
  allowRecoveryDeletedCloudRecordings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archive" })
  archive?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr" })
  autoDeleteCmr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr_days" })
  autoDeleteCmrDays?: number;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording" })
  cloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_download" })
  cloudRecordingDownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_download_host" })
  cloudRecordingDownloadHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_delete_cloud_recording" })
  hostDeleteCloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_address_access_control" })
  ipAddressAccessControl?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl;

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

  @SpeakeasyMetadata({ data: "json, name=recording_disclaimer" })
  recordingDisclaimer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recording_password_requirement" })
  recordingPasswordRequirement?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=required_password_for_existing_cloud_recordings" })
  requiredPasswordForExistingCloudRecordings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=save_chat_text" })
  saveChatText?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_timestamp" })
  showTimestamp?: boolean;
}

export enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement
/** 
 * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement extends SpeakeasyBase {
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

export enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting
/** 
 * Account Settings: Schedule Meeting.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_type" })
  audioType?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=enforce_login" })
  enforceLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforce_login_domains" })
  enforceLoginDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=enforce_login_with_domains" })
  enforceLoginWithDomains?: boolean;

  @SpeakeasyMetadata({ data: "json, name=force_pmi_jbh_password" })
  forcePmiJbhPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=join_before_host" })
  joinBeforeHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=not_store_meeting_topic" })
  notStoreMeetingTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=participant_video" })
  participantVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=personal_meeting" })
  personalMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_instant_meetings" })
  requirePasswordForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_pmi_meetings" })
  requirePasswordForPmiMeetings?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduled_meetings" })
  requirePasswordForScheduledMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduling_new_meetings" })
  requirePasswordForSchedulingNewMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_instant_meetings" })
  usePmiForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_scheduled_meetings" })
  usePmiForScheduledMeetings?: boolean;
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement
/** 
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password. 
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consecutive_characters_length" })
  consecutiveCharactersLength?: number;

  @SpeakeasyMetadata({ data: "json, name=have_special_character" })
  haveSpecialCharacter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=minimum_password_length" })
  minimumPasswordLength?: number;

  @SpeakeasyMetadata({ data: "json, name=weak_enhance_detection" })
  weakEnhanceDetection?: boolean;
}

export enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity
/** 
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin_change_name_pic" })
  adminChangeNamePic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hide_billing_info" })
  hideBillingInfo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=import_photos_from_devices" })
  importPhotosFromDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_requirement" })
  passwordRequirement?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=sign_again_period_for_inactivity_on_client" })
  signAgainPeriodForInactivityOnClient?: number;

  @SpeakeasyMetadata({ data: "json, name=sign_again_period_for_inactivity_on_web" })
  signAgainPeriodForInactivityOnWeb?: number;

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth" })
  signInWithTwoFactorAuth?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum;

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth_groups" })
  signInWithTwoFactorAuthGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth_roles" })
  signInWithTwoFactorAuthRoles?: string[];
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions
/** 
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selection_values" })
  selectionValues?: string[];
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony
/** 
 * Account Settings Update: Telephony.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_conference_info" })
  audioConferenceInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=telephony_regions" })
  telephonyRegions?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions;

  @SpeakeasyMetadata({ data: "json, name=third_party_audio" })
  thirdPartyAudio?: boolean;
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp
/** 
 * Account Settings: TSP.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_out" })
  callOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=call_out_countries" })
  callOutCountries?: any[];

  @SpeakeasyMetadata({ data: "json, name=display_toll_free_numbers" })
  displayTollFreeNumbers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_international_numbers_link" })
  showInternationalNumbersLink?: boolean;
}


// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms
/** 
 * Account Settings: Zoom Rooms.
**/
export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_start_stop_scheduled_meetings" })
  autoStartStopScheduledMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cmr_for_instant_meeting" })
  cmrForInstantMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=force_private_meeting" })
  forcePrivateMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hide_host_information" })
  hideHostInformation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=list_meetings_with_calendar" })
  listMeetingsWithCalendar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=start_airplay_manually" })
  startAirplayManually?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ultrasonic" })
  ultrasonic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upcoming_meeting_alert" })
  upcomingMeetingAlert?: boolean;

  @SpeakeasyMetadata({ data: "json, name=weekly_system_restart" })
  weeklySystemRestart?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zr_post_meeting_feedback" })
  zrPostMeetingFeedback?: boolean;
}


export class AccountSettingsUpdateMultipartFormDataUpdateAccountSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=email_notification;json=true" })
  emailNotification?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification;

  @SpeakeasyMetadata({ data: "multipart_form, name=feature;json=true" })
  feature?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature;

  @SpeakeasyMetadata({ data: "multipart_form, name=in_meeting;json=true" })
  inMeeting?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting;

  @SpeakeasyMetadata({ data: "multipart_form, name=integration;json=true" })
  integration?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration;

  @SpeakeasyMetadata({ data: "multipart_form, name=profile;json=true" })
  profile?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile;

  @SpeakeasyMetadata({ data: "multipart_form, name=recording;json=true" })
  recording?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording;

  @SpeakeasyMetadata({ data: "multipart_form, name=schedule_meeting;json=true" })
  scheduleMeeting?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting;

  @SpeakeasyMetadata({ data: "multipart_form, name=security;json=true" })
  security?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity;

  @SpeakeasyMetadata({ data: "multipart_form, name=telephony;json=true" })
  telephony?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony;

  @SpeakeasyMetadata({ data: "multipart_form, name=tsp;json=true" })
  tsp?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp;

  @SpeakeasyMetadata({ data: "multipart_form, name=zoom_rooms;json=true" })
  zoomRooms?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms;
}

export enum AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


// AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/** 
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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


// AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/** 
 * Specify the settings to be applied if waiting room is enabled.
**/
export class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=participants_to_place_in_waiting_room" })
  participantsToPlaceInWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=users_who_can_admit_participants_from_waiting_room" })
  usersWhoCanAdmitParticipantsFromWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelisted_domains_for_waiting_room" })
  whitelistedDomainsForWaitingRoom?: string;
}


export class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_security" })
  autoSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=end_to_end_encrypted_meetings" })
  endToEndEncryptedMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password" })
  meetingPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;

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
  waitingRoomSettings?: AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;

  @SpeakeasyMetadata({ data: "json, name=webinar_password" })
  webinarPassword?: boolean;
}


export class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=meeting_security;json=true" })
  meetingSecurity?: AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}


export class AccountSettingsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  oneOf?: any;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  oneOf1?: any;
}


export class AccountSettingsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountSettingsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: AccountSettingsUpdateQueryParams;

  @SpeakeasyMetadata()
  request: AccountSettingsUpdateRequests;
}


export class AccountSettingsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
