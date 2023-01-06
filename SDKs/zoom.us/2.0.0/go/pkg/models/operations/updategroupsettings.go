package operations

type UpdateGroupSettingsPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type UpdateGroupSettingsOptionEnum string

const (
	UpdateGroupSettingsOptionEnumMeetingAuthentication   UpdateGroupSettingsOptionEnum = "meeting_authentication"
	UpdateGroupSettingsOptionEnumRecordingAuthentication UpdateGroupSettingsOptionEnum = "recording_authentication"
	UpdateGroupSettingsOptionEnumMeetingSecurity         UpdateGroupSettingsOptionEnum = "meeting_security"
)

type UpdateGroupSettingsQueryParams struct {
	CustomQueryFields *string                        `queryParam:"style=form,explode=true,name=custom_query_fields"`
	Option            *UpdateGroupSettingsOptionEnum `queryParam:"style=form,explode=true,name=option"`
}

type UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum string

const (
	UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumEnhancedEncryption UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "enhanced_encryption"
	UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumE2ee               UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "e2ee"
)

// UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
// Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

// UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
// Specify the settings to be applied if waiting room is enabled.
type UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings struct {
	ParticipantsToPlaceInWaitingRoom            *int64  `json:"participants_to_place_in_waiting_room,omitempty"`
	UsersWhoCanAdmitParticipantsFromWaitingRoom *int64  `json:"users_who_can_admit_participants_from_waiting_room,omitempty"`
	WhitelistedDomainsForWaitingRoom            *string `json:"whitelisted_domains_for_waiting_room,omitempty"`
}

type UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity struct {
	AutoSecurity                       *bool                                                                                                      `json:"auto_security,omitempty"`
	EmbedPasswordInJoinLink            *bool                                                                                                      `json:"embed_password_in_join_link,omitempty"`
	EncryptionType                     *UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum         `json:"encryption_type,omitempty"`
	EndToEndEncryptedMeetings          *bool                                                                                                      `json:"end_to_end_encrypted_meetings,omitempty"`
	MeetingPassword                    *bool                                                                                                      `json:"meeting_password,omitempty"`
	MeetingPasswordRequirement         *UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement `json:"meeting_password_requirement,omitempty"`
	PhonePassword                      *bool                                                                                                      `json:"phone_password,omitempty"`
	PmiPassword                        *bool                                                                                                      `json:"pmi_password,omitempty"`
	RequirePasswordForScheduledMeeting *bool                                                                                                      `json:"require_password_for_scheduled_meeting,omitempty"`
	RequirePasswordForScheduledWebinar *bool                                                                                                      `json:"require_password_for_scheduled_webinar,omitempty"`
	WaitingRoom                        *bool                                                                                                      `json:"waiting_room,omitempty"`
	WaitingRoomSettings                *UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings        `json:"waiting_room_settings,omitempty"`
	WebinarPassword                    *bool                                                                                                      `json:"webinar_password,omitempty"`
}

type UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettings struct {
	MeetingSecurity *UpdateGroupSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity `json:"meeting_security,omitempty"`
}

type UpdateGroupSettingsApplicationJSON3EmailNotification struct {
	AlternativeHostReminder         *bool `json:"alternative_host_reminder,omitempty"`
	CancelMeetingReminder           *bool `json:"cancel_meeting_reminder,omitempty"`
	CloudRecordingAvailableReminder *bool `json:"cloud_recording_available_reminder,omitempty"`
	JbhReminder                     *bool `json:"jbh_reminder,omitempty"`
	ScheduleForHostReminder         *bool `json:"schedule_for_host_reminder,omitempty"`
}

type UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenEnum string

const (
	UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenEnumHost UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenEnum = "host"
	UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenEnumAll  UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenEnum = "all"
)

type UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum string

const (
	UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumHost UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "host"
	UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumAll  UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "all"
)

type UpdateGroupSettingsApplicationJSON3InMeeting struct {
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
	WaitingRoom                           *bool                                                                                  `json:"waiting_room,omitempty"`
	Whiteboard                            *bool                                                                                  `json:"whiteboard,omitempty"`
	WhoCanShareScreen                     *UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenEnum                     `json:"who_can_share_screen,omitempty"`
	WhoCanShareScreenWhenSomeoneIsSharing *UpdateGroupSettingsApplicationJSON3InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum `json:"who_can_share_screen_when_someone_is_sharing,omitempty"`
}

