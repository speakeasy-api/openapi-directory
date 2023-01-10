package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type WebinarUpdatePathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarUpdateQueryParams struct {
	OccurrenceID *string `queryParam:"style=form,explode=true,name=occurrence_id"`
}

type WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnum string

const (
	WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnumOne   WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "1"
	WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnumTwo   WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "2"
	WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnumThree WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "3"
	WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnumFour  WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "4"
	WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnumFive  WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "5"
	WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnumSix   WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "6"
	WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnumSeven WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnum = "7"
)

// WebinarUpdateApplicationJSONRecurrence
// Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
type WebinarUpdateApplicationJSONRecurrence struct {
	EndDateTime    *time.Time                                            `json:"end_date_time,omitempty"`
	EndTimes       *int64                                                `json:"end_times,omitempty"`
	MonthlyDay     *int64                                                `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64                                                `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64                                                `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64                                                `json:"repeat_interval,omitempty"`
	Type           int64                                                 `json:"type"`
	WeeklyDays     *WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnum `json:"weekly_days,omitempty"`
}

// WebinarUpdateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification
// Send reminder email to attendees and panelists.
type WebinarUpdateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type WebinarUpdateApplicationJSONSettingsAudioEnum string

const (
	WebinarUpdateApplicationJSONSettingsAudioEnumBoth      WebinarUpdateApplicationJSONSettingsAudioEnum = "both"
	WebinarUpdateApplicationJSONSettingsAudioEnumTelephony WebinarUpdateApplicationJSONSettingsAudioEnum = "telephony"
	WebinarUpdateApplicationJSONSettingsAudioEnumVoip      WebinarUpdateApplicationJSONSettingsAudioEnum = "voip"
)

type WebinarUpdateApplicationJSONSettingsAutoRecordingEnum string

const (
	WebinarUpdateApplicationJSONSettingsAutoRecordingEnumLocal WebinarUpdateApplicationJSONSettingsAutoRecordingEnum = "local"
	WebinarUpdateApplicationJSONSettingsAutoRecordingEnumCloud WebinarUpdateApplicationJSONSettingsAutoRecordingEnum = "cloud"
	WebinarUpdateApplicationJSONSettingsAutoRecordingEnumNone  WebinarUpdateApplicationJSONSettingsAutoRecordingEnum = "none"
)

// WebinarUpdateApplicationJSONSettingsFollowUpAbsenteesEmailNotification
// Send follow-up email to absentees.
type WebinarUpdateApplicationJSONSettingsFollowUpAbsenteesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

// WebinarUpdateApplicationJSONSettingsFollowUpAttendeesEmailNotification
// Send follow-up email to attendees.
type WebinarUpdateApplicationJSONSettingsFollowUpAttendeesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type WebinarUpdateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum string

const (
	WebinarUpdateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnumOnly WebinarUpdateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum = "only"
	WebinarUpdateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnumAll  WebinarUpdateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum = "all"
)

// WebinarUpdateApplicationJSONSettingsQuestionAndAnswer
// [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
type WebinarUpdateApplicationJSONSettingsQuestionAndAnswer struct {
	AllowAnonymousQuestions *bool                                                                     `json:"allow_anonymous_questions,omitempty"`
	AnswerQuestions         *WebinarUpdateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum `json:"answer_questions,omitempty"`
	AttendeesCanComment     *bool                                                                     `json:"attendees_can_comment,omitempty"`
	AttendeesCanUpvote      *bool                                                                     `json:"attendees_can_upvote,omitempty"`
	Enable                  *bool                                                                     `json:"enable,omitempty"`
}

// WebinarUpdateApplicationJSONSettings
// Webinar settings.
type WebinarUpdateApplicationJSONSettings struct {
	AllowMultipleDevices                           *bool                                                                               `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                               *string                                                                             `json:"alternative_hosts,omitempty"`
	ApprovalType                                   *int64                                                                              `json:"approval_type,omitempty"`
	AttendeesAndPanelistsReminderEmailNotification *WebinarUpdateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification `json:"attendees_and_panelists_reminder_email_notification,omitempty"`
	Audio                                          *WebinarUpdateApplicationJSONSettingsAudioEnum                                      `json:"audio,omitempty"`
	AuthenticationDomains                          *string                                                                             `json:"authentication_domains,omitempty"`
	AuthenticationName                             *string                                                                             `json:"authentication_name,omitempty"`
	AuthenticationOption                           *string                                                                             `json:"authentication_option,omitempty"`
	AutoRecording                                  *WebinarUpdateApplicationJSONSettingsAutoRecordingEnum                              `json:"auto_recording,omitempty"`
	CloseRegistration                              *bool                                                                               `json:"close_registration,omitempty"`
	ContactEmail                                   *string                                                                             `json:"contact_email,omitempty"`
	ContactName                                    *string                                                                             `json:"contact_name,omitempty"`
	EmailLanguage                                  *string                                                                             `json:"email_language,omitempty"`
	EnforceLogin                                   *bool                                                                               `json:"enforce_login,omitempty"`
	EnforceLoginDomains                            *string                                                                             `json:"enforce_login_domains,omitempty"`
	FollowUpAbsenteesEmailNotification             *WebinarUpdateApplicationJSONSettingsFollowUpAbsenteesEmailNotification             `json:"follow_up_absentees_email_notification,omitempty"`
	FollowUpAttendeesEmailNotification             *WebinarUpdateApplicationJSONSettingsFollowUpAttendeesEmailNotification             `json:"follow_up_attendees_email_notification,omitempty"`
	GlobalDialInCountries                          []string                                                                            `json:"global_dial_in_countries,omitempty"`
	HdVideo                                        *bool                                                                               `json:"hd_video,omitempty"`
	HostVideo                                      *bool                                                                               `json:"host_video,omitempty"`
	MeetingAuthentication                          *bool                                                                               `json:"meeting_authentication,omitempty"`
	NotifyRegistrants                              *bool                                                                               `json:"notify_registrants,omitempty"`
	OnDemand                                       *bool                                                                               `json:"on_demand,omitempty"`
	PanelistsInvitationEmailNotification           *bool                                                                               `json:"panelists_invitation_email_notification,omitempty"`
	PanelistsVideo                                 *bool                                                                               `json:"panelists_video,omitempty"`
	PostWebinarSurvey                              *bool                                                                               `json:"post_webinar_survey,omitempty"`
	PracticeSession                                *bool                                                                               `json:"practice_session,omitempty"`
	QuestionAndAnswer                              *WebinarUpdateApplicationJSONSettingsQuestionAndAnswer                              `json:"question_and_answer,omitempty"`
	RegistrantsConfirmationEmail                   *bool                                                                               `json:"registrants_confirmation_email,omitempty"`
	RegistrantsEmailNotification                   *bool                                                                               `json:"registrants_email_notification,omitempty"`
	RegistrantsRestrictNumber                      *int64                                                                              `json:"registrants_restrict_number,omitempty"`
	RegistrationType                               *int64                                                                              `json:"registration_type,omitempty"`
	ShowShareButton                                *bool                                                                               `json:"show_share_button,omitempty"`
	SurveyURL                                      *string                                                                             `json:"survey_url,omitempty"`
}

