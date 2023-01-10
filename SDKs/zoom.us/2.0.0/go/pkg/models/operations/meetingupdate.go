package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type MeetingUpdatePathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingUpdateQueryParams struct {
	OccurrenceID *string `queryParam:"style=form,explode=true,name=occurrence_id"`
}

type MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnum string

const (
	MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnumOne   MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "1"
	MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnumTwo   MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "2"
	MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnumThree MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "3"
	MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnumFour  MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "4"
	MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnumFive  MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "5"
	MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnumSix   MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "6"
	MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnumSeven MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "7"
)

// MeetingUpdateApplicationJSONRecurrence
// Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
type MeetingUpdateApplicationJSONRecurrence struct {
	EndDateTime    *time.Time                                            `json:"end_date_time,omitempty"`
	EndTimes       *int64                                                `json:"end_times,omitempty"`
	MonthlyDay     *int64                                                `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64                                                `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64                                                `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64                                                `json:"repeat_interval,omitempty"`
	Type           int64                                                 `json:"type"`
	WeeklyDays     *MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnum `json:"weekly_days,omitempty"`
}

type MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum string

const (
	MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumApprove MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "approve"
	MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumDeny    MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "deny"
)

// MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions
// Approve or block users from specific regions/countries from joining this meeting.
type MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions struct {
	ApprovedList []string                                                                          `json:"approved_list,omitempty"`
	DeniedList   []string                                                                          `json:"denied_list,omitempty"`
	Enable       *bool                                                                             `json:"enable,omitempty"`
	Method       *MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum `json:"method,omitempty"`
}

type MeetingUpdateApplicationJSONSettingsAudioEnum string

const (
	MeetingUpdateApplicationJSONSettingsAudioEnumBoth      MeetingUpdateApplicationJSONSettingsAudioEnum = "both"
	MeetingUpdateApplicationJSONSettingsAudioEnumTelephony MeetingUpdateApplicationJSONSettingsAudioEnum = "telephony"
	MeetingUpdateApplicationJSONSettingsAudioEnumVoip      MeetingUpdateApplicationJSONSettingsAudioEnum = "voip"
)

type MeetingUpdateApplicationJSONSettingsAuthenticationException struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type MeetingUpdateApplicationJSONSettingsAutoRecordingEnum string

const (
	MeetingUpdateApplicationJSONSettingsAutoRecordingEnumLocal MeetingUpdateApplicationJSONSettingsAutoRecordingEnum = "local"
	MeetingUpdateApplicationJSONSettingsAutoRecordingEnumCloud MeetingUpdateApplicationJSONSettingsAutoRecordingEnum = "cloud"
	MeetingUpdateApplicationJSONSettingsAutoRecordingEnumNone  MeetingUpdateApplicationJSONSettingsAutoRecordingEnum = "none"
)

type MeetingUpdateApplicationJSONSettingsBreakoutRoomRooms struct {
	Name         *string  `json:"name,omitempty"`
	Participants []string `json:"participants,omitempty"`
}

// MeetingUpdateApplicationJSONSettingsBreakoutRoom
// Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
type MeetingUpdateApplicationJSONSettingsBreakoutRoom struct {
	Enable *bool                                                   `json:"enable,omitempty"`
	Rooms  []MeetingUpdateApplicationJSONSettingsBreakoutRoomRooms `json:"rooms,omitempty"`
}

type MeetingUpdateApplicationJSONSettingsCustomKeys struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type MeetingUpdateApplicationJSONSettingsEncryptionTypeEnum string

const (
	MeetingUpdateApplicationJSONSettingsEncryptionTypeEnumEnhancedEncryption MeetingUpdateApplicationJSONSettingsEncryptionTypeEnum = "enhanced_encryption"
	MeetingUpdateApplicationJSONSettingsEncryptionTypeEnumE2ee               MeetingUpdateApplicationJSONSettingsEncryptionTypeEnum = "e2ee"
)

type MeetingUpdateApplicationJSONSettingsGlobalDialInNumbersTypeEnum string

const (
	MeetingUpdateApplicationJSONSettingsGlobalDialInNumbersTypeEnumToll     MeetingUpdateApplicationJSONSettingsGlobalDialInNumbersTypeEnum = "toll"
	MeetingUpdateApplicationJSONSettingsGlobalDialInNumbersTypeEnumTollfree MeetingUpdateApplicationJSONSettingsGlobalDialInNumbersTypeEnum = "tollfree"
)

type MeetingUpdateApplicationJSONSettingsGlobalDialInNumbers struct {
	City        *string                                                          `json:"city,omitempty"`
	Country     *string                                                          `json:"country,omitempty"`
	CountryName *string                                                          `json:"country_name,omitempty"`
	Number      *string                                                          `json:"number,omitempty"`
	Type        *MeetingUpdateApplicationJSONSettingsGlobalDialInNumbersTypeEnum `json:"type,omitempty"`
}

type MeetingUpdateApplicationJSONSettingsLanguageInterpretationInterpreters struct {
	Email     *string `json:"email,omitempty"`
	Languages *string `json:"languages,omitempty"`
}

type MeetingUpdateApplicationJSONSettingsLanguageInterpretation struct {
	Enable       *bool                                                                    `json:"enable,omitempty"`
	Interpreters []MeetingUpdateApplicationJSONSettingsLanguageInterpretationInterpreters `json:"interpreters,omitempty"`
}

// MeetingUpdateApplicationJSONSettings
// Meeting settings.
type MeetingUpdateApplicationJSONSettings struct {
	AllowMultipleDevices               *bool                                                                   `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                   *string                                                                 `json:"alternative_hosts,omitempty"`
	AlternativeHostsEmailNotification  *bool                                                                   `json:"alternative_hosts_email_notification,omitempty"`
	ApprovalType                       *int64                                                                  `json:"approval_type,omitempty"`
	ApprovedOrDeniedCountriesOrRegions *MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions `json:"approved_or_denied_countries_or_regions,omitempty"`
	Audio                              *MeetingUpdateApplicationJSONSettingsAudioEnum                          `json:"audio,omitempty"`
	AuthenticationDomains              *string                                                                 `json:"authentication_domains,omitempty"`
	AuthenticationException            []MeetingUpdateApplicationJSONSettingsAuthenticationException           `json:"authentication_exception,omitempty"`
	AuthenticationName                 *string                                                                 `json:"authentication_name,omitempty"`
	AuthenticationOption               *string                                                                 `json:"authentication_option,omitempty"`
	AutoRecording                      *MeetingUpdateApplicationJSONSettingsAutoRecordingEnum                  `json:"auto_recording,omitempty"`
	BreakoutRoom                       *MeetingUpdateApplicationJSONSettingsBreakoutRoom                       `json:"breakout_room,omitempty"`
	CloseRegistration                  *bool                                                                   `json:"close_registration,omitempty"`
	CnMeeting                          *bool                                                                   `json:"cn_meeting,omitempty"`
	ContactEmail                       *string                                                                 `json:"contact_email,omitempty"`
	ContactName                        *string                                                                 `json:"contact_name,omitempty"`
	CustomKeys                         []MeetingUpdateApplicationJSONSettingsCustomKeys                        `json:"custom_keys,omitempty"`
	EncryptionType                     *MeetingUpdateApplicationJSONSettingsEncryptionTypeEnum                 `json:"encryption_type,omitempty"`
	EnforceLogin                       *bool                                                                   `json:"enforce_login,omitempty"`
	EnforceLoginDomains                *string                                                                 `json:"enforce_login_domains,omitempty"`
	GlobalDialInCountries              []string                                                                `json:"global_dial_in_countries,omitempty"`
	GlobalDialInNumbers                []MeetingUpdateApplicationJSONSettingsGlobalDialInNumbers               `json:"global_dial_in_numbers,omitempty"`
	HostVideo                          *bool                                                                   `json:"host_video,omitempty"`
	InMeeting                          *bool                                                                   `json:"in_meeting,omitempty"`
	JbhTime                            *int64                                                                  `json:"jbh_time,omitempty"`
	JoinBeforeHost                     *bool                                                                   `json:"join_before_host,omitempty"`
	LanguageInterpretation             *MeetingUpdateApplicationJSONSettingsLanguageInterpretation             `json:"language_interpretation,omitempty"`
	MeetingAuthentication              *bool                                                                   `json:"meeting_authentication,omitempty"`
	MuteUponEntry                      *bool                                                                   `json:"mute_upon_entry,omitempty"`
	ParticipantVideo                   *bool                                                                   `json:"participant_video,omitempty"`
	RegistrantsConfirmationEmail       *bool                                                                   `json:"registrants_confirmation_email,omitempty"`
	RegistrantsEmailNotification       *bool                                                                   `json:"registrants_email_notification,omitempty"`
	RegistrationType                   *int64                                                                  `json:"registration_type,omitempty"`
	ShowShareButton                    *bool                                                                   `json:"show_share_button,omitempty"`
	UsePmi                             *bool                                                                   `json:"use_pmi,omitempty"`
	WaitingRoom                        *bool                                                                   `json:"waiting_room,omitempty"`
	Watermark                          *bool                                                                   `json:"watermark,omitempty"`
}