type UpdateGroupSettingsApplicationJSON3ProfileRecordingStorageLocation struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	Value         *string  `json:"value,omitempty"`
}

type UpdateGroupSettingsApplicationJSON3Profile struct {
	RecordingStorageLocation *UpdateGroupSettingsApplicationJSON3ProfileRecordingStorageLocation `json:"recording_storage_location,omitempty"`
}

type UpdateGroupSettingsApplicationJSON3RecordingArchiveSettings struct {
	AudioFile           *bool `json:"audio_file,omitempty"`
	CcTranscriptFile    *bool `json:"cc_transcript_file,omitempty"`
	ChatFile            *bool `json:"chat_file,omitempty"`
	ChatWithSenderEmail *bool `json:"chat_with_sender_email,omitempty"`
	VideoFile           *bool `json:"video_file,omitempty"`
}

// UpdateGroupSettingsApplicationJSON3RecordingArchive
// [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
type UpdateGroupSettingsApplicationJSON3RecordingArchive struct {
	Enable   *bool                                                        `json:"enable,omitempty"`
	Settings *UpdateGroupSettingsApplicationJSON3RecordingArchiveSettings `json:"settings,omitempty"`
	Type     *int64                                                       `json:"type,omitempty"`
}

// UpdateGroupSettingsApplicationJSON3RecordingIPAddressAccessControl
// Setting to allow cloud recording access only from specific IP address ranges.
type UpdateGroupSettingsApplicationJSON3RecordingIPAddressAccessControl struct {
	Enable              *bool   `json:"enable,omitempty"`
	IPAddressesOrRanges *string `json:"ip_addresses_or_ranges,omitempty"`
}

type UpdateGroupSettingsApplicationJSON3Recording struct {
	AccountUserAccessRecording *bool                                                               `json:"account_user_access_recording,omitempty"`
	Archive                    *UpdateGroupSettingsApplicationJSON3RecordingArchive                `json:"archive,omitempty"`
	AutoRecording              *string                                                             `json:"auto_recording,omitempty"`
	CloudRecording             *bool                                                               `json:"cloud_recording,omitempty"`
	CloudRecordingDownload     *bool                                                               `json:"cloud_recording_download,omitempty"`
	CloudRecordingDownloadHost *bool                                                               `json:"cloud_recording_download_host,omitempty"`
	HostDeleteCloudRecording   *bool                                                               `json:"host_delete_cloud_recording,omitempty"`
	IPAddressAccessControl     *UpdateGroupSettingsApplicationJSON3RecordingIPAddressAccessControl `json:"ip_address_access_control,omitempty"`
	LocalRecording             *bool                                                               `json:"local_recording,omitempty"`
	PreventHostAccessRecording *bool                                                               `json:"prevent_host_access_recording,omitempty"`
	RecordAudioFile            *bool                                                               `json:"record_audio_file,omitempty"`
	RecordGalleryView          *bool                                                               `json:"record_gallery_view,omitempty"`
	RecordSpeakerView          *bool                                                               `json:"record_speaker_view,omitempty"`
	RecordingAudioTranscript   *bool                                                               `json:"recording_audio_transcript,omitempty"`
	SaveChatText               *bool                                                               `json:"save_chat_text,omitempty"`
	ShowTimestamp              *bool                                                               `json:"show_timestamp,omitempty"`
}

type UpdateGroupSettingsApplicationJSON3ScheduleMeetingRequirePasswordForPmiMeetingsEnum string

const (
	UpdateGroupSettingsApplicationJSON3ScheduleMeetingRequirePasswordForPmiMeetingsEnumAll     UpdateGroupSettingsApplicationJSON3ScheduleMeetingRequirePasswordForPmiMeetingsEnum = "all"
	UpdateGroupSettingsApplicationJSON3ScheduleMeetingRequirePasswordForPmiMeetingsEnumJbhOnly UpdateGroupSettingsApplicationJSON3ScheduleMeetingRequirePasswordForPmiMeetingsEnum = "jbh_only"
	UpdateGroupSettingsApplicationJSON3ScheduleMeetingRequirePasswordForPmiMeetingsEnumNone    UpdateGroupSettingsApplicationJSON3ScheduleMeetingRequirePasswordForPmiMeetingsEnum = "none"
)

