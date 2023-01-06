package operations

import (
	"openapi/pkg/models/shared"
)

type GetZrAccountSettingsSettingTypeEnum string

const (
	GetZRAccountSettingsSettingTypeEnumMeeting GetZrAccountSettingsSettingTypeEnum = "meeting"
	GetZRAccountSettingsSettingTypeEnumAlert   GetZrAccountSettingsSettingTypeEnum = "alert"
)

type GetZrAccountSettingsQueryParams struct {
	SettingType GetZrAccountSettingsSettingTypeEnum `queryParam:"style=form,explode=true,name=setting_type"`
}

type GetZrAccountSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetZrAccountSettingsRequest struct {
	QueryParams GetZrAccountSettingsQueryParams
	Security    GetZrAccountSettingsSecurity
}

type GetZrAccountSettingsResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	GetZRAccountSettings200ApplicationJSONObject map[string]interface{}
}
