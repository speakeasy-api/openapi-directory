package operations

import (
	"openapi/pkg/models/shared"
)

type GroupDeletePathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GroupDeleteRequest struct {
	PathParams GroupDeletePathParams
	Security   GroupDeleteSecurity
}

type GroupDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
