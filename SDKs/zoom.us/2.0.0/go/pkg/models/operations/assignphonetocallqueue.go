package operations

import (
	"openapi/pkg/models/shared"
)

type AssignPhoneToCallQueuePathParams struct {
	CallQueueID string `pathParam:"style=simple,explode=false,name=callQueueId"`
}

type AssignPhoneToCallQueueApplicationJSONPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type AssignPhoneToCallQueueApplicationJSON struct {
	PhoneNumbers []AssignPhoneToCallQueueApplicationJSONPhoneNumbers `json:"phone_numbers,omitempty"`
}

type AssignPhoneToCallQueueMultipartFormDataPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type AssignPhoneToCallQueueMultipartFormData1 struct {
	PhoneNumbers []AssignPhoneToCallQueueMultipartFormDataPhoneNumbers `multipartForm:"name=phone_numbers,json"`
}

type AssignPhoneToCallQueueRequests struct {
	Object  *AssignPhoneToCallQueueApplicationJSON    `request:"mediaType=application/json"`
	Object1 *AssignPhoneToCallQueueMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type AssignPhoneToCallQueueSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AssignPhoneToCallQueueRequest struct {
	PathParams AssignPhoneToCallQueuePathParams
	Request    *AssignPhoneToCallQueueRequests
	Security   AssignPhoneToCallQueueSecurity
}

type AssignPhoneToCallQueueResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	AssignPhoneToCallQueue204ApplicationJSONObject map[string]interface{}
}
