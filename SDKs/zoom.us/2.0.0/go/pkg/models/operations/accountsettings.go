package operations

type AccountSettingsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AccountSettingsOptionEnum string

const (
	AccountSettingsOptionEnumMeetingAuthentication   AccountSettingsOptionEnum = "meeting_authentication"
	AccountSettingsOptionEnumRecordingAuthentication AccountSettingsOptionEnum = "recording_authentication"
)

type AccountSettingsQueryParams struct {
	CustomQueryFields *string                    `queryParam:"style=form,explode=true,name=custom_query_fields"`
	Option            *AccountSettingsOptionEnum `queryParam:"style=form,explode=true,name=option"`
}

type AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum string

const (
	AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumEnhancedEncryption AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "enhanced_encryption"
	AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumE2ee               AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "e2ee"
)

// AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
// Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

// AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
// Specify the settings to be applied if waiting room is enabled.
type AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings struct {
	ParticipantsToPlaceInWaitingRoom            *int64  `json:"participants_to_place_in_waiting_room,omitempty"`
	UsersWhoCanAdmitParticipantsFromWaitingRoom *int64  `json:"users_who_can_admit_participants_from_waiting_room,omitempty"`
	WhitelistedDomainsForWaitingRoom            *string `json:"whitelisted_domains_for_waiting_room,omitempty"`
}

type AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity struct {
	AutoSecurity                       *bool                                                                                                     `json:"auto_security,omitempty"`
	EmbedPasswordInJoinLink            *bool                                                                                                     `json:"embed_password_in_join_link,omitempty"`
	EncryptionType                     *AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum         `json:"encryption_type,omitempty"`
	EndToEndEncryptedMeetings          *bool                                                                                                     `json:"end_to_end_encrypted_meetings,omitempty"`
	MeetingPassword                    *bool                                                                                                     `json:"meeting_password,omitempty"`
	MeetingPasswordRequirement         *AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement `json:"meeting_password_requirement,omitempty"`
	PhonePassword                      *bool                                                                                                     `json:"phone_password,omitempty"`
	PmiPassword                        *bool                                                                                                     `json:"pmi_password,omitempty"`
	RequirePasswordForScheduledMeeting *bool                                                                                                     `json:"require_password_for_scheduled_meeting,omitempty"`
	RequirePasswordForScheduledWebinar *bool                                                                                                     `json:"require_password_for_scheduled_webinar,omitempty"`
	WaitingRoom                        *bool                                                                                                     `json:"waiting_room,omitempty"`
	WaitingRoomSettings                *AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings        `json:"waiting_room_settings,omitempty"`
	WebinarPassword                    *bool                                                                                                     `json:"webinar_password,omitempty"`
}

