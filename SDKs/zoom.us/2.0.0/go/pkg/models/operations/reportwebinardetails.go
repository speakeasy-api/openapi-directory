package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportWebinarDetailsPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type ReportWebinarDetailsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ReportWebinarDetails200ApplicationJSONCustomKeys struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type ReportWebinarDetails200ApplicationJSONTrackingFields struct {
	Field *string `json:"field,omitempty"`
	Value *string `json:"value,omitempty"`
}

type ReportWebinarDetails200ApplicationJSON struct {
	CustomKeys        []ReportWebinarDetails200ApplicationJSONCustomKeys     `json:"custom_keys,omitempty"`
	Dept              *string                                                `json:"dept,omitempty"`
	Duration          *int64                                                 `json:"duration,omitempty"`
	EndTime           *time.Time                                             `json:"end_time,omitempty"`
	ID                *int64                                                 `json:"id,omitempty"`
	ParticipantsCount *int64                                                 `json:"participants_count,omitempty"`
	StartTime         *time.Time                                             `json:"start_time,omitempty"`
	Topic             *string                                                `json:"topic,omitempty"`
	TotalMinutes      *int64                                                 `json:"total_minutes,omitempty"`
	TrackingFields    []ReportWebinarDetails200ApplicationJSONTrackingFields `json:"tracking_fields,omitempty"`
	Type              *int64                                                 `json:"type,omitempty"`
	UserEmail         *string                                                `json:"user_email,omitempty"`
	UserName          *string                                                `json:"user_name,omitempty"`
	UUID              *string                                                `json:"uuid,omitempty"`
}

type ReportWebinarDetailsRequest struct {
	PathParams ReportWebinarDetailsPathParams
	Security   ReportWebinarDetailsSecurity
}

type ReportWebinarDetailsResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	ReportWebinarDetails200ApplicationJSONObject *ReportWebinarDetails200ApplicationJSON
}
