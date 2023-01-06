package operations

type AccountSettingsUpdatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AccountSettingsUpdateOptionEnum string

const (
	AccountSettingsUpdateOptionEnumMeetingAuthentication   AccountSettingsUpdateOptionEnum = "meeting_authentication"
	AccountSettingsUpdateOptionEnumRecordingAuthentication AccountSettingsUpdateOptionEnum = "recording_authentication"
	AccountSettingsUpdateOptionEnumSecurity                AccountSettingsUpdateOptionEnum = "security"
	AccountSettingsUpdateOptionEnumMeetingSecurity         AccountSettingsUpdateOptionEnum = "meeting_security"
)

type AccountSettingsUpdateQueryParams struct {
	Option *AccountSettingsUpdateOptionEnum `queryParam:"style=form,explode=true,name=option"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsEmailNotification
// Account Settings: Notification.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsEmailNotification struct {
	AlternativeHostReminder         *bool `json:"alternative_host_reminder,omitempty"`
	CancelMeetingReminder           *bool `json:"cancel_meeting_reminder,omitempty"`
	CloudRecordingAvaliableReminder *bool `json:"cloud_recording_avaliable_reminder,omitempty"`
	JbhReminder                     *bool `json:"jbh_reminder,omitempty"`
	LowHostCountReminder            *bool `json:"low_host_count_reminder,omitempty"`
	ScheduleForReminder             *bool `json:"schedule_for_reminder,omitempty"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsFeature
// Account Settings: Feature.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsFeature struct {
	MeetingCapacity *int64 `json:"meeting_capacity,omitempty"`
}

type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnum string

const (
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnumHost AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnum = "host"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnumAll  AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnum = "all"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnumNone AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnum = "none"
)

type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles struct {
	ID        *string `json:"id,omitempty"`
	IsDefault *bool   `json:"is_default,omitempty"`
	Name      *string `json:"name,omitempty"`
	Size      *string `json:"size,omitempty"`
	Type      *string `json:"type,omitempty"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettings
// Settings to manage virtual background.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettings struct {
	AllowUploadCustom *bool                                                                                              `json:"allow_upload_custom,omitempty"`
	AllowVideos       *bool                                                                                              `json:"allow_videos,omitempty"`
	Enable            *bool                                                                                              `json:"enable,omitempty"`
	Files             []AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles `json:"files,omitempty"`
}

type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenEnum string

const (
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenEnumHost AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenEnum = "host"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenEnumAll  AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenEnum = "all"
)

type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum string

const (
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumHost AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "host"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumAll  AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "all"
)

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeeting
// Account Settings: In Meeting.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeeting struct {
	AlertGuestJoin                        *bool                                                                                                        `json:"alert_guest_join,omitempty"`
	AllowLiveStreaming                    *bool                                                                                                        `json:"allow_live_streaming,omitempty"`
	AllowParticipantsToRename             *bool                                                                                                        `json:"allow_participants_to_rename,omitempty"`
	AllowShowZoomWindows                  *bool                                                                                                        `json:"allow_show_zoom_windows,omitempty"`
	Annotation                            *bool                                                                                                        `json:"annotation,omitempty"`
	AnonymousQuestionAnswer               *bool                                                                                                        `json:"anonymous_question_answer,omitempty"`
	AttendeeOnHold                        *bool                                                                                                        `json:"attendee_on_hold,omitempty"`
	AutoAnswer                            *bool                                                                                                        `json:"auto_answer,omitempty"`
	AutoSavingChat                        *bool                                                                                                        `json:"auto_saving_chat,omitempty"`
	BreakoutRoom                          *bool                                                                                                        `json:"breakout_room,omitempty"`
	Chat                                  *bool                                                                                                        `json:"chat,omitempty"`
	ClosedCaption                         *bool                                                                                                        `json:"closed_caption,omitempty"`
	CoHost                                *bool                                                                                                        `json:"co_host,omitempty"`
	CustomDataCenterRegions               *bool                                                                                                        `json:"custom_data_center_regions,omitempty"`
	CustomLiveStreamingService            *bool                                                                                                        `json:"custom_live_streaming_service,omitempty"`
	CustomServiceInstructions             *string                                                                                                      `json:"custom_service_instructions,omitempty"`
	DataCenterRegions                     []string                                                                                                     `json:"data_center_regions,omitempty"`
	DscpAudio                             *int64                                                                                                       `json:"dscp_audio,omitempty"`
	DscpMarking                           *bool                                                                                                        `json:"dscp_marking,omitempty"`
	DscpVideo                             *int64                                                                                                       `json:"dscp_video,omitempty"`
	E2eEncryption                         *bool                                                                                                        `json:"e2e_encryption,omitempty"`
	EntryExitChime                        *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnum                        `json:"entry_exit_chime,omitempty"`
	FarEndCameraControl                   *bool                                                                                                        `json:"far_end_camera_control,omitempty"`
	Feedback                              *bool                                                                                                        `json:"feedback,omitempty"`
	FileTransfer                          *bool                                                                                                        `json:"file_transfer,omitempty"`
	GroupHd                               *bool                                                                                                        `json:"group_hd,omitempty"`
	MeetingReactions                      *bool                                                                                                        `json:"meeting_reactions,omitempty"`
	OriginalAudio                         *bool                                                                                                        `json:"original_audio,omitempty"`
	P2pConnetion                          *bool                                                                                                        `json:"p2p_connetion,omitempty"`
	P2pPorts                              *bool                                                                                                        `json:"p2p_ports,omitempty"`
	Polling                               *bool                                                                                                        `json:"polling,omitempty"`
	PortsRange                            *string                                                                                                      `json:"ports_range,omitempty"`
	PostMeetingFeedback                   *bool                                                                                                        `json:"post_meeting_feedback,omitempty"`
	PrivateChat                           *bool                                                                                                        `json:"private_chat,omitempty"`
	RecordPlayOwnVoice                    *bool                                                                                                        `json:"record_play_own_voice,omitempty"`
	RemoteControl                         *bool                                                                                                        `json:"remote_control,omitempty"`
	RequestPermissionToUnmute             *bool                                                                                                        `json:"request_permission_to_unmute,omitempty"`
	ScreenSharing                         *bool                                                                                                        `json:"screen_sharing,omitempty"`
	SendingDefaultEmailInvites            *bool                                                                                                        `json:"sending_default_email_invites,omitempty"`
	ShowAJoinFromYourBrowserLink          *bool                                                                                                        `json:"show_a_join_from_your_browser_link,omitempty"`
	ShowMeetingControlToolbar             *bool                                                                                                        `json:"show_meeting_control_toolbar,omitempty"`
	StereoAudio                           *bool                                                                                                        `json:"stereo_audio,omitempty"`
	UseHTMLFormatEmail                    *bool                                                                                                        `json:"use_html_format_email,omitempty"`
	VirtualBackground                     *bool                                                                                                        `json:"virtual_background,omitempty"`
	VirtualBackgroundSettings             *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettings                 `json:"virtual_background_settings,omitempty"`
	Watermark                             *bool                                                                                                        `json:"watermark,omitempty"`
	WebinarQuestionAnswer                 *bool                                                                                                        `json:"webinar_question_answer,omitempty"`
	Whiteboard                            *bool                                                                                                        `json:"whiteboard,omitempty"`
	WhoCanShareScreen                     *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenEnum                     `json:"who_can_share_screen,omitempty"`
	WhoCanShareScreenWhenSomeoneIsSharing *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum `json:"who_can_share_screen_when_someone_is_sharing,omitempty"`
	WorkplaceByFacebook                   *bool                                                                                                        `json:"workplace_by_facebook,omitempty"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsIntegration
// Account Settings: Integration.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsIntegration struct {
	Box               *bool `json:"box,omitempty"`
	Dropbox           *bool `json:"dropbox,omitempty"`
	GoogleCalendar    *bool `json:"google_calendar,omitempty"`
	GoogleDrive       *bool `json:"google_drive,omitempty"`
	Kubi              *bool `json:"kubi,omitempty"`
	MicrosoftOneDrive *bool `json:"microsoft_one_drive,omitempty"`
}

