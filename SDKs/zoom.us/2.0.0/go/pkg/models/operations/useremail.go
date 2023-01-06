package operations

import (
	"openapi/pkg/models/shared"
)

type UserEmailQueryParams struct {
	Email string `queryParam:"style=form,explode=true,name=email"`
}

type UserEmailSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserEmail200ApplicationJSON struct {
	ExistedEmail *bool `json:"existed_email,omitempty"`
}

type UserEmailRequest struct {
	QueryParams UserEmailQueryParams
	Security    UserEmailSecurity
}

type UserEmailResponse struct {
	Body                              []byte
	ContentType                       string
	StatusCode                        int64
	UserEmail200ApplicationJSONObject *UserEmail200ApplicationJSON
}
