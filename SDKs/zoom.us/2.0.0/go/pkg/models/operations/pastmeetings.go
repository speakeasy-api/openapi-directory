package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PastMeetingsPathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type PastMeetingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type PastMeetingsMeetingInstancesMeetings struct {
	StartTime *time.Time `json:"start_time,omitempty"`
	UUID      *string    `json:"uuid,omitempty"`
}

// PastMeetingsMeetingInstances
// List of Meetings
type PastMeetingsMeetingInstances struct {
	Meetings []PastMeetingsMeetingInstancesMeetings `json:"meetings,omitempty"`
}

type PastMeetingsRequest struct {
	PathParams PastMeetingsPathParams
	Security   PastMeetingsSecurity
}

type PastMeetingsResponse struct {
	Body             []byte
	ContentType      string
	MeetingInstances *PastMeetingsMeetingInstances
	StatusCode       int64
}
