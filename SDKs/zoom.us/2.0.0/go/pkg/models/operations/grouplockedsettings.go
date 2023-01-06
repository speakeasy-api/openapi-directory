package operations

import (
	"openapi/pkg/models/shared"
)

type GroupLockedSettingsPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupLockedSettingsQueryParams struct {
	CustomQueryFields *string `queryParam:"style=form,explode=true,name=custom_query_fields"`
	Option            *string `queryParam:"style=form,explode=true,name=option"`
}

type GroupLockedSettingsApplicationJSON1EmailNotification struct {
	AlternativeHostReminder         *bool `json:"alternative_host_reminder,omitempty"`
	CancelMeetingReminder           *bool `json:"cancel_meeting_reminder,omitempty"`
	CloudRecordingAvailableReminder *bool `json:"cloud_recording_available_reminder,omitempty"`
	JbhReminder                     *bool `json:"jbh_reminder,omitempty"`
	ScheduleForHostReminder         *bool `json:"schedule_for_host_reminder,omitempty"`
}

type GroupLockedSettingsApplicationJSON1InMeeting struct {
	AlertGuestJoin             *bool   `json:"alert_guest_join,omitempty"`
	AllowShowZoomWindows       *bool   `json:"allow_show_zoom_windows,omitempty"`
	Annotation                 *bool   `json:"annotation,omitempty"`
	AttendeeOnHold             *bool   `json:"attendee_on_hold,omitempty"`
	AutoAnswer                 *bool   `json:"auto_answer,omitempty"`
	AutoSavingChat             *bool   `json:"auto_saving_chat,omitempty"`
	BreakoutRoom               *bool   `json:"breakout_room,omitempty"`
	Chat                       *bool   `json:"chat,omitempty"`
	ClosedCaption              *bool   `json:"closed_caption,omitempty"`
	CoHost                     *bool   `json:"co_host,omitempty"`
	CustomDataCenterRegions    *bool   `json:"custom_data_center_regions,omitempty"`
	E2eEncryption              *bool   `json:"e2e_encryption,omitempty"`
	EntryExitChime             *string `json:"entry_exit_chime,omitempty"`
	FarEndCameraControl        *bool   `json:"far_end_camera_control,omitempty"`
	Feedback                   *bool   `json:"feedback,omitempty"`
	FileTransfer               *bool   `json:"file_transfer,omitempty"`
	GroupHd                    *bool   `json:"group_hd,omitempty"`
	NonVerbalFeedback          *bool   `json:"non_verbal_feedback,omitempty"`
	OriginalAudio              *bool   `json:"original_audio,omitempty"`
	Polling                    *bool   `json:"polling,omitempty"`
	PostMeetingFeedback        *bool   `json:"post_meeting_feedback,omitempty"`
	PrivateChat                *bool   `json:"private_chat,omitempty"`
	RemoteControl              *bool   `json:"remote_control,omitempty"`
	RemoteSupport              *bool   `json:"remote_support,omitempty"`
	RequestPermissionToUnmute  *bool   `json:"request_permission_to_unmute,omitempty"`
	ScreenSharing              *bool   `json:"screen_sharing,omitempty"`
	SendingDefaultEmailInvites *bool   `json:"sending_default_email_invites,omitempty"`
	ShowBrowserJoinLink        *bool   `json:"show_browser_join_link,omitempty"`
	ShowMeetingControlToolbar  *bool   `json:"show_meeting_control_toolbar,omitempty"`
	StereoAudio                *bool   `json:"stereo_audio,omitempty"`
	UseHTMLFormatEmail         *bool   `json:"use_html_format_email,omitempty"`
	VirtualBackground          *bool   `json:"virtual_background,omitempty"`
	WaitingRoom                *bool   `json:"waiting_room,omitempty"`
	Whiteboard                 *bool   `json:"whiteboard,omitempty"`
}

