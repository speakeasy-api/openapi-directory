package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePhoneSettingsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type UpdatePhoneSettingsApplicationJSONByoc struct {
	Enable *bool `json:"enable,omitempty"`
}

type UpdatePhoneSettingsApplicationJSON struct {
	Byoc *UpdatePhoneSettingsApplicationJSONByoc `json:"byoc,omitempty"`
}

type UpdatePhoneSettingsMultipartFormDataByoc struct {
	Enable *bool `json:"enable,omitempty"`
}

type UpdatePhoneSettingsMultipartFormData struct {
	Byoc *UpdatePhoneSettingsMultipartFormDataByoc `multipartForm:"name=byoc,json"`
}

type UpdatePhoneSettingsRequests struct {
	Object  *UpdatePhoneSettingsApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdatePhoneSettingsMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdatePhoneSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdatePhoneSettingsRequest struct {
	PathParams UpdatePhoneSettingsPathParams
	Request    *UpdatePhoneSettingsRequests
	Security   UpdatePhoneSettingsSecurity
}

type UpdatePhoneSettingsResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	UpdatePhoneSettings204ApplicationJSONAny *interface{}
}