type UpdateGroupSettingsApplicationJSON3ScheduleMeeting struct {
	AudioType                               *string                                                                              `json:"audio_type,omitempty"`
	EmbedPasswordInJoinLink                 *bool                                                                                `json:"embed_password_in_join_link,omitempty"`
	ForcePmiJbhPassword                     *bool                                                                                `json:"force_pmi_jbh_password,omitempty"`
	HostVideo                               *bool                                                                                `json:"host_video,omitempty"`
	JoinBeforeHost                          *bool                                                                                `json:"join_before_host,omitempty"`
	MuteUponEntry                           *bool                                                                                `json:"mute_upon_entry,omitempty"`
	ParticipantVideo                        *bool                                                                                `json:"participant_video,omitempty"`
	PstnPasswordProtected                   *bool                                                                                `json:"pstn_password_protected,omitempty"`
	RequirePasswordForAllMeetings           *bool                                                                                `json:"require_password_for_all_meetings,omitempty"`
	RequirePasswordForInstantMeetings       *bool                                                                                `json:"require_password_for_instant_meetings,omitempty"`
	RequirePasswordForPmiMeetings           *UpdateGroupSettingsApplicationJSON3ScheduleMeetingRequirePasswordForPmiMeetingsEnum `json:"require_password_for_pmi_meetings,omitempty"`
	RequirePasswordForScheduledMeetings     *bool                                                                                `json:"require_password_for_scheduled_meetings,omitempty"`
	RequirePasswordForSchedulingNewMeetings *bool                                                                                `json:"require_password_for_scheduling_new_meetings,omitempty"`
	UpcomingMeetingReminder                 *bool                                                                                `json:"upcoming_meeting_reminder,omitempty"`
}

type UpdateGroupSettingsApplicationJSON3Telephony struct {
	AudioConferenceInfo *string `json:"audio_conference_info,omitempty"`
	ThirdPartyAudio     *bool   `json:"third_party_audio,omitempty"`
}

type UpdateGroupSettingsApplicationJSON3 struct {
	EmailNotification *UpdateGroupSettingsApplicationJSON3EmailNotification `json:"email_notification,omitempty"`
	InMeeting         *UpdateGroupSettingsApplicationJSON3InMeeting         `json:"in_meeting,omitempty"`
	Profile           *UpdateGroupSettingsApplicationJSON3Profile           `json:"profile,omitempty"`
	Recording         *UpdateGroupSettingsApplicationJSON3Recording         `json:"recording,omitempty"`
	ScheduleMeeting   *UpdateGroupSettingsApplicationJSON3ScheduleMeeting   `json:"schedule_meeting,omitempty"`
	Telephony         *UpdateGroupSettingsApplicationJSON3Telephony         `json:"telephony,omitempty"`
}

type UpdateGroupSettingsMultipartFormData1EmailNotification struct {
	AlternativeHostReminder         *bool `json:"alternative_host_reminder,omitempty"`
	CancelMeetingReminder           *bool `json:"cancel_meeting_reminder,omitempty"`
	CloudRecordingAvailableReminder *bool `json:"cloud_recording_available_reminder,omitempty"`
	JbhReminder                     *bool `json:"jbh_reminder,omitempty"`
	ScheduleForHostReminder         *bool `json:"schedule_for_host_reminder,omitempty"`
}

type UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum string

const (
	UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnumHost UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum = "host"
	UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnumAll  UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum = "all"
)

type UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum string

const (
	UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumHost UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "host"
	UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnumAll  UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = "all"
)