// GroupLockedSettingsApplicationJSON1RecordingIPAddressAccessControl
// Setting to allow cloud recording access only from specific IP address ranges.
type GroupLockedSettingsApplicationJSON1RecordingIPAddressAccessControl struct {
	Enable              *bool   `json:"enable,omitempty"`
	IPAddressesOrRanges *string `json:"ip_addresses_or_ranges,omitempty"`
}

type GroupLockedSettingsApplicationJSON1Recording struct {
	AccountUserAccessRecording *bool                                                               `json:"account_user_access_recording,omitempty"`
	AutoDeleteCmr              *bool                                                               `json:"auto_delete_cmr,omitempty"`
	AutoRecording              *string                                                             `json:"auto_recording,omitempty"`
	CloudRecording             *bool                                                               `json:"cloud_recording,omitempty"`
	CloudRecordingDownload     *bool                                                               `json:"cloud_recording_download,omitempty"`
	HostDeleteCloudRecording   *bool                                                               `json:"host_delete_cloud_recording,omitempty"`
	IPAddressAccessControl     *GroupLockedSettingsApplicationJSON1RecordingIPAddressAccessControl `json:"ip_address_access_control,omitempty"`
	LocalRecording             *bool                                                               `json:"local_recording,omitempty"`
	RecordingAuthentication    *string                                                             `json:"recording_authentication,omitempty"`
}

type GroupLockedSettingsApplicationJSON1ScheduleMeeting struct {
	AudioType                               *bool `json:"audio_type,omitempty"`
	EmbedPasswordInJoinLink                 *bool `json:"embed_password_in_join_link,omitempty"`
	ForcePmiJbhPassword                     *bool `json:"force_pmi_jbh_password,omitempty"`
	HostVideo                               *bool `json:"host_video,omitempty"`
	JoinBeforeHost                          *bool `json:"join_before_host,omitempty"`
	MeetingAuthentication                   *bool `json:"meeting_authentication,omitempty"`
	MuteUponEntry                           *bool `json:"mute_upon_entry,omitempty"`
	ParticipantVideo                        *bool `json:"participant_video,omitempty"`
	PersonalMeeting                         *bool `json:"personal_meeting,omitempty"`
	PstnPasswordProtected                   *bool `json:"pstn_password_protected,omitempty"`
	RequirePasswordForInstantMeetings       *bool `json:"require_password_for_instant_meetings,omitempty"`
	RequirePasswordForPmiMeetings           *bool `json:"require_password_for_pmi_meetings,omitempty"`
	RequirePasswordForSchedulingNewMeetings *bool `json:"require_password_for_scheduling_new_meetings,omitempty"`
	UpcomingMeetingReminder                 *bool `json:"upcoming_meeting_reminder,omitempty"`
}

type GroupLockedSettingsApplicationJSON1Telephony struct {
	TelephonyRegions *bool `json:"telephony_regions,omitempty"`
	ThirdPartyAudio  *bool `json:"third_party_audio,omitempty"`
}

type GroupLockedSettingsApplicationJSON1 struct {
	EmailNotification *GroupLockedSettingsApplicationJSON1EmailNotification `json:"email_notification,omitempty"`
	InMeeting         *GroupLockedSettingsApplicationJSON1InMeeting         `json:"in_meeting,omitempty"`
	Recording         *GroupLockedSettingsApplicationJSON1Recording         `json:"recording,omitempty"`
	ScheduleMeeting   *GroupLockedSettingsApplicationJSON1ScheduleMeeting   `json:"schedule_meeting,omitempty"`
	Telephony         *GroupLockedSettingsApplicationJSON1Telephony         `json:"telephony,omitempty"`
}

type GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum string

const (
	GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumEnhancedEncryption GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "enhanced_encryption"
	GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumE2ee               GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "e2ee"
)

// GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
// Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

// GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
// Specify the settings to be applied if waiting room is enabled.
type GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings struct {
	ParticipantsToPlaceInWaitingRoom            *int64  `json:"participants_to_place_in_waiting_room,omitempty"`
	UsersWhoCanAdmitParticipantsFromWaitingRoom *int64  `json:"users_who_can_admit_participants_from_waiting_room,omitempty"`
	WhitelistedDomainsForWaitingRoom            *string `json:"whitelisted_domains_for_waiting_room,omitempty"`
}

type GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity struct {
	AutoSecurity                       *bool                                                                                                      `json:"auto_security,omitempty"`
	EmbedPasswordInJoinLink            *bool                                                                                                      `json:"embed_password_in_join_link,omitempty"`
	EncryptionType                     *GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum         `json:"encryption_type,omitempty"`
	EndToEndEncryptedMeetings          *bool                                                                                                      `json:"end_to_end_encrypted_meetings,omitempty"`
	MeetingPassword                    *bool                                                                                                      `json:"meeting_password,omitempty"`
	MeetingPasswordRequirement         *GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement `json:"meeting_password_requirement,omitempty"`
	PhonePassword                      *bool                                                                                                      `json:"phone_password,omitempty"`
	PmiPassword                        *bool                                                                                                      `json:"pmi_password,omitempty"`
	RequirePasswordForScheduledMeeting *bool                                                                                                      `json:"require_password_for_scheduled_meeting,omitempty"`
	RequirePasswordForScheduledWebinar *bool                                                                                                      `json:"require_password_for_scheduled_webinar,omitempty"`
	WaitingRoom                        *bool                                                                                                      `json:"waiting_room,omitempty"`
	WaitingRoomSettings                *GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings        `json:"waiting_room_settings,omitempty"`
	WebinarPassword                    *bool                                                                                                      `json:"webinar_password,omitempty"`
}

type GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettings struct {
	MeetingSecurity *GroupLockedSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity `json:"meeting_security,omitempty"`
}

type GroupLockedSettingsMultipartFormData1EmailNotification struct {
	AlternativeHostReminder         *bool `json:"alternative_host_reminder,omitempty"`
	CancelMeetingReminder           *bool `json:"cancel_meeting_reminder,omitempty"`
	CloudRecordingAvailableReminder *bool `json:"cloud_recording_available_reminder,omitempty"`
	JbhReminder                     *bool `json:"jbh_reminder,omitempty"`
	ScheduleForHostReminder         *bool `json:"schedule_for_host_reminder,omitempty"`
}

type GroupLockedSettingsMultipartFormData1InMeeting struct {
	AlertGuestJoin             *bool   `json:"alert_guest_join,omitempty"`
	AllowShowZoomWindows       *bool   `json:"allow_show_zoom_windows,omitempty"`
	Annotation                 *bool   `json:"annotation,omitempty"`
	AttendeeOnHold             *bool   `json:"attendee_on_hold,omitempty"`
	AutoAnswer                 *bool   `json:"auto_answer,omitempty"`
	AutoSavingChat             *bool   `json:"auto_saving_chat,omitempty"`
	BreakoutRoom               *bool   `json:"breakout_room,omitempty"`
	Chat                       *bool   `json:"chat,omitempty"`
	ClosedCaption              *bool   `json:"closed_caption,omitempty"`
	CoHost                     *bool   `json:"co_host,omitempty"`
	CustomDataCenterRegions    *bool   `json:"custom_data_center_regions,omitempty"`
	E2eEncryption              *bool   `json:"e2e_encryption,omitempty"`
	EntryExitChime             *string `json:"entry_exit_chime,omitempty"`
	FarEndCameraControl        *bool   `json:"far_end_camera_control,omitempty"`
	Feedback                   *bool   `json:"feedback,omitempty"`
	FileTransfer               *bool   `json:"file_transfer,omitempty"`
	GroupHd                    *bool   `json:"group_hd,omitempty"`
	NonVerbalFeedback          *bool   `json:"non_verbal_feedback,omitempty"`
	OriginalAudio              *bool   `json:"original_audio,omitempty"`
	Polling                    *bool   `json:"polling,omitempty"`
	PostMeetingFeedback        *bool   `json:"post_meeting_feedback,omitempty"`
	PrivateChat                *bool   `json:"private_chat,omitempty"`
	RemoteControl              *bool   `json:"remote_control,omitempty"`
	RemoteSupport              *bool   `json:"remote_support,omitempty"`
	RequestPermissionToUnmute  *bool   `json:"request_permission_to_unmute,omitempty"`
	ScreenSharing              *bool   `json:"screen_sharing,omitempty"`
	SendingDefaultEmailInvites *bool   `json:"sending_default_email_invites,omitempty"`
	ShowBrowserJoinLink        *bool   `json:"show_browser_join_link,omitempty"`
	ShowMeetingControlToolbar  *bool   `json:"show_meeting_control_toolbar,omitempty"`
	StereoAudio                *bool   `json:"stereo_audio,omitempty"`
	UseHTMLFormatEmail         *bool   `json:"use_html_format_email,omitempty"`
	VirtualBackground          *bool   `json:"virtual_background,omitempty"`
	WaitingRoom                *bool   `json:"waiting_room,omitempty"`
	Whiteboard                 *bool   `json:"whiteboard,omitempty"`
}

