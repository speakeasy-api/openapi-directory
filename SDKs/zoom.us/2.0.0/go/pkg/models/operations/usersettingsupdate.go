package operations

import (
	"openapi/pkg/models/shared"
)

type UserSettingsUpdatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserSettingsUpdateOptionEnum string

const (
	UserSettingsUpdateOptionEnumMeetingAuthentication   UserSettingsUpdateOptionEnum = "meeting_authentication"
	UserSettingsUpdateOptionEnumRecordingAuthentication UserSettingsUpdateOptionEnum = "recording_authentication"
	UserSettingsUpdateOptionEnumMeetingSecuirty         UserSettingsUpdateOptionEnum = "meeting_secuirty"
)

type UserSettingsUpdateQueryParams struct {
	Option *UserSettingsUpdateOptionEnum `queryParam:"style=form,explode=true,name=option"`
}

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsNotificationSettings struct {
	AlternativeHostReminder *bool `json:"alternative_host_reminder,omitempty"`
	CancelMeetingReminder   *bool `json:"cancel_meeting_reminder,omitempty"`
	JbhReminder             *bool `json:"jbh_reminder,omitempty"`
	ScheduleForReminder     *bool `json:"schedule_for_reminder,omitempty"`
}

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsFeatureSettings struct {
	LargeMeeting         *bool  `json:"large_meeting,omitempty"`
	LargeMeetingCapacity *int64 `json:"large_meeting_capacity,omitempty"`
	MeetingCapacity      *int64 `json:"meeting_capacity,omitempty"`
	Webinar              *bool  `json:"webinar,omitempty"`
	WebinarCapacity      *int64 `json:"webinar_capacity,omitempty"`
	ZoomPhone            *bool  `json:"zoom_phone,omitempty"`
}

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum string

const (
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnumHost UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = "host"
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnumAll  UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = "all"
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnumNone UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = "none"
)

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles struct {
	ID        *string `json:"id,omitempty"`
	IsDefault *bool   `json:"is_default,omitempty"`
	Name      *string `json:"name,omitempty"`
	Size      *string `json:"size,omitempty"`
	Type      *string `json:"type,omitempty"`
}

// UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
// Settings to manage virtual background.
type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings struct {
	AllowUploadCustom *bool                                                                                                    `json:"allow_upload_custom,omitempty"`
	AllowVideos       *bool                                                                                                    `json:"allow_videos,omitempty"`
	Enable            *bool                                                                                                    `json:"enable,omitempty"`
	Files             []UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles `json:"files,omitempty"`
}

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum string

const (
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnumHost UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = "host"
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnumAll  UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = "all"
)

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum string

