package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type WebinarPathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarQueryParams struct {
	OccurrenceID            *string `queryParam:"style=form,explode=true,name=occurrence_id"`
	ShowPreviousOccurrences *bool   `queryParam:"style=form,explode=true,name=show_previous_occurrences"`
}

type WebinarSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// Webinar200ApplicationJSONOccurrences
// Occurence object. This object is only returned for Recurring Webinars.
type Webinar200ApplicationJSONOccurrences struct {
	Duration     *int64     `json:"duration,omitempty"`
	OccurrenceID *string    `json:"occurrence_id,omitempty"`
	StartTime    *time.Time `json:"start_time,omitempty"`
	Status       *string    `json:"status,omitempty"`
}

// Webinar200ApplicationJSONRecurrenceWebinar
// Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
type Webinar200ApplicationJSONRecurrenceWebinar struct {
	EndDateTime    *time.Time `json:"end_date_time,omitempty"`
	EndTimes       *int64     `json:"end_times,omitempty"`
	MonthlyDay     *int64     `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64     `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64     `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64     `json:"repeat_interval,omitempty"`
	Type           int64      `json:"type"`
	WeeklyDays     *string    `json:"weekly_days,omitempty"`
}

// Webinar200ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification
// Send reminder email to attendees and panelists.
type Webinar200ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type Webinar200ApplicationJSONSettingsAudioEnum string

const (
	Webinar200ApplicationJSONSettingsAudioEnumBoth      Webinar200ApplicationJSONSettingsAudioEnum = "both"
	Webinar200ApplicationJSONSettingsAudioEnumTelephony Webinar200ApplicationJSONSettingsAudioEnum = "telephony"
	Webinar200ApplicationJSONSettingsAudioEnumVoip      Webinar200ApplicationJSONSettingsAudioEnum = "voip"
)

type Webinar200ApplicationJSONSettingsAutoRecordingEnum string

const (
	Webinar200ApplicationJSONSettingsAutoRecordingEnumLocal Webinar200ApplicationJSONSettingsAutoRecordingEnum = "local"
	Webinar200ApplicationJSONSettingsAutoRecordingEnumCloud Webinar200ApplicationJSONSettingsAutoRecordingEnum = "cloud"
	Webinar200ApplicationJSONSettingsAutoRecordingEnumNone  Webinar200ApplicationJSONSettingsAutoRecordingEnum = "none"
)

// Webinar200ApplicationJSONSettingsFollowUpAbsenteesEmailNotification
// Send follow-up email to absentees.
type Webinar200ApplicationJSONSettingsFollowUpAbsenteesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

// Webinar200ApplicationJSONSettingsFollowUpAttendeesEmailNotification
// Send follow-up email to attendees.
type Webinar200ApplicationJSONSettingsFollowUpAttendeesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type Webinar200ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum string

const (
	Webinar200ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnumOnly Webinar200ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum = "only"
	Webinar200ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnumAll  Webinar200ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum = "all"
)

// Webinar200ApplicationJSONSettingsQuestionAndAnswer
// [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
type Webinar200ApplicationJSONSettingsQuestionAndAnswer struct {
	AllowAnonymousQuestions *bool                                                                  `json:"allow_anonymous_questions,omitempty"`
	AnswerQuestions         *Webinar200ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum `json:"answer_questions,omitempty"`
	AttendeesCanComment     *bool                                                                  `json:"attendees_can_comment,omitempty"`
	AttendeesCanUpvote      *bool                                                                  `json:"attendees_can_upvote,omitempty"`
	Enable                  *bool                                                                  `json:"enable,omitempty"`
}

// Webinar200ApplicationJSONSettings
// Webinar settings.
type Webinar200ApplicationJSONSettings struct {
	AllowMultipleDevices                           *bool                                                                            `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                               *string                                                                          `json:"alternative_hosts,omitempty"`
	ApprovalType                                   *int64                                                                           `json:"approval_type,omitempty"`
	AttendeesAndPanelistsReminderEmailNotification *Webinar200ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification `json:"attendees_and_panelists_reminder_email_notification,omitempty"`
	Audio                                          *Webinar200ApplicationJSONSettingsAudioEnum                                      `json:"audio,omitempty"`
	AuthenticationDomains                          *string                                                                          `json:"authentication_domains,omitempty"`
	AuthenticationName                             *string                                                                          `json:"authentication_name,omitempty"`
	AuthenticationOption                           *string                                                                          `json:"authentication_option,omitempty"`
	AutoRecording                                  *Webinar200ApplicationJSONSettingsAutoRecordingEnum                              `json:"auto_recording,omitempty"`
	CloseRegistration                              *bool                                                                            `json:"close_registration,omitempty"`
	ContactEmail                                   *string                                                                          `json:"contact_email,omitempty"`
	ContactName                                    *string                                                                          `json:"contact_name,omitempty"`
	EmailLanguage                                  *string                                                                          `json:"email_language,omitempty"`
	EnforceLogin                                   *bool                                                                            `json:"enforce_login,omitempty"`
	EnforceLoginDomains                            *string                                                                          `json:"enforce_login_domains,omitempty"`
	FollowUpAbsenteesEmailNotification             *Webinar200ApplicationJSONSettingsFollowUpAbsenteesEmailNotification             `json:"follow_up_absentees_email_notification,omitempty"`
	FollowUpAttendeesEmailNotification             *Webinar200ApplicationJSONSettingsFollowUpAttendeesEmailNotification             `json:"follow_up_attendees_email_notification,omitempty"`
	GlobalDialInCountries                          []string                                                                         `json:"global_dial_in_countries,omitempty"`
	HdVideo                                        *bool                                                                            `json:"hd_video,omitempty"`
	HostVideo                                      *bool                                                                            `json:"host_video,omitempty"`
	MeetingAuthentication                          *bool                                                                            `json:"meeting_authentication,omitempty"`
	NotifyRegistrants                              *bool                                                                            `json:"notify_registrants,omitempty"`
	OnDemand                                       *bool                                                                            `json:"on_demand,omitempty"`
	PanelistsInvitationEmailNotification           *bool                                                                            `json:"panelists_invitation_email_notification,omitempty"`
	PanelistsVideo                                 *bool                                                                            `json:"panelists_video,omitempty"`
	PostWebinarSurvey                              *bool                                                                            `json:"post_webinar_survey,omitempty"`
	PracticeSession                                *bool                                                                            `json:"practice_session,omitempty"`
	QuestionAndAnswer                              *Webinar200ApplicationJSONSettingsQuestionAndAnswer                              `json:"question_and_answer,omitempty"`
	RegistrantsConfirmationEmail                   *bool                                                                            `json:"registrants_confirmation_email,omitempty"`
	RegistrantsEmailNotification                   *bool                                                                            `json:"registrants_email_notification,omitempty"`
	RegistrantsRestrictNumber                      *int64                                                                           `json:"registrants_restrict_number,omitempty"`
	RegistrationType                               *int64                                                                           `json:"registration_type,omitempty"`
	ShowShareButton                                *bool                                                                            `json:"show_share_button,omitempty"`
	SurveyURL                                      *string                                                                          `json:"survey_url,omitempty"`
}