type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfileRecordingStorageLocation struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	Value         *string  `json:"value,omitempty"`
}

type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfile struct {
	RecordingStorageLocation *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfileRecordingStorageLocation `json:"recording_storage_location,omitempty"`
}

type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchiveSettings struct {
	AudioFile           *bool `json:"audio_file,omitempty"`
	CcTranscriptFile    *bool `json:"cc_transcript_file,omitempty"`
	ChatFile            *bool `json:"chat_file,omitempty"`
	ChatWithSenderEmail *bool `json:"chat_with_sender_email,omitempty"`
	VideoFile           *bool `json:"video_file,omitempty"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchive
// [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchive struct {
	Enable   *bool                                                                              `json:"enable,omitempty"`
	Settings *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchiveSettings `json:"settings,omitempty"`
	Type     *int64                                                                             `json:"type,omitempty"`
}

type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnum string

const (
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnumLocal AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnum = "local"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnumCloud AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnum = "cloud"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnumNone  AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnum = "none"
)

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingIPAddressAccessControl
// Setting to allow cloud recording access only from specific IP address ranges.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingIPAddressAccessControl struct {
	Enable              *bool   `json:"enable,omitempty"`
	IPAddressesOrRanges *string `json:"ip_addresses_or_ranges,omitempty"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingRecordingPasswordRequirement
// This object represents the minimum password requirements set for recordings via Account Recording Settings.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingRecordingPasswordRequirement struct {
	HaveLetter           *bool  `json:"have_letter,omitempty"`
	HaveNumber           *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter *bool  `json:"have_special_character,omitempty"`
	Length               *int64 `json:"length,omitempty"`
	OnlyAllowNumeric     *bool  `json:"only_allow_numeric,omitempty"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecording
// Account Settings: Recording.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecording struct {
	AccountUserAccessRecording                 *bool                                                                                           `json:"account_user_access_recording,omitempty"`
	AllowRecoveryDeletedCloudRecordings        *bool                                                                                           `json:"allow_recovery_deleted_cloud_recordings,omitempty"`
	Archive                                    *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchive                      `json:"archive,omitempty"`
	AutoDeleteCmr                              *bool                                                                                           `json:"auto_delete_cmr,omitempty"`
	AutoDeleteCmrDays                          *int64                                                                                          `json:"auto_delete_cmr_days,omitempty"`
	AutoRecording                              *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnum            `json:"auto_recording,omitempty"`
	CloudRecording                             *bool                                                                                           `json:"cloud_recording,omitempty"`
	CloudRecordingDownload                     *bool                                                                                           `json:"cloud_recording_download,omitempty"`
	CloudRecordingDownloadHost                 *bool                                                                                           `json:"cloud_recording_download_host,omitempty"`
	HostDeleteCloudRecording                   *bool                                                                                           `json:"host_delete_cloud_recording,omitempty"`
	IPAddressAccessControl                     *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingIPAddressAccessControl       `json:"ip_address_access_control,omitempty"`
	LocalRecording                             *bool                                                                                           `json:"local_recording,omitempty"`
	PreventHostAccessRecording                 *bool                                                                                           `json:"prevent_host_access_recording,omitempty"`
	RecordAudioFile                            *bool                                                                                           `json:"record_audio_file,omitempty"`
	RecordGalleryView                          *bool                                                                                           `json:"record_gallery_view,omitempty"`
	RecordSpeakerView                          *bool                                                                                           `json:"record_speaker_view,omitempty"`
	RecordingAudioTranscript                   *bool                                                                                           `json:"recording_audio_transcript,omitempty"`
	RecordingDisclaimer                        *bool                                                                                           `json:"recording_disclaimer,omitempty"`
	RecordingPasswordRequirement               *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingRecordingPasswordRequirement `json:"recording_password_requirement,omitempty"`
	RequiredPasswordForExistingCloudRecordings *bool                                                                                           `json:"required_password_for_existing_cloud_recordings,omitempty"`
	SaveChatText                               *bool                                                                                           `json:"save_chat_text,omitempty"`
	ShowTimestamp                              *bool                                                                                           `json:"show_timestamp,omitempty"`
}

type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnum string

const (
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnumBoth       AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnum = "both"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnumTelephony  AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnum = "telephony"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnumVoip       AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnum = "voip"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnumThirdParty AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnum = "thirdParty"
)

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement
// Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum string

const (
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnumJbhOnly AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = "jbh_only"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnumAll     AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = "all"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnumNone    AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = "none"
)

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeeting
// Account Settings: Schedule Meeting.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeeting struct {
	AudioType                               *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnum                     `json:"audio_type,omitempty"`
	EnforceLogin                            *bool                                                                                                      `json:"enforce_login,omitempty"`
	EnforceLoginDomains                     *string                                                                                                    `json:"enforce_login_domains,omitempty"`
	EnforceLoginWithDomains                 *bool                                                                                                      `json:"enforce_login_with_domains,omitempty"`
	ForcePmiJbhPassword                     *bool                                                                                                      `json:"force_pmi_jbh_password,omitempty"`
	HostVideo                               *bool                                                                                                      `json:"host_video,omitempty"`
	JoinBeforeHost                          *bool                                                                                                      `json:"join_before_host,omitempty"`
	MeetingPasswordRequirement              *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement        `json:"meeting_password_requirement,omitempty"`
	NotStoreMeetingTopic                    *bool                                                                                                      `json:"not_store_meeting_topic,omitempty"`
	ParticipantVideo                        *bool                                                                                                      `json:"participant_video,omitempty"`
	PersonalMeeting                         *bool                                                                                                      `json:"personal_meeting,omitempty"`
	RequirePasswordForInstantMeetings       *bool                                                                                                      `json:"require_password_for_instant_meetings,omitempty"`
	RequirePasswordForPmiMeetings           *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum `json:"require_password_for_pmi_meetings,omitempty"`
	RequirePasswordForScheduledMeetings     *bool                                                                                                      `json:"require_password_for_scheduled_meetings,omitempty"`
	RequirePasswordForSchedulingNewMeetings *bool                                                                                                      `json:"require_password_for_scheduling_new_meetings,omitempty"`
	UsePmiForInstantMeetings                *bool                                                                                                      `json:"use_pmi_for_instant_meetings,omitempty"`
	UsePmiForScheduledMeetings              *bool                                                                                                      `json:"use_pmi_for_scheduled_meetings,omitempty"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurityPasswordRequirement
// This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurityPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	MinimumPasswordLength       *int64 `json:"minimum_password_length,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum string

const (
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnumAll   AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "all"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnumGroup AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "group"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnumRole  AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "role"
	AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnumNone  AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "none"
)

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurity
// [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurity struct {
	AdminChangeNamePic                   *bool                                                                                         `json:"admin_change_name_pic,omitempty"`
	HideBillingInfo                      *bool                                                                                         `json:"hide_billing_info,omitempty"`
	ImportPhotosFromDevices              *bool                                                                                         `json:"import_photos_from_devices,omitempty"`
	PasswordRequirement                  *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurityPasswordRequirement         `json:"password_requirement,omitempty"`
	SignAgainPeriodForInactivityOnClient *int64                                                                                        `json:"sign_again_period_for_inactivity_on_client,omitempty"`
	SignAgainPeriodForInactivityOnWeb    *int64                                                                                        `json:"sign_again_period_for_inactivity_on_web,omitempty"`
	SignInWithTwoFactorAuth              *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum `json:"sign_in_with_two_factor_auth,omitempty"`
	SignInWithTwoFactorAuthGroups        []string                                                                                      `json:"sign_in_with_two_factor_auth_groups,omitempty"`
	SignInWithTwoFactorAuthRoles         []string                                                                                      `json:"sign_in_with_two_factor_auth_roles,omitempty"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephonyTelephonyRegions
// Indicates where most of the participants call into or call from duriing a meeting.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephonyTelephonyRegions struct {
	SelectionValues []string `json:"selection_values,omitempty"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephony
// Account Settings Update: Telephony.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephony struct {
	AudioConferenceInfo *string                                                                             `json:"audio_conference_info,omitempty"`
	TelephonyRegions    *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephonyTelephonyRegions `json:"telephony_regions,omitempty"`
	ThirdPartyAudio     *bool                                                                               `json:"third_party_audio,omitempty"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTsp
// Account Settings: TSP.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTsp struct {
	CallOut                      *bool         `json:"call_out,omitempty"`
	CallOutCountries             []interface{} `json:"call_out_countries,omitempty"`
	DisplayTollFreeNumbers       *bool         `json:"display_toll_free_numbers,omitempty"`
	ShowInternationalNumbersLink *bool         `json:"show_international_numbers_link,omitempty"`
}

// AccountSettingsUpdateApplicationJSONUpdateAccountSettingsZoomRooms
// Account Settings: Zoom Rooms.
type AccountSettingsUpdateApplicationJSONUpdateAccountSettingsZoomRooms struct {
	AutoStartStopScheduledMeetings *bool `json:"auto_start_stop_scheduled_meetings,omitempty"`
	CmrForInstantMeeting           *bool `json:"cmr_for_instant_meeting,omitempty"`
	ForcePrivateMeeting            *bool `json:"force_private_meeting,omitempty"`
	HideHostInformation            *bool `json:"hide_host_information,omitempty"`
	ListMeetingsWithCalendar       *bool `json:"list_meetings_with_calendar,omitempty"`
	StartAirplayManually           *bool `json:"start_airplay_manually,omitempty"`
	Ultrasonic                     *bool `json:"ultrasonic,omitempty"`
	UpcomingMeetingAlert           *bool `json:"upcoming_meeting_alert,omitempty"`
	WeeklySystemRestart            *bool `json:"weekly_system_restart,omitempty"`
	ZrPostMeetingFeedback          *bool `json:"zr_post_meeting_feedback,omitempty"`
}

type AccountSettingsUpdateApplicationJSONUpdateAccountSettings struct {
	EmailNotification *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsEmailNotification `json:"email_notification,omitempty"`
	Feature           *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsFeature           `json:"feature,omitempty"`
	InMeeting         *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeeting         `json:"in_meeting,omitempty"`
	Integration       *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsIntegration       `json:"integration,omitempty"`
	Profile           *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfile           `json:"profile,omitempty"`
	Recording         *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecording         `json:"recording,omitempty"`
	ScheduleMeeting   *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeeting   `json:"schedule_meeting,omitempty"`
	Security          *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurity          `json:"security,omitempty"`
	Telephony         *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephony         `json:"telephony,omitempty"`
	Tsp               *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTsp               `json:"tsp,omitempty"`
	ZoomRooms         *AccountSettingsUpdateApplicationJSONUpdateAccountSettingsZoomRooms         `json:"zoom_rooms,omitempty"`
}

type AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum string

const (
	AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumEnhancedEncryption AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "enhanced_encryption"
	AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumE2ee               AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "e2ee"
)

// AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
// Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

// AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
// Specify the settings to be applied if waiting room is enabled.
type AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings struct {
	ParticipantsToPlaceInWaitingRoom            *int64  `json:"participants_to_place_in_waiting_room,omitempty"`
	UsersWhoCanAdmitParticipantsFromWaitingRoom *int64  `json:"users_who_can_admit_participants_from_waiting_room,omitempty"`
	WhitelistedDomainsForWaitingRoom            *string `json:"whitelisted_domains_for_waiting_room,omitempty"`
}

type AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity struct {
	AutoSecurity                       *bool                                                                                                        `json:"auto_security,omitempty"`
	EmbedPasswordInJoinLink            *bool                                                                                                        `json:"embed_password_in_join_link,omitempty"`
	EncryptionType                     *AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum         `json:"encryption_type,omitempty"`
	EndToEndEncryptedMeetings          *bool                                                                                                        `json:"end_to_end_encrypted_meetings,omitempty"`
	MeetingPassword                    *bool                                                                                                        `json:"meeting_password,omitempty"`
	MeetingPasswordRequirement         *AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement `json:"meeting_password_requirement,omitempty"`
	PhonePassword                      *bool                                                                                                        `json:"phone_password,omitempty"`
	PmiPassword                        *bool                                                                                                        `json:"pmi_password,omitempty"`
	RequirePasswordForScheduledMeeting *bool                                                                                                        `json:"require_password_for_scheduled_meeting,omitempty"`
	RequirePasswordForScheduledWebinar *bool                                                                                                        `json:"require_password_for_scheduled_webinar,omitempty"`
	WaitingRoom                        *bool                                                                                                        `json:"waiting_room,omitempty"`
	WaitingRoomSettings                *AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings        `json:"waiting_room_settings,omitempty"`
	WebinarPassword                    *bool                                                                                                        `json:"webinar_password,omitempty"`
}

type AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettings struct {
	MeetingSecurity *AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity `json:"meeting_security,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification
// Account Settings: Notification.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification struct {
	AlternativeHostReminder         *bool `json:"alternative_host_reminder,omitempty"`
	CancelMeetingReminder           *bool `json:"cancel_meeting_reminder,omitempty"`
	CloudRecordingAvaliableReminder *bool `json:"cloud_recording_avaliable_reminder,omitempty"`
	JbhReminder                     *bool `json:"jbh_reminder,omitempty"`
	LowHostCountReminder            *bool `json:"low_host_count_reminder,omitempty"`
	ScheduleForReminder             *bool `json:"schedule_for_reminder,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature
// Account Settings: Feature.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature struct {
	MeetingCapacity *int64 `json:"meeting_capacity,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum string

const (
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnumHost AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum = "host"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnumAll  AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum = "all"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnumNone AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum = "none"
)

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles struct {
	ID        *string `json:"id,omitempty"`
	IsDefault *bool   `json:"is_default,omitempty"`
	Name      *string `json:"name,omitempty"`
	Size      *string `json:"size,omitempty"`
	Type      *string `json:"type,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings
// Settings to manage virtual background.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings struct {
	AllowUploadCustom *bool                                                                                                `json:"allow_upload_custom,omitempty"`
	AllowVideos       *bool                                                                                                `json:"allow_videos,omitempty"`
	Enable            *bool                                                                                                `json:"enable,omitempty"`
	Files             []AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles `json:"files,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum string

const (
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnumHost AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum = "host"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnumAll  AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum = "all"
)

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum string

const (
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumHost AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "host"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumAll  AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "all"
)

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting
// Account Settings: In Meeting.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting struct {
	AlertGuestJoin                        *bool                                                                                                          `json:"alert_guest_join,omitempty"`
	AllowLiveStreaming                    *bool                                                                                                          `json:"allow_live_streaming,omitempty"`
	AllowParticipantsToRename             *bool                                                                                                          `json:"allow_participants_to_rename,omitempty"`
	AllowShowZoomWindows                  *bool                                                                                                          `json:"allow_show_zoom_windows,omitempty"`
	Annotation                            *bool                                                                                                          `json:"annotation,omitempty"`
	AnonymousQuestionAnswer               *bool                                                                                                          `json:"anonymous_question_answer,omitempty"`
	AttendeeOnHold                        *bool                                                                                                          `json:"attendee_on_hold,omitempty"`
	AutoAnswer                            *bool                                                                                                          `json:"auto_answer,omitempty"`
	AutoSavingChat                        *bool                                                                                                          `json:"auto_saving_chat,omitempty"`
	BreakoutRoom                          *bool                                                                                                          `json:"breakout_room,omitempty"`
	Chat                                  *bool                                                                                                          `json:"chat,omitempty"`
	ClosedCaption                         *bool                                                                                                          `json:"closed_caption,omitempty"`
	CoHost                                *bool                                                                                                          `json:"co_host,omitempty"`
	CustomDataCenterRegions               *bool                                                                                                          `json:"custom_data_center_regions,omitempty"`
	CustomLiveStreamingService            *bool                                                                                                          `json:"custom_live_streaming_service,omitempty"`
	CustomServiceInstructions             *string                                                                                                        `json:"custom_service_instructions,omitempty"`
	DataCenterRegions                     []string                                                                                                       `json:"data_center_regions,omitempty"`
	DscpAudio                             *int64                                                                                                         `json:"dscp_audio,omitempty"`
	DscpMarking                           *bool                                                                                                          `json:"dscp_marking,omitempty"`
	DscpVideo                             *int64                                                                                                         `json:"dscp_video,omitempty"`
	E2eEncryption                         *bool                                                                                                          `json:"e2e_encryption,omitempty"`
	EntryExitChime                        *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum                        `json:"entry_exit_chime,omitempty"`
	FarEndCameraControl                   *bool                                                                                                          `json:"far_end_camera_control,omitempty"`
	Feedback                              *bool                                                                                                          `json:"feedback,omitempty"`
	FileTransfer                          *bool                                                                                                          `json:"file_transfer,omitempty"`
	GroupHd                               *bool                                                                                                          `json:"group_hd,omitempty"`
	MeetingReactions                      *bool                                                                                                          `json:"meeting_reactions,omitempty"`
	OriginalAudio                         *bool                                                                                                          `json:"original_audio,omitempty"`
	P2pConnetion                          *bool                                                                                                          `json:"p2p_connetion,omitempty"`
	P2pPorts                              *bool                                                                                                          `json:"p2p_ports,omitempty"`
	Polling                               *bool                                                                                                          `json:"polling,omitempty"`
	PortsRange                            *string                                                                                                        `json:"ports_range,omitempty"`
	PostMeetingFeedback                   *bool                                                                                                          `json:"post_meeting_feedback,omitempty"`
	PrivateChat                           *bool                                                                                                          `json:"private_chat,omitempty"`
	RecordPlayOwnVoice                    *bool                                                                                                          `json:"record_play_own_voice,omitempty"`
	RemoteControl                         *bool                                                                                                          `json:"remote_control,omitempty"`
	RequestPermissionToUnmute             *bool                                                                                                          `json:"request_permission_to_unmute,omitempty"`
	ScreenSharing                         *bool                                                                                                          `json:"screen_sharing,omitempty"`
	SendingDefaultEmailInvites            *bool                                                                                                          `json:"sending_default_email_invites,omitempty"`
	ShowAJoinFromYourBrowserLink          *bool                                                                                                          `json:"show_a_join_from_your_browser_link,omitempty"`
	ShowMeetingControlToolbar             *bool                                                                                                          `json:"show_meeting_control_toolbar,omitempty"`
	StereoAudio                           *bool                                                                                                          `json:"stereo_audio,omitempty"`
	UseHTMLFormatEmail                    *bool                                                                                                          `json:"use_html_format_email,omitempty"`
	VirtualBackground                     *bool                                                                                                          `json:"virtual_background,omitempty"`
	VirtualBackgroundSettings             *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings                 `json:"virtual_background_settings,omitempty"`
	Watermark                             *bool                                                                                                          `json:"watermark,omitempty"`
	WebinarQuestionAnswer                 *bool                                                                                                          `json:"webinar_question_answer,omitempty"`
	Whiteboard                            *bool                                                                                                          `json:"whiteboard,omitempty"`
	WhoCanShareScreen                     *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum                     `json:"who_can_share_screen,omitempty"`
	WhoCanShareScreenWhenSomeoneIsSharing *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum `json:"who_can_share_screen_when_someone_is_sharing,omitempty"`
	WorkplaceByFacebook                   *bool                                                                                                          `json:"workplace_by_facebook,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration
// Account Settings: Integration.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration struct {
	Box               *bool `json:"box,omitempty"`
	Dropbox           *bool `json:"dropbox,omitempty"`
	GoogleCalendar    *bool `json:"google_calendar,omitempty"`
	GoogleDrive       *bool `json:"google_drive,omitempty"`
	Kubi              *bool `json:"kubi,omitempty"`
	MicrosoftOneDrive *bool `json:"microsoft_one_drive,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	Value         *string  `json:"value,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile struct {
	RecordingStorageLocation *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation `json:"recording_storage_location,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings struct {
	AudioFile           *bool `json:"audio_file,omitempty"`
	CcTranscriptFile    *bool `json:"cc_transcript_file,omitempty"`
	ChatFile            *bool `json:"chat_file,omitempty"`
	ChatWithSenderEmail *bool `json:"chat_with_sender_email,omitempty"`
	VideoFile           *bool `json:"video_file,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive
// [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive struct {
	Enable   *bool                                                                                `json:"enable,omitempty"`
	Settings *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings `json:"settings,omitempty"`
	Type     *int64                                                                               `json:"type,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum string

const (
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnumLocal AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum = "local"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnumCloud AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum = "cloud"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnumNone  AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum = "none"
)

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIPAddressAccessControl
// Setting to allow cloud recording access only from specific IP address ranges.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIPAddressAccessControl struct {
	Enable              *bool   `json:"enable,omitempty"`
	IPAddressesOrRanges *string `json:"ip_addresses_or_ranges,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement
// This object represents the minimum password requirements set for recordings via Account Recording Settings.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement struct {
	HaveLetter           *bool  `json:"have_letter,omitempty"`
	HaveNumber           *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter *bool  `json:"have_special_character,omitempty"`
	Length               *int64 `json:"length,omitempty"`
	OnlyAllowNumeric     *bool  `json:"only_allow_numeric,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording
// Account Settings: Recording.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording struct {
	AccountUserAccessRecording                 *bool                                                                                             `json:"account_user_access_recording,omitempty"`
	AllowRecoveryDeletedCloudRecordings        *bool                                                                                             `json:"allow_recovery_deleted_cloud_recordings,omitempty"`
	Archive                                    *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive                      `json:"archive,omitempty"`
	AutoDeleteCmr                              *bool                                                                                             `json:"auto_delete_cmr,omitempty"`
	AutoDeleteCmrDays                          *int64                                                                                            `json:"auto_delete_cmr_days,omitempty"`
	AutoRecording                              *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum            `json:"auto_recording,omitempty"`
	CloudRecording                             *bool                                                                                             `json:"cloud_recording,omitempty"`
	CloudRecordingDownload                     *bool                                                                                             `json:"cloud_recording_download,omitempty"`
	CloudRecordingDownloadHost                 *bool                                                                                             `json:"cloud_recording_download_host,omitempty"`
	HostDeleteCloudRecording                   *bool                                                                                             `json:"host_delete_cloud_recording,omitempty"`
	IPAddressAccessControl                     *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIPAddressAccessControl       `json:"ip_address_access_control,omitempty"`
	LocalRecording                             *bool                                                                                             `json:"local_recording,omitempty"`
	PreventHostAccessRecording                 *bool                                                                                             `json:"prevent_host_access_recording,omitempty"`
	RecordAudioFile                            *bool                                                                                             `json:"record_audio_file,omitempty"`
	RecordGalleryView                          *bool                                                                                             `json:"record_gallery_view,omitempty"`
	RecordSpeakerView                          *bool                                                                                             `json:"record_speaker_view,omitempty"`
	RecordingAudioTranscript                   *bool                                                                                             `json:"recording_audio_transcript,omitempty"`
	RecordingDisclaimer                        *bool                                                                                             `json:"recording_disclaimer,omitempty"`
	RecordingPasswordRequirement               *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement `json:"recording_password_requirement,omitempty"`
	RequiredPasswordForExistingCloudRecordings *bool                                                                                             `json:"required_password_for_existing_cloud_recordings,omitempty"`
	SaveChatText                               *bool                                                                                             `json:"save_chat_text,omitempty"`
	ShowTimestamp                              *bool                                                                                             `json:"show_timestamp,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum string

const (
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnumBoth       AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum = "both"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnumTelephony  AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum = "telephony"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnumVoip       AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum = "voip"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnumThirdParty AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum = "thirdParty"
)

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement
// Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum string

const (
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnumJbhOnly AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = "jbh_only"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnumAll     AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = "all"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnumNone    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = "none"
)

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting
// Account Settings: Schedule Meeting.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting struct {
	AudioType                               *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum                     `json:"audio_type,omitempty"`
	EnforceLogin                            *bool                                                                                                        `json:"enforce_login,omitempty"`
	EnforceLoginDomains                     *string                                                                                                      `json:"enforce_login_domains,omitempty"`
	EnforceLoginWithDomains                 *bool                                                                                                        `json:"enforce_login_with_domains,omitempty"`
	ForcePmiJbhPassword                     *bool                                                                                                        `json:"force_pmi_jbh_password,omitempty"`
	HostVideo                               *bool                                                                                                        `json:"host_video,omitempty"`
	JoinBeforeHost                          *bool                                                                                                        `json:"join_before_host,omitempty"`
	MeetingPasswordRequirement              *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement        `json:"meeting_password_requirement,omitempty"`
	NotStoreMeetingTopic                    *bool                                                                                                        `json:"not_store_meeting_topic,omitempty"`
	ParticipantVideo                        *bool                                                                                                        `json:"participant_video,omitempty"`
	PersonalMeeting                         *bool                                                                                                        `json:"personal_meeting,omitempty"`
	RequirePasswordForInstantMeetings       *bool                                                                                                        `json:"require_password_for_instant_meetings,omitempty"`
	RequirePasswordForPmiMeetings           *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum `json:"require_password_for_pmi_meetings,omitempty"`
	RequirePasswordForScheduledMeetings     *bool                                                                                                        `json:"require_password_for_scheduled_meetings,omitempty"`
	RequirePasswordForSchedulingNewMeetings *bool                                                                                                        `json:"require_password_for_scheduling_new_meetings,omitempty"`
	UsePmiForInstantMeetings                *bool                                                                                                        `json:"use_pmi_for_instant_meetings,omitempty"`
	UsePmiForScheduledMeetings              *bool                                                                                                        `json:"use_pmi_for_scheduled_meetings,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement
// This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	MinimumPasswordLength       *int64 `json:"minimum_password_length,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum string

const (
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnumAll   AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "all"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnumGroup AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "group"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnumRole  AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "role"
	AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnumNone  AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "none"
)

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity
// [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity struct {
	AdminChangeNamePic                   *bool                                                                                           `json:"admin_change_name_pic,omitempty"`
	HideBillingInfo                      *bool                                                                                           `json:"hide_billing_info,omitempty"`
	ImportPhotosFromDevices              *bool                                                                                           `json:"import_photos_from_devices,omitempty"`
	PasswordRequirement                  *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement         `json:"password_requirement,omitempty"`
	SignAgainPeriodForInactivityOnClient *int64                                                                                          `json:"sign_again_period_for_inactivity_on_client,omitempty"`
	SignAgainPeriodForInactivityOnWeb    *int64                                                                                          `json:"sign_again_period_for_inactivity_on_web,omitempty"`
	SignInWithTwoFactorAuth              *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum `json:"sign_in_with_two_factor_auth,omitempty"`
	SignInWithTwoFactorAuthGroups        []string                                                                                        `json:"sign_in_with_two_factor_auth_groups,omitempty"`
	SignInWithTwoFactorAuthRoles         []string                                                                                        `json:"sign_in_with_two_factor_auth_roles,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions
// Indicates where most of the participants call into or call from duriing a meeting.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions struct {
	SelectionValues []string `json:"selection_values,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony
// Account Settings Update: Telephony.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony struct {
	AudioConferenceInfo *string                                                                               `json:"audio_conference_info,omitempty"`
	TelephonyRegions    *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions `json:"telephony_regions,omitempty"`
	ThirdPartyAudio     *bool                                                                                 `json:"third_party_audio,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp
// Account Settings: TSP.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp struct {
	CallOut                      *bool         `json:"call_out,omitempty"`
	CallOutCountries             []interface{} `json:"call_out_countries,omitempty"`
	DisplayTollFreeNumbers       *bool         `json:"display_toll_free_numbers,omitempty"`
	ShowInternationalNumbersLink *bool         `json:"show_international_numbers_link,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms
// Account Settings: Zoom Rooms.
type AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms struct {
	AutoStartStopScheduledMeetings *bool `json:"auto_start_stop_scheduled_meetings,omitempty"`
	CmrForInstantMeeting           *bool `json:"cmr_for_instant_meeting,omitempty"`
	ForcePrivateMeeting            *bool `json:"force_private_meeting,omitempty"`
	HideHostInformation            *bool `json:"hide_host_information,omitempty"`
	ListMeetingsWithCalendar       *bool `json:"list_meetings_with_calendar,omitempty"`
	StartAirplayManually           *bool `json:"start_airplay_manually,omitempty"`
	Ultrasonic                     *bool `json:"ultrasonic,omitempty"`
	UpcomingMeetingAlert           *bool `json:"upcoming_meeting_alert,omitempty"`
	WeeklySystemRestart            *bool `json:"weekly_system_restart,omitempty"`
	ZrPostMeetingFeedback          *bool `json:"zr_post_meeting_feedback,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataUpdateAccountSettings struct {
	EmailNotification *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification `multipartForm:"name=email_notification,json"`
	Feature           *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature           `multipartForm:"name=feature,json"`
	InMeeting         *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting         `multipartForm:"name=in_meeting,json"`
	Integration       *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration       `multipartForm:"name=integration,json"`
	Profile           *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile           `multipartForm:"name=profile,json"`
	Recording         *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording         `multipartForm:"name=recording,json"`
	ScheduleMeeting   *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting   `multipartForm:"name=schedule_meeting,json"`
	Security          *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity          `multipartForm:"name=security,json"`
	Telephony         *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony         `multipartForm:"name=telephony,json"`
	Tsp               *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp               `multipartForm:"name=tsp,json"`
	ZoomRooms         *AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms         `multipartForm:"name=zoom_rooms,json"`
}

type AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum string

const (
	AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumEnhancedEncryption AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "enhanced_encryption"
	AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumE2ee               AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "e2ee"
)

// AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
// Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

// AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
// Specify the settings to be applied if waiting room is enabled.
type AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings struct {
	ParticipantsToPlaceInWaitingRoom            *int64  `json:"participants_to_place_in_waiting_room,omitempty"`
	UsersWhoCanAdmitParticipantsFromWaitingRoom *int64  `json:"users_who_can_admit_participants_from_waiting_room,omitempty"`
	WhitelistedDomainsForWaitingRoom            *string `json:"whitelisted_domains_for_waiting_room,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity struct {
	AutoSecurity                       *bool                                                                                                          `json:"auto_security,omitempty"`
	EmbedPasswordInJoinLink            *bool                                                                                                          `json:"embed_password_in_join_link,omitempty"`
	EncryptionType                     *AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum         `json:"encryption_type,omitempty"`
	EndToEndEncryptedMeetings          *bool                                                                                                          `json:"end_to_end_encrypted_meetings,omitempty"`
	MeetingPassword                    *bool                                                                                                          `json:"meeting_password,omitempty"`
	MeetingPasswordRequirement         *AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement `json:"meeting_password_requirement,omitempty"`
	PhonePassword                      *bool                                                                                                          `json:"phone_password,omitempty"`
	PmiPassword                        *bool                                                                                                          `json:"pmi_password,omitempty"`
	RequirePasswordForScheduledMeeting *bool                                                                                                          `json:"require_password_for_scheduled_meeting,omitempty"`
	RequirePasswordForScheduledWebinar *bool                                                                                                          `json:"require_password_for_scheduled_webinar,omitempty"`
	WaitingRoom                        *bool                                                                                                          `json:"waiting_room,omitempty"`
	WaitingRoomSettings                *AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings        `json:"waiting_room_settings,omitempty"`
	WebinarPassword                    *bool                                                                                                          `json:"webinar_password,omitempty"`
}

type AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings struct {
	MeetingSecurity *AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity `multipartForm:"name=meeting_security,json"`
}

type AccountSettingsUpdateRequests struct {
	OneOf  *interface{} `request:"mediaType=application/json"`
	OneOf1 *interface{} `request:"mediaType=multipart/form-data"`
}

type AccountSettingsUpdateRequest struct {
	PathParams  AccountSettingsUpdatePathParams
	QueryParams AccountSettingsUpdateQueryParams
	Request     AccountSettingsUpdateRequests
}

type AccountSettingsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