const (
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnumHost UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = "host"
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnumAll  UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = "all"
)

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettings struct {
	AllowLiveStreaming                    *bool                                                                                                              `json:"allow_live_streaming,omitempty"`
	Annotation                            *bool                                                                                                              `json:"annotation,omitempty"`
	AttendeeOnHold                        *bool                                                                                                              `json:"attendee_on_hold,omitempty"`
	AutoSavingChat                        *bool                                                                                                              `json:"auto_saving_chat,omitempty"`
	BreakoutRoom                          *bool                                                                                                              `json:"breakout_room,omitempty"`
	Chat                                  *bool                                                                                                              `json:"chat,omitempty"`
	ClosedCaption                         *bool                                                                                                              `json:"closed_caption,omitempty"`
	CoHost                                *bool                                                                                                              `json:"co_host,omitempty"`
	CustomDataCenterRegions               *bool                                                                                                              `json:"custom_data_center_regions,omitempty"`
	CustomLiveStreamingService            *bool                                                                                                              `json:"custom_live_streaming_service,omitempty"`
	CustomServiceInstructions             *string                                                                                                            `json:"custom_service_instructions,omitempty"`
	DataCenterRegions                     []string                                                                                                           `json:"data_center_regions,omitempty"`
	E2eEncryption                         *bool                                                                                                              `json:"e2e_encryption,omitempty"`
	EntryExitChime                        *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum                        `json:"entry_exit_chime,omitempty"`
	FarEndCameraControl                   *bool                                                                                                              `json:"far_end_camera_control,omitempty"`
	Feedback                              *bool                                                                                                              `json:"feedback,omitempty"`
	FileTransfer                          *bool                                                                                                              `json:"file_transfer,omitempty"`
	GroupHd                               *bool                                                                                                              `json:"group_hd,omitempty"`
	NonVerbalFeedback                     *bool                                                                                                              `json:"non_verbal_feedback,omitempty"`
	Polling                               *bool                                                                                                              `json:"polling,omitempty"`
	PrivateChat                           *bool                                                                                                              `json:"private_chat,omitempty"`
	RecordPlayVoice                       *bool                                                                                                              `json:"record_play_voice,omitempty"`
	RemoteControl                         *bool                                                                                                              `json:"remote_control,omitempty"`
	RemoteSupport                         *bool                                                                                                              `json:"remote_support,omitempty"`
	RequestPermissionToUnmute             *bool                                                                                                              `json:"request_permission_to_unmute,omitempty"`
	ScreenSharing                         *bool                                                                                                              `json:"screen_sharing,omitempty"`
	ShareDualCamera                       *bool                                                                                                              `json:"share_dual_camera,omitempty"`
	ShowMeetingControlToolbar             *bool                                                                                                              `json:"show_meeting_control_toolbar,omitempty"`
	VirtualBackground                     *bool                                                                                                              `json:"virtual_background,omitempty"`
	VirtualBackgroundSettings             *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings                 `json:"virtual_background_settings,omitempty"`
	WaitingRoom                           *bool                                                                                                              `json:"waiting_room,omitempty"`
	WhoCanShareScreen                     *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum                     `json:"who_can_share_screen,omitempty"`
	WhoCanShareScreenWhenSomeoneIsSharing *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum `json:"who_can_share_screen_when_someone_is_sharing,omitempty"`
	WorkplaceByFacebook                   *bool                                                                                                              `json:"workplace_by_facebook,omitempty"`
}

type UserSettingsUpdateApplicationJSONUserSettingsProfileRecordingStorageLocation struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	Value         *string  `json:"value,omitempty"`
}

type UserSettingsUpdateApplicationJSONUserSettingsProfile struct {
	RecordingStorageLocation *UserSettingsUpdateApplicationJSONUserSettingsProfileRecordingStorageLocation `json:"recording_storage_location,omitempty"`
}

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum string

const (
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnumLocal UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = "local"
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnumCloud UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = "cloud"
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnumNone  UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = "none"
)

// UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl
// Setting to allow cloud recording access only from specific IP address ranges.
type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl struct {
	Enable              *bool   `json:"enable,omitempty"`
	IPAddressesOrRanges *string `json:"ip_addresses_or_ranges,omitempty"`
}

// UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
// This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement struct {
	HaveLetter           *bool  `json:"have_letter,omitempty"`
	HaveNumber           *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter *bool  `json:"have_special_character,omitempty"`
	Length               *int64 `json:"length,omitempty"`
	OnlyAllowNumeric     *bool  `json:"only_allow_numeric,omitempty"`
}

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettings struct {
	AskHostToConfirmDisclaimer         *bool                                                                                                   `json:"ask_host_to_confirm_disclaimer,omitempty"`
	AskParticipantsToConsentDisclaimer *bool                                                                                                   `json:"ask_participants_to_consent_disclaimer,omitempty"`
	AutoDeleteCmr                      *bool                                                                                                   `json:"auto_delete_cmr,omitempty"`
	AutoDeleteCmrDays                  *int64                                                                                                  `json:"auto_delete_cmr_days,omitempty"`
	AutoRecording                      *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum            `json:"auto_recording,omitempty"`
	CloudRecording                     *bool                                                                                                   `json:"cloud_recording,omitempty"`
	HostPauseStopRecording             *bool                                                                                                   `json:"host_pause_stop_recording,omitempty"`
	IPAddressAccessControl             *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl       `json:"ip_address_access_control,omitempty"`
	LocalRecording                     *bool                                                                                                   `json:"local_recording,omitempty"`
	RecordAudioFile                    *bool                                                                                                   `json:"record_audio_file,omitempty"`
	RecordGalleryView                  *bool                                                                                                   `json:"record_gallery_view,omitempty"`
	RecordSpeakerView                  *bool                                                                                                   `json:"record_speaker_view,omitempty"`
	RecordingAudioTranscript           *bool                                                                                                   `json:"recording_audio_transcript,omitempty"`
	RecordingDisclaimer                *bool                                                                                                   `json:"recording_disclaimer,omitempty"`
	RecordingPasswordRequirement       *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement `json:"recording_password_requirement,omitempty"`
	SaveChatText                       *bool                                                                                                   `json:"save_chat_text,omitempty"`
	ShowTimestamp                      *bool                                                                                                   `json:"show_timestamp,omitempty"`
}

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum string

