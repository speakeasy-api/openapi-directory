package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingPollDeletePathParams struct {
	MeetingID int64  `pathParam:"style=simple,explode=false,name=meetingId"`
	PollID    string `pathParam:"style=simple,explode=false,name=pollId"`
}

type MeetingPollDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingPollDeleteRequest struct {
	PathParams MeetingPollDeletePathParams
	Security   MeetingPollDeleteSecurity
}

type MeetingPollDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
