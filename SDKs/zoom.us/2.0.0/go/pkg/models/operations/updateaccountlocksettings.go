package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountLockSettingsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type UpdateAccountLockSettingsRequests struct {
	Object  map[string]interface{} `request:"mediaType=application/json"`
	Object1 map[string]interface{} `request:"mediaType=multipart/form-data"`
}

type UpdateAccountLockSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateAccountLockSettingsRequest struct {
	PathParams UpdateAccountLockSettingsPathParams
	Request    *UpdateAccountLockSettingsRequests
	Security   UpdateAccountLockSettingsSecurity
}

type UpdateAccountLockSettingsResponse struct {
	Body                                              []byte
	ContentType                                       string
	StatusCode                                        int64
	UpdateAccountLockSettings200ApplicationJSONAny    *interface{}
	UpdateAccountLockSettings204ApplicationJSONObject map[string]interface{}
}