type WebinarUpdateApplicationJSONTrackingFields struct {
	Field *string `json:"field,omitempty"`
	Value *string `json:"value,omitempty"`
}

// WebinarUpdateApplicationJSON
// Base webinar object for sessions.
type WebinarUpdateApplicationJSON struct {
	Agenda         *string                                      `json:"agenda,omitempty"`
	Duration       *int64                                       `json:"duration,omitempty"`
	Password       *string                                      `json:"password,omitempty"`
	Recurrence     *WebinarUpdateApplicationJSONRecurrence      `json:"recurrence,omitempty"`
	Settings       *WebinarUpdateApplicationJSONSettings        `json:"settings,omitempty"`
	StartTime      *time.Time                                   `json:"start_time,omitempty"`
	Timezone       *string                                      `json:"timezone,omitempty"`
	Topic          *string                                      `json:"topic,omitempty"`
	TrackingFields []WebinarUpdateApplicationJSONTrackingFields `json:"tracking_fields,omitempty"`
	Type           *int64                                       `json:"type,omitempty"`
}

type WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum string

const (
	WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnumOne   WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "1"
	WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnumTwo   WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "2"
	WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnumThree WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "3"
	WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnumFour  WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "4"
	WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnumFive  WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "5"
	WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnumSix   WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "6"
	WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnumSeven WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = "7"
)

