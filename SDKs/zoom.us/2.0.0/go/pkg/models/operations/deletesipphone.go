package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSipPhonePathParams struct {
	PhoneID string `pathParam:"style=simple,explode=false,name=phoneId"`
}

type DeleteSipPhoneSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeleteSipPhoneRequest struct {
	PathParams DeleteSipPhonePathParams
	Security   DeleteSipPhoneSecurity
}

type DeleteSipPhoneResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	DeleteSIPPhone204ApplicationJSONObject map[string]interface{}
}
