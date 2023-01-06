package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupSettingsPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type GetGroupSettingsOptionEnum string

const (
	GetGroupSettingsOptionEnumMeetingAuthentication   GetGroupSettingsOptionEnum = "meeting_authentication"
	GetGroupSettingsOptionEnumRecordingAuthentication GetGroupSettingsOptionEnum = "recording_authentication"
)

type GetGroupSettingsQueryParams struct {
	CustomQueryFields *string                     `queryParam:"style=form,explode=true,name=custom_query_fields"`
	Option            *GetGroupSettingsOptionEnum `queryParam:"style=form,explode=true,name=option"`
}

type GetGroupSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetGroupSettings200ApplicationJSON1EmailNotification struct {
	AlternativeHostReminder         *bool `json:"alternative_host_reminder,omitempty"`
	CancelMeetingReminder           *bool `json:"cancel_meeting_reminder,omitempty"`
	CloudRecordingAvailableReminder *bool `json:"cloud_recording_available_reminder,omitempty"`
	JbhReminder                     *bool `json:"jbh_reminder,omitempty"`
	ScheduleForHostReminder         *bool `json:"schedule_for_host_reminder,omitempty"`
}

type GetGroupSettings200ApplicationJSON1InMeetingVirtualBackgroundSettingsFiles struct {
	ID        *string `json:"id,omitempty"`
	IsDefault *bool   `json:"is_default,omitempty"`
	Name      *string `json:"name,omitempty"`
	Size      *string `json:"size,omitempty"`
	Type      *string `json:"type,omitempty"`
}

// GetGroupSettings200ApplicationJSON1InMeetingVirtualBackgroundSettings
// Settings to manage virtual background.
type GetGroupSettings200ApplicationJSON1InMeetingVirtualBackgroundSettings struct {
	AllowUploadCustom *bool                                                                        `json:"allow_upload_custom,omitempty"`
	AllowVideos       *bool                                                                        `json:"allow_videos,omitempty"`
	Enable            *bool                                                                        `json:"enable,omitempty"`
	Files             []GetGroupSettings200ApplicationJSON1InMeetingVirtualBackgroundSettingsFiles `json:"files,omitempty"`
}

type GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenEnum string

const (
	GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenEnumHost GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenEnum = "host"
	GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenEnumAll  GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenEnum = "all"
)

type GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum string

const (
	GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumHost GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "host"
	GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumAll  GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "all"
)

