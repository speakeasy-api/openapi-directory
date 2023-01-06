package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateADevicePathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type UpdateADeviceApplicationJSON struct {
	AssignedTo  *string `json:"assigned_to,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	MacAddress  *string `json:"mac_address,omitempty"`
}

type UpdateADeviceMultipartFormData struct {
	AssignedTo  *string `multipartForm:"name=assigned_to"`
	DisplayName *string `multipartForm:"name=display_name"`
	MacAddress  *string `multipartForm:"name=mac_address"`
}

type UpdateADeviceRequests struct {
	Object  *UpdateADeviceApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateADeviceMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateADeviceSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateADeviceRequest struct {
	PathParams UpdateADevicePathParams
	Request    *UpdateADeviceRequests
	Security   UpdateADeviceSecurity
}

type UpdateADeviceResponse struct {
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
	UpdateADevice204ApplicationJSONAny *interface{}
}