// GroupLockedSettingsMultipartFormData1RecordingIPAddressAccessControl
// Setting to allow cloud recording access only from specific IP address ranges.
type GroupLockedSettingsMultipartFormData1RecordingIPAddressAccessControl struct {
	Enable              *bool   `json:"enable,omitempty"`
	IPAddressesOrRanges *string `json:"ip_addresses_or_ranges,omitempty"`
}

type GroupLockedSettingsMultipartFormData1Recording struct {
	AccountUserAccessRecording *bool                                                                 `json:"account_user_access_recording,omitempty"`
	AutoDeleteCmr              *bool                                                                 `json:"auto_delete_cmr,omitempty"`
	AutoRecording              *string                                                               `json:"auto_recording,omitempty"`
	CloudRecording             *bool                                                                 `json:"cloud_recording,omitempty"`
	CloudRecordingDownload     *bool                                                                 `json:"cloud_recording_download,omitempty"`
	HostDeleteCloudRecording   *bool                                                                 `json:"host_delete_cloud_recording,omitempty"`
	IPAddressAccessControl     *GroupLockedSettingsMultipartFormData1RecordingIPAddressAccessControl `json:"ip_address_access_control,omitempty"`
	LocalRecording             *bool                                                                 `json:"local_recording,omitempty"`
	RecordingAuthentication    *string                                                               `json:"recording_authentication,omitempty"`
}

type GroupLockedSettingsMultipartFormData1ScheduleMeeting struct {
	AudioType                               *bool `json:"audio_type,omitempty"`
	EmbedPasswordInJoinLink                 *bool `json:"embed_password_in_join_link,omitempty"`
	ForcePmiJbhPassword                     *bool `json:"force_pmi_jbh_password,omitempty"`
	HostVideo                               *bool `json:"host_video,omitempty"`
	JoinBeforeHost                          *bool `json:"join_before_host,omitempty"`
	MeetingAuthentication                   *bool `json:"meeting_authentication,omitempty"`
	MuteUponEntry                           *bool `json:"mute_upon_entry,omitempty"`
	ParticipantVideo                        *bool `json:"participant_video,omitempty"`
	PersonalMeeting                         *bool `json:"personal_meeting,omitempty"`
	PstnPasswordProtected                   *bool `json:"pstn_password_protected,omitempty"`
	RequirePasswordForInstantMeetings       *bool `json:"require_password_for_instant_meetings,omitempty"`
	RequirePasswordForPmiMeetings           *bool `json:"require_password_for_pmi_meetings,omitempty"`
	RequirePasswordForSchedulingNewMeetings *bool `json:"require_password_for_scheduling_new_meetings,omitempty"`
	UpcomingMeetingReminder                 *bool `json:"upcoming_meeting_reminder,omitempty"`
}