type GetGroupSettings200ApplicationJSON1InMeeting struct {
	AlertGuestJoin                        *bool                                                                                  `json:"alert_guest_join,omitempty"`
	AllowShowZoomWindows                  *bool                                                                                  `json:"allow_show_zoom_windows,omitempty"`
	Annotation                            *bool                                                                                  `json:"annotation,omitempty"`
	AttendeeOnHold                        *bool                                                                                  `json:"attendee_on_hold,omitempty"`
	AutoAnswer                            *bool                                                                                  `json:"auto_answer,omitempty"`
	AutoSavingChat                        *bool                                                                                  `json:"auto_saving_chat,omitempty"`
	BreakoutRoom                          *bool                                                                                  `json:"breakout_room,omitempty"`
	Chat                                  *bool                                                                                  `json:"chat,omitempty"`
	ClosedCaption                         *bool                                                                                  `json:"closed_caption,omitempty"`
	CoHost                                *bool                                                                                  `json:"co_host,omitempty"`
	CustomDataCenterRegions               *bool                                                                                  `json:"custom_data_center_regions,omitempty"`
	DataCenterRegions                     []string                                                                               `json:"data_center_regions,omitempty"`
	E2eEncryption                         *bool                                                                                  `json:"e2e_encryption,omitempty"`
	EntryExitChime                        *string                                                                                `json:"entry_exit_chime,omitempty"`
	FarEndCameraControl                   *bool                                                                                  `json:"far_end_camera_control,omitempty"`
	Feedback                              *bool                                                                                  `json:"feedback,omitempty"`
	FileTransfer                          *bool                                                                                  `json:"file_transfer,omitempty"`
	GroupHd                               *bool                                                                                  `json:"group_hd,omitempty"`
	NonVerbalFeedback                     *bool                                                                                  `json:"non_verbal_feedback,omitempty"`
	OnlyHostViewDeviceList                *bool                                                                                  `json:"only_host_view_device_list,omitempty"`
	OriginalAudio                         *bool                                                                                  `json:"original_audio,omitempty"`
	Polling                               *bool                                                                                  `json:"polling,omitempty"`
	PostMeetingFeedback                   *bool                                                                                  `json:"post_meeting_feedback,omitempty"`
	PrivateChat                           *bool                                                                                  `json:"private_chat,omitempty"`
	RecordPlayOwnVoice                    *bool                                                                                  `json:"record_play_own_voice,omitempty"`
	RemoteControl                         *bool                                                                                  `json:"remote_control,omitempty"`
	RemoteSupport                         *bool                                                                                  `json:"remote_support,omitempty"`
	RequestPermissionToUnmute             *bool                                                                                  `json:"request_permission_to_unmute,omitempty"`
	ScreenSharing                         *bool                                                                                  `json:"screen_sharing,omitempty"`
	SendingDefaultEmailInvites            *bool                                                                                  `json:"sending_default_email_invites,omitempty"`
	ShowBrowserJoinLink                   *bool                                                                                  `json:"show_browser_join_link,omitempty"`
	ShowDeviceList                        *bool                                                                                  `json:"show_device_list,omitempty"`
	ShowMeetingControlToolbar             *bool                                                                                  `json:"show_meeting_control_toolbar,omitempty"`
	StereoAudio                           *bool                                                                                  `json:"stereo_audio,omitempty"`
	UseHTMLFormatEmail                    *bool                                                                                  `json:"use_html_format_email,omitempty"`
	VirtualBackground                     *bool                                                                                  `json:"virtual_background,omitempty"`
	VirtualBackgroundSettings             *GetGroupSettings200ApplicationJSON1InMeetingVirtualBackgroundSettings                 `json:"virtual_background_settings,omitempty"`
	WaitingRoom                           *bool                                                                                  `json:"waiting_room,omitempty"`
	Whiteboard                            *bool                                                                                  `json:"whiteboard,omitempty"`
	WhoCanShareScreen                     *GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenEnum                     `json:"who_can_share_screen,omitempty"`
	WhoCanShareScreenWhenSomeoneIsSharing *GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum `json:"who_can_share_screen_when_someone_is_sharing,omitempty"`
}

type GetGroupSettings200ApplicationJSON1ProfileRecordingStorageLocation struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	Value         *string  `json:"value,omitempty"`
}

type GetGroupSettings200ApplicationJSON1Profile struct {
	RecordingStorageLocation *GetGroupSettings200ApplicationJSON1ProfileRecordingStorageLocation `json:"recording_storage_location,omitempty"`
}

type GetGroupSettings200ApplicationJSON1RecordingArchiveSettings struct {
	AudioFile           *bool `json:"audio_file,omitempty"`
	CcTranscriptFile    *bool `json:"cc_transcript_file,omitempty"`
	ChatFile            *bool `json:"chat_file,omitempty"`
	ChatWithSenderEmail *bool `json:"chat_with_sender_email,omitempty"`
	VideoFile           *bool `json:"video_file,omitempty"`
}

// GetGroupSettings200ApplicationJSON1RecordingArchive
// [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
type GetGroupSettings200ApplicationJSON1RecordingArchive struct {
	Enable   *bool                                                        `json:"enable,omitempty"`
	Settings *GetGroupSettings200ApplicationJSON1RecordingArchiveSettings `json:"settings,omitempty"`
	Type     *int64                                                       `json:"type,omitempty"`
}

// GetGroupSettings200ApplicationJSON1RecordingIPAddressAccessControl
// Setting to allow cloud recording access only from specific IP address ranges.
type GetGroupSettings200ApplicationJSON1RecordingIPAddressAccessControl struct {
	Enable              *bool   `json:"enable,omitempty"`
	IPAddressesOrRanges *string `json:"ip_addresses_or_ranges,omitempty"`
}

