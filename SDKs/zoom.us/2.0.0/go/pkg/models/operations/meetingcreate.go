package operations

import (
	"time"
)

type MeetingCreatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum string

const (
	MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnumOne   MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum = "1"
	MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnumTwo   MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum = "2"
	MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnumThree MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum = "3"
	MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnumFour  MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum = "4"
	MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnumFive  MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum = "5"
	MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnumSix   MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum = "6"
	MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnumSeven MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum = "7"
)

// MeetingCreateApplicationJSONRecurrence
// Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
type MeetingCreateApplicationJSONRecurrence struct {
	EndDateTime    *time.Time                                            `json:"end_date_time,omitempty"`
	EndTimes       *int64                                                `json:"end_times,omitempty"`
	MonthlyDay     *int64                                                `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64                                                `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64                                                `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64                                                `json:"repeat_interval,omitempty"`
	Type           int64                                                 `json:"type"`
	WeeklyDays     *MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum `json:"weekly_days,omitempty"`
}

type MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum string

const (
	MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumApprove MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "approve"
	MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumDeny    MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "deny"
)

// MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions
// Approve or block users from specific regions/countries from joining this meeting.
type MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions struct {
	ApprovedList []string                                                                          `json:"approved_list,omitempty"`
	DeniedList   []string                                                                          `json:"denied_list,omitempty"`
	Enable       *bool                                                                             `json:"enable,omitempty"`
	Method       *MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum `json:"method,omitempty"`
}

type MeetingCreateApplicationJSONSettingsAudioEnum string

const (
	MeetingCreateApplicationJSONSettingsAudioEnumBoth      MeetingCreateApplicationJSONSettingsAudioEnum = "both"
	MeetingCreateApplicationJSONSettingsAudioEnumTelephony MeetingCreateApplicationJSONSettingsAudioEnum = "telephony"
	MeetingCreateApplicationJSONSettingsAudioEnumVoip      MeetingCreateApplicationJSONSettingsAudioEnum = "voip"
)

type MeetingCreateApplicationJSONSettingsAutoRecordingEnum string

const (
	MeetingCreateApplicationJSONSettingsAutoRecordingEnumLocal MeetingCreateApplicationJSONSettingsAutoRecordingEnum = "local"
	MeetingCreateApplicationJSONSettingsAutoRecordingEnumCloud MeetingCreateApplicationJSONSettingsAutoRecordingEnum = "cloud"
	MeetingCreateApplicationJSONSettingsAutoRecordingEnumNone  MeetingCreateApplicationJSONSettingsAutoRecordingEnum = "none"
)

type MeetingCreateApplicationJSONSettingsBreakoutRoomRooms struct {
	Name         *string  `json:"name,omitempty"`
	Participants []string `json:"participants,omitempty"`
}

// MeetingCreateApplicationJSONSettingsBreakoutRoom
// Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
type MeetingCreateApplicationJSONSettingsBreakoutRoom struct {
	Enable *bool                                                   `json:"enable,omitempty"`
	Rooms  []MeetingCreateApplicationJSONSettingsBreakoutRoomRooms `json:"rooms,omitempty"`
}

type MeetingCreateApplicationJSONSettingsEncryptionTypeEnum string

const (
	MeetingCreateApplicationJSONSettingsEncryptionTypeEnumEnhancedEncryption MeetingCreateApplicationJSONSettingsEncryptionTypeEnum = "enhanced_encryption"
	MeetingCreateApplicationJSONSettingsEncryptionTypeEnumE2ee               MeetingCreateApplicationJSONSettingsEncryptionTypeEnum = "e2ee"
)

type MeetingCreateApplicationJSONSettingsLanguageInterpretationInterpreters struct {
	Email     *string `json:"email,omitempty"`
	Languages *string `json:"languages,omitempty"`
}

// MeetingCreateApplicationJSONSettingsLanguageInterpretation
// Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings.
//
// **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
type MeetingCreateApplicationJSONSettingsLanguageInterpretation struct {
	Enable       *bool                                                                    `json:"enable,omitempty"`
	Interpreters []MeetingCreateApplicationJSONSettingsLanguageInterpretationInterpreters `json:"interpreters,omitempty"`
}

// MeetingCreateApplicationJSONSettings
// Meeting settings.
type MeetingCreateApplicationJSONSettings struct {
	AdditionalDataCenterRegions        []string                                                                `json:"additional_data_center_regions,omitempty"`
	AllowMultipleDevices               *bool                                                                   `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                   *string                                                                 `json:"alternative_hosts,omitempty"`
	AlternativeHostsEmailNotification  *bool                                                                   `json:"alternative_hosts_email_notification,omitempty"`
	ApprovalType                       *int64                                                                  `json:"approval_type,omitempty"`
	ApprovedOrDeniedCountriesOrRegions *MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions `json:"approved_or_denied_countries_or_regions,omitempty"`
	Audio                              *MeetingCreateApplicationJSONSettingsAudioEnum                          `json:"audio,omitempty"`
	AuthenticationDomains              *string                                                                 `json:"authentication_domains,omitempty"`
	AuthenticationOption               *string                                                                 `json:"authentication_option,omitempty"`
	AutoRecording                      *MeetingCreateApplicationJSONSettingsAutoRecordingEnum                  `json:"auto_recording,omitempty"`
	BreakoutRoom                       *MeetingCreateApplicationJSONSettingsBreakoutRoom                       `json:"breakout_room,omitempty"`
	CloseRegistration                  *bool                                                                   `json:"close_registration,omitempty"`
	CnMeeting                          *bool                                                                   `json:"cn_meeting,omitempty"`
	ContactEmail                       *string                                                                 `json:"contact_email,omitempty"`
	ContactName                        *string                                                                 `json:"contact_name,omitempty"`
	EncryptionType                     *MeetingCreateApplicationJSONSettingsEncryptionTypeEnum                 `json:"encryption_type,omitempty"`
	GlobalDialInCountries              []string                                                                `json:"global_dial_in_countries,omitempty"`
	HostVideo                          *bool                                                                   `json:"host_video,omitempty"`
	InMeeting                          *bool                                                                   `json:"in_meeting,omitempty"`
	JbhTime                            *int64                                                                  `json:"jbh_time,omitempty"`
	JoinBeforeHost                     *bool                                                                   `json:"join_before_host,omitempty"`
	LanguageInterpretation             *MeetingCreateApplicationJSONSettingsLanguageInterpretation             `json:"language_interpretation,omitempty"`
	MeetingAuthentication              *bool                                                                   `json:"meeting_authentication,omitempty"`
	MuteUponEntry                      *bool                                                                   `json:"mute_upon_entry,omitempty"`
	ParticipantVideo                   *bool                                                                   `json:"participant_video,omitempty"`
	RegistrantsEmailNotification       *bool                                                                   `json:"registrants_email_notification,omitempty"`
	RegistrationType                   *int64                                                                  `json:"registration_type,omitempty"`
	ShowShareButton                    *bool                                                                   `json:"show_share_button,omitempty"`
	UsePmi                             *bool                                                                   `json:"use_pmi,omitempty"`
	WaitingRoom                        *bool                                                                   `json:"waiting_room,omitempty"`
	Watermark                          *bool                                                                   `json:"watermark,omitempty"`
}