type UpdateGroupSettingsMultipartFormData1InMeeting struct {
	AlertGuestJoin                        *bool                                                                                    `json:"alert_guest_join,omitempty"`
	AllowShowZoomWindows                  *bool                                                                                    `json:"allow_show_zoom_windows,omitempty"`
	Annotation                            *bool                                                                                    `json:"annotation,omitempty"`
	AttendeeOnHold                        *bool                                                                                    `json:"attendee_on_hold,omitempty"`
	AutoAnswer                            *bool                                                                                    `json:"auto_answer,omitempty"`
	AutoSavingChat                        *bool                                                                                    `json:"auto_saving_chat,omitempty"`
	BreakoutRoom                          *bool                                                                                    `json:"breakout_room,omitempty"`
	Chat                                  *bool                                                                                    `json:"chat,omitempty"`
	ClosedCaption                         *bool                                                                                    `json:"closed_caption,omitempty"`
	CoHost                                *bool                                                                                    `json:"co_host,omitempty"`
	CustomDataCenterRegions               *bool                                                                                    `json:"custom_data_center_regions,omitempty"`
	DataCenterRegions                     []string                                                                                 `json:"data_center_regions,omitempty"`
	E2eEncryption                         *bool                                                                                    `json:"e2e_encryption,omitempty"`
	EntryExitChime                        *string                                                                                  `json:"entry_exit_chime,omitempty"`
	FarEndCameraControl                   *bool                                                                                    `json:"far_end_camera_control,omitempty"`
	Feedback                              *bool                                                                                    `json:"feedback,omitempty"`
	FileTransfer                          *bool                                                                                    `json:"file_transfer,omitempty"`
	GroupHd                               *bool                                                                                    `json:"group_hd,omitempty"`
	NonVerbalFeedback                     *bool                                                                                    `json:"non_verbal_feedback,omitempty"`
	OnlyHostViewDeviceList                *bool                                                                                    `json:"only_host_view_device_list,omitempty"`
	OriginalAudio                         *bool                                                                                    `json:"original_audio,omitempty"`
	Polling                               *bool                                                                                    `json:"polling,omitempty"`
	PostMeetingFeedback                   *bool                                                                                    `json:"post_meeting_feedback,omitempty"`
	PrivateChat                           *bool                                                                                    `json:"private_chat,omitempty"`
	RecordPlayOwnVoice                    *bool                                                                                    `json:"record_play_own_voice,omitempty"`
	RemoteControl                         *bool                                                                                    `json:"remote_control,omitempty"`
	RemoteSupport                         *bool                                                                                    `json:"remote_support,omitempty"`
	RequestPermissionToUnmute             *bool                                                                                    `json:"request_permission_to_unmute,omitempty"`
	ScreenSharing                         *bool                                                                                    `json:"screen_sharing,omitempty"`
	SendingDefaultEmailInvites            *bool                                                                                    `json:"sending_default_email_invites,omitempty"`
	ShowBrowserJoinLink                   *bool                                                                                    `json:"show_browser_join_link,omitempty"`
	ShowDeviceList                        *bool                                                                                    `json:"show_device_list,omitempty"`
	ShowMeetingControlToolbar             *bool                                                                                    `json:"show_meeting_control_toolbar,omitempty"`
	StereoAudio                           *bool                                                                                    `json:"stereo_audio,omitempty"`
	UseHTMLFormatEmail                    *bool                                                                                    `json:"use_html_format_email,omitempty"`
	VirtualBackground                     *bool                                                                                    `json:"virtual_background,omitempty"`
	WaitingRoom                           *bool                                                                                    `json:"waiting_room,omitempty"`
	Whiteboard                            *bool                                                                                    `json:"whiteboard,omitempty"`
	WhoCanShareScreen                     *UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum                     `json:"who_can_share_screen,omitempty"`
	WhoCanShareScreenWhenSomeoneIsSharing *UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum `json:"who_can_share_screen_when_someone_is_sharing,omitempty"`
}

type UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	Value         *string  `json:"value,omitempty"`
}

type UpdateGroupSettingsMultipartFormData1Profile struct {
	RecordingStorageLocation *UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation `json:"recording_storage_location,omitempty"`
}

type UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings struct {
	AudioFile           *bool `json:"audio_file,omitempty"`
	CcTranscriptFile    *bool `json:"cc_transcript_file,omitempty"`
	ChatFile            *bool `json:"chat_file,omitempty"`
	ChatWithSenderEmail *bool `json:"chat_with_sender_email,omitempty"`
	VideoFile           *bool `json:"video_file,omitempty"`
}

// UpdateGroupSettingsMultipartFormData1RecordingArchive
// [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
type UpdateGroupSettingsMultipartFormData1RecordingArchive struct {
	Enable   *bool                                                          `json:"enable,omitempty"`
	Settings *UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings `json:"settings,omitempty"`
	Type     *int64                                                         `json:"type,omitempty"`
}