type GroupLockedSettingsMultipartFormData1Telephony struct {
	TelephonyRegions *bool `json:"telephony_regions,omitempty"`
	ThirdPartyAudio  *bool `json:"third_party_audio,omitempty"`
}

type GroupLockedSettingsMultipartFormData1 struct {
	EmailNotification *GroupLockedSettingsMultipartFormData1EmailNotification `multipartForm:"name=email_notification,json"`
	InMeeting         *GroupLockedSettingsMultipartFormData1InMeeting         `multipartForm:"name=in_meeting,json"`
	Recording         *GroupLockedSettingsMultipartFormData1Recording         `multipartForm:"name=recording,json"`
	ScheduleMeeting   *GroupLockedSettingsMultipartFormData1ScheduleMeeting   `multipartForm:"name=schedule_meeting,json"`
	Telephony         *GroupLockedSettingsMultipartFormData1Telephony         `multipartForm:"name=telephony,json"`
}

type GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum string

const (
	GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumEnhancedEncryption GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "enhanced_encryption"
	GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumE2ee               GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "e2ee"
)

// GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
// Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

// GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
// Specify the settings to be applied if waiting room is enabled.
type GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings struct {
	ParticipantsToPlaceInWaitingRoom            *int64  `json:"participants_to_place_in_waiting_room,omitempty"`
	UsersWhoCanAdmitParticipantsFromWaitingRoom *int64  `json:"users_who_can_admit_participants_from_waiting_room,omitempty"`
	WhitelistedDomainsForWaitingRoom            *string `json:"whitelisted_domains_for_waiting_room,omitempty"`
}

type GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity struct {
	AutoSecurity                       *bool                                                                                                        `json:"auto_security,omitempty"`
	EmbedPasswordInJoinLink            *bool                                                                                                        `json:"embed_password_in_join_link,omitempty"`
	EncryptionType                     *GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum         `json:"encryption_type,omitempty"`
	EndToEndEncryptedMeetings          *bool                                                                                                        `json:"end_to_end_encrypted_meetings,omitempty"`
	MeetingPassword                    *bool                                                                                                        `json:"meeting_password,omitempty"`
	MeetingPasswordRequirement         *GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement `json:"meeting_password_requirement,omitempty"`
	PhonePassword                      *bool                                                                                                        `json:"phone_password,omitempty"`
	PmiPassword                        *bool                                                                                                        `json:"pmi_password,omitempty"`
	RequirePasswordForScheduledMeeting *bool                                                                                                        `json:"require_password_for_scheduled_meeting,omitempty"`
	RequirePasswordForScheduledWebinar *bool                                                                                                        `json:"require_password_for_scheduled_webinar,omitempty"`
	WaitingRoom                        *bool                                                                                                        `json:"waiting_room,omitempty"`
	WaitingRoomSettings                *GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings        `json:"waiting_room_settings,omitempty"`
	WebinarPassword                    *bool                                                                                                        `json:"webinar_password,omitempty"`
}

type GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings struct {
	MeetingSecurity *GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity `multipartForm:"name=meeting_security,json"`
}

type GroupLockedSettingsRequests struct {
	OneOf  *interface{} `request:"mediaType=application/json"`
	OneOf1 *interface{} `request:"mediaType=multipart/form-data"`
}

type GroupLockedSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GroupLockedSettingsRequest struct {
	PathParams  GroupLockedSettingsPathParams
	QueryParams GroupLockedSettingsQueryParams
	Request     *GroupLockedSettingsRequests
	Security    GroupLockedSettingsSecurity
}

type GroupLockedSettingsResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	GroupLockedSettings204ApplicationJSONAny *interface{}
}