// WebinarUpdateMultipartFormDataRecurrence
// Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
type WebinarUpdateMultipartFormDataRecurrence struct {
	EndDateTime    *time.Time                                              `json:"end_date_time,omitempty"`
	EndTimes       *int64                                                  `json:"end_times,omitempty"`
	MonthlyDay     *int64                                                  `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64                                                  `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64                                                  `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64                                                  `json:"repeat_interval,omitempty"`
	Type           int64                                                   `json:"type"`
	WeeklyDays     *WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum `json:"weekly_days,omitempty"`
}

// WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification
// Send reminder email to attendees and panelists.
type WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type WebinarUpdateMultipartFormDataSettingsAudioEnum string

const (
	WebinarUpdateMultipartFormDataSettingsAudioEnumBoth      WebinarUpdateMultipartFormDataSettingsAudioEnum = "both"
	WebinarUpdateMultipartFormDataSettingsAudioEnumTelephony WebinarUpdateMultipartFormDataSettingsAudioEnum = "telephony"
	WebinarUpdateMultipartFormDataSettingsAudioEnumVoip      WebinarUpdateMultipartFormDataSettingsAudioEnum = "voip"
)

type WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum string

const (
	WebinarUpdateMultipartFormDataSettingsAutoRecordingEnumLocal WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum = "local"
	WebinarUpdateMultipartFormDataSettingsAutoRecordingEnumCloud WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum = "cloud"
	WebinarUpdateMultipartFormDataSettingsAutoRecordingEnumNone  WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum = "none"
)

// WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification
// Send follow-up email to absentees.
type WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

// WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification
// Send follow-up email to attendees.
type WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum string

const (
	WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnumOnly WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum = "only"
	WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnumAll  WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum = "all"
)

// WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer
// [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
type WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer struct {
	AllowAnonymousQuestions *bool                                                                       `json:"allow_anonymous_questions,omitempty"`
	AnswerQuestions         *WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum `json:"answer_questions,omitempty"`
	AttendeesCanComment     *bool                                                                       `json:"attendees_can_comment,omitempty"`
	AttendeesCanUpvote      *bool                                                                       `json:"attendees_can_upvote,omitempty"`
	Enable                  *bool                                                                       `json:"enable,omitempty"`
}

// WebinarUpdateMultipartFormDataSettings
// Webinar settings.
type WebinarUpdateMultipartFormDataSettings struct {
	AllowMultipleDevices                           *bool                                                                                 `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                               *string                                                                               `json:"alternative_hosts,omitempty"`
	ApprovalType                                   *int64                                                                                `json:"approval_type,omitempty"`
	AttendeesAndPanelistsReminderEmailNotification *WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification `json:"attendees_and_panelists_reminder_email_notification,omitempty"`
	Audio                                          *WebinarUpdateMultipartFormDataSettingsAudioEnum                                      `json:"audio,omitempty"`
	AuthenticationDomains                          *string                                                                               `json:"authentication_domains,omitempty"`
	AuthenticationName                             *string                                                                               `json:"authentication_name,omitempty"`
	AuthenticationOption                           *string                                                                               `json:"authentication_option,omitempty"`
	AutoRecording                                  *WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum                              `json:"auto_recording,omitempty"`
	CloseRegistration                              *bool                                                                                 `json:"close_registration,omitempty"`
	ContactEmail                                   *string                                                                               `json:"contact_email,omitempty"`
	ContactName                                    *string                                                                               `json:"contact_name,omitempty"`
	EmailLanguage                                  *string                                                                               `json:"email_language,omitempty"`
	EnforceLogin                                   *bool                                                                                 `json:"enforce_login,omitempty"`
	EnforceLoginDomains                            *string                                                                               `json:"enforce_login_domains,omitempty"`
	FollowUpAbsenteesEmailNotification             *WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification             `json:"follow_up_absentees_email_notification,omitempty"`
	FollowUpAttendeesEmailNotification             *WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification             `json:"follow_up_attendees_email_notification,omitempty"`
	GlobalDialInCountries                          []string                                                                              `json:"global_dial_in_countries,omitempty"`
	HdVideo                                        *bool                                                                                 `json:"hd_video,omitempty"`
	HostVideo                                      *bool                                                                                 `json:"host_video,omitempty"`
	MeetingAuthentication                          *bool                                                                                 `json:"meeting_authentication,omitempty"`
	NotifyRegistrants                              *bool                                                                                 `json:"notify_registrants,omitempty"`
	OnDemand                                       *bool                                                                                 `json:"on_demand,omitempty"`
	PanelistsInvitationEmailNotification           *bool                                                                                 `json:"panelists_invitation_email_notification,omitempty"`
	PanelistsVideo                                 *bool                                                                                 `json:"panelists_video,omitempty"`
	PostWebinarSurvey                              *bool                                                                                 `json:"post_webinar_survey,omitempty"`
	PracticeSession                                *bool                                                                                 `json:"practice_session,omitempty"`
	QuestionAndAnswer                              *WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer                              `json:"question_and_answer,omitempty"`
	RegistrantsConfirmationEmail                   *bool                                                                                 `json:"registrants_confirmation_email,omitempty"`
	RegistrantsEmailNotification                   *bool                                                                                 `json:"registrants_email_notification,omitempty"`
	RegistrantsRestrictNumber                      *int64                                                                                `json:"registrants_restrict_number,omitempty"`
	RegistrationType                               *int64                                                                                `json:"registration_type,omitempty"`
	ShowShareButton                                *bool                                                                                 `json:"show_share_button,omitempty"`
	SurveyURL                                      *string                                                                               `json:"survey_url,omitempty"`
}