// UpdateGroupSettingsMultipartFormData1RecordingIPAddressAccessControl
// Setting to allow cloud recording access only from specific IP address ranges.
type UpdateGroupSettingsMultipartFormData1RecordingIPAddressAccessControl struct {
	Enable              *bool   `json:"enable,omitempty"`
	IPAddressesOrRanges *string `json:"ip_addresses_or_ranges,omitempty"`
}

type UpdateGroupSettingsMultipartFormData1Recording struct {
	AccountUserAccessRecording *bool                                                                 `json:"account_user_access_recording,omitempty"`
	Archive                    *UpdateGroupSettingsMultipartFormData1RecordingArchive                `json:"archive,omitempty"`
	AutoRecording              *string                                                               `json:"auto_recording,omitempty"`
	CloudRecording             *bool                                                                 `json:"cloud_recording,omitempty"`
	CloudRecordingDownload     *bool                                                                 `json:"cloud_recording_download,omitempty"`
	CloudRecordingDownloadHost *bool                                                                 `json:"cloud_recording_download_host,omitempty"`
	HostDeleteCloudRecording   *bool                                                                 `json:"host_delete_cloud_recording,omitempty"`
	IPAddressAccessControl     *UpdateGroupSettingsMultipartFormData1RecordingIPAddressAccessControl `json:"ip_address_access_control,omitempty"`
	LocalRecording             *bool                                                                 `json:"local_recording,omitempty"`
	PreventHostAccessRecording *bool                                                                 `json:"prevent_host_access_recording,omitempty"`
	RecordAudioFile            *bool                                                                 `json:"record_audio_file,omitempty"`
	RecordGalleryView          *bool                                                                 `json:"record_gallery_view,omitempty"`
	RecordSpeakerView          *bool                                                                 `json:"record_speaker_view,omitempty"`
	RecordingAudioTranscript   *bool                                                                 `json:"recording_audio_transcript,omitempty"`
	SaveChatText               *bool                                                                 `json:"save_chat_text,omitempty"`
	ShowTimestamp              *bool                                                                 `json:"show_timestamp,omitempty"`
}

type UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum string

const (
	UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnumAll     UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = "all"
	UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnumJbhOnly UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = "jbh_only"
	UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnumNone    UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = "none"
)

type UpdateGroupSettingsMultipartFormData1ScheduleMeeting struct {
	AudioType                               *string                                                                                `json:"audio_type,omitempty"`
	EmbedPasswordInJoinLink                 *bool                                                                                  `json:"embed_password_in_join_link,omitempty"`
	ForcePmiJbhPassword                     *bool                                                                                  `json:"force_pmi_jbh_password,omitempty"`
	HostVideo                               *bool                                                                                  `json:"host_video,omitempty"`
	JoinBeforeHost                          *bool                                                                                  `json:"join_before_host,omitempty"`
	MuteUponEntry                           *bool                                                                                  `json:"mute_upon_entry,omitempty"`
	ParticipantVideo                        *bool                                                                                  `json:"participant_video,omitempty"`
	PstnPasswordProtected                   *bool                                                                                  `json:"pstn_password_protected,omitempty"`
	RequirePasswordForAllMeetings           *bool                                                                                  `json:"require_password_for_all_meetings,omitempty"`
	RequirePasswordForInstantMeetings       *bool                                                                                  `json:"require_password_for_instant_meetings,omitempty"`
	RequirePasswordForPmiMeetings           *UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum `json:"require_password_for_pmi_meetings,omitempty"`
	RequirePasswordForScheduledMeetings     *bool                                                                                  `json:"require_password_for_scheduled_meetings,omitempty"`
	RequirePasswordForSchedulingNewMeetings *bool                                                                                  `json:"require_password_for_scheduling_new_meetings,omitempty"`
	UpcomingMeetingReminder                 *bool                                                                                  `json:"upcoming_meeting_reminder,omitempty"`
}

type UpdateGroupSettingsMultipartFormData1Telephony struct {
	AudioConferenceInfo *string `json:"audio_conference_info,omitempty"`
	ThirdPartyAudio     *bool   `json:"third_party_audio,omitempty"`
}

