package operations

import (
	"openapi/pkg/models/shared"
)

type UserSettingsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserSettingsLoginTypeEnum string

const (
	UserSettingsLoginTypeEnumZero             UserSettingsLoginTypeEnum = "0"
	UserSettingsLoginTypeEnumOne              UserSettingsLoginTypeEnum = "1"
	UserSettingsLoginTypeEnumNinetyNine       UserSettingsLoginTypeEnum = "99"
	UserSettingsLoginTypeEnumOneHundred       UserSettingsLoginTypeEnum = "100"
	UserSettingsLoginTypeEnumOneHundredAndOne UserSettingsLoginTypeEnum = "101"
)

type UserSettingsOptionEnum string

const (
	UserSettingsOptionEnumMeetingAuthentication   UserSettingsOptionEnum = "meeting_authentication"
	UserSettingsOptionEnumRecordingAuthentication UserSettingsOptionEnum = "recording_authentication"
)

type UserSettingsQueryParams struct {
	CustomQueryFields *string                    `queryParam:"style=form,explode=true,name=custom_query_fields"`
	LoginType         *UserSettingsLoginTypeEnum `queryParam:"style=form,explode=true,name=login_type"`
	Option            *UserSettingsOptionEnum    `queryParam:"style=form,explode=true,name=option"`
}

type UserSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum string

const (
	UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumEnhancedEncryption UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "enhanced_encryption"
	UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumE2ee               UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "e2ee"
)

// UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
// Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

// UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
// Specify the settings to be applied if waiting room is enabled.
type UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings struct {
	ParticipantsToPlaceInWaitingRoom            *int64  `json:"participants_to_place_in_waiting_room,omitempty"`
	UsersWhoCanAdmitParticipantsFromWaitingRoom *int64  `json:"users_who_can_admit_participants_from_waiting_room,omitempty"`
	WhitelistedDomainsForWaitingRoom            *string `json:"whitelisted_domains_for_waiting_room,omitempty"`
}

type UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity struct {
	AutoSecurity                       *bool                                                                                                  `json:"auto_security,omitempty"`
	EmbedPasswordInJoinLink            *bool                                                                                                  `json:"embed_password_in_join_link,omitempty"`
	EncryptionType                     *UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum         `json:"encryption_type,omitempty"`
	EndToEndEncryptedMeetings          *bool                                                                                                  `json:"end_to_end_encrypted_meetings,omitempty"`
	MeetingPassword                    *bool                                                                                                  `json:"meeting_password,omitempty"`
	MeetingPasswordRequirement         *UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement `json:"meeting_password_requirement,omitempty"`
	PhonePassword                      *bool                                                                                                  `json:"phone_password,omitempty"`
	PmiPassword                        *bool                                                                                                  `json:"pmi_password,omitempty"`
	RequirePasswordForScheduledMeeting *bool                                                                                                  `json:"require_password_for_scheduled_meeting,omitempty"`
	RequirePasswordForScheduledWebinar *bool                                                                                                  `json:"require_password_for_scheduled_webinar,omitempty"`
	WaitingRoom                        *bool                                                                                                  `json:"waiting_room,omitempty"`
	WaitingRoomSettings                *UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings        `json:"waiting_room_settings,omitempty"`
	WebinarPassword                    *bool                                                                                                  `json:"webinar_password,omitempty"`
}

type UserSettings200ApplicationJSONMeetingWebinarSecuritySettings struct {
	MeetingSecurity *UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity `json:"meeting_security,omitempty"`
}

type UserSettings200ApplicationJSONUserSettingsUserSettingsNotificationSettings struct {
	AlternativeHostReminder *bool `json:"alternative_host_reminder,omitempty"`
	CancelMeetingReminder   *bool `json:"cancel_meeting_reminder,omitempty"`
	JbhReminder             *bool `json:"jbh_reminder,omitempty"`
	ScheduleForReminder     *bool `json:"schedule_for_reminder,omitempty"`
}