type MeetingUpdateApplicationJSONTrackingFields struct {
	Field *string `json:"field,omitempty"`
	Value *string `json:"value,omitempty"`
}

// MeetingUpdateApplicationJSON
// Base object for sessions.
type MeetingUpdateApplicationJSON struct {
	Agenda         *string                                      `json:"agenda,omitempty"`
	Duration       *int64                                       `json:"duration,omitempty"`
	Password       *string                                      `json:"password,omitempty"`
	Recurrence     *MeetingUpdateApplicationJSONRecurrence      `json:"recurrence,omitempty"`
	ScheduleFor    *string                                      `json:"schedule_for,omitempty"`
	Settings       *MeetingUpdateApplicationJSONSettings        `json:"settings,omitempty"`
	StartTime      *time.Time                                   `json:"start_time,omitempty"`
	TemplateID     *string                                      `json:"template_id,omitempty"`
	Timezone       *string                                      `json:"timezone,omitempty"`
	Topic          *string                                      `json:"topic,omitempty"`
	TrackingFields []MeetingUpdateApplicationJSONTrackingFields `json:"tracking_fields,omitempty"`
	Type           *int64                                       `json:"type,omitempty"`
}

type MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum string

const (
	MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnumOne   MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "1"
	MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnumTwo   MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "2"
	MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnumThree MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "3"
	MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnumFour  MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "4"
	MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnumFive  MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "5"
	MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnumSix   MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "6"
	MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnumSeven MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "7"
)