type UpdateGroupSettingsMultipartFormData1 struct {
	EmailNotification *UpdateGroupSettingsMultipartFormData1EmailNotification `multipartForm:"name=email_notification,json"`
	InMeeting         *UpdateGroupSettingsMultipartFormData1InMeeting         `multipartForm:"name=in_meeting,json"`
	Profile           *UpdateGroupSettingsMultipartFormData1Profile           `multipartForm:"name=profile,json"`
	Recording         *UpdateGroupSettingsMultipartFormData1Recording         `multipartForm:"name=recording,json"`
	ScheduleMeeting   *UpdateGroupSettingsMultipartFormData1ScheduleMeeting   `multipartForm:"name=schedule_meeting,json"`
	Telephony         *UpdateGroupSettingsMultipartFormData1Telephony         `multipartForm:"name=telephony,json"`
}

type UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum string

const (
	UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumEnhancedEncryption UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "enhanced_encryption"
	UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnumE2ee               UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = "e2ee"
)

// UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
// Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
type UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement struct {
	ConsecutiveCharactersLength *int64 `json:"consecutive_characters_length,omitempty"`
	HaveLetter                  *bool  `json:"have_letter,omitempty"`
	HaveNumber                  *bool  `json:"have_number,omitempty"`
	HaveSpecialCharacter        *bool  `json:"have_special_character,omitempty"`
	HaveUpperAndLowerCharacters *bool  `json:"have_upper_and_lower_characters,omitempty"`
	Length                      *int64 `json:"length,omitempty"`
	OnlyAllowNumeric            *bool  `json:"only_allow_numeric,omitempty"`
	WeakEnhanceDetection        *bool  `json:"weak_enhance_detection,omitempty"`
}

// UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
// Specify the settings to be applied if waiting room is enabled.
type UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings struct {
	ParticipantsToPlaceInWaitingRoom            *int64  `json:"participants_to_place_in_waiting_room,omitempty"`
	UsersWhoCanAdmitParticipantsFromWaitingRoom *int64  `json:"users_who_can_admit_participants_from_waiting_room,omitempty"`
	WhitelistedDomainsForWaitingRoom            *string `json:"whitelisted_domains_for_waiting_room,omitempty"`
}

type UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity struct {
	AutoSecurity                       *bool                                                                                                        `json:"auto_security,omitempty"`
	EmbedPasswordInJoinLink            *bool                                                                                                        `json:"embed_password_in_join_link,omitempty"`
	EncryptionType                     *UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum         `json:"encryption_type,omitempty"`
	EndToEndEncryptedMeetings          *bool                                                                                                        `json:"end_to_end_encrypted_meetings,omitempty"`
	MeetingPassword                    *bool                                                                                                        `json:"meeting_password,omitempty"`
	MeetingPasswordRequirement         *UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement `json:"meeting_password_requirement,omitempty"`
	PhonePassword                      *bool                                                                                                        `json:"phone_password,omitempty"`
	PmiPassword                        *bool                                                                                                        `json:"pmi_password,omitempty"`
	RequirePasswordForScheduledMeeting *bool                                                                                                        `json:"require_password_for_scheduled_meeting,omitempty"`
	RequirePasswordForScheduledWebinar *bool                                                                                                        `json:"require_password_for_scheduled_webinar,omitempty"`
	WaitingRoom                        *bool                                                                                                        `json:"waiting_room,omitempty"`
	WaitingRoomSettings                *UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings        `json:"waiting_room_settings,omitempty"`
	WebinarPassword                    *bool                                                                                                        `json:"webinar_password,omitempty"`
}

type UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings struct {
	MeetingSecurity *UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity `multipartForm:"name=meeting_security,json"`
}

type UpdateGroupSettingsRequests struct {
	OneOf  *interface{} `request:"mediaType=application/json"`
	OneOf1 *interface{} `request:"mediaType=multipart/form-data"`
}

type UpdateGroupSettingsRequest struct {
	PathParams  UpdateGroupSettingsPathParams
	QueryParams UpdateGroupSettingsQueryParams
	Request     *UpdateGroupSettingsRequests
}

type UpdateGroupSettingsResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	UpdateGroupSettings204ApplicationJSONAny *interface{}
}
