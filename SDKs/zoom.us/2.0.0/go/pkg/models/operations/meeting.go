package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type MeetingPathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingQueryParams struct {
	OccurrenceID            *string `queryParam:"style=form,explode=true,name=occurrence_id"`
	ShowPreviousOccurrences *bool   `queryParam:"style=form,explode=true,name=show_previous_occurrences"`
}

type MeetingSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// Meeting200ApplicationJSONOccurrences
// Occurence object. This object is only returned for Recurring Webinars.
type Meeting200ApplicationJSONOccurrences struct {
	Duration     *int64     `json:"duration,omitempty"`
	OccurrenceID *string    `json:"occurrence_id,omitempty"`
	StartTime    *time.Time `json:"start_time,omitempty"`
	Status       *string    `json:"status,omitempty"`
}

type Meeting200ApplicationJSONRecurrenceWeeklyDaysEnum string

const (
	Meeting200ApplicationJSONRecurrenceWeeklyDaysEnumOne   Meeting200ApplicationJSONRecurrenceWeeklyDaysEnum = "1"
	Meeting200ApplicationJSONRecurrenceWeeklyDaysEnumTwo   Meeting200ApplicationJSONRecurrenceWeeklyDaysEnum = "2"
	Meeting200ApplicationJSONRecurrenceWeeklyDaysEnumThree Meeting200ApplicationJSONRecurrenceWeeklyDaysEnum = "3"
	Meeting200ApplicationJSONRecurrenceWeeklyDaysEnumFour  Meeting200ApplicationJSONRecurrenceWeeklyDaysEnum = "4"
	Meeting200ApplicationJSONRecurrenceWeeklyDaysEnumFive  Meeting200ApplicationJSONRecurrenceWeeklyDaysEnum = "5"
	Meeting200ApplicationJSONRecurrenceWeeklyDaysEnumSix   Meeting200ApplicationJSONRecurrenceWeeklyDaysEnum = "6"
	Meeting200ApplicationJSONRecurrenceWeeklyDaysEnumSeven Meeting200ApplicationJSONRecurrenceWeeklyDaysEnum = "7"
)