type MeetingCreateApplicationJSONTrackingFields struct {
	Field string  `json:"field"`
	Value *string `json:"value,omitempty"`
}

// MeetingCreateApplicationJSON
// Base object for meeting.
type MeetingCreateApplicationJSON struct {
	Agenda         *string                                      `json:"agenda,omitempty"`
	Duration       *int64                                       `json:"duration,omitempty"`
	Password       *string                                      `json:"password,omitempty"`
	Recurrence     *MeetingCreateApplicationJSONRecurrence      `json:"recurrence,omitempty"`
	ScheduleFor    *string                                      `json:"schedule_for,omitempty"`
	Settings       *MeetingCreateApplicationJSONSettings        `json:"settings,omitempty"`
	StartTime      *time.Time                                   `json:"start_time,omitempty"`
	TemplateID     *string                                      `json:"template_id,omitempty"`
	Timezone       *string                                      `json:"timezone,omitempty"`
	Topic          *string                                      `json:"topic,omitempty"`
	TrackingFields []MeetingCreateApplicationJSONTrackingFields `json:"tracking_fields,omitempty"`
	Type           *int64                                       `json:"type,omitempty"`
}

type MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum string

const (
	MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnumOne   MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum = "1"
	MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnumTwo   MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum = "2"
	MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnumThree MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum = "3"
	MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnumFour  MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum = "4"
	MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnumFive  MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum = "5"
	MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnumSix   MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum = "6"
	MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnumSeven MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum = "7"
)

