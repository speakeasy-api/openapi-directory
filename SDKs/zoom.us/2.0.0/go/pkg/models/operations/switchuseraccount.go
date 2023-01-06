package operations

import (
	"openapi/pkg/models/shared"
)

type SwitchUserAccountPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type SwitchUserAccountApplicationJSON struct {
	AccountID string `json:"account_id"`
}

type SwitchUserAccountMultipartFormData struct {
	AccountID string `multipartForm:"name=account_id"`
}

type SwitchUserAccountRequests struct {
	Object  *SwitchUserAccountApplicationJSON   `request:"mediaType=application/json"`
	Object1 *SwitchUserAccountMultipartFormData `request:"mediaType=multipart/form-data"`
}

type SwitchUserAccountSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type SwitchUserAccountRequest struct {
	PathParams SwitchUserAccountPathParams
	Request    *SwitchUserAccountRequests
	Security   SwitchUserAccountSecurity
}

type SwitchUserAccountResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	SwitchUserAccount204ApplicationJSONAny *interface{}
}