// Meeting200ApplicationJSONRecurrence
// Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
type Meeting200ApplicationJSONRecurrence struct {
	EndDateTime    *time.Time                                         `json:"end_date_time,omitempty"`
	EndTimes       *int64                                             `json:"end_times,omitempty"`
	MonthlyDay     *int64                                             `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64                                             `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64                                             `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64                                             `json:"repeat_interval,omitempty"`
	Type           int64                                              `json:"type"`
	WeeklyDays     *Meeting200ApplicationJSONRecurrenceWeeklyDaysEnum `json:"weekly_days,omitempty"`
}

type Meeting200ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum string

const (
	Meeting200ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumApprove Meeting200ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "approve"
	Meeting200ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnumDeny    Meeting200ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = "deny"
)

// Meeting200ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions
// Approve or block users from specific regions/countries from joining this meeting.
type Meeting200ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions struct {
	ApprovedList []string                                                                       `json:"approved_list,omitempty"`
	DeniedList   []string                                                                       `json:"denied_list,omitempty"`
	Enable       *bool                                                                          `json:"enable,omitempty"`
	Method       *Meeting200ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum `json:"method,omitempty"`
}

type Meeting200ApplicationJSONSettingsAudioEnum string

const (
	Meeting200ApplicationJSONSettingsAudioEnumBoth      Meeting200ApplicationJSONSettingsAudioEnum = "both"
	Meeting200ApplicationJSONSettingsAudioEnumTelephony Meeting200ApplicationJSONSettingsAudioEnum = "telephony"
	Meeting200ApplicationJSONSettingsAudioEnumVoip      Meeting200ApplicationJSONSettingsAudioEnum = "voip"
)

type Meeting200ApplicationJSONSettingsAuthenticationException struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type Meeting200ApplicationJSONSettingsAutoRecordingEnum string

const (
	Meeting200ApplicationJSONSettingsAutoRecordingEnumLocal Meeting200ApplicationJSONSettingsAutoRecordingEnum = "local"
	Meeting200ApplicationJSONSettingsAutoRecordingEnumCloud Meeting200ApplicationJSONSettingsAutoRecordingEnum = "cloud"
	Meeting200ApplicationJSONSettingsAutoRecordingEnumNone  Meeting200ApplicationJSONSettingsAutoRecordingEnum = "none"
)

type Meeting200ApplicationJSONSettingsBreakoutRoomRooms struct {
	Name         *string  `json:"name,omitempty"`
	Participants []string `json:"participants,omitempty"`
}

// Meeting200ApplicationJSONSettingsBreakoutRoom
// Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
type Meeting200ApplicationJSONSettingsBreakoutRoom struct {
	Enable *bool                                                `json:"enable,omitempty"`
	Rooms  []Meeting200ApplicationJSONSettingsBreakoutRoomRooms `json:"rooms,omitempty"`
}

type Meeting200ApplicationJSONSettingsCustomKeys struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type Meeting200ApplicationJSONSettingsEncryptionTypeEnum string

const (
	Meeting200ApplicationJSONSettingsEncryptionTypeEnumEnhancedEncryption Meeting200ApplicationJSONSettingsEncryptionTypeEnum = "enhanced_encryption"
	Meeting200ApplicationJSONSettingsEncryptionTypeEnumE2ee               Meeting200ApplicationJSONSettingsEncryptionTypeEnum = "e2ee"
)

type Meeting200ApplicationJSONSettingsGlobalDialInNumbersTypeEnum string

const (
	Meeting200ApplicationJSONSettingsGlobalDialInNumbersTypeEnumToll     Meeting200ApplicationJSONSettingsGlobalDialInNumbersTypeEnum = "toll"
	Meeting200ApplicationJSONSettingsGlobalDialInNumbersTypeEnumTollfree Meeting200ApplicationJSONSettingsGlobalDialInNumbersTypeEnum = "tollfree"
)

type Meeting200ApplicationJSONSettingsGlobalDialInNumbers struct {
	City        *string                                                       `json:"city,omitempty"`
	Country     *string                                                       `json:"country,omitempty"`
	CountryName *string                                                       `json:"country_name,omitempty"`
	Number      *string                                                       `json:"number,omitempty"`
	Type        *Meeting200ApplicationJSONSettingsGlobalDialInNumbersTypeEnum `json:"type,omitempty"`
}

type Meeting200ApplicationJSONSettingsLanguageInterpretationInterpreters struct {
	Email     *string `json:"email,omitempty"`
	Languages *string `json:"languages,omitempty"`
}

type Meeting200ApplicationJSONSettingsLanguageInterpretation struct {
	Enable       *bool                                                                 `json:"enable,omitempty"`
	Interpreters []Meeting200ApplicationJSONSettingsLanguageInterpretationInterpreters `json:"interpreters,omitempty"`
}

// Meeting200ApplicationJSONSettings
// Meeting settings.
type Meeting200ApplicationJSONSettings struct {
	AllowMultipleDevices               *bool                                                                `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                   *string                                                              `json:"alternative_hosts,omitempty"`
	AlternativeHostsEmailNotification  *bool                                                                `json:"alternative_hosts_email_notification,omitempty"`
	ApprovalType                       *int64                                                               `json:"approval_type,omitempty"`
	ApprovedOrDeniedCountriesOrRegions *Meeting200ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions `json:"approved_or_denied_countries_or_regions,omitempty"`
	Audio                              *Meeting200ApplicationJSONSettingsAudioEnum                          `json:"audio,omitempty"`
	AuthenticationDomains              *string                                                              `json:"authentication_domains,omitempty"`
	AuthenticationException            []Meeting200ApplicationJSONSettingsAuthenticationException           `json:"authentication_exception,omitempty"`
	AuthenticationName                 *string                                                              `json:"authentication_name,omitempty"`
	AuthenticationOption               *string                                                              `json:"authentication_option,omitempty"`
	AutoRecording                      *Meeting200ApplicationJSONSettingsAutoRecordingEnum                  `json:"auto_recording,omitempty"`
	BreakoutRoom                       *Meeting200ApplicationJSONSettingsBreakoutRoom                       `json:"breakout_room,omitempty"`
	CloseRegistration                  *bool                                                                `json:"close_registration,omitempty"`
	CnMeeting                          *bool                                                                `json:"cn_meeting,omitempty"`
	ContactEmail                       *string                                                              `json:"contact_email,omitempty"`
	ContactName                        *string                                                              `json:"contact_name,omitempty"`
	CustomKeys                         []Meeting200ApplicationJSONSettingsCustomKeys                        `json:"custom_keys,omitempty"`
	EncryptionType                     *Meeting200ApplicationJSONSettingsEncryptionTypeEnum                 `json:"encryption_type,omitempty"`
	EnforceLogin                       *bool                                                                `json:"enforce_login,omitempty"`
	EnforceLoginDomains                *string                                                              `json:"enforce_login_domains,omitempty"`
	GlobalDialInCountries              []string                                                             `json:"global_dial_in_countries,omitempty"`
	GlobalDialInNumbers                []Meeting200ApplicationJSONSettingsGlobalDialInNumbers               `json:"global_dial_in_numbers,omitempty"`
	HostVideo                          *bool                                                                `json:"host_video,omitempty"`
	InMeeting                          *bool                                                                `json:"in_meeting,omitempty"`
	JbhTime                            *int64                                                               `json:"jbh_time,omitempty"`
	JoinBeforeHost                     *bool                                                                `json:"join_before_host,omitempty"`
	LanguageInterpretation             *Meeting200ApplicationJSONSettingsLanguageInterpretation             `json:"language_interpretation,omitempty"`
	MeetingAuthentication              *bool                                                                `json:"meeting_authentication,omitempty"`
	MuteUponEntry                      *bool                                                                `json:"mute_upon_entry,omitempty"`
	ParticipantVideo                   *bool                                                                `json:"participant_video,omitempty"`
	RegistrantsConfirmationEmail       *bool                                                                `json:"registrants_confirmation_email,omitempty"`
	RegistrantsEmailNotification       *bool                                                                `json:"registrants_email_notification,omitempty"`
	RegistrationType                   *int64                                                               `json:"registration_type,omitempty"`
	ShowShareButton                    *bool                                                                `json:"show_share_button,omitempty"`
	UsePmi                             *bool                                                                `json:"use_pmi,omitempty"`
	WaitingRoom                        *bool                                                                `json:"waiting_room,omitempty"`
	Watermark                          *bool                                                                `json:"watermark,omitempty"`
}