// MeetingUpdateMultipartFormDataRecurrence
// Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
type MeetingUpdateMultipartFormDataRecurrence struct {
	EndDateTime    *time.Time                                              `json:"end_date_time,omitempty"`
	EndTimes       *int64                                                  `json:"end_times,omitempty"`
	MonthlyDay     *int64                                                  `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64                                                  `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64                                                  `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64                                                  `json:"repeat_interval,omitempty"`
	Type           int64                                                   `json:"type"`
	WeeklyDays     *MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum `json:"weekly_days,omitempty"`
}

type MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum string

const (
	MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumApprove MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "approve"
	MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumDeny    MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "deny"
)

// MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions
// Approve or block users from specific regions/countries from joining this meeting.
type MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions struct {
	ApprovedList []string                                                                            `json:"approved_list,omitempty"`
	DeniedList   []string                                                                            `json:"denied_list,omitempty"`
	Enable       *bool                                                                               `json:"enable,omitempty"`
	Method       *MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum `json:"method,omitempty"`
}

type MeetingUpdateMultipartFormDataSettingsAudioEnum string

const (
	MeetingUpdateMultipartFormDataSettingsAudioEnumBoth      MeetingUpdateMultipartFormDataSettingsAudioEnum = "both"
	MeetingUpdateMultipartFormDataSettingsAudioEnumTelephony MeetingUpdateMultipartFormDataSettingsAudioEnum = "telephony"
	MeetingUpdateMultipartFormDataSettingsAudioEnumVoip      MeetingUpdateMultipartFormDataSettingsAudioEnum = "voip"
)

type MeetingUpdateMultipartFormDataSettingsAuthenticationException struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum string

const (
	MeetingUpdateMultipartFormDataSettingsAutoRecordingEnumLocal MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum = "local"
	MeetingUpdateMultipartFormDataSettingsAutoRecordingEnumCloud MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum = "cloud"
	MeetingUpdateMultipartFormDataSettingsAutoRecordingEnumNone  MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum = "none"
)

type MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms struct {
	Name         *string  `json:"name,omitempty"`
	Participants []string `json:"participants,omitempty"`
}

// MeetingUpdateMultipartFormDataSettingsBreakoutRoom
// Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
type MeetingUpdateMultipartFormDataSettingsBreakoutRoom struct {
	Enable *bool                                                     `json:"enable,omitempty"`
	Rooms  []MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms `json:"rooms,omitempty"`
}

type MeetingUpdateMultipartFormDataSettingsCustomKeys struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum string

const (
	MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnumEnhancedEncryption MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum = "enhanced_encryption"
	MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnumE2ee               MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum = "e2ee"
)

type MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum string

const (
	MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnumToll     MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum = "toll"
	MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnumTollfree MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum = "tollfree"
)

type MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers struct {
	City        *string                                                            `json:"city,omitempty"`
	Country     *string                                                            `json:"country,omitempty"`
	CountryName *string                                                            `json:"country_name,omitempty"`
	Number      *string                                                            `json:"number,omitempty"`
	Type        *MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum `json:"type,omitempty"`
}

type MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters struct {
	Email     *string `json:"email,omitempty"`
	Languages *string `json:"languages,omitempty"`
}

type MeetingUpdateMultipartFormDataSettingsLanguageInterpretation struct {
	Enable       *bool                                                                      `json:"enable,omitempty"`
	Interpreters []MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters `json:"interpreters,omitempty"`
}

// MeetingUpdateMultipartFormDataSettings
// Meeting settings.
type MeetingUpdateMultipartFormDataSettings struct {
	AllowMultipleDevices               *bool                                                                     `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                   *string                                                                   `json:"alternative_hosts,omitempty"`
	AlternativeHostsEmailNotification  *bool                                                                     `json:"alternative_hosts_email_notification,omitempty"`
	ApprovalType                       *int64                                                                    `json:"approval_type,omitempty"`
	ApprovedOrDeniedCountriesOrRegions *MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions `json:"approved_or_denied_countries_or_regions,omitempty"`
	Audio                              *MeetingUpdateMultipartFormDataSettingsAudioEnum                          `json:"audio,omitempty"`
	AuthenticationDomains              *string                                                                   `json:"authentication_domains,omitempty"`
	AuthenticationException            []MeetingUpdateMultipartFormDataSettingsAuthenticationException           `json:"authentication_exception,omitempty"`
	AuthenticationName                 *string                                                                   `json:"authentication_name,omitempty"`
	AuthenticationOption               *string                                                                   `json:"authentication_option,omitempty"`
	AutoRecording                      *MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum                  `json:"auto_recording,omitempty"`
	BreakoutRoom                       *MeetingUpdateMultipartFormDataSettingsBreakoutRoom                       `json:"breakout_room,omitempty"`
	CloseRegistration                  *bool                                                                     `json:"close_registration,omitempty"`
	CnMeeting                          *bool                                                                     `json:"cn_meeting,omitempty"`
	ContactEmail                       *string                                                                   `json:"contact_email,omitempty"`
	ContactName                        *string                                                                   `json:"contact_name,omitempty"`
	CustomKeys                         []MeetingUpdateMultipartFormDataSettingsCustomKeys                        `json:"custom_keys,omitempty"`
	EncryptionType                     *MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum                 `json:"encryption_type,omitempty"`
	EnforceLogin                       *bool                                                                     `json:"enforce_login,omitempty"`
	EnforceLoginDomains                *string                                                                   `json:"enforce_login_domains,omitempty"`
	GlobalDialInCountries              []string                                                                  `json:"global_dial_in_countries,omitempty"`
	GlobalDialInNumbers                []MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers               `json:"global_dial_in_numbers,omitempty"`
	HostVideo                          *bool                                                                     `json:"host_video,omitempty"`
	InMeeting                          *bool                                                                     `json:"in_meeting,omitempty"`
	JbhTime                            *int64                                                                    `json:"jbh_time,omitempty"`
	JoinBeforeHost                     *bool                                                                     `json:"join_before_host,omitempty"`
	LanguageInterpretation             *MeetingUpdateMultipartFormDataSettingsLanguageInterpretation             `json:"language_interpretation,omitempty"`
	MeetingAuthentication              *bool                                                                     `json:"meeting_authentication,omitempty"`
	MuteUponEntry                      *bool                                                                     `json:"mute_upon_entry,omitempty"`
	ParticipantVideo                   *bool                                                                     `json:"participant_video,omitempty"`
	RegistrantsConfirmationEmail       *bool                                                                     `json:"registrants_confirmation_email,omitempty"`
	RegistrantsEmailNotification       *bool                                                                     `json:"registrants_email_notification,omitempty"`
	RegistrationType                   *int64                                                                    `json:"registration_type,omitempty"`
	ShowShareButton                    *bool                                                                     `json:"show_share_button,omitempty"`
	UsePmi                             *bool                                                                     `json:"use_pmi,omitempty"`
	WaitingRoom                        *bool                                                                     `json:"waiting_room,omitempty"`
	Watermark                          *bool                                                                     `json:"watermark,omitempty"`
}

