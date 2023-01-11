import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}

export enum AccountSettingsOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication"
}


export class AccountSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=custom_query_fields" })
  customQueryFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=option" })
  option?: AccountSettingsOptionEnum;
}


// AccountSettings200ApplicationJsonAccountSettingsEmailNotification
/** 
 * Account Settings: Notification.
**/
export class AccountSettings200ApplicationJsonAccountSettingsEmailNotification extends SpeakeasyBase {
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


// AccountSettings200ApplicationJsonAccountSettingsFeature
/** 
 * Account Settings: Feature.
**/
export class AccountSettings200ApplicationJsonAccountSettingsFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meeting_capacity" })
  meetingCapacity?: number;
}

export enum AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}


export class AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
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


// AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings
/** 
 * Settings to manage virtual background.
**/
export class AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_upload_custom" })
  allowUploadCustom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_videos" })
  allowVideos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles })
  files?: AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles[];
}

export enum AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}

export enum AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}


// AccountSettings200ApplicationJsonAccountSettingsInMeeting
/** 
 * Account Settings: In Meeting.
**/
export class AccountSettings200ApplicationJsonAccountSettingsInMeeting extends SpeakeasyBase {
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
  entryExitChime?: AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum;

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
  virtualBackgroundSettings?: AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings;

  @SpeakeasyMetadata({ data: "json, name=watermark" })
  watermark?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webinar_question_answer" })
  webinarQuestionAnswer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=whiteboard" })
  whiteboard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen" })
  whoCanShareScreen?: AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum;

  @SpeakeasyMetadata({ data: "json, name=who_can_share_screen_when_someone_is_sharing" })
  whoCanShareScreenWhenSomeoneIsSharing?: AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;

  @SpeakeasyMetadata({ data: "json, name=workplace_by_facebook" })
  workplaceByFacebook?: boolean;
}


// AccountSettings200ApplicationJsonAccountSettingsIntegration
/** 
 * Account Settings: Integration.
**/
export class AccountSettings200ApplicationJsonAccountSettingsIntegration extends SpeakeasyBase {
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


export class AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AccountSettings200ApplicationJsonAccountSettingsProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recording_storage_location" })
  recordingStorageLocation?: AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation;
}


export class AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings extends SpeakeasyBase {
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


// AccountSettings200ApplicationJsonAccountSettingsRecordingArchive
/** 
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
**/
export class AccountSettings200ApplicationJsonAccountSettingsRecordingArchive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl
/** 
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
export class AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses_or_ranges" })
  ipAddressesOrRanges?: string;
}


// AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement
/** 
 * This object represents the minimum password requirements set for recordings via Account Recording Settings.
**/
export class AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement extends SpeakeasyBase {
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


// AccountSettings200ApplicationJsonAccountSettingsRecording
/** 
 * Account Settings: Recording.
**/
export class AccountSettings200ApplicationJsonAccountSettingsRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_user_access_recording" })
  accountUserAccessRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_recovery_deleted_cloud_recordings" })
  allowRecoveryDeletedCloudRecordings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archive" })
  archive?: AccountSettings200ApplicationJsonAccountSettingsRecordingArchive;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr" })
  autoDeleteCmr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_delete_cmr_days" })
  autoDeleteCmrDays?: number;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording" })
  cloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_download" })
  cloudRecordingDownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloud_recording_download_host" })
  cloudRecordingDownloadHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_delete_cloud_recording" })
  hostDeleteCloudRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip_address_access_control" })
  ipAddressAccessControl?: AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl;

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
  recordingPasswordRequirement?: AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=required_password_for_existing_cloud_recordings" })
  requiredPasswordForExistingCloudRecordings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=save_chat_text" })
  saveChatText?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_timestamp" })
  showTimestamp?: boolean;
}

export enum AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}


// AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement
/** 
 * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement extends SpeakeasyBase {
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

export enum AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}


// AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting
/** 
 * Account Settings: Schedule Meeting.
**/
export class AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_type" })
  audioType?: AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum;

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
  meetingPasswordRequirement?: AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=not_store_meeting_topic" })
  notStoreMeetingTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=participant_video" })
  participantVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=personal_meeting" })
  personalMeeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_instant_meetings" })
  requirePasswordForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_pmi_meetings" })
  requirePasswordForPmiMeetings?: AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduled_meetings" })
  requirePasswordForScheduledMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_password_for_scheduling_new_meetings" })
  requirePasswordForSchedulingNewMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_instant_meetings" })
  usePmiForInstantMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_pmi_for_scheduled_meetings" })
  usePmiForScheduledMeetings?: boolean;
}


// AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement
/** 
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password. 
**/
export class AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consecutive_characters_length" })
  consecutiveCharactersLength?: number;

  @SpeakeasyMetadata({ data: "json, name=have_special_character" })
  haveSpecialCharacter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=minimum_password_length" })
  minimumPasswordLength?: number;

  @SpeakeasyMetadata({ data: "json, name=weak_enhance_detection" })
  weakEnhanceDetection?: boolean;
}

export enum AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}


