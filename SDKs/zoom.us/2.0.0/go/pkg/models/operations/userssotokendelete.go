package operations

import (
	"openapi/pkg/models/shared"
)

type UserSsoTokenDeletePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserSsoTokenDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserSsoTokenDeleteRequest struct {
	PathParams UserSsoTokenDeletePathParams
	Security   UserSsoTokenDeleteSecurity
}

type UserSsoTokenDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