type UserSettings200ApplicationJSONUserSettingsUserSettingsFeatureSettings struct {
	CnMeeting            *bool  `json:"cn_meeting,omitempty"`
	InMeeting            *bool  `json:"in_meeting,omitempty"`
	LargeMeeting         *bool  `json:"large_meeting,omitempty"`
	LargeMeetingCapacity *int64 `json:"large_meeting_capacity,omitempty"`
	MeetingCapacity      *int64 `json:"meeting_capacity,omitempty"`
	Webinar              *bool  `json:"webinar,omitempty"`
	WebinarCapacity      *int64 `json:"webinar_capacity,omitempty"`
	ZoomPhone            *bool  `json:"zoom_phone,omitempty"`
}

type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum string

const (
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnumHost UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = "host"
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnumAll  UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = "all"
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnumNone UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = "none"
)

type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles struct {
	ID        *string `json:"id,omitempty"`
	IsDefault *bool   `json:"is_default,omitempty"`
	Name      *string `json:"name,omitempty"`
	Size      *string `json:"size,omitempty"`
	Type      *string `json:"type,omitempty"`
}

// UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
// Settings to manage virtual background.
type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings struct {
	AllowUploadCustom *bool                                                                                                 `json:"allow_upload_custom,omitempty"`
	AllowVideos       *bool                                                                                                 `json:"allow_videos,omitempty"`
	Enable            *bool                                                                                                 `json:"enable,omitempty"`
	Files             []UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles `json:"files,omitempty"`
}

type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum string

const (
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnumHost UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = "host"
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnumAll  UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = "all"
)

type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum string

const (
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnumHost UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = "host"
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnumAll  UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = "all"
)

type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings struct {
	AllowLiveStreaming                    *bool                                                                                                           `json:"allow_live_streaming,omitempty"`
	Annotation                            *bool                                                                                                           `json:"annotation,omitempty"`
	AttendeeOnHold                        *bool                                                                                                           `json:"attendee_on_hold,omitempty"`
	AutoSavingChat                        *bool                                                                                                           `json:"auto_saving_chat,omitempty"`
	BreakoutRoom                          *bool                                                                                                           `json:"breakout_room,omitempty"`
	Chat                                  *bool                                                                                                           `json:"chat,omitempty"`
	ClosedCaption                         *bool                                                                                                           `json:"closed_caption,omitempty"`
	CoHost                                *bool                                                                                                           `json:"co_host,omitempty"`
	CustomDataCenterRegions               *bool                                                                                                           `json:"custom_data_center_regions,omitempty"`
	CustomLiveStreamingService            *bool                                                                                                           `json:"custom_live_streaming_service,omitempty"`
	CustomServiceInstructions             *string                                                                                                         `json:"custom_service_instructions,omitempty"`
	DataCenterRegions                     []string                                                                                                        `json:"data_center_regions,omitempty"`
	E2eEncryption                         *bool                                                                                                           `json:"e2e_encryption,omitempty"`
	EntryExitChime                        *UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum                        `json:"entry_exit_chime,omitempty"`
	FarEndCameraControl                   *bool                                                                                                           `json:"far_end_camera_control,omitempty"`
	Feedback                              *bool                                                                                                           `json:"feedback,omitempty"`
	FileTransfer                          *bool                                                                                                           `json:"file_transfer,omitempty"`
	GroupHd                               *bool                                                                                                           `json:"group_hd,omitempty"`
	NonVerbalFeedback                     *bool                                                                                                           `json:"non_verbal_feedback,omitempty"`
	Polling                               *bool                                                                                                           `json:"polling,omitempty"`
	PrivateChat                           *bool                                                                                                           `json:"private_chat,omitempty"`
	RecordPlayVoice                       *bool                                                                                                           `json:"record_play_voice,omitempty"`
	RemoteControl                         *bool                                                                                                           `json:"remote_control,omitempty"`
	RemoteSupport                         *bool                                                                                                           `json:"remote_support,omitempty"`
	RequestPermissionToUnmute             *bool                                                                                                           `json:"request_permission_to_unmute,omitempty"`
	ScreenSharing                         *bool                                                                                                           `json:"screen_sharing,omitempty"`
	ShareDualCamera                       *bool                                                                                                           `json:"share_dual_camera,omitempty"`
	ShowMeetingControlToolbar             *bool                                                                                                           `json:"show_meeting_control_toolbar,omitempty"`
	VirtualBackground                     *bool                                                                                                           `json:"virtual_background,omitempty"`
	VirtualBackgroundSettings             *UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings                 `json:"virtual_background_settings,omitempty"`
	WaitingRoom                           *bool                                                                                                           `json:"waiting_room,omitempty"`
	WhoCanShareScreen                     *UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum                     `json:"who_can_share_screen,omitempty"`
	WhoCanShareScreenWhenSomeoneIsSharing *UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum `json:"who_can_share_screen_when_someone_is_sharing,omitempty"`
	WorkplaceByFacebook                   *bool                                                                                                           `json:"workplace_by_facebook,omitempty"`
}