type AccountSettings200ApplicationJSONMeetingWebinarSecuritySettings struct {
	MeetingSecurity *AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity `json:"meeting_security,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsEmailNotification
// Account Settings: Notification.
type AccountSettings200ApplicationJSONAccountSettingsEmailNotification struct {
	AlternativeHostReminder         *bool `json:"alternative_host_reminder,omitempty"`
	CancelMeetingReminder           *bool `json:"cancel_meeting_reminder,omitempty"`
	CloudRecordingAvaliableReminder *bool `json:"cloud_recording_avaliable_reminder,omitempty"`
	JbhReminder                     *bool `json:"jbh_reminder,omitempty"`
	LowHostCountReminder            *bool `json:"low_host_count_reminder,omitempty"`
	ScheduleForReminder             *bool `json:"schedule_for_reminder,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsFeature
// Account Settings: Feature.
type AccountSettings200ApplicationJSONAccountSettingsFeature struct {
	MeetingCapacity *int64 `json:"meeting_capacity,omitempty"`
}

type AccountSettings200ApplicationJSONAccountSettingsInMeetingEntryExitChimeEnum string

const (
	AccountSettings200ApplicationJSONAccountSettingsInMeetingEntryExitChimeEnumHost AccountSettings200ApplicationJSONAccountSettingsInMeetingEntryExitChimeEnum = "host"
	AccountSettings200ApplicationJSONAccountSettingsInMeetingEntryExitChimeEnumAll  AccountSettings200ApplicationJSONAccountSettingsInMeetingEntryExitChimeEnum = "all"
	AccountSettings200ApplicationJSONAccountSettingsInMeetingEntryExitChimeEnumNone AccountSettings200ApplicationJSONAccountSettingsInMeetingEntryExitChimeEnum = "none"
)

type AccountSettings200ApplicationJSONAccountSettingsInMeetingVirtualBackgroundSettingsFiles struct {
	ID        *string `json:"id,omitempty"`
	IsDefault *bool   `json:"is_default,omitempty"`
	Name      *string `json:"name,omitempty"`
	Size      *string `json:"size,omitempty"`
	Type      *string `json:"type,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsInMeetingVirtualBackgroundSettings
// Settings to manage virtual background.
type AccountSettings200ApplicationJSONAccountSettingsInMeetingVirtualBackgroundSettings struct {
	AllowUploadCustom *bool                                                                                     `json:"allow_upload_custom,omitempty"`
	AllowVideos       *bool                                                                                     `json:"allow_videos,omitempty"`
	Enable            *bool                                                                                     `json:"enable,omitempty"`
	Files             []AccountSettings200ApplicationJSONAccountSettingsInMeetingVirtualBackgroundSettingsFiles `json:"files,omitempty"`
}

type AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenEnum string

const (
	AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenEnumHost AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenEnum = "host"
	AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenEnumAll  AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenEnum = "all"
)

type AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum string

const (
	AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumHost AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "host"
	AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumAll  AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "all"
)

// AccountSettings200ApplicationJSONAccountSettingsInMeeting
// Account Settings: In Meeting.
type AccountSettings200ApplicationJSONAccountSettingsInMeeting struct {
	AlertGuestJoin                        *bool                                                                                               `json:"alert_guest_join,omitempty"`
	AllowLiveStreaming                    *bool                                                                                               `json:"allow_live_streaming,omitempty"`
	AllowParticipantsToRename             *bool                                                                                               `json:"allow_participants_to_rename,omitempty"`
	AllowShowZoomWindows                  *bool                                                                                               `json:"allow_show_zoom_windows,omitempty"`
	Annotation                            *bool                                                                                               `json:"annotation,omitempty"`
	AnonymousQuestionAnswer               *bool                                                                                               `json:"anonymous_question_answer,omitempty"`
	AttendeeOnHold                        *bool                                                                                               `json:"attendee_on_hold,omitempty"`
	AutoAnswer                            *bool                                                                                               `json:"auto_answer,omitempty"`
	AutoSavingChat                        *bool                                                                                               `json:"auto_saving_chat,omitempty"`
	BreakoutRoom                          *bool                                                                                               `json:"breakout_room,omitempty"`
	Chat                                  *bool                                                                                               `json:"chat,omitempty"`
	ClosedCaption                         *bool                                                                                               `json:"closed_caption,omitempty"`
	CoHost                                *bool                                                                                               `json:"co_host,omitempty"`
	CustomDataCenterRegions               *bool                                                                                               `json:"custom_data_center_regions,omitempty"`
	CustomLiveStreamingService            *bool                                                                                               `json:"custom_live_streaming_service,omitempty"`
	CustomServiceInstructions             *string                                                                                             `json:"custom_service_instructions,omitempty"`
	DataCenterRegions                     []string                                                                                            `json:"data_center_regions,omitempty"`
	DscpAudio                             *int64                                                                                              `json:"dscp_audio,omitempty"`
	DscpMarking                           *bool                                                                                               `json:"dscp_marking,omitempty"`
	DscpVideo                             *int64                                                                                              `json:"dscp_video,omitempty"`
	E2eEncryption                         *bool                                                                                               `json:"e2e_encryption,omitempty"`
	EntryExitChime                        *AccountSettings200ApplicationJSONAccountSettingsInMeetingEntryExitChimeEnum                        `json:"entry_exit_chime,omitempty"`
	FarEndCameraControl                   *bool                                                                                               `json:"far_end_camera_control,omitempty"`
	Feedback                              *bool                                                                                               `json:"feedback,omitempty"`
	FileTransfer                          *bool                                                                                               `json:"file_transfer,omitempty"`
	GroupHd                               *bool                                                                                               `json:"group_hd,omitempty"`
	MeetingReactions                      *bool                                                                                               `json:"meeting_reactions,omitempty"`
	OriginalAudio                         *bool                                                                                               `json:"original_audio,omitempty"`
	P2pConnetion                          *bool                                                                                               `json:"p2p_connetion,omitempty"`
	P2pPorts                              *bool                                                                                               `json:"p2p_ports,omitempty"`
	Polling                               *bool                                                                                               `json:"polling,omitempty"`
	PortsRange                            *string                                                                                             `json:"ports_range,omitempty"`
	PostMeetingFeedback                   *bool                                                                                               `json:"post_meeting_feedback,omitempty"`
	PrivateChat                           *bool                                                                                               `json:"private_chat,omitempty"`
	RecordPlayOwnVoice                    *bool                                                                                               `json:"record_play_own_voice,omitempty"`
	RemoteControl                         *bool                                                                                               `json:"remote_control,omitempty"`
	RequestPermissionToUnmute             *bool                                                                                               `json:"request_permission_to_unmute,omitempty"`
	ScreenSharing                         *bool                                                                                               `json:"screen_sharing,omitempty"`
	SendingDefaultEmailInvites            *bool                                                                                               `json:"sending_default_email_invites,omitempty"`
	ShowAJoinFromYourBrowserLink          *bool                                                                                               `json:"show_a_join_from_your_browser_link,omitempty"`
	ShowMeetingControlToolbar             *bool                                                                                               `json:"show_meeting_control_toolbar,omitempty"`
	StereoAudio                           *bool                                                                                               `json:"stereo_audio,omitempty"`
	UseHTMLFormatEmail                    *bool                                                                                               `json:"use_html_format_email,omitempty"`
	VirtualBackground                     *bool                                                                                               `json:"virtual_background,omitempty"`
	VirtualBackgroundSettings             *AccountSettings200ApplicationJSONAccountSettingsInMeetingVirtualBackgroundSettings                 `json:"virtual_background_settings,omitempty"`
	Watermark                             *bool                                                                                               `json:"watermark,omitempty"`
	WebinarQuestionAnswer                 *bool                                                                                               `json:"webinar_question_answer,omitempty"`
	Whiteboard                            *bool                                                                                               `json:"whiteboard,omitempty"`
	WhoCanShareScreen                     *AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenEnum                     `json:"who_can_share_screen,omitempty"`
	WhoCanShareScreenWhenSomeoneIsSharing *AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum `json:"who_can_share_screen_when_someone_is_sharing,omitempty"`
	WorkplaceByFacebook                   *bool                                                                                               `json:"workplace_by_facebook,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsIntegration
// Account Settings: Integration.
type AccountSettings200ApplicationJSONAccountSettingsIntegration struct {
	Box               *bool `json:"box,omitempty"`
	Dropbox           *bool `json:"dropbox,omitempty"`
	GoogleCalendar    *bool `json:"google_calendar,omitempty"`
	GoogleDrive       *bool `json:"google_drive,omitempty"`
	Kubi              *bool `json:"kubi,omitempty"`
	MicrosoftOneDrive *bool `json:"microsoft_one_drive,omitempty"`
}

type AccountSettings200ApplicationJSONAccountSettingsProfileRecordingStorageLocation struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	Value         *string  `json:"value,omitempty"`
}

type AccountSettings200ApplicationJSONAccountSettingsProfile struct {
	RecordingStorageLocation *AccountSettings200ApplicationJSONAccountSettingsProfileRecordingStorageLocation `json:"recording_storage_location,omitempty"`
}

type AccountSettings200ApplicationJSONAccountSettingsRecordingArchiveSettings struct {
	AudioFile           *bool `json:"audio_file,omitempty"`
	CcTranscriptFile    *bool `json:"cc_transcript_file,omitempty"`
	ChatFile            *bool `json:"chat_file,omitempty"`
	ChatWithSenderEmail *bool `json:"chat_with_sender_email,omitempty"`
	VideoFile           *bool `json:"video_file,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsRecordingArchive
// [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
type AccountSettings200ApplicationJSONAccountSettingsRecordingArchive struct {
	Enable   *bool                                                                     `json:"enable,omitempty"`
	Settings *AccountSettings200ApplicationJSONAccountSettingsRecordingArchiveSettings `json:"settings,omitempty"`
	Type     *int64                                                                    `json:"type,omitempty"`
}

type AccountSettings200ApplicationJSONAccountSettingsRecordingAutoRecordingEnum string

const (
	AccountSettings200ApplicationJSONAccountSettingsRecordingAutoRecordingEnumLocal AccountSettings200ApplicationJSONAccountSettingsRecordingAutoRecordingEnum = "local"
	AccountSettings200ApplicationJSONAccountSettingsRecordingAutoRecordingEnumCloud AccountSettings200ApplicationJSONAccountSettingsRecordingAutoRecordingEnum = "cloud"
	AccountSettings200ApplicationJSONAccountSettingsRecordingAutoRecordingEnumNone  AccountSettings200ApplicationJSONAccountSettingsRecordingAutoRecordingEnum = "none"
)

// AccountSettings200ApplicationJSONAccountSettingsRecordingIPAddressAccessControl
// Setting to allow cloud recording access only from specific IP address ranges.
type AccountSettings200ApplicationJSONAccountSettingsRecordingIPAddressAccessControl struct {
	Enable              *bool   `json:"enable,omitempty"`
	IPAddressesOrRanges *string `json:"ip_addresses_or_ranges,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsRecordingRecordingPasswordRequirement
// This object represents the minimum password requirements set for recordings via Account Recording Settings.
type AccountSettings200ApplicationJSONAccountSettingsRecordingRecordingPasswordRequirement struct {
	HaveLetter           *bool  `json:"have_letter,omitempty"`
	HaveNumber           *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter *bool  `json:"have_special_character,omitempty"`
	Length               *int64 `json:"length,omitempty"`
	OnlyAllowNumeric     *bool  `json:"only_allow_numeric,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsRecording
// Account Settings: Recording.
type AccountSettings200ApplicationJSONAccountSettingsRecording struct {
	AccountUserAccessRecording                 *bool                                                                                  `json:"account_user_access_recording,omitempty"`
	AllowRecoveryDeletedCloudRecordings        *bool                                                                                  `json:"allow_recovery_deleted_cloud_recordings,omitempty"`
	Archive                                    *AccountSettings200ApplicationJSONAccountSettingsRecordingArchive                      `json:"archive,omitempty"`
	AutoDeleteCmr                              *bool                                                                                  `json:"auto_delete_cmr,omitempty"`
	AutoDeleteCmrDays                          *int64                                                                                 `json:"auto_delete_cmr_days,omitempty"`
	AutoRecording                              *AccountSettings200ApplicationJSONAccountSettingsRecordingAutoRecordingEnum            `json:"auto_recording,omitempty"`
	CloudRecording                             *bool                                                                                  `json:"cloud_recording,omitempty"`
	CloudRecordingDownload                     *bool                                                                                  `json:"cloud_recording_download,omitempty"`
	CloudRecordingDownloadHost                 *bool                                                                                  `json:"cloud_recording_download_host,omitempty"`
	HostDeleteCloudRecording                   *bool                                                                                  `json:"host_delete_cloud_recording,omitempty"`
	IPAddressAccessControl                     *AccountSettings200ApplicationJSONAccountSettingsRecordingIPAddressAccessControl       `json:"ip_address_access_control,omitempty"`
	LocalRecording                             *bool                                                                                  `json:"local_recording,omitempty"`
	PreventHostAccessRecording                 *bool                                                                                  `json:"prevent_host_access_recording,omitempty"`
	RecordAudioFile                            *bool                                                                                  `json:"record_audio_file,omitempty"`
	RecordGalleryView                          *bool                                                                                  `json:"record_gallery_view,omitempty"`
	RecordSpeakerView                          *bool                                                                                  `json:"record_speaker_view,omitempty"`
	RecordingAudioTranscript                   *bool                                                                                  `json:"recording_audio_transcript,omitempty"`
	RecordingDisclaimer                        *bool                                                                                  `json:"recording_disclaimer,omitempty"`
	RecordingPasswordRequirement               *AccountSettings200ApplicationJSONAccountSettingsRecordingRecordingPasswordRequirement `json:"recording_password_requirement,omitempty"`
	RequiredPasswordForExistingCloudRecordings *bool                                                                                  `json:"required_password_for_existing_cloud_recordings,omitempty"`
	SaveChatText                               *bool                                                                                  `json:"save_chat_text,omitempty"`
	ShowTimestamp                              *bool                                                                                  `json:"show_timestamp,omitempty"`
}

type AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnum string

const (
	AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnumBoth       AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnum = "both"
	AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnumTelephony  AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnum = "telephony"
	AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnumVoip       AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnum = "voip"
	AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnumThirdParty AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnum = "thirdParty"
)

// AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingMeetingPasswordRequirement
// Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

type AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum string

const (
	AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnumJbhOnly AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = "jbh_only"
	AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnumAll     AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = "all"
	AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnumNone    AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = "none"
)

// AccountSettings200ApplicationJSONAccountSettingsScheduleMeeting
// Account Settings: Schedule Meeting.
type AccountSettings200ApplicationJSONAccountSettingsScheduleMeeting struct {
	AudioType                               *AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnum                     `json:"audio_type,omitempty"`
	EnforceLogin                            *bool                                                                                             `json:"enforce_login,omitempty"`
	EnforceLoginDomains                     *string                                                                                           `json:"enforce_login_domains,omitempty"`
	EnforceLoginWithDomains                 *bool                                                                                             `json:"enforce_login_with_domains,omitempty"`
	ForcePmiJbhPassword                     *bool                                                                                             `json:"force_pmi_jbh_password,omitempty"`
	HostVideo                               *bool                                                                                             `json:"host_video,omitempty"`
	JoinBeforeHost                          *bool                                                                                             `json:"join_before_host,omitempty"`
	MeetingPasswordRequirement              *AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingMeetingPasswordRequirement        `json:"meeting_password_requirement,omitempty"`
	NotStoreMeetingTopic                    *bool                                                                                             `json:"not_store_meeting_topic,omitempty"`
	ParticipantVideo                        *bool                                                                                             `json:"participant_video,omitempty"`
	PersonalMeeting                         *bool                                                                                             `json:"personal_meeting,omitempty"`
	RequirePasswordForInstantMeetings       *bool                                                                                             `json:"require_password_for_instant_meetings,omitempty"`
	RequirePasswordForPmiMeetings           *AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum `json:"require_password_for_pmi_meetings,omitempty"`
	RequirePasswordForScheduledMeetings     *bool                                                                                             `json:"require_password_for_scheduled_meetings,omitempty"`
	RequirePasswordForSchedulingNewMeetings *bool                                                                                             `json:"require_password_for_scheduling_new_meetings,omitempty"`
	UsePmiForInstantMeetings                *bool                                                                                             `json:"use_pmi_for_instant_meetings,omitempty"`
	UsePmiForScheduledMeetings              *bool                                                                                             `json:"use_pmi_for_scheduled_meetings,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsSecurityPasswordRequirement
// This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
type AccountSettings200ApplicationJSONAccountSettingsSecurityPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	MinimumPasswordLength       *int64 `json:"minimum_password_length,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

type AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnum string

const (
	AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnumAll   AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "all"
	AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnumGroup AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "group"
	AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnumRole  AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "role"
	AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnumNone  AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnum = "none"
)

// AccountSettings200ApplicationJSONAccountSettingsSecurity
// [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
type AccountSettings200ApplicationJSONAccountSettingsSecurity struct {
	AdminChangeNamePic                   *bool                                                                                `json:"admin_change_name_pic,omitempty"`
	HideBillingInfo                      *bool                                                                                `json:"hide_billing_info,omitempty"`
	ImportPhotosFromDevices              *bool                                                                                `json:"import_photos_from_devices,omitempty"`
	PasswordRequirement                  *AccountSettings200ApplicationJSONAccountSettingsSecurityPasswordRequirement         `json:"password_requirement,omitempty"`
	SignAgainPeriodForInactivityOnClient *int64                                                                               `json:"sign_again_period_for_inactivity_on_client,omitempty"`
	SignAgainPeriodForInactivityOnWeb    *int64                                                                               `json:"sign_again_period_for_inactivity_on_web,omitempty"`
	SignInWithTwoFactorAuth              *AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnum `json:"sign_in_with_two_factor_auth,omitempty"`
	SignInWithTwoFactorAuthGroups        []string                                                                             `json:"sign_in_with_two_factor_auth_groups,omitempty"`
	SignInWithTwoFactorAuthRoles         []string                                                                             `json:"sign_in_with_two_factor_auth_roles,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsTelephonyTelephonyRegions
// Indicates where most of the participants call into or call from duriing a meeting.
type AccountSettings200ApplicationJSONAccountSettingsTelephonyTelephonyRegions struct {
	AllowedValues   []string `json:"allowed_values,omitempty"`
	SelectionValues []string `json:"selection_values,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsTelephony
// Account Settings: Telephony.
type AccountSettings200ApplicationJSONAccountSettingsTelephony struct {
	AudioConferenceInfo *string                                                                    `json:"audio_conference_info,omitempty"`
	TelephonyRegions    *AccountSettings200ApplicationJSONAccountSettingsTelephonyTelephonyRegions `json:"telephony_regions,omitempty"`
	ThirdPartyAudio     *bool                                                                      `json:"third_party_audio,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsTsp
// Account Settings: TSP.
type AccountSettings200ApplicationJSONAccountSettingsTsp struct {
	CallOut                      *bool         `json:"call_out,omitempty"`
	CallOutCountries             []interface{} `json:"call_out_countries,omitempty"`
	DisplayTollFreeNumbers       *bool         `json:"display_toll_free_numbers,omitempty"`
	ShowInternationalNumbersLink *bool         `json:"show_international_numbers_link,omitempty"`
}

// AccountSettings200ApplicationJSONAccountSettingsZoomRooms
// Account Settings: Zoom Rooms.
type AccountSettings200ApplicationJSONAccountSettingsZoomRooms struct {
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

type AccountSettings200ApplicationJSONAccountSettings struct {
	EmailNotification *AccountSettings200ApplicationJSONAccountSettingsEmailNotification `json:"email_notification,omitempty"`
	Feature           *AccountSettings200ApplicationJSONAccountSettingsFeature           `json:"feature,omitempty"`
	InMeeting         *AccountSettings200ApplicationJSONAccountSettingsInMeeting         `json:"in_meeting,omitempty"`
	Integration       *AccountSettings200ApplicationJSONAccountSettingsIntegration       `json:"integration,omitempty"`
	Profile           *AccountSettings200ApplicationJSONAccountSettingsProfile           `json:"profile,omitempty"`
	Recording         *AccountSettings200ApplicationJSONAccountSettingsRecording         `json:"recording,omitempty"`
	ScheduleMeeting   *AccountSettings200ApplicationJSONAccountSettingsScheduleMeeting   `json:"schedule_meeting,omitempty"`
	Security          *AccountSettings200ApplicationJSONAccountSettingsSecurity          `json:"security,omitempty"`
	Telephony         *AccountSettings200ApplicationJSONAccountSettingsTelephony         `json:"telephony,omitempty"`
	Tsp               *AccountSettings200ApplicationJSONAccountSettingsTsp               `json:"tsp,omitempty"`
	ZoomRooms         *AccountSettings200ApplicationJSONAccountSettingsZoomRooms         `json:"zoom_rooms,omitempty"`
}

// AccountSettings200ApplicationJSON4PasswordRequirement
// This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
type AccountSettings200ApplicationJSON4PasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	MinimumPasswordLength       *int64 `json:"minimum_password_length,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

type AccountSettings200ApplicationJSON4SignInWithTwoFactorAuthEnum string

const (
	AccountSettings200ApplicationJSON4SignInWithTwoFactorAuthEnumAll   AccountSettings200ApplicationJSON4SignInWithTwoFactorAuthEnum = "all"
	AccountSettings200ApplicationJSON4SignInWithTwoFactorAuthEnumGroup AccountSettings200ApplicationJSON4SignInWithTwoFactorAuthEnum = "group"
	AccountSettings200ApplicationJSON4SignInWithTwoFactorAuthEnumRole  AccountSettings200ApplicationJSON4SignInWithTwoFactorAuthEnum = "role"
	AccountSettings200ApplicationJSON4SignInWithTwoFactorAuthEnumNone  AccountSettings200ApplicationJSON4SignInWithTwoFactorAuthEnum = "none"
)

// AccountSettings200ApplicationJSON4
// [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
type AccountSettings200ApplicationJSON4 struct {
	AdminChangeNamePic                   *bool                                                          `json:"admin_change_name_pic,omitempty"`
	HideBillingInfo                      *bool                                                          `json:"hide_billing_info,omitempty"`
	ImportPhotosFromDevices              *bool                                                          `json:"import_photos_from_devices,omitempty"`
	PasswordRequirement                  *AccountSettings200ApplicationJSON4PasswordRequirement         `json:"password_requirement,omitempty"`
	SignAgainPeriodForInactivityOnClient *int64                                                         `json:"sign_again_period_for_inactivity_on_client,omitempty"`
	SignAgainPeriodForInactivityOnWeb    *int64                                                         `json:"sign_again_period_for_inactivity_on_web,omitempty"`
	SignInWithTwoFactorAuth              *AccountSettings200ApplicationJSON4SignInWithTwoFactorAuthEnum `json:"sign_in_with_two_factor_auth,omitempty"`
	SignInWithTwoFactorAuthGroups        []string                                                       `json:"sign_in_with_two_factor_auth_groups,omitempty"`
	SignInWithTwoFactorAuthRoles         []string                                                       `json:"sign_in_with_two_factor_auth_roles,omitempty"`
}

type AccountSettingsRequest struct {
	PathParams  AccountSettingsPathParams
	QueryParams AccountSettingsQueryParams
}

type AccountSettingsResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	AccountSettings200ApplicationJSONOneOf *interface{}
}
