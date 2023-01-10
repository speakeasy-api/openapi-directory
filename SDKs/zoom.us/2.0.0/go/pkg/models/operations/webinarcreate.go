package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type WebinarCreatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

// WebinarCreateApplicationJSONRecurrenceWebinar
// Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
type WebinarCreateApplicationJSONRecurrenceWebinar struct {
	EndDateTime    *time.Time `json:"end_date_time,omitempty"`
	EndTimes       *int64     `json:"end_times,omitempty"`
	MonthlyDay     *int64     `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64     `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64     `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64     `json:"repeat_interval,omitempty"`
	Type           int64      `json:"type"`
	WeeklyDays     *string    `json:"weekly_days,omitempty"`
}

// WebinarCreateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification
// Send reminder email to attendees and panelists.
type WebinarCreateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type WebinarCreateApplicationJSONSettingsAudioEnum string

const (
	WebinarCreateApplicationJSONSettingsAudioEnumBoth      WebinarCreateApplicationJSONSettingsAudioEnum = "both"
	WebinarCreateApplicationJSONSettingsAudioEnumTelephony WebinarCreateApplicationJSONSettingsAudioEnum = "telephony"
	WebinarCreateApplicationJSONSettingsAudioEnumVoip      WebinarCreateApplicationJSONSettingsAudioEnum = "voip"
)

type WebinarCreateApplicationJSONSettingsAutoRecordingEnum string

const (
	WebinarCreateApplicationJSONSettingsAutoRecordingEnumLocal WebinarCreateApplicationJSONSettingsAutoRecordingEnum = "local"
	WebinarCreateApplicationJSONSettingsAutoRecordingEnumCloud WebinarCreateApplicationJSONSettingsAutoRecordingEnum = "cloud"
	WebinarCreateApplicationJSONSettingsAutoRecordingEnumNone  WebinarCreateApplicationJSONSettingsAutoRecordingEnum = "none"
)

// WebinarCreateApplicationJSONSettingsFollowUpAbsenteesEmailNotification
// Send follow-up email to absentees.
type WebinarCreateApplicationJSONSettingsFollowUpAbsenteesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

// WebinarCreateApplicationJSONSettingsFollowUpAttendeesEmailNotification
// Send follow-up email to attendees.
type WebinarCreateApplicationJSONSettingsFollowUpAttendeesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type WebinarCreateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum string

const (
	WebinarCreateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnumOnly WebinarCreateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum = "only"
	WebinarCreateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnumAll  WebinarCreateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum = "all"
)

// WebinarCreateApplicationJSONSettingsQuestionAndAnswer
// [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
type WebinarCreateApplicationJSONSettingsQuestionAndAnswer struct {
	AllowAnonymousQuestions *bool                                                                     `json:"allow_anonymous_questions,omitempty"`
	AnswerQuestions         *WebinarCreateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum `json:"answer_questions,omitempty"`
	AttendeesCanComment     *bool                                                                     `json:"attendees_can_comment,omitempty"`
	AttendeesCanUpvote      *bool                                                                     `json:"attendees_can_upvote,omitempty"`
	Enable                  *bool                                                                     `json:"enable,omitempty"`
}

// WebinarCreateApplicationJSONSettings
// Create Webinar settings.
type WebinarCreateApplicationJSONSettings struct {
	AllowMultipleDevices                           *bool                                                                               `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                               *string                                                                             `json:"alternative_hosts,omitempty"`
	ApprovalType                                   *int64                                                                              `json:"approval_type,omitempty"`
	AttendeesAndPanelistsReminderEmailNotification *WebinarCreateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification `json:"attendees_and_panelists_reminder_email_notification,omitempty"`
	Audio                                          *WebinarCreateApplicationJSONSettingsAudioEnum                                      `json:"audio,omitempty"`
	AuthenticationDomains                          *string                                                                             `json:"authentication_domains,omitempty"`
	AuthenticationOption                           *string                                                                             `json:"authentication_option,omitempty"`
	AutoRecording                                  *WebinarCreateApplicationJSONSettingsAutoRecordingEnum                              `json:"auto_recording,omitempty"`
	CloseRegistration                              *bool                                                                               `json:"close_registration,omitempty"`
	ContactEmail                                   *string                                                                             `json:"contact_email,omitempty"`
	ContactName                                    *string                                                                             `json:"contact_name,omitempty"`
	EmailLanguage                                  *string                                                                             `json:"email_language,omitempty"`
	EnforceLogin                                   *bool                                                                               `json:"enforce_login,omitempty"`
	EnforceLoginDomains                            *string                                                                             `json:"enforce_login_domains,omitempty"`
	FollowUpAbsenteesEmailNotification             *WebinarCreateApplicationJSONSettingsFollowUpAbsenteesEmailNotification             `json:"follow_up_absentees_email_notification,omitempty"`
	FollowUpAttendeesEmailNotification             *WebinarCreateApplicationJSONSettingsFollowUpAttendeesEmailNotification             `json:"follow_up_attendees_email_notification,omitempty"`
	GlobalDialInCountries                          []string                                                                            `json:"global_dial_in_countries,omitempty"`
	HdVideo                                        *bool                                                                               `json:"hd_video,omitempty"`
	HostVideo                                      *bool                                                                               `json:"host_video,omitempty"`
	MeetingAuthentication                          *bool                                                                               `json:"meeting_authentication,omitempty"`
	OnDemand                                       *bool                                                                               `json:"on_demand,omitempty"`
	PanelistsInvitationEmailNotification           *bool                                                                               `json:"panelists_invitation_email_notification,omitempty"`
	PanelistsVideo                                 *bool                                                                               `json:"panelists_video,omitempty"`
	PostWebinarSurvey                              *bool                                                                               `json:"post_webinar_survey,omitempty"`
	PracticeSession                                *bool                                                                               `json:"practice_session,omitempty"`
	QuestionAndAnswer                              *WebinarCreateApplicationJSONSettingsQuestionAndAnswer                              `json:"question_and_answer,omitempty"`
	RegistrantsEmailNotification                   *bool                                                                               `json:"registrants_email_notification,omitempty"`
	RegistrantsRestrictNumber                      *int64                                                                              `json:"registrants_restrict_number,omitempty"`
	RegistrationType                               *int64                                                                              `json:"registration_type,omitempty"`
	ShowShareButton                                *bool                                                                               `json:"show_share_button,omitempty"`
	SurveyURL                                      *string                                                                             `json:"survey_url,omitempty"`
}