const (
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnumBoth       UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "both"
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnumTelephony  UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "telephony"
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnumVoip       UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "voip"
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnumThirdParty UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "thirdParty"
)

// UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement
// Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum string

const (
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnumJbhOnly UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = "jbh_only"
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnumAll     UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = "all"
	UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnumNone    UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = "none"
)

type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettings1 struct {
	AudioType                               *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum                     `json:"audio_type,omitempty"`
	DefaultPasswordForScheduledMeetings     *string                                                                                                    `json:"default_password_for_scheduled_meetings,omitempty"`
	EmbedPasswordInJoinLink                 *bool                                                                                                      `json:"embed_password_in_join_link,omitempty"`
	ForcePmiJbhPassword                     *bool                                                                                                      `json:"force_pmi_jbh_password,omitempty"`
	HostVideo                               *bool                                                                                                      `json:"host_video,omitempty"`
	JoinBeforeHost                          *bool                                                                                                      `json:"join_before_host,omitempty"`
	MeetingPasswordRequirement              *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement        `json:"meeting_password_requirement,omitempty"`
	ParticipantsVideo                       *bool                                                                                                      `json:"participants_video,omitempty"`
	PersonalMeeting                         *bool                                                                                                      `json:"personal_meeting,omitempty"`
	PmiPassword                             *string                                                                                                    `json:"pmi_password,omitempty"`
	PstnPasswordProtected                   *bool                                                                                                      `json:"pstn_password_protected,omitempty"`
	RequirePasswordForInstantMeetings       *bool                                                                                                      `json:"require_password_for_instant_meetings,omitempty"`
	RequirePasswordForPmiMeetings           *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum `json:"require_password_for_pmi_meetings,omitempty"`
	RequirePasswordForScheduledMeetings     *bool                                                                                                      `json:"require_password_for_scheduled_meetings,omitempty"`
	RequirePasswordForSchedulingNewMeetings *bool                                                                                                      `json:"require_password_for_scheduling_new_meetings,omitempty"`
	UsePmiForInstantMeetings                *bool                                                                                                      `json:"use_pmi_for_instant_meetings,omitempty"`
	UsePmiForScheduledMeetings              *bool                                                                                                      `json:"use_pmi_for_scheduled_meetings,omitempty"`
}

// UserSettingsUpdateApplicationJSONUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions
// Indicates where most of the participants call into or call from duriing a meeting.
type UserSettingsUpdateApplicationJSONUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions struct {
	SelectionValues []string `json:"selection_values,omitempty"`
}

type UserSettingsUpdateApplicationJSONUserSettingsTelephonyUpdateSettingsMeetingSettings struct {
	AudioConferenceInfo          *string                                                                                              `json:"audio_conference_info,omitempty"`
	ShowInternationalNumbersLink *bool                                                                                                `json:"show_international_numbers_link,omitempty"`
	TelephonyRegions             *UserSettingsUpdateApplicationJSONUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions `json:"telephony_regions,omitempty"`
	ThirdPartyAudio              *bool                                                                                                `json:"third_party_audio,omitempty"`
}

// UserSettingsUpdateApplicationJSONUserSettingsUserSettingsTspSettings
// Account Settings: TSP.
type UserSettingsUpdateApplicationJSONUserSettingsUserSettingsTspSettings struct {
	CallOut                      *bool         `json:"call_out,omitempty"`
	CallOutCountries             []interface{} `json:"call_out_countries,omitempty"`
	ShowInternationalNumbersLink *bool         `json:"show_international_numbers_link,omitempty"`
}