type GetGroupSettings200ApplicationJSON1Recording struct {
	AccountUserAccessRecording *bool                                                               `json:"account_user_access_recording,omitempty"`
	Archive                    *GetGroupSettings200ApplicationJSON1RecordingArchive                `json:"archive,omitempty"`
	AutoRecording              *string                                                             `json:"auto_recording,omitempty"`
	CloudRecording             *bool                                                               `json:"cloud_recording,omitempty"`
	CloudRecordingDownload     *bool                                                               `json:"cloud_recording_download,omitempty"`
	CloudRecordingDownloadHost *bool                                                               `json:"cloud_recording_download_host,omitempty"`
	HostDeleteCloudRecording   *bool                                                               `json:"host_delete_cloud_recording,omitempty"`
	IPAddressAccessControl     *GetGroupSettings200ApplicationJSON1RecordingIPAddressAccessControl `json:"ip_address_access_control,omitempty"`
	LocalRecording             *bool                                                               `json:"local_recording,omitempty"`
	PreventHostAccessRecording *bool                                                               `json:"prevent_host_access_recording,omitempty"`
	RecordAudioFile            *bool                                                               `json:"record_audio_file,omitempty"`
	RecordGalleryView          *bool                                                               `json:"record_gallery_view,omitempty"`
	RecordSpeakerView          *bool                                                               `json:"record_speaker_view,omitempty"`
	RecordingAudioTranscript   *bool                                                               `json:"recording_audio_transcript,omitempty"`
	SaveChatText               *bool                                                               `json:"save_chat_text,omitempty"`
	ShowTimestamp              *bool                                                               `json:"show_timestamp,omitempty"`
}

type GetGroupSettings200ApplicationJSON1ScheduleMeetingRequirePasswordForPmiMeetingsEnum string

const (
	GetGroupSettings200ApplicationJSON1ScheduleMeetingRequirePasswordForPmiMeetingsEnumAll     GetGroupSettings200ApplicationJSON1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = "all"
	GetGroupSettings200ApplicationJSON1ScheduleMeetingRequirePasswordForPmiMeetingsEnumJbhOnly GetGroupSettings200ApplicationJSON1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = "jbh_only"
	GetGroupSettings200ApplicationJSON1ScheduleMeetingRequirePasswordForPmiMeetingsEnumNone    GetGroupSettings200ApplicationJSON1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = "none"
)

type GetGroupSettings200ApplicationJSON1ScheduleMeeting struct {
	AudioType                               *string                                                                              `json:"audio_type,omitempty"`
	EmbedPasswordInJoinLink                 *bool                                                                                `json:"embed_password_in_join_link,omitempty"`
	ForcePmiJbhPassword                     *bool                                                                                `json:"force_pmi_jbh_password,omitempty"`
	HostVideo                               *bool                                                                                `json:"host_video,omitempty"`
	JoinBeforeHost                          *bool                                                                                `json:"join_before_host,omitempty"`
	MuteUponEntry                           *bool                                                                                `json:"mute_upon_entry,omitempty"`
	ParticipantVideo                        *bool                                                                                `json:"participant_video,omitempty"`
	PersonalMeeting                         *bool                                                                                `json:"personal_meeting,omitempty"`
	PstnPasswordProtected                   *bool                                                                                `json:"pstn_password_protected,omitempty"`
	RequirePasswordForInstantMeetings       *bool                                                                                `json:"require_password_for_instant_meetings,omitempty"`
	RequirePasswordForPmiMeetings           *GetGroupSettings200ApplicationJSON1ScheduleMeetingRequirePasswordForPmiMeetingsEnum `json:"require_password_for_pmi_meetings,omitempty"`
	RequirePasswordForScheduledMeetings     *bool                                                                                `json:"require_password_for_scheduled_meetings,omitempty"`
	RequirePasswordForSchedulingNewMeetings *bool                                                                                `json:"require_password_for_scheduling_new_meetings,omitempty"`
	UpcomingMeetingReminder                 *bool                                                                                `json:"upcoming_meeting_reminder,omitempty"`
	UsePmiForInstantMeetings                *bool                                                                                `json:"use_pmi_for_instant_meetings,omitempty"`
	UsePmiForScheduleMeetings               *bool                                                                                `json:"use_pmi_for_schedule_meetings,omitempty"`
}