type WebinarCreateApplicationJSONTrackingFields struct {
	Field string  `json:"field"`
	Value *string `json:"value,omitempty"`
}

// WebinarCreateApplicationJSON
// Base webinar object for sessions.
type WebinarCreateApplicationJSON struct {
	Agenda         *string                                        `json:"agenda,omitempty"`
	Duration       *int64                                         `json:"duration,omitempty"`
	Password       *string                                        `json:"password,omitempty"`
	Recurrence     *WebinarCreateApplicationJSONRecurrenceWebinar `json:"recurrence,omitempty"`
	Settings       *WebinarCreateApplicationJSONSettings          `json:"settings,omitempty"`
	StartTime      *time.Time                                     `json:"start_time,omitempty"`
	Timezone       *string                                        `json:"timezone,omitempty"`
	Topic          *string                                        `json:"topic,omitempty"`
	TrackingFields []WebinarCreateApplicationJSONTrackingFields   `json:"tracking_fields,omitempty"`
	Type           *int64                                         `json:"type,omitempty"`
}

// WebinarCreateMultipartFormDataRecurrenceWebinar
// Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
type WebinarCreateMultipartFormDataRecurrenceWebinar struct {
	EndDateTime    *time.Time `json:"end_date_time,omitempty"`
	EndTimes       *int64     `json:"end_times,omitempty"`
	MonthlyDay     *int64     `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64     `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64     `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64     `json:"repeat_interval,omitempty"`
	Type           int64      `json:"type"`
	WeeklyDays     *string    `json:"weekly_days,omitempty"`
}

// WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification
// Send reminder email to attendees and panelists.
type WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type WebinarCreateMultipartFormDataSettingsAudioEnum string

const (
	WebinarCreateMultipartFormDataSettingsAudioEnumBoth      WebinarCreateMultipartFormDataSettingsAudioEnum = "both"
	WebinarCreateMultipartFormDataSettingsAudioEnumTelephony WebinarCreateMultipartFormDataSettingsAudioEnum = "telephony"
	WebinarCreateMultipartFormDataSettingsAudioEnumVoip      WebinarCreateMultipartFormDataSettingsAudioEnum = "voip"
)

type WebinarCreateMultipartFormDataSettingsAutoRecordingEnum string

const (
	WebinarCreateMultipartFormDataSettingsAutoRecordingEnumLocal WebinarCreateMultipartFormDataSettingsAutoRecordingEnum = "local"
	WebinarCreateMultipartFormDataSettingsAutoRecordingEnumCloud WebinarCreateMultipartFormDataSettingsAutoRecordingEnum = "cloud"
	WebinarCreateMultipartFormDataSettingsAutoRecordingEnumNone  WebinarCreateMultipartFormDataSettingsAutoRecordingEnum = "none"
)

// WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification
// Send follow-up email to absentees.
type WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

// WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification
// Send follow-up email to attendees.
type WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum string

const (
	WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnumOnly WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum = "only"
	WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnumAll  WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum = "all"
)

// WebinarCreateMultipartFormDataSettingsQuestionAndAnswer
// [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
type WebinarCreateMultipartFormDataSettingsQuestionAndAnswer struct {
	AllowAnonymousQuestions *bool                                                                       `json:"allow_anonymous_questions,omitempty"`
	AnswerQuestions         *WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum `json:"answer_questions,omitempty"`
	AttendeesCanComment     *bool                                                                       `json:"attendees_can_comment,omitempty"`
	AttendeesCanUpvote      *bool                                                                       `json:"attendees_can_upvote,omitempty"`
	Enable                  *bool                                                                       `json:"enable,omitempty"`
}

// WebinarCreateMultipartFormDataSettings
// Create Webinar settings.
type WebinarCreateMultipartFormDataSettings struct {
	AllowMultipleDevices                           *bool                                                                                 `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                               *string                                                                               `json:"alternative_hosts,omitempty"`
	ApprovalType                                   *int64                                                                                `json:"approval_type,omitempty"`
	AttendeesAndPanelistsReminderEmailNotification *WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification `json:"attendees_and_panelists_reminder_email_notification,omitempty"`
	Audio                                          *WebinarCreateMultipartFormDataSettingsAudioEnum                                      `json:"audio,omitempty"`
	AuthenticationDomains                          *string                                                                               `json:"authentication_domains,omitempty"`
	AuthenticationOption                           *string                                                                               `json:"authentication_option,omitempty"`
	AutoRecording                                  *WebinarCreateMultipartFormDataSettingsAutoRecordingEnum                              `json:"auto_recording,omitempty"`
	CloseRegistration                              *bool                                                                                 `json:"close_registration,omitempty"`
	ContactEmail                                   *string                                                                               `json:"contact_email,omitempty"`
	ContactName                                    *string                                                                               `json:"contact_name,omitempty"`
	EmailLanguage                                  *string                                                                               `json:"email_language,omitempty"`
	EnforceLogin                                   *bool                                                                                 `json:"enforce_login,omitempty"`
	EnforceLoginDomains                            *string                                                                               `json:"enforce_login_domains,omitempty"`
	FollowUpAbsenteesEmailNotification             *WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification             `json:"follow_up_absentees_email_notification,omitempty"`
	FollowUpAttendeesEmailNotification             *WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification             `json:"follow_up_attendees_email_notification,omitempty"`
	GlobalDialInCountries                          []string                                                                              `json:"global_dial_in_countries,omitempty"`
	HdVideo                                        *bool                                                                                 `json:"hd_video,omitempty"`
	HostVideo                                      *bool                                                                                 `json:"host_video,omitempty"`
	MeetingAuthentication                          *bool                                                                                 `json:"meeting_authentication,omitempty"`
	OnDemand                                       *bool                                                                                 `json:"on_demand,omitempty"`
	PanelistsInvitationEmailNotification           *bool                                                                                 `json:"panelists_invitation_email_notification,omitempty"`
	PanelistsVideo                                 *bool                                                                                 `json:"panelists_video,omitempty"`
	PostWebinarSurvey                              *bool                                                                                 `json:"post_webinar_survey,omitempty"`
	PracticeSession                                *bool                                                                                 `json:"practice_session,omitempty"`
	QuestionAndAnswer                              *WebinarCreateMultipartFormDataSettingsQuestionAndAnswer                              `json:"question_and_answer,omitempty"`
	RegistrantsEmailNotification                   *bool                                                                                 `json:"registrants_email_notification,omitempty"`
	RegistrantsRestrictNumber                      *int64                                                                                `json:"registrants_restrict_number,omitempty"`
	RegistrationType                               *int64                                                                                `json:"registration_type,omitempty"`
	ShowShareButton                                *bool                                                                                 `json:"show_share_button,omitempty"`
	SurveyURL                                      *string                                                                               `json:"survey_url,omitempty"`
}