type WebinarUpdateMultipartFormDataTrackingFields struct {
	Field *string `json:"field,omitempty"`
	Value *string `json:"value,omitempty"`
}

// WebinarUpdateMultipartFormData1
// Base webinar object for sessions.
type WebinarUpdateMultipartFormData1 struct {
	Agenda         *string                                        `multipartForm:"name=agenda"`
	Duration       *int64                                         `multipartForm:"name=duration"`
	Password       *string                                        `multipartForm:"name=password"`
	Recurrence     *WebinarUpdateMultipartFormDataRecurrence      `multipartForm:"name=recurrence,json"`
	Settings       *WebinarUpdateMultipartFormDataSettings        `multipartForm:"name=settings,json"`
	StartTime      *time.Time                                     `multipartForm:"name=start_time"`
	Timezone       *string                                        `multipartForm:"name=timezone"`
	Topic          *string                                        `multipartForm:"name=topic"`
	TrackingFields []WebinarUpdateMultipartFormDataTrackingFields `multipartForm:"name=tracking_fields,json"`
	Type           *int64                                         `multipartForm:"name=type"`
}

type WebinarUpdateRequests struct {
	Object  *WebinarUpdateApplicationJSON    `request:"mediaType=application/json"`
	Object1 *WebinarUpdateMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type WebinarUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarUpdateRequest struct {
	PathParams  WebinarUpdatePathParams
	QueryParams WebinarUpdateQueryParams
	Request     WebinarUpdateRequests
	Security    WebinarUpdateSecurity
}

type WebinarUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
