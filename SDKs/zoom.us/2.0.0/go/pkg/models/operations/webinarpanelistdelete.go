package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarPanelistDeletePathParams struct {
	PanelistID int64 `pathParam:"style=simple,explode=false,name=panelistId"`
	WebinarID  int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarPanelistDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarPanelistDeleteRequest struct {
	PathParams WebinarPanelistDeletePathParams
	Security   WebinarPanelistDeleteSecurity
}

type WebinarPanelistDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