type WebinarCreateMultipartFormDataTrackingFields struct {
	Field string  `json:"field"`
	Value *string `json:"value,omitempty"`
}

// WebinarCreateMultipartFormData1
// Base webinar object for sessions.
type WebinarCreateMultipartFormData1 struct {
	Agenda         *string                                          `multipartForm:"name=agenda"`
	Duration       *int64                                           `multipartForm:"name=duration"`
	Password       *string                                          `multipartForm:"name=password"`
	Recurrence     *WebinarCreateMultipartFormDataRecurrenceWebinar `multipartForm:"name=recurrence,json"`
	Settings       *WebinarCreateMultipartFormDataSettings          `multipartForm:"name=settings,json"`
	StartTime      *time.Time                                       `multipartForm:"name=start_time"`
	Timezone       *string                                          `multipartForm:"name=timezone"`
	Topic          *string                                          `multipartForm:"name=topic"`
	TrackingFields []WebinarCreateMultipartFormDataTrackingFields   `multipartForm:"name=tracking_fields,json"`
	Type           *int64                                           `multipartForm:"name=type"`
}

type WebinarCreateRequests struct {
	Object  *WebinarCreateApplicationJSON    `request:"mediaType=application/json"`
	Object1 *WebinarCreateMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type WebinarCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// WebinarCreate201ApplicationJSONOccurrences
// Occurence object. This object is only returned for Recurring Webinars.
type WebinarCreate201ApplicationJSONOccurrences struct {
	Duration     *int64     `json:"duration,omitempty"`
	OccurrenceID *string    `json:"occurrence_id,omitempty"`
	StartTime    *time.Time `json:"start_time,omitempty"`
	Status       *string    `json:"status,omitempty"`
}

// WebinarCreate201ApplicationJSONRecurrenceWebinar
// Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
type WebinarCreate201ApplicationJSONRecurrenceWebinar struct {
	EndDateTime    *time.Time `json:"end_date_time,omitempty"`
	EndTimes       *int64     `json:"end_times,omitempty"`
	MonthlyDay     *int64     `json:"monthly_day,omitempty"`
	MonthlyWeek    *int64     `json:"monthly_week,omitempty"`
	MonthlyWeekDay *int64     `json:"monthly_week_day,omitempty"`
	RepeatInterval *int64     `json:"repeat_interval,omitempty"`
	Type           int64      `json:"type"`
	WeeklyDays     *string    `json:"weekly_days,omitempty"`
}

// WebinarCreate201ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification
// Send reminder email to attendees and panelists.
type WebinarCreate201ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type WebinarCreate201ApplicationJSONSettingsAudioEnum string

const (
	WebinarCreate201ApplicationJSONSettingsAudioEnumBoth      WebinarCreate201ApplicationJSONSettingsAudioEnum = "both"
	WebinarCreate201ApplicationJSONSettingsAudioEnumTelephony WebinarCreate201ApplicationJSONSettingsAudioEnum = "telephony"
	WebinarCreate201ApplicationJSONSettingsAudioEnumVoip      WebinarCreate201ApplicationJSONSettingsAudioEnum = "voip"
)

type WebinarCreate201ApplicationJSONSettingsAutoRecordingEnum string

const (
	WebinarCreate201ApplicationJSONSettingsAutoRecordingEnumLocal WebinarCreate201ApplicationJSONSettingsAutoRecordingEnum = "local"
	WebinarCreate201ApplicationJSONSettingsAutoRecordingEnumCloud WebinarCreate201ApplicationJSONSettingsAutoRecordingEnum = "cloud"
	WebinarCreate201ApplicationJSONSettingsAutoRecordingEnumNone  WebinarCreate201ApplicationJSONSettingsAutoRecordingEnum = "none"
)

// WebinarCreate201ApplicationJSONSettingsFollowUpAbsenteesEmailNotification
// Send follow-up email to absentees.
type WebinarCreate201ApplicationJSONSettingsFollowUpAbsenteesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

// WebinarCreate201ApplicationJSONSettingsFollowUpAttendeesEmailNotification
// Send follow-up email to attendees.
type WebinarCreate201ApplicationJSONSettingsFollowUpAttendeesEmailNotification struct {
	Enable *bool  `json:"enable,omitempty"`
	Type   *int64 `json:"type,omitempty"`
}

type WebinarCreate201ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum string

const (
	WebinarCreate201ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnumOnly WebinarCreate201ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum = "only"
	WebinarCreate201ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnumAll  WebinarCreate201ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum = "all"
)

// WebinarCreate201ApplicationJSONSettingsQuestionAndAnswer
// [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
type WebinarCreate201ApplicationJSONSettingsQuestionAndAnswer struct {
	AllowAnonymousQuestions *bool                                                                        `json:"allow_anonymous_questions,omitempty"`
	AnswerQuestions         *WebinarCreate201ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum `json:"answer_questions,omitempty"`
	AttendeesCanComment     *bool                                                                        `json:"attendees_can_comment,omitempty"`
	AttendeesCanUpvote      *bool                                                                        `json:"attendees_can_upvote,omitempty"`
	Enable                  *bool                                                                        `json:"enable,omitempty"`
}

// WebinarCreate201ApplicationJSONSettings
// Webinar settings.
type WebinarCreate201ApplicationJSONSettings struct {
	AllowMultipleDevices                           *bool                                                                                  `json:"allow_multiple_devices,omitempty"`
	AlternativeHosts                               *string                                                                                `json:"alternative_hosts,omitempty"`
	ApprovalType                                   *int64                                                                                 `json:"approval_type,omitempty"`
	AttendeesAndPanelistsReminderEmailNotification *WebinarCreate201ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification `json:"attendees_and_panelists_reminder_email_notification,omitempty"`
	Audio                                          *WebinarCreate201ApplicationJSONSettingsAudioEnum                                      `json:"audio,omitempty"`
	AuthenticationDomains                          *string                                                                                `json:"authentication_domains,omitempty"`
	AuthenticationName                             *string                                                                                `json:"authentication_name,omitempty"`
	AuthenticationOption                           *string                                                                                `json:"authentication_option,omitempty"`
	AutoRecording                                  *WebinarCreate201ApplicationJSONSettingsAutoRecordingEnum                              `json:"auto_recording,omitempty"`
	CloseRegistration                              *bool                                                                                  `json:"close_registration,omitempty"`
	ContactEmail                                   *string                                                                                `json:"contact_email,omitempty"`
	ContactName                                    *string                                                                                `json:"contact_name,omitempty"`
	EmailLanguage                                  *string                                                                                `json:"email_language,omitempty"`
	EnforceLogin                                   *bool                                                                                  `json:"enforce_login,omitempty"`
	EnforceLoginDomains                            *string                                                                                `json:"enforce_login_domains,omitempty"`
	FollowUpAbsenteesEmailNotification             *WebinarCreate201ApplicationJSONSettingsFollowUpAbsenteesEmailNotification             `json:"follow_up_absentees_email_notification,omitempty"`
	FollowUpAttendeesEmailNotification             *WebinarCreate201ApplicationJSONSettingsFollowUpAttendeesEmailNotification             `json:"follow_up_attendees_email_notification,omitempty"`
	GlobalDialInCountries                          []string                                                                               `json:"global_dial_in_countries,omitempty"`
	HdVideo                                        *bool                                                                                  `json:"hd_video,omitempty"`
	HostVideo                                      *bool                                                                                  `json:"host_video,omitempty"`
	MeetingAuthentication                          *bool                                                                                  `json:"meeting_authentication,omitempty"`
	NotifyRegistrants                              *bool                                                                                  `json:"notify_registrants,omitempty"`
	OnDemand                                       *bool                                                                                  `json:"on_demand,omitempty"`
	PanelistsInvitationEmailNotification           *bool                                                                                  `json:"panelists_invitation_email_notification,omitempty"`
	PanelistsVideo                                 *bool                                                                                  `json:"panelists_video,omitempty"`
	PostWebinarSurvey                              *bool                                                                                  `json:"post_webinar_survey,omitempty"`
	PracticeSession                                *bool                                                                                  `json:"practice_session,omitempty"`
	QuestionAndAnswer                              *WebinarCreate201ApplicationJSONSettingsQuestionAndAnswer                              `json:"question_and_answer,omitempty"`
	RegistrantsConfirmationEmail                   *bool                                                                                  `json:"registrants_confirmation_email,omitempty"`
	RegistrantsEmailNotification                   *bool                                                                                  `json:"registrants_email_notification,omitempty"`
	RegistrantsRestrictNumber                      *int64                                                                                 `json:"registrants_restrict_number,omitempty"`
	RegistrationType                               *int64                                                                                 `json:"registration_type,omitempty"`
	ShowShareButton                                *bool                                                                                  `json:"show_share_button,omitempty"`
	SurveyURL                                      *string                                                                                `json:"survey_url,omitempty"`
}

type WebinarCreate201ApplicationJSONTrackingFields struct {
	Field *string `json:"field,omitempty"`
	Value *string `json:"value,omitempty"`
}

// WebinarCreate201ApplicationJSON
// Webinar object.
type WebinarCreate201ApplicationJSON struct {
	Agenda                       *string                                           `json:"agenda,omitempty"`
	CreatedAt                    *time.Time                                        `json:"created_at,omitempty"`
	Duration                     *int64                                            `json:"duration,omitempty"`
	HostEmail                    *string                                           `json:"host_email,omitempty"`
	HostID                       *string                                           `json:"host_id,omitempty"`
	ID                           *int64                                            `json:"id,omitempty"`
	JoinURL                      *string                                           `json:"join_url,omitempty"`
	Occurrences                  []WebinarCreate201ApplicationJSONOccurrences      `json:"occurrences,omitempty"`
	Password                     *string                                           `json:"password,omitempty"`
	Recurrence                   *WebinarCreate201ApplicationJSONRecurrenceWebinar `json:"recurrence,omitempty"`
	RegistrantsConfirmationEmail *bool                                             `json:"registrants_confirmation_email,omitempty"`
	Settings                     *WebinarCreate201ApplicationJSONSettings          `json:"settings,omitempty"`
	StartTime                    *time.Time                                        `json:"start_time,omitempty"`
	StartURL                     *string                                           `json:"start_url,omitempty"`
	TemplateID                   *string                                           `json:"template_id,omitempty"`
	Timezone                     *string                                           `json:"timezone,omitempty"`
	Topic                        *string                                           `json:"topic,omitempty"`
	TrackingFields               []WebinarCreate201ApplicationJSONTrackingFields   `json:"tracking_fields,omitempty"`
	Type                         *int64                                            `json:"type,omitempty"`
	UUID                         *string                                           `json:"uuid,omitempty"`
}

type WebinarCreateRequest struct {
	PathParams WebinarCreatePathParams
	Request    WebinarCreateRequests
	Security   WebinarCreateSecurity
}

type WebinarCreateResponse struct {
	Body                                  []byte
	ContentType                           string
	Headers                               map[string][]string
	StatusCode                            int64
	WebinarCreate201ApplicationJSONObject *WebinarCreate201ApplicationJSON
}
