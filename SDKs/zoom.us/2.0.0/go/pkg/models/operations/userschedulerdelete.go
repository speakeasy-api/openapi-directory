package operations

import (
	"openapi/pkg/models/shared"
)

type UserSchedulerDeletePathParams struct {
	SchedulerID string `pathParam:"style=simple,explode=false,name=schedulerId"`
	UserID      string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserSchedulerDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserSchedulerDeleteRequest struct {
	PathParams UserSchedulerDeletePathParams
	Security   UserSchedulerDeleteSecurity
}

type UserSchedulerDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
