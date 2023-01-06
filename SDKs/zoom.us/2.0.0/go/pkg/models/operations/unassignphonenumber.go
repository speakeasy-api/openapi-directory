package operations

import (
	"openapi/pkg/models/shared"
)

type UnassignPhoneNumberPathParams struct {
	PhoneNumberID string `pathParam:"style=simple,explode=false,name=phoneNumberId"`
	UserID        string `pathParam:"style=simple,explode=false,name=userId"`
}

type UnassignPhoneNumberSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UnassignPhoneNumberRequest struct {
	PathParams UnassignPhoneNumberPathParams
	Security   UnassignPhoneNumberSecurity
}

type UnassignPhoneNumberResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	UnassignPhoneNumber204ApplicationJSONAny *interface{}
}
