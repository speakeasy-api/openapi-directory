package operations

import (
	"openapi/pkg/models/shared"
)

type UnassignAPhoneNumAutoReceptionistPathParams struct {
	AutoReceptionistID string `pathParam:"style=simple,explode=false,name=autoReceptionistId"`
	PhoneNumberID      string `pathParam:"style=simple,explode=false,name=phoneNumberId"`
}

type UnassignAPhoneNumAutoReceptionistSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UnassignAPhoneNumAutoReceptionistRequest struct {
	PathParams UnassignAPhoneNumAutoReceptionistPathParams
	Security   UnassignAPhoneNumAutoReceptionistSecurity
}

type UnassignAPhoneNumAutoReceptionistResponse struct {
	Body                                                   []byte
	ContentType                                            string
	StatusCode                                             int64
	UnassignAPhoneNumAutoReceptionist204ApplicationJSONAny *interface{}
}
