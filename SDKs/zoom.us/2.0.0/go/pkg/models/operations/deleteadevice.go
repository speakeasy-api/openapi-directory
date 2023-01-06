package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteADevicePathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type DeleteADeviceSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeleteADeviceRequest struct {
	PathParams DeleteADevicePathParams
	Security   DeleteADeviceSecurity
}

type DeleteADeviceResponse struct {
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
	DeleteADevice204ApplicationJSONAny *interface{}
}
