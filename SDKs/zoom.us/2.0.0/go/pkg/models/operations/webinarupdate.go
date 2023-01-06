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

// WebinarUpdateApplicationJSONSettings
// Webinar settings.
type WebinarUpdateApplicationJSONSettings struct {
	RegistrantsConfirmationEmail *bool `json:"registrants_confirmation_email,omitempty"`
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

// WebinarUpdateMultipartFormDataSettings
// Webinar settings.
type WebinarUpdateMultipartFormDataSettings struct {
	RegistrantsConfirmationEmail *bool `json:"registrants_confirmation_email,omitempty"`
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
