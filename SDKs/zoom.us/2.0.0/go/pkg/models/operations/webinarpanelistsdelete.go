package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarPanelistsDeletePathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarPanelistsDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarPanelistsDeleteRequest struct {
	PathParams WebinarPanelistsDeletePathParams
	Security   WebinarPanelistsDeleteSecurity
}

type WebinarPanelistsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
