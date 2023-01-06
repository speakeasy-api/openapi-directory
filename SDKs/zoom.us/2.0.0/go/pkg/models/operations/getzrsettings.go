package operations

import (
	"openapi/pkg/models/shared"
)

type GetZrSettingsPathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type GetZrSettingsQueryParams struct {
	SettingType string `queryParam:"style=form,explode=true,name=setting_type"`
}

type GetZrSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetZrSettingsRequest struct {
	PathParams  GetZrSettingsPathParams
	QueryParams GetZrSettingsQueryParams
	Security    GetZrSettingsSecurity
}

type GetZrSettingsResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	GetZRSettings200ApplicationJSONObject map[string]interface{}
}
