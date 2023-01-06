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

// MeetingUpdateApplicationJSONSettings
// Meeting settings.
type MeetingUpdateApplicationJSONSettings struct {
	RegistrantsConfirmationEmail *bool `json:"registrants_confirmation_email,omitempty"`
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

// MeetingUpdateMultipartFormDataSettings
// Meeting settings.
type MeetingUpdateMultipartFormDataSettings struct {
	RegistrantsConfirmationEmail *bool `json:"registrants_confirmation_email,omitempty"`
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
