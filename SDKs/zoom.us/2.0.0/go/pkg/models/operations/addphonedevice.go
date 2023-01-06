package operations

import (
	"openapi/pkg/models/shared"
)

type AddPhoneDeviceApplicationJSON struct {
	AssignedTo  *string `json:"assigned_to,omitempty"`
	DisplayName string  `json:"display_name"`
	MacAddress  string  `json:"mac_address"`
	Model       *string `json:"model,omitempty"`
	Type        *string `json:"type,omitempty"`
}

type AddPhoneDeviceMultipartFormData struct {
	AssignedTo  *string `multipartForm:"name=assigned_to"`
	DisplayName string  `multipartForm:"name=display_name"`
	MacAddress  string  `multipartForm:"name=mac_address"`
	Model       *string `multipartForm:"name=model"`
	Type        *string `multipartForm:"name=type"`
}

type AddPhoneDeviceRequests struct {
	Object  *AddPhoneDeviceApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AddPhoneDeviceMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AddPhoneDeviceSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AddPhoneDeviceRequest struct {
	Request  *AddPhoneDeviceRequests
	Security AddPhoneDeviceSecurity
}

type AddPhoneDeviceResponse struct {
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	AddPhoneDevice201ApplicationJSONAny *interface{}
}
