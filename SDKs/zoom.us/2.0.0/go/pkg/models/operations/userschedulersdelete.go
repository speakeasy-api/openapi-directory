package operations

import (
	"openapi/pkg/models/shared"
)

type UserSchedulersDeletePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserSchedulersDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserSchedulersDeleteRequest struct {
	PathParams UserSchedulersDeletePathParams
	Security   UserSchedulersDeleteSecurity
}

type UserSchedulersDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
