package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarPollDeletePathParams struct {
	PollID    string `pathParam:"style=simple,explode=false,name=pollId"`
	WebinarID int64  `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarPollDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarPollDeleteRequest struct {
	PathParams WebinarPollDeletePathParams
	Security   WebinarPollDeleteSecurity
}

type WebinarPollDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