type UserSettings200ApplicationJSONUserSettingsProfileRecordingStorageLocation struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	Value         *string  `json:"value,omitempty"`
}

type UserSettings200ApplicationJSONUserSettingsProfile struct {
	RecordingStorageLocation *UserSettings200ApplicationJSONUserSettingsProfileRecordingStorageLocation `json:"recording_storage_location,omitempty"`
}

type UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum string

const (
	UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnumLocal UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = "local"
	UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnumCloud UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = "cloud"
	UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnumNone  UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = "none"
)

// UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl
// Setting to allow cloud recording access only from specific IP address ranges.
type UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl struct {
	Enable              *bool   `json:"enable,omitempty"`
	IPAddressesOrRanges *string `json:"ip_addresses_or_ranges,omitempty"`
}

// UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
// This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
type UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement struct {
	HaveLetter           *bool  `json:"have_letter,omitempty"`
	HaveNumber           *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter *bool  `json:"have_special_character,omitempty"`
	Length               *int64 `json:"length,omitempty"`
	OnlyAllowNumeric     *bool  `json:"only_allow_numeric,omitempty"`
}

type UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettings struct {
	AskHostToConfirmDisclaimer         *bool                                                                                                `json:"ask_host_to_confirm_disclaimer,omitempty"`
	AskParticipantsToConsentDisclaimer *bool                                                                                                `json:"ask_participants_to_consent_disclaimer,omitempty"`
	AutoDeleteCmr                      *bool                                                                                                `json:"auto_delete_cmr,omitempty"`
	AutoDeleteCmrDays                  *int64                                                                                               `json:"auto_delete_cmr_days,omitempty"`
	AutoRecording                      *UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum            `json:"auto_recording,omitempty"`
	CloudRecording                     *bool                                                                                                `json:"cloud_recording,omitempty"`
	HostPauseStopRecording             *bool                                                                                                `json:"host_pause_stop_recording,omitempty"`
	IPAddressAccessControl             *UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl       `json:"ip_address_access_control,omitempty"`
	LocalRecording                     *bool                                                                                                `json:"local_recording,omitempty"`
	RecordAudioFile                    *bool                                                                                                `json:"record_audio_file,omitempty"`
	RecordGalleryView                  *bool                                                                                                `json:"record_gallery_view,omitempty"`
	RecordSpeakerView                  *bool                                                                                                `json:"record_speaker_view,omitempty"`
	RecordingAudioTranscript           *bool                                                                                                `json:"recording_audio_transcript,omitempty"`
	RecordingDisclaimer                *bool                                                                                                `json:"recording_disclaimer,omitempty"`
	RecordingPasswordRequirement       *UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement `json:"recording_password_requirement,omitempty"`
	SaveChatText                       *bool                                                                                                `json:"save_chat_text,omitempty"`
	ShowTimestamp                      *bool                                                                                                `json:"show_timestamp,omitempty"`
}

type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum string

const (
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnumBoth       UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "both"
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnumTelephony  UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "telephony"
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnumVoip       UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "voip"
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnumThirdParty UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = "thirdParty"
)

// UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement
// Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum string

const (
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnumJbhOnly UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = "jbh_only"
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnumAll     UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = "all"
	UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnumNone    UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = "none"
)

