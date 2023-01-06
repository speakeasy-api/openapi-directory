package operations

import (
	"openapi/pkg/models/shared"
)

type AssignPhoneNumberPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type AssignPhoneNumberApplicationJSONPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type AssignPhoneNumberApplicationJSON struct {
	PhoneNumbers []AssignPhoneNumberApplicationJSONPhoneNumbers `json:"phone_numbers,omitempty"`
}

type AssignPhoneNumberMultipartFormDataPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type AssignPhoneNumberMultipartFormData1 struct {
	PhoneNumbers []AssignPhoneNumberMultipartFormDataPhoneNumbers `multipartForm:"name=phone_numbers,json"`
}

type AssignPhoneNumberRequests struct {
	Object  *AssignPhoneNumberApplicationJSON    `request:"mediaType=application/json"`
	Object1 *AssignPhoneNumberMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type AssignPhoneNumberSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AssignPhoneNumber200ApplicationJSONPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type AssignPhoneNumber200ApplicationJSON struct {
	PhoneNumbers []AssignPhoneNumber200ApplicationJSONPhoneNumbers `json:"phone_numbers,omitempty"`
}

type AssignPhoneNumberRequest struct {
	PathParams AssignPhoneNumberPathParams
	Request    *AssignPhoneNumberRequests
	Security   AssignPhoneNumberSecurity
}

type AssignPhoneNumberResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	AssignPhoneNumber200ApplicationJSONObject *AssignPhoneNumber200ApplicationJSON
}