type UserSettingsUpdateApplicationJSONUserSettings struct {
	EmailNotification *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsNotificationSettings       `json:"email_notification,omitempty"`
	Feature           *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsFeatureSettings            `json:"feature,omitempty"`
	InMeeting         *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettings            `json:"in_meeting,omitempty"`
	Profile           *UserSettingsUpdateApplicationJSONUserSettingsProfile                                `json:"profile,omitempty"`
	Recording         *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettings          `json:"recording,omitempty"`
	ScheduleMeeting   *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettings1           `json:"schedule_meeting,omitempty"`
	Telephony         *UserSettingsUpdateApplicationJSONUserSettingsTelephonyUpdateSettingsMeetingSettings `json:"telephony,omitempty"`
	Tsp               *UserSettingsUpdateApplicationJSONUserSettingsUserSettingsTspSettings                `json:"tsp,omitempty"`
}

type UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum string

const (
	UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumEnhancedEncryption UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "enhanced_encryption"
	UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumE2ee               UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "e2ee"
)

// UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
// Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

// UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
// Specify the settings to be applied if waiting room is enabled.
type UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings struct {
	ParticipantsToPlaceInWaitingRoom            *int64  `json:"participants_to_place_in_waiting_room,omitempty"`
	UsersWhoCanAdmitParticipantsFromWaitingRoom *int64  `json:"users_who_can_admit_participants_from_waiting_room,omitempty"`
	WhitelistedDomainsForWaitingRoom            *string `json:"whitelisted_domains_for_waiting_room,omitempty"`
}

type UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity struct {
	AutoSecurity                       *bool                                                                                                     `json:"auto_security,omitempty"`
	EmbedPasswordInJoinLink            *bool                                                                                                     `json:"embed_password_in_join_link,omitempty"`
	EncryptionType                     *UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum         `json:"encryption_type,omitempty"`
	EndToEndEncryptedMeetings          *bool                                                                                                     `json:"end_to_end_encrypted_meetings,omitempty"`
	MeetingPassword                    *bool                                                                                                     `json:"meeting_password,omitempty"`
	MeetingPasswordRequirement         *UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement `json:"meeting_password_requirement,omitempty"`
	PhonePassword                      *bool                                                                                                     `json:"phone_password,omitempty"`
	PmiPassword                        *bool                                                                                                     `json:"pmi_password,omitempty"`
	RequirePasswordForScheduledMeeting *bool                                                                                                     `json:"require_password_for_scheduled_meeting,omitempty"`
	RequirePasswordForScheduledWebinar *bool                                                                                                     `json:"require_password_for_scheduled_webinar,omitempty"`
	WaitingRoom                        *bool                                                                                                     `json:"waiting_room,omitempty"`
	WaitingRoomSettings                *UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings        `json:"waiting_room_settings,omitempty"`
	WebinarPassword                    *bool                                                                                                     `json:"webinar_password,omitempty"`
}

type UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettings struct {
	MeetingSecurity *UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity `json:"meeting_security,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings struct {
	AlternativeHostReminder *bool `json:"alternative_host_reminder,omitempty"`
	CancelMeetingReminder   *bool `json:"cancel_meeting_reminder,omitempty"`
	JbhReminder             *bool `json:"jbh_reminder,omitempty"`
	ScheduleForReminder     *bool `json:"schedule_for_reminder,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings struct {
	LargeMeeting         *bool  `json:"large_meeting,omitempty"`
	LargeMeetingCapacity *int64 `json:"large_meeting_capacity,omitempty"`
	MeetingCapacity      *int64 `json:"meeting_capacity,omitempty"`
	Webinar              *bool  `json:"webinar,omitempty"`
	WebinarCapacity      *int64 `json:"webinar_capacity,omitempty"`
	ZoomPhone            *bool  `json:"zoom_phone,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum string

const (
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnumHost UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = "host"
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnumAll  UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = "all"
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnumNone UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = "none"
)

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles struct {
	ID        *string `json:"id,omitempty"`
	IsDefault *bool   `json:"is_default,omitempty"`
	Name      *string `json:"name,omitempty"`
	Size      *string `json:"size,omitempty"`
	Type      *string `json:"type,omitempty"`
}

// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
// Settings to manage virtual background.
type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings struct {
	AllowUploadCustom *bool                                                                                                      `json:"allow_upload_custom,omitempty"`
	AllowVideos       *bool                                                                                                      `json:"allow_videos,omitempty"`
	Enable            *bool                                                                                                      `json:"enable,omitempty"`
	Files             []UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles `json:"files,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum string

const (
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnumHost UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = "host"
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnumAll  UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = "all"
)

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum string

const (
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnumHost UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = "host"
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnumAll  UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = "all"
)

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings struct {
	AllowLiveStreaming                    *bool                                                                                                                `json:"allow_live_streaming,omitempty"`
	Annotation                            *bool                                                                                                                `json:"annotation,omitempty"`
	AttendeeOnHold                        *bool                                                                                                                `json:"attendee_on_hold,omitempty"`
	AutoSavingChat                        *bool                                                                                                                `json:"auto_saving_chat,omitempty"`
	BreakoutRoom                          *bool                                                                                                                `json:"breakout_room,omitempty"`
	Chat                                  *bool                                                                                                                `json:"chat,omitempty"`
	ClosedCaption                         *bool                                                                                                                `json:"closed_caption,omitempty"`
	CoHost                                *bool                                                                                                                `json:"co_host,omitempty"`
	CustomDataCenterRegions               *bool                                                                                                                `json:"custom_data_center_regions,omitempty"`
	CustomLiveStreamingService            *bool                                                                                                                `json:"custom_live_streaming_service,omitempty"`
	CustomServiceInstructions             *string                                                                                                              `json:"custom_service_instructions,omitempty"`
	DataCenterRegions                     []string                                                                                                             `json:"data_center_regions,omitempty"`
	E2eEncryption                         *bool                                                                                                                `json:"e2e_encryption,omitempty"`
	EntryExitChime                        *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum                        `json:"entry_exit_chime,omitempty"`
	FarEndCameraControl                   *bool                                                                                                                `json:"far_end_camera_control,omitempty"`
	Feedback                              *bool                                                                                                                `json:"feedback,omitempty"`
	FileTransfer                          *bool                                                                                                                `json:"file_transfer,omitempty"`
	GroupHd                               *bool                                                                                                                `json:"group_hd,omitempty"`
	NonVerbalFeedback                     *bool                                                                                                                `json:"non_verbal_feedback,omitempty"`
	Polling                               *bool                                                                                                                `json:"polling,omitempty"`
	PrivateChat                           *bool                                                                                                                `json:"private_chat,omitempty"`
	RecordPlayVoice                       *bool                                                                                                                `json:"record_play_voice,omitempty"`
	RemoteControl                         *bool                                                                                                                `json:"remote_control,omitempty"`
	RemoteSupport                         *bool                                                                                                                `json:"remote_support,omitempty"`
	RequestPermissionToUnmute             *bool                                                                                                                `json:"request_permission_to_unmute,omitempty"`
	ScreenSharing                         *bool                                                                                                                `json:"screen_sharing,omitempty"`
	ShareDualCamera                       *bool                                                                                                                `json:"share_dual_camera,omitempty"`
	ShowMeetingControlToolbar             *bool                                                                                                                `json:"show_meeting_control_toolbar,omitempty"`
	VirtualBackground                     *bool                                                                                                                `json:"virtual_background,omitempty"`
	VirtualBackgroundSettings             *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings                 `json:"virtual_background_settings,omitempty"`
	WaitingRoom                           *bool                                                                                                                `json:"waiting_room,omitempty"`
	WhoCanShareScreen                     *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum                     `json:"who_can_share_screen,omitempty"`
	WhoCanShareScreenWhenSomeoneIsSharing *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum `json:"who_can_share_screen_when_someone_is_sharing,omitempty"`
	WorkplaceByFacebook                   *bool                                                                                                                `json:"workplace_by_facebook,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	Value         *string  `json:"value,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettingsProfile struct {
	RecordingStorageLocation *UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation `json:"recording_storage_location,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum string

const (
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnumLocal UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = "local"
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnumCloud UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = "cloud"
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnumNone  UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = "none"
)

// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl
// Setting to allow cloud recording access only from specific IP address ranges.
type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl struct {
	Enable              *bool   `json:"enable,omitempty"`
	IPAddressesOrRanges *string `json:"ip_addresses_or_ranges,omitempty"`
}

// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
// This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement struct {
	HaveLetter           *bool  `json:"have_letter,omitempty"`
	HaveNumber           *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter *bool  `json:"have_special_character,omitempty"`
	Length               *int64 `json:"length,omitempty"`
	OnlyAllowNumeric     *bool  `json:"only_allow_numeric,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings struct {
	AskHostToConfirmDisclaimer         *bool                                                                                                     `json:"ask_host_to_confirm_disclaimer,omitempty"`
	AskParticipantsToConsentDisclaimer *bool                                                                                                     `json:"ask_participants_to_consent_disclaimer,omitempty"`
	AutoDeleteCmr                      *bool                                                                                                     `json:"auto_delete_cmr,omitempty"`
	AutoDeleteCmrDays                  *int64                                                                                                    `json:"auto_delete_cmr_days,omitempty"`
	AutoRecording                      *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum            `json:"auto_recording,omitempty"`
	CloudRecording                     *bool                                                                                                     `json:"cloud_recording,omitempty"`
	HostPauseStopRecording             *bool                                                                                                     `json:"host_pause_stop_recording,omitempty"`
	IPAddressAccessControl             *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl       `json:"ip_address_access_control,omitempty"`
	LocalRecording                     *bool                                                                                                     `json:"local_recording,omitempty"`
	RecordAudioFile                    *bool                                                                                                     `json:"record_audio_file,omitempty"`
	RecordGalleryView                  *bool                                                                                                     `json:"record_gallery_view,omitempty"`
	RecordSpeakerView                  *bool                                                                                                     `json:"record_speaker_view,omitempty"`
	RecordingAudioTranscript           *bool                                                                                                     `json:"recording_audio_transcript,omitempty"`
	RecordingDisclaimer                *bool                                                                                                     `json:"recording_disclaimer,omitempty"`
	RecordingPasswordRequirement       *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement `json:"recording_password_requirement,omitempty"`
	SaveChatText                       *bool                                                                                                     `json:"save_chat_text,omitempty"`
	ShowTimestamp                      *bool                                                                                                     `json:"show_timestamp,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum string

const (
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnumBoth       UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "both"
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnumTelephony  UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "telephony"
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnumVoip       UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "voip"
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnumThirdParty UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "thirdParty"
)

// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement
// Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum string

const (
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnumJbhOnly UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = "jbh_only"
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnumAll     UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = "all"
	UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnumNone    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = "none"
)

type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1 struct {
	AudioType                               *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum                     `json:"audio_type,omitempty"`
	DefaultPasswordForScheduledMeetings     *string                                                                                                      `json:"default_password_for_scheduled_meetings,omitempty"`
	EmbedPasswordInJoinLink                 *bool                                                                                                        `json:"embed_password_in_join_link,omitempty"`
	ForcePmiJbhPassword                     *bool                                                                                                        `json:"force_pmi_jbh_password,omitempty"`
	HostVideo                               *bool                                                                                                        `json:"host_video,omitempty"`
	JoinBeforeHost                          *bool                                                                                                        `json:"join_before_host,omitempty"`
	MeetingPasswordRequirement              *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement        `json:"meeting_password_requirement,omitempty"`
	ParticipantsVideo                       *bool                                                                                                        `json:"participants_video,omitempty"`
	PersonalMeeting                         *bool                                                                                                        `json:"personal_meeting,omitempty"`
	PmiPassword                             *string                                                                                                      `json:"pmi_password,omitempty"`
	PstnPasswordProtected                   *bool                                                                                                        `json:"pstn_password_protected,omitempty"`
	RequirePasswordForInstantMeetings       *bool                                                                                                        `json:"require_password_for_instant_meetings,omitempty"`
	RequirePasswordForPmiMeetings           *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum `json:"require_password_for_pmi_meetings,omitempty"`
	RequirePasswordForScheduledMeetings     *bool                                                                                                        `json:"require_password_for_scheduled_meetings,omitempty"`
	RequirePasswordForSchedulingNewMeetings *bool                                                                                                        `json:"require_password_for_scheduling_new_meetings,omitempty"`
	UsePmiForInstantMeetings                *bool                                                                                                        `json:"use_pmi_for_instant_meetings,omitempty"`
	UsePmiForScheduledMeetings              *bool                                                                                                        `json:"use_pmi_for_scheduled_meetings,omitempty"`
}

// UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions
// Indicates where most of the participants call into or call from duriing a meeting.
type UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions struct {
	SelectionValues []string `json:"selection_values,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings struct {
	AudioConferenceInfo          *string                                                                                                `json:"audio_conference_info,omitempty"`
	ShowInternationalNumbersLink *bool                                                                                                  `json:"show_international_numbers_link,omitempty"`
	TelephonyRegions             *UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions `json:"telephony_regions,omitempty"`
	ThirdPartyAudio              *bool                                                                                                  `json:"third_party_audio,omitempty"`
}

// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings
// Account Settings: TSP.
type UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings struct {
	CallOut                      *bool         `json:"call_out,omitempty"`
	CallOutCountries             []interface{} `json:"call_out_countries,omitempty"`
	ShowInternationalNumbersLink *bool         `json:"show_international_numbers_link,omitempty"`
}

type UserSettingsUpdateMultipartFormDataUserSettings struct {
	EmailNotification *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings       `multipartForm:"name=email_notification,json"`
	Feature           *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings            `multipartForm:"name=feature,json"`
	InMeeting         *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings            `multipartForm:"name=in_meeting,json"`
	Profile           *UserSettingsUpdateMultipartFormDataUserSettingsProfile                                `multipartForm:"name=profile,json"`
	Recording         *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings          `multipartForm:"name=recording,json"`
	ScheduleMeeting   *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1           `multipartForm:"name=schedule_meeting,json"`
	Telephony         *UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings `multipartForm:"name=telephony,json"`
	Tsp               *UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings                `multipartForm:"name=tsp,json"`
}

type UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum string

const (
	UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumEnhancedEncryption UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "enhanced_encryption"
	UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumE2ee               UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "e2ee"
)

// UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
// Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

// UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
// Specify the settings to be applied if waiting room is enabled.
type UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings struct {
	ParticipantsToPlaceInWaitingRoom            *int64  `json:"participants_to_place_in_waiting_room,omitempty"`
	UsersWhoCanAdmitParticipantsFromWaitingRoom *int64  `json:"users_who_can_admit_participants_from_waiting_room,omitempty"`
	WhitelistedDomainsForWaitingRoom            *string `json:"whitelisted_domains_for_waiting_room,omitempty"`
}

type UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity struct {
	AutoSecurity                       *bool                                                                                                       `json:"auto_security,omitempty"`
	EmbedPasswordInJoinLink            *bool                                                                                                       `json:"embed_password_in_join_link,omitempty"`
	EncryptionType                     *UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum         `json:"encryption_type,omitempty"`
	EndToEndEncryptedMeetings          *bool                                                                                                       `json:"end_to_end_encrypted_meetings,omitempty"`
	MeetingPassword                    *bool                                                                                                       `json:"meeting_password,omitempty"`
	MeetingPasswordRequirement         *UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement `json:"meeting_password_requirement,omitempty"`
	PhonePassword                      *bool                                                                                                       `json:"phone_password,omitempty"`
	PmiPassword                        *bool                                                                                                       `json:"pmi_password,omitempty"`
	RequirePasswordForScheduledMeeting *bool                                                                                                       `json:"require_password_for_scheduled_meeting,omitempty"`
	RequirePasswordForScheduledWebinar *bool                                                                                                       `json:"require_password_for_scheduled_webinar,omitempty"`
	WaitingRoom                        *bool                                                                                                       `json:"waiting_room,omitempty"`
	WaitingRoomSettings                *UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings        `json:"waiting_room_settings,omitempty"`
	WebinarPassword                    *bool                                                                                                       `json:"webinar_password,omitempty"`
}

type UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings struct {
	MeetingSecurity *UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity `multipartForm:"name=meeting_security,json"`
}

type UserSettingsUpdateRequests struct {
	OneOf  *interface{} `request:"mediaType=application/json"`
	OneOf1 *interface{} `request:"mediaType=multipart/form-data"`
}

type UserSettingsUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserSettingsUpdateRequest struct {
	PathParams  UserSettingsUpdatePathParams
	QueryParams UserSettingsUpdateQueryParams
	Request     UserSettingsUpdateRequests
	Security    UserSettingsUpdateSecurity
}

type UserSettingsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