// GetGroupSettings200ApplicationJSON1TelephonyTelephonyRegions
// Indicates where most of the participants call into or call from duriing a meeting.
type GetGroupSettings200ApplicationJSON1TelephonyTelephonyRegions struct {
	SelectionValues []string `json:"selection_values,omitempty"`
}

type GetGroupSettings200ApplicationJSON1Telephony struct {
	AudioConferenceInfo *string                                                       `json:"audio_conference_info,omitempty"`
	TelephonyRegions    *GetGroupSettings200ApplicationJSON1TelephonyTelephonyRegions `json:"telephony_regions,omitempty"`
	ThirdPartyAudio     *bool                                                         `json:"third_party_audio,omitempty"`
}

type GetGroupSettings200ApplicationJSON1 struct {
	EmailNotification *GetGroupSettings200ApplicationJSON1EmailNotification `json:"email_notification,omitempty"`
	InMeeting         *GetGroupSettings200ApplicationJSON1InMeeting         `json:"in_meeting,omitempty"`
	Profile           *GetGroupSettings200ApplicationJSON1Profile           `json:"profile,omitempty"`
	Recording         *GetGroupSettings200ApplicationJSON1Recording         `json:"recording,omitempty"`
	ScheduleMeeting   *GetGroupSettings200ApplicationJSON1ScheduleMeeting   `json:"schedule_meeting,omitempty"`
	Telephony         *GetGroupSettings200ApplicationJSON1Telephony         `json:"telephony,omitempty"`
}

type GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum string

const (
	GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumEnhancedEncryption GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "enhanced_encryption"
	GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumE2ee               GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "e2ee"
)

// GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
// Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

// GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
// Specify the settings to be applied if waiting room is enabled.
type GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings struct {
	ParticipantsToPlaceInWaitingRoom            *int64  `json:"participants_to_place_in_waiting_room,omitempty"`
	UsersWhoCanAdmitParticipantsFromWaitingRoom *int64  `json:"users_who_can_admit_participants_from_waiting_room,omitempty"`
	WhitelistedDomainsForWaitingRoom            *string `json:"whitelisted_domains_for_waiting_room,omitempty"`
}

type GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity struct {
	AutoSecurity                       *bool                                                                                                      `json:"auto_security,omitempty"`
	EmbedPasswordInJoinLink            *bool                                                                                                      `json:"embed_password_in_join_link,omitempty"`
	EncryptionType                     *GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum         `json:"encryption_type,omitempty"`
	EndToEndEncryptedMeetings          *bool                                                                                                      `json:"end_to_end_encrypted_meetings,omitempty"`
	MeetingPassword                    *bool                                                                                                      `json:"meeting_password,omitempty"`
	MeetingPasswordRequirement         *GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement `json:"meeting_password_requirement,omitempty"`
	PhonePassword                      *bool                                                                                                      `json:"phone_password,omitempty"`
	PmiPassword                        *bool                                                                                                      `json:"pmi_password,omitempty"`
	RequirePasswordForScheduledMeeting *bool                                                                                                      `json:"require_password_for_scheduled_meeting,omitempty"`
	RequirePasswordForScheduledWebinar *bool                                                                                                      `json:"require_password_for_scheduled_webinar,omitempty"`
	WaitingRoom                        *bool                                                                                                      `json:"waiting_room,omitempty"`
	WaitingRoomSettings                *GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings        `json:"waiting_room_settings,omitempty"`
	WebinarPassword                    *bool                                                                                                      `json:"webinar_password,omitempty"`
}

type GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettings struct {
	MeetingSecurity *GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity `json:"meeting_security,omitempty"`
}

type GetGroupSettingsRequest struct {
	PathParams  GetGroupSettingsPathParams
	QueryParams GetGroupSettingsQueryParams
	Security    GetGroupSettingsSecurity
}

type GetGroupSettingsResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	GetGroupSettings200ApplicationJSONOneOf *interface{}
}