type Meeting200ApplicationJSONStatusEnum string

const (
	Meeting200ApplicationJSONStatusEnumWaiting Meeting200ApplicationJSONStatusEnum = "waiting"
	Meeting200ApplicationJSONStatusEnumStarted Meeting200ApplicationJSONStatusEnum = "started"
)

type Meeting200ApplicationJSONTrackingFields struct {
	Field   *string `json:"field,omitempty"`
	Value   *string `json:"value,omitempty"`
	Visible *bool   `json:"visible,omitempty"`
}

// Meeting200ApplicationJSON
// Meeting object.
type Meeting200ApplicationJSON struct {
	Agenda            *string                                   `json:"agenda,omitempty"`
	CreatedAt         *time.Time                                `json:"created_at,omitempty"`
	Duration          *int64                                    `json:"duration,omitempty"`
	EncryptedPassword *string                                   `json:"encrypted_password,omitempty"`
	H323Password      *string                                   `json:"h323_password,omitempty"`
	JoinURL           *string                                   `json:"join_url,omitempty"`
	Occurrences       []Meeting200ApplicationJSONOccurrences    `json:"occurrences,omitempty"`
	Password          *string                                   `json:"password,omitempty"`
	Pmi               *int64                                    `json:"pmi,omitempty"`
	Recurrence        *Meeting200ApplicationJSONRecurrence      `json:"recurrence,omitempty"`
	Settings          *Meeting200ApplicationJSONSettings        `json:"settings,omitempty"`
	StartTime         *time.Time                                `json:"start_time,omitempty"`
	StartURL          *string                                   `json:"start_url,omitempty"`
	Status            *Meeting200ApplicationJSONStatusEnum      `json:"status,omitempty"`
	Timezone          *string                                   `json:"timezone,omitempty"`
	Topic             *string                                   `json:"topic,omitempty"`
	TrackingFields    []Meeting200ApplicationJSONTrackingFields `json:"tracking_fields,omitempty"`
	Type              *int64                                    `json:"type,omitempty"`
}

type MeetingRequest struct {
	PathParams  MeetingPathParams
	QueryParams MeetingQueryParams
	Security    MeetingSecurity
}

type MeetingResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	Meeting200ApplicationJSONObject *Meeting200ApplicationJSON
}
