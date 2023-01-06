package operations

import (
	"openapi/pkg/models/shared"
)

type GetZrLocationSettingsPathParams struct {
	LocationID string `pathParam:"style=simple,explode=false,name=locationId"`
}

type GetZrLocationSettingsQueryParams struct {
	SettingType string `queryParam:"style=form,explode=true,name=setting_type"`
}

type GetZrLocationSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetZrLocationSettingsRequest struct {
	PathParams  GetZrLocationSettingsPathParams
	QueryParams GetZrLocationSettingsQueryParams
	Security    GetZrLocationSettingsSecurity
}

type GetZrLocationSettingsResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	GetZRLocationSettings200ApplicationJSONObject map[string]interface{}
}
