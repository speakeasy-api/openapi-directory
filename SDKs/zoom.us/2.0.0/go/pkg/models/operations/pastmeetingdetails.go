package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PastMeetingDetailsPathParams struct {
	MeetingUUID string `pathParam:"style=simple,explode=false,name=meetingUUID"`
}

type PastMeetingDetailsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type PastMeetingDetails200ApplicationJSON struct {
	Duration          *int64     `json:"duration,omitempty"`
	EndTime           *time.Time `json:"end_time,omitempty"`
	HostID            *string    `json:"host_id,omitempty"`
	ID                *int64     `json:"id,omitempty"`
	ParticipantsCount *int64     `json:"participants_count,omitempty"`
	StartTime         *time.Time `json:"start_time,omitempty"`
	Topic             *string    `json:"topic,omitempty"`
	TotalMinutes      *int64     `json:"total_minutes,omitempty"`
	Type              *int64     `json:"type,omitempty"`
	UserEmail         *string    `json:"user_email,omitempty"`
	UserName          *string    `json:"user_name,omitempty"`
	UUID              *string    `json:"uuid,omitempty"`
}

type PastMeetingDetailsRequest struct {
	PathParams PastMeetingDetailsPathParams
	Security   PastMeetingDetailsSecurity
}

type PastMeetingDetailsResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	PastMeetingDetails200ApplicationJSONObject *PastMeetingDetails200ApplicationJSON
}