// MeetingCreateMultipartFormDataRecurrence
// Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
type MeetingCreateMultipartFormDataRecurrence struct {
	EndDateTime    *time.Time                                              `json:"end_date_time,omitempty"`
	EndTimes       *int64                                                  `json:"end_times,omitempty"`
	MonthlyDay     *int64                                                  `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64                                                  `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64                                                  `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64                                                  `json:"repeat_interval,omitempty"`
	Type           int64                                                   `json:"type"`
	WeeklyDays     *MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum `json:"weekly_days,omitempty"`
}

type MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum string

const (
	MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumApprove MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "approve"
	MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumDeny    MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "deny"
)

// MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions
// Approve or block users from specific regions/countries from joining this meeting.
type MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions struct {
	ApprovedList []string                                                                            `json:"approved_list,omitempty"`
	DeniedList   []string                                                                            `json:"denied_list,omitempty"`
	Enable       *bool                                                                               `json:"enable,omitempty"`
	Method       *MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum `json:"method,omitempty"`
}

type MeetingCreateMultipartFormDataSettingsAudioEnum string

const (
	MeetingCreateMultipartFormDataSettingsAudioEnumBoth      MeetingCreateMultipartFormDataSettingsAudioEnum = "both"
	MeetingCreateMultipartFormDataSettingsAudioEnumTelephony MeetingCreateMultipartFormDataSettingsAudioEnum = "telephony"
	MeetingCreateMultipartFormDataSettingsAudioEnumVoip      MeetingCreateMultipartFormDataSettingsAudioEnum = "voip"
)

type MeetingCreateMultipartFormDataSettingsAutoRecordingEnum string

const (
	MeetingCreateMultipartFormDataSettingsAutoRecordingEnumLocal MeetingCreateMultipartFormDataSettingsAutoRecordingEnum = "local"
	MeetingCreateMultipartFormDataSettingsAutoRecordingEnumCloud MeetingCreateMultipartFormDataSettingsAutoRecordingEnum = "cloud"
	MeetingCreateMultipartFormDataSettingsAutoRecordingEnumNone  MeetingCreateMultipartFormDataSettingsAutoRecordingEnum = "none"
)

type MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms struct {
	Name         *string  `json:"name,omitempty"`
	Participants []string `json:"participants,omitempty"`
}

// MeetingCreateMultipartFormDataSettingsBreakoutRoom
// Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
type MeetingCreateMultipartFormDataSettingsBreakoutRoom struct {
	Enable *bool                                                     `json:"enable,omitempty"`
	Rooms  []MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms `json:"rooms,omitempty"`
}

type MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum string

const (
	MeetingCreateMultipartFormDataSettingsEncryptionTypeEnumEnhancedEncryption MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum = "enhanced_encryption"
	MeetingCreateMultipartFormDataSettingsEncryptionTypeEnumE2ee               MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum = "e2ee"
)

type MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters struct {
	Email     *string `json:"email,omitempty"`
	Languages *string `json:"languages,omitempty"`
}

// MeetingCreateMultipartFormDataSettingsLanguageInterpretation
// Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings.
//
// **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
type MeetingCreateMultipartFormDataSettingsLanguageInterpretation struct {
	Enable       *bool                                                                      `json:"enable,omitempty"`
	Interpreters []MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters `json:"interpreters,omitempty"`
}

// MeetingCreateMultipartFormDataSettings
// Meeting settings.
type MeetingCreateMultipartFormDataSettings struct {
	AdditionalDataCenterRegions        []string                                                                  `json:"additional_data_center_regions,omitempty"`
	AllowMultipleDevices               *bool                                                                     `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                   *string                                                                   `json:"alternative_hosts,omitempty"`
	AlternativeHostsEmailNotification  *bool                                                                     `json:"alternative_hosts_email_notification,omitempty"`
	ApprovalType                       *int64                                                                    `json:"approval_type,omitempty"`
	ApprovedOrDeniedCountriesOrRegions *MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions `json:"approved_or_denied_countries_or_regions,omitempty"`
	Audio                              *MeetingCreateMultipartFormDataSettingsAudioEnum                          `json:"audio,omitempty"`
	AuthenticationDomains              *string                                                                   `json:"authentication_domains,omitempty"`
	AuthenticationOption               *string                                                                   `json:"authentication_option,omitempty"`
	AutoRecording                      *MeetingCreateMultipartFormDataSettingsAutoRecordingEnum                  `json:"auto_recording,omitempty"`
	BreakoutRoom                       *MeetingCreateMultipartFormDataSettingsBreakoutRoom                       `json:"breakout_room,omitempty"`
	CloseRegistration                  *bool                                                                     `json:"close_registration,omitempty"`
	CnMeeting                          *bool                                                                     `json:"cn_meeting,omitempty"`
	ContactEmail                       *string                                                                   `json:"contact_email,omitempty"`
	ContactName                        *string                                                                   `json:"contact_name,omitempty"`
	EncryptionType                     *MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum                 `json:"encryption_type,omitempty"`
	GlobalDialInCountries              []string                                                                  `json:"global_dial_in_countries,omitempty"`
	HostVideo                          *bool                                                                     `json:"host_video,omitempty"`
	InMeeting                          *bool                                                                     `json:"in_meeting,omitempty"`
	JbhTime                            *int64                                                                    `json:"jbh_time,omitempty"`
	JoinBeforeHost                     *bool                                                                     `json:"join_before_host,omitempty"`
	LanguageInterpretation             *MeetingCreateMultipartFormDataSettingsLanguageInterpretation             `json:"language_interpretation,omitempty"`
	MeetingAuthentication              *bool                                                                     `json:"meeting_authentication,omitempty"`
	MuteUponEntry                      *bool                                                                     `json:"mute_upon_entry,omitempty"`
	ParticipantVideo                   *bool                                                                     `json:"participant_video,omitempty"`
	RegistrantsEmailNotification       *bool                                                                     `json:"registrants_email_notification,omitempty"`
	RegistrationType                   *int64                                                                    `json:"registration_type,omitempty"`
	ShowShareButton                    *bool                                                                     `json:"show_share_button,omitempty"`
	UsePmi                             *bool                                                                     `json:"use_pmi,omitempty"`
	WaitingRoom                        *bool                                                                     `json:"waiting_room,omitempty"`
	Watermark                          *bool                                                                     `json:"watermark,omitempty"`
}