type MeetingUpdateMultipartFormDataTrackingFields struct {
	Field *string `json:"field,omitempty"`
	Value *string `json:"value,omitempty"`
}

// MeetingUpdateMultipartFormData1
// Base object for sessions.
type MeetingUpdateMultipartFormData1 struct {
	Agenda         *string                                        `multipartForm:"name=agenda"`
	Duration       *int64                                         `multipartForm:"name=duration"`
	Password       *string                                        `multipartForm:"name=password"`
	Recurrence     *MeetingUpdateMultipartFormDataRecurrence      `multipartForm:"name=recurrence,json"`
	ScheduleFor    *string                                        `multipartForm:"name=schedule_for"`
	Settings       *MeetingUpdateMultipartFormDataSettings        `multipartForm:"name=settings,json"`
	StartTime      *time.Time                                     `multipartForm:"name=start_time"`
	TemplateID     *string                                        `multipartForm:"name=template_id"`
	Timezone       *string                                        `multipartForm:"name=timezone"`
	Topic          *string                                        `multipartForm:"name=topic"`
	TrackingFields []MeetingUpdateMultipartFormDataTrackingFields `multipartForm:"name=tracking_fields,json"`
	Type           *int64                                         `multipartForm:"name=type"`
}

type MeetingUpdateRequests struct {
	Object  *MeetingUpdateApplicationJSON    `request:"mediaType=application/json"`
	Object1 *MeetingUpdateMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type MeetingUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingUpdateRequest struct {
	PathParams  MeetingUpdatePathParams
	QueryParams MeetingUpdateQueryParams
	Request     MeetingUpdateRequests
	Security    MeetingUpdateSecurity
}

type MeetingUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