type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings1 struct {
	AudioType                               *UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum                     `json:"audio_type,omitempty"`
	DefaultPasswordForScheduledMeetings     *string                                                                                                 `json:"default_password_for_scheduled_meetings,omitempty"`
	EmbedPasswordInJoinLink                 *bool                                                                                                   `json:"embed_password_in_join_link,omitempty"`
	ForcePmiJbhPassword                     *bool                                                                                                   `json:"force_pmi_jbh_password,omitempty"`
	HostVideo                               *bool                                                                                                   `json:"host_video,omitempty"`
	JoinBeforeHost                          *bool                                                                                                   `json:"join_before_host,omitempty"`
	MeetingPasswordRequirement              *UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement        `json:"meeting_password_requirement,omitempty"`
	ParticipantsVideo                       *bool                                                                                                   `json:"participants_video,omitempty"`
	PersonalMeeting                         *bool                                                                                                   `json:"personal_meeting,omitempty"`
	PmiPassword                             *string                                                                                                 `json:"pmi_password,omitempty"`
	PstnPasswordProtected                   *bool                                                                                                   `json:"pstn_password_protected,omitempty"`
	RequirePasswordForInstantMeetings       *bool                                                                                                   `json:"require_password_for_instant_meetings,omitempty"`
	RequirePasswordForPmiMeetings           *UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum `json:"require_password_for_pmi_meetings,omitempty"`
	RequirePasswordForScheduledMeetings     *bool                                                                                                   `json:"require_password_for_scheduled_meetings,omitempty"`
	RequirePasswordForSchedulingNewMeetings *bool                                                                                                   `json:"require_password_for_scheduling_new_meetings,omitempty"`
	UsePmiForInstantMeetings                *bool                                                                                                   `json:"use_pmi_for_instant_meetings,omitempty"`
	UsePmiForScheduledMeetings              *bool                                                                                                   `json:"use_pmi_for_scheduled_meetings,omitempty"`
}

// UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsTelephonyRegions
// Indicates where most of the participants call into or call from duriing a meeting.
type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsTelephonyRegions struct {
	AllowedValues   []string `json:"allowed_values,omitempty"`
	SelectionValues []string `json:"selection_values,omitempty"`
}

type UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings2 struct {
	AudioConferenceInfo          *string                                                                                `json:"audio_conference_info,omitempty"`
	ShowInternationalNumbersLink *bool                                                                                  `json:"show_international_numbers_link,omitempty"`
	TelephonyRegions             *UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsTelephonyRegions `json:"telephony_regions,omitempty"`
	ThirdPartyAudio              *bool                                                                                  `json:"third_party_audio,omitempty"`
}

// UserSettings200ApplicationJSONUserSettingsUserSettingsTspSettings
// Account Settings: TSP.
type UserSettings200ApplicationJSONUserSettingsUserSettingsTspSettings struct {
	CallOut                      *bool         `json:"call_out,omitempty"`
	CallOutCountries             []interface{} `json:"call_out_countries,omitempty"`
	ShowInternationalNumbersLink *bool         `json:"show_international_numbers_link,omitempty"`
}

type UserSettings200ApplicationJSONUserSettings struct {
	EmailNotification *UserSettings200ApplicationJSONUserSettingsUserSettingsNotificationSettings `json:"email_notification,omitempty"`
	Feature           *UserSettings200ApplicationJSONUserSettingsUserSettingsFeatureSettings      `json:"feature,omitempty"`
	InMeeting         *UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings      `json:"in_meeting,omitempty"`
	Profile           *UserSettings200ApplicationJSONUserSettingsProfile                          `json:"profile,omitempty"`
	Recording         *UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettings    `json:"recording,omitempty"`
	ScheduleMeeting   *UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings1     `json:"schedule_meeting,omitempty"`
	Telephony         *UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings2     `json:"telephony,omitempty"`
	Tsp               *UserSettings200ApplicationJSONUserSettingsUserSettingsTspSettings          `json:"tsp,omitempty"`
}

type UserSettingsRequest struct {
	PathParams  UserSettingsPathParams
	QueryParams UserSettingsQueryParams
	Security    UserSettingsSecurity
}

type UserSettingsResponse struct {
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	UserSettings200ApplicationJSONOneOf *interface{}
}