type MeetingCreateMultipartFormDataTrackingFields struct {
	Field string  `json:"field"`
	Value *string `json:"value,omitempty"`
}

// MeetingCreateMultipartFormData1
// Base object for meeting.
type MeetingCreateMultipartFormData1 struct {
	Agenda         *string                                        `multipartForm:"name=agenda"`
	Duration       *int64                                         `multipartForm:"name=duration"`
	Password       *string                                        `multipartForm:"name=password"`
	Recurrence     *MeetingCreateMultipartFormDataRecurrence      `multipartForm:"name=recurrence,json"`
	ScheduleFor    *string                                        `multipartForm:"name=schedule_for"`
	Settings       *MeetingCreateMultipartFormDataSettings        `multipartForm:"name=settings,json"`
	StartTime      *time.Time                                     `multipartForm:"name=start_time"`
	TemplateID     *string                                        `multipartForm:"name=template_id"`
	Timezone       *string                                        `multipartForm:"name=timezone"`
	Topic          *string                                        `multipartForm:"name=topic"`
	TrackingFields []MeetingCreateMultipartFormDataTrackingFields `multipartForm:"name=tracking_fields,json"`
	Type           *int64                                         `multipartForm:"name=type"`
}

type MeetingCreateRequests struct {
	Object  *MeetingCreateApplicationJSON    `request:"mediaType=application/json"`
	Object1 *MeetingCreateMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

// MeetingCreate201ApplicationJSONOccurrences
// Occurence object. This object is only returned for Recurring Webinars.
type MeetingCreate201ApplicationJSONOccurrences struct {
	Duration     *int64     `json:"duration,omitempty"`
	OccurrenceID *string    `json:"occurrence_id,omitempty"`
	StartTime    *time.Time `json:"start_time,omitempty"`
	Status       *string    `json:"status,omitempty"`
}

type MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum string

const (
	MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnumOne   MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum = "1"
	MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnumTwo   MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum = "2"
	MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnumThree MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum = "3"
	MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnumFour  MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum = "4"
	MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnumFive  MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum = "5"
	MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnumSix   MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum = "6"
	MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnumSeven MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum = "7"
)

// MeetingCreate201ApplicationJSONRecurrence
// Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
type MeetingCreate201ApplicationJSONRecurrence struct {
	EndDateTime    *time.Time                                               `json:"end_date_time,omitempty"`
	EndTimes       *int64                                                   `json:"end_times,omitempty"`
	MonthlyDay     *int64                                                   `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64                                                   `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64                                                   `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64                                                   `json:"repeat_interval,omitempty"`
	Type           int64                                                    `json:"type"`
	WeeklyDays     *MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum `json:"weekly_days,omitempty"`
}

type MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum string

const (
	MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumApprove MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "approve"
	MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumDeny    MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "deny"
)

// MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions
// Approve or block users from specific regions/countries from joining this meeting.
type MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions struct {
	ApprovedList []string                                                                             `json:"approved_list,omitempty"`
	DeniedList   []string                                                                             `json:"denied_list,omitempty"`
	Enable       *bool                                                                                `json:"enable,omitempty"`
	Method       *MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum `json:"method,omitempty"`
}

type MeetingCreate201ApplicationJSONSettingsAudioEnum string

const (
	MeetingCreate201ApplicationJSONSettingsAudioEnumBoth      MeetingCreate201ApplicationJSONSettingsAudioEnum = "both"
	MeetingCreate201ApplicationJSONSettingsAudioEnumTelephony MeetingCreate201ApplicationJSONSettingsAudioEnum = "telephony"
	MeetingCreate201ApplicationJSONSettingsAudioEnumVoip      MeetingCreate201ApplicationJSONSettingsAudioEnum = "voip"
)

type MeetingCreate201ApplicationJSONSettingsAuthenticationException struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type MeetingCreate201ApplicationJSONSettingsAutoRecordingEnum string

const (
	MeetingCreate201ApplicationJSONSettingsAutoRecordingEnumLocal MeetingCreate201ApplicationJSONSettingsAutoRecordingEnum = "local"
	MeetingCreate201ApplicationJSONSettingsAutoRecordingEnumCloud MeetingCreate201ApplicationJSONSettingsAutoRecordingEnum = "cloud"
	MeetingCreate201ApplicationJSONSettingsAutoRecordingEnumNone  MeetingCreate201ApplicationJSONSettingsAutoRecordingEnum = "none"
)

type MeetingCreate201ApplicationJSONSettingsBreakoutRoomRooms struct {
	Name         *string  `json:"name,omitempty"`
	Participants []string `json:"participants,omitempty"`
}

// MeetingCreate201ApplicationJSONSettingsBreakoutRoom
// Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
type MeetingCreate201ApplicationJSONSettingsBreakoutRoom struct {
	Enable *bool                                                      `json:"enable,omitempty"`
	Rooms  []MeetingCreate201ApplicationJSONSettingsBreakoutRoomRooms `json:"rooms,omitempty"`
}

type MeetingCreate201ApplicationJSONSettingsCustomKeys struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type MeetingCreate201ApplicationJSONSettingsEncryptionTypeEnum string

const (
	MeetingCreate201ApplicationJSONSettingsEncryptionTypeEnumEnhancedEncryption MeetingCreate201ApplicationJSONSettingsEncryptionTypeEnum = "enhanced_encryption"
	MeetingCreate201ApplicationJSONSettingsEncryptionTypeEnumE2ee               MeetingCreate201ApplicationJSONSettingsEncryptionTypeEnum = "e2ee"
)

type MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbersTypeEnum string

const (
	MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbersTypeEnumToll     MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbersTypeEnum = "toll"
	MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbersTypeEnumTollfree MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbersTypeEnum = "tollfree"
)

type MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbers struct {
	City        *string                                                             `json:"city,omitempty"`
	Country     *string                                                             `json:"country,omitempty"`
	CountryName *string                                                             `json:"country_name,omitempty"`
	Number      *string                                                             `json:"number,omitempty"`
	Type        *MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbersTypeEnum `json:"type,omitempty"`
}

type MeetingCreate201ApplicationJSONSettingsLanguageInterpretationInterpreters struct {
	Email     *string `json:"email,omitempty"`
	Languages *string `json:"languages,omitempty"`
}

type MeetingCreate201ApplicationJSONSettingsLanguageInterpretation struct {
	Enable       *bool                                                                       `json:"enable,omitempty"`
	Interpreters []MeetingCreate201ApplicationJSONSettingsLanguageInterpretationInterpreters `json:"interpreters,omitempty"`
}

// MeetingCreate201ApplicationJSONSettings
// Meeting settings.
type MeetingCreate201ApplicationJSONSettings struct {
	AllowMultipleDevices               *bool                                                                      `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                   *string                                                                    `json:"alternative_hosts,omitempty"`
	AlternativeHostsEmailNotification  *bool                                                                      `json:"alternative_hosts_email_notification,omitempty"`
	ApprovalType                       *int64                                                                     `json:"approval_type,omitempty"`
	ApprovedOrDeniedCountriesOrRegions *MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions `json:"approved_or_denied_countries_or_regions,omitempty"`
	Audio                              *MeetingCreate201ApplicationJSONSettingsAudioEnum                          `json:"audio,omitempty"`
	AuthenticationDomains              *string                                                                    `json:"authentication_domains,omitempty"`
	AuthenticationException            []MeetingCreate201ApplicationJSONSettingsAuthenticationException           `json:"authentication_exception,omitempty"`
	AuthenticationName                 *string                                                                    `json:"authentication_name,omitempty"`
	AuthenticationOption               *string                                                                    `json:"authentication_option,omitempty"`
	AutoRecording                      *MeetingCreate201ApplicationJSONSettingsAutoRecordingEnum                  `json:"auto_recording,omitempty"`
	BreakoutRoom                       *MeetingCreate201ApplicationJSONSettingsBreakoutRoom                       `json:"breakout_room,omitempty"`
	CloseRegistration                  *bool                                                                      `json:"close_registration,omitempty"`
	CnMeeting                          *bool                                                                      `json:"cn_meeting,omitempty"`
	ContactEmail                       *string                                                                    `json:"contact_email,omitempty"`
	ContactName                        *string                                                                    `json:"contact_name,omitempty"`
	CustomKeys                         []MeetingCreate201ApplicationJSONSettingsCustomKeys                        `json:"custom_keys,omitempty"`
	EncryptionType                     *MeetingCreate201ApplicationJSONSettingsEncryptionTypeEnum                 `json:"encryption_type,omitempty"`
	EnforceLogin                       *bool                                                                      `json:"enforce_login,omitempty"`
	EnforceLoginDomains                *string                                                                    `json:"enforce_login_domains,omitempty"`
	GlobalDialInCountries              []string                                                                   `json:"global_dial_in_countries,omitempty"`
	GlobalDialInNumbers                []MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbers               `json:"global_dial_in_numbers,omitempty"`
	HostVideo                          *bool                                                                      `json:"host_video,omitempty"`
	InMeeting                          *bool                                                                      `json:"in_meeting,omitempty"`
	JbhTime                            *int64                                                                     `json:"jbh_time,omitempty"`
	JoinBeforeHost                     *bool                                                                      `json:"join_before_host,omitempty"`
	LanguageInterpretation             *MeetingCreate201ApplicationJSONSettingsLanguageInterpretation             `json:"language_interpretation,omitempty"`
	MeetingAuthentication              *bool                                                                      `json:"meeting_authentication,omitempty"`
	MuteUponEntry                      *bool                                                                      `json:"mute_upon_entry,omitempty"`
	ParticipantVideo                   *bool                                                                      `json:"participant_video,omitempty"`
	RegistrantsConfirmationEmail       *bool                                                                      `json:"registrants_confirmation_email,omitempty"`
	RegistrantsEmailNotification       *bool                                                                      `json:"registrants_email_notification,omitempty"`
	RegistrationType                   *int64                                                                     `json:"registration_type,omitempty"`
	ShowShareButton                    *bool                                                                      `json:"show_share_button,omitempty"`
	UsePmi                             *bool                                                                      `json:"use_pmi,omitempty"`
	WaitingRoom                        *bool                                                                      `json:"waiting_room,omitempty"`
	Watermark                          *bool                                                                      `json:"watermark,omitempty"`
}

type MeetingCreate201ApplicationJSONTrackingFields struct {
	Field   *string `json:"field,omitempty"`
	Value   *string `json:"value,omitempty"`
	Visible *bool   `json:"visible,omitempty"`
}

// MeetingCreate201ApplicationJSON
// Meeting object
type MeetingCreate201ApplicationJSON struct {
	Agenda          *string                                         `json:"agenda,omitempty"`
	AssistantID     *string                                         `json:"assistant_id,omitempty"`
	CreatedAt       *time.Time                                      `json:"created_at,omitempty"`
	Duration        *int64                                          `json:"duration,omitempty"`
	H323Password    *string                                         `json:"h323_password,omitempty"`
	HostEmail       *string                                         `json:"host_email,omitempty"`
	ID              *int64                                          `json:"id,omitempty"`
	JoinURL         *string                                         `json:"join_url,omitempty"`
	Occurrences     []MeetingCreate201ApplicationJSONOccurrences    `json:"occurrences,omitempty"`
	Password        *string                                         `json:"password,omitempty"`
	Pmi             *int64                                          `json:"pmi,omitempty"`
	Recurrence      *MeetingCreate201ApplicationJSONRecurrence      `json:"recurrence,omitempty"`
	RegistrationURL *string                                         `json:"registration_url,omitempty"`
	Settings        *MeetingCreate201ApplicationJSONSettings        `json:"settings,omitempty"`
	StartTime       *time.Time                                      `json:"start_time,omitempty"`
	StartURL        *string                                         `json:"start_url,omitempty"`
	Timezone        *string                                         `json:"timezone,omitempty"`
	Topic           *string                                         `json:"topic,omitempty"`
	TrackingFields  []MeetingCreate201ApplicationJSONTrackingFields `json:"tracking_fields,omitempty"`
	Type            *int64                                          `json:"type,omitempty"`
}

type MeetingCreateRequest struct {
	PathParams MeetingCreatePathParams
	Request    MeetingCreateRequests
}

type MeetingCreateResponse struct {
	Body                                  []byte
	ContentType                           string
	Headers                               map[string][]string
	StatusCode                            int64
	MeetingCreate201ApplicationJSONObject *MeetingCreate201ApplicationJSON
}
