package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCommonAreaPhonePathParams struct {
	CommonAreaPhoneID string `pathParam:"style=simple,explode=false,name=commonAreaPhoneId"`
}

type DeleteCommonAreaPhoneSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeleteCommonAreaPhoneRequest struct {
	PathParams DeleteCommonAreaPhonePathParams
	Security   DeleteCommonAreaPhoneSecurity
}

type DeleteCommonAreaPhoneResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	DeleteCommonAreaPhone204ApplicationJSONAny *interface{}
}
