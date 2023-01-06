package operations

import (
	"openapi/pkg/models/shared"
)

type UnAssignPhoneNumCallQueuePathParams struct {
	CallQueueID   string `pathParam:"style=simple,explode=false,name=callQueueId"`
	PhoneNumberID string `pathParam:"style=simple,explode=false,name=phoneNumberId"`
}

type UnAssignPhoneNumCallQueueSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UnAssignPhoneNumCallQueueRequest struct {
	PathParams UnAssignPhoneNumCallQueuePathParams
	Security   UnAssignPhoneNumCallQueueSecurity
}

type UnAssignPhoneNumCallQueueResponse struct {
	Body                                              []byte
	ContentType                                       string
	StatusCode                                        int64
	UnAssignPhoneNumCallQueue204ApplicationJSONObject map[string]interface{}
}