// AccountSettings200ApplicationJsonAccountSettingsSecurity
/** 
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
export class AccountSettings200ApplicationJsonAccountSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin_change_name_pic" })
  adminChangeNamePic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hide_billing_info" })
  hideBillingInfo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=import_photos_from_devices" })
  importPhotosFromDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_requirement" })
  passwordRequirement?: AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=sign_again_period_for_inactivity_on_client" })
  signAgainPeriodForInactivityOnClient?: number;

  @SpeakeasyMetadata({ data: "json, name=sign_again_period_for_inactivity_on_web" })
  signAgainPeriodForInactivityOnWeb?: number;

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth" })
  signInWithTwoFactorAuth?: AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum;

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth_groups" })
  signInWithTwoFactorAuthGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth_roles" })
  signInWithTwoFactorAuthRoles?: string[];
}


// AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions
/** 
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export class AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=selection_values" })
  selectionValues?: string[];
}


// AccountSettings200ApplicationJsonAccountSettingsTelephony
/** 
 * Account Settings: Telephony.
**/
export class AccountSettings200ApplicationJsonAccountSettingsTelephony extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_conference_info" })
  audioConferenceInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=telephony_regions" })
  telephonyRegions?: AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions;

  @SpeakeasyMetadata({ data: "json, name=third_party_audio" })
  thirdPartyAudio?: boolean;
}


// AccountSettings200ApplicationJsonAccountSettingsTsp
/** 
 * Account Settings: TSP.
**/
export class AccountSettings200ApplicationJsonAccountSettingsTsp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_out" })
  callOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=call_out_countries" })
  callOutCountries?: any[];

  @SpeakeasyMetadata({ data: "json, name=display_toll_free_numbers" })
  displayTollFreeNumbers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_international_numbers_link" })
  showInternationalNumbersLink?: boolean;
}


// AccountSettings200ApplicationJsonAccountSettingsZoomRooms
/** 
 * Account Settings: Zoom Rooms.
**/
export class AccountSettings200ApplicationJsonAccountSettingsZoomRooms extends SpeakeasyBase {
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


export class AccountSettings200ApplicationJsonAccountSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_notification" })
  emailNotification?: AccountSettings200ApplicationJsonAccountSettingsEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=feature" })
  feature?: AccountSettings200ApplicationJsonAccountSettingsFeature;

  @SpeakeasyMetadata({ data: "json, name=in_meeting" })
  inMeeting?: AccountSettings200ApplicationJsonAccountSettingsInMeeting;

  @SpeakeasyMetadata({ data: "json, name=integration" })
  integration?: AccountSettings200ApplicationJsonAccountSettingsIntegration;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: AccountSettings200ApplicationJsonAccountSettingsProfile;

  @SpeakeasyMetadata({ data: "json, name=recording" })
  recording?: AccountSettings200ApplicationJsonAccountSettingsRecording;

  @SpeakeasyMetadata({ data: "json, name=schedule_meeting" })
  scheduleMeeting?: AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting;

  @SpeakeasyMetadata({ data: "json, name=security" })
  security?: AccountSettings200ApplicationJsonAccountSettingsSecurity;

  @SpeakeasyMetadata({ data: "json, name=telephony" })
  telephony?: AccountSettings200ApplicationJsonAccountSettingsTelephony;

  @SpeakeasyMetadata({ data: "json, name=tsp" })
  tsp?: AccountSettings200ApplicationJsonAccountSettingsTsp;

  @SpeakeasyMetadata({ data: "json, name=zoom_rooms" })
  zoomRooms?: AccountSettings200ApplicationJsonAccountSettingsZoomRooms;
}


// AccountSettings200ApplicationJson3PasswordRequirement
/** 
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password. 
**/
export class AccountSettings200ApplicationJson3PasswordRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consecutive_characters_length" })
  consecutiveCharactersLength?: number;

  @SpeakeasyMetadata({ data: "json, name=have_special_character" })
  haveSpecialCharacter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=minimum_password_length" })
  minimumPasswordLength?: number;

  @SpeakeasyMetadata({ data: "json, name=weak_enhance_detection" })
  weakEnhanceDetection?: boolean;
}

export enum AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}


// AccountSettings200ApplicationJson3
/** 
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
export class AccountSettings200ApplicationJson3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin_change_name_pic" })
  adminChangeNamePic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hide_billing_info" })
  hideBillingInfo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=import_photos_from_devices" })
  importPhotosFromDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_requirement" })
  passwordRequirement?: AccountSettings200ApplicationJson3PasswordRequirement;

  @SpeakeasyMetadata({ data: "json, name=sign_again_period_for_inactivity_on_client" })
  signAgainPeriodForInactivityOnClient?: number;

  @SpeakeasyMetadata({ data: "json, name=sign_again_period_for_inactivity_on_web" })
  signAgainPeriodForInactivityOnWeb?: number;

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth" })
  signInWithTwoFactorAuth?: AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum;

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth_groups" })
  signInWithTwoFactorAuthGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=sign_in_with_two_factor_auth_roles" })
  signInWithTwoFactorAuthRoles?: string[];
}

export enum AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}


// AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/** 
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export class AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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


// AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/** 
 * Specify the settings to be applied if waiting room is enabled.
**/
export class AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=participants_to_place_in_waiting_room" })
  participantsToPlaceInWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=users_who_can_admit_participants_from_waiting_room" })
  usersWhoCanAdmitParticipantsFromWaitingRoom?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelisted_domains_for_waiting_room" })
  whitelistedDomainsForWaitingRoom?: string;
}


export class AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_security" })
  autoSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed_password_in_join_link" })
  embedPasswordInJoinLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption_type" })
  encryptionType?: AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=end_to_end_encrypted_meetings" })
  endToEndEncryptedMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password" })
  meetingPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_password_requirement" })
  meetingPasswordRequirement?: AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;

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
  waitingRoomSettings?: AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;

  @SpeakeasyMetadata({ data: "json, name=webinar_password" })
  webinarPassword?: boolean;
}


export class AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meeting_security" })
  meetingSecurity?: AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}


export class AccountSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountSettingsPathParams;

  @SpeakeasyMetadata()
  queryParams: AccountSettingsQueryParams;
}


export class AccountSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountSettings200ApplicationJSONOneOf?: any;
}