type Webinar200ApplicationJSONTrackingFields struct {
	Field *string `json:"field,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Webinar200ApplicationJSON
// Webinar object.
type Webinar200ApplicationJSON struct {
	Agenda         *string                                     `json:"agenda,omitempty"`
	CreatedAt      *time.Time                                  `json:"created_at,omitempty"`
	Duration       *int64                                      `json:"duration,omitempty"`
	JoinURL        *string                                     `json:"join_url,omitempty"`
	Occurrences    []Webinar200ApplicationJSONOccurrences      `json:"occurrences,omitempty"`
	Password       *string                                     `json:"password,omitempty"`
	Recurrence     *Webinar200ApplicationJSONRecurrenceWebinar `json:"recurrence,omitempty"`
	Settings       *Webinar200ApplicationJSONSettings          `json:"settings,omitempty"`
	StartTime      *time.Time                                  `json:"start_time,omitempty"`
	StartURL       *string                                     `json:"start_url,omitempty"`
	Timezone       *string                                     `json:"timezone,omitempty"`
	Topic          *string                                     `json:"topic,omitempty"`
	TrackingFields []Webinar200ApplicationJSONTrackingFields   `json:"tracking_fields,omitempty"`
	Type           *int64                                      `json:"type,omitempty"`
}

type WebinarRequest struct {
	PathParams  WebinarPathParams
	QueryParams WebinarQueryParams
	Security    WebinarSecurity
}

type WebinarResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	Webinar200ApplicationJSONObject *Webinar200ApplicationJSON
}
