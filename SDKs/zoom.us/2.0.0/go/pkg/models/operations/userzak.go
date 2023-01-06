package operations

import (
	"openapi/pkg/models/shared"
)

type UserZakSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserZak200ApplicationJSON struct {
	Token *string `json:"token,omitempty"`
}

type UserZakRequest struct {
	Security UserZakSecurity
}

type UserZakResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	UserZak200ApplicationJSONObject *UserZak200ApplicationJSON
}
