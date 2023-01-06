package operations

import (
	"openapi/pkg/models/shared"
)

type AssignPhoneNumbersAutoReceptionistPathParams struct {
	AutoReceptionistID string `pathParam:"style=simple,explode=false,name=autoReceptionistId"`
}

type AssignPhoneNumbersAutoReceptionistApplicationJSONPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type AssignPhoneNumbersAutoReceptionistApplicationJSON struct {
	PhoneNumbers []AssignPhoneNumbersAutoReceptionistApplicationJSONPhoneNumbers `json:"phone_numbers,omitempty"`
}

type AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type AssignPhoneNumbersAutoReceptionistMultipartFormData1 struct {
	PhoneNumbers []AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers `multipartForm:"name=phone_numbers,json"`
}

type AssignPhoneNumbersAutoReceptionistRequests struct {
	Object  *AssignPhoneNumbersAutoReceptionistApplicationJSON    `request:"mediaType=application/json"`
	Object1 *AssignPhoneNumbersAutoReceptionistMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type AssignPhoneNumbersAutoReceptionistSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AssignPhoneNumbersAutoReceptionistRequest struct {
	PathParams AssignPhoneNumbersAutoReceptionistPathParams
	Request    *AssignPhoneNumbersAutoReceptionistRequests
	Security   AssignPhoneNumbersAutoReceptionistSecurity
}

type AssignPhoneNumbersAutoReceptionistResponse struct {
	Body                                                    []byte
	ContentType                                             string
	StatusCode                                              int64
	AssignPhoneNumbersAutoReceptionist204ApplicationJSONAny *interface{}
}
