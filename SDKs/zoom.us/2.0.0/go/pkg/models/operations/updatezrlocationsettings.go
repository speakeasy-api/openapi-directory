package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateZrLocationSettingsPathParams struct {
	LocationID string `pathParam:"style=simple,explode=false,name=locationId"`
}

type UpdateZrLocationSettingsQueryParams struct {
	SettingType string `queryParam:"style=form,explode=true,name=setting_type"`
}

type UpdateZrLocationSettingsRequests struct {
	Object  map[string]interface{} `request:"mediaType=application/json"`
	Object1 map[string]interface{} `request:"mediaType=multipart/form-data"`
}

type UpdateZrLocationSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateZrLocationSettingsRequest struct {
	PathParams  UpdateZrLocationSettingsPathParams
	QueryParams UpdateZrLocationSettingsQueryParams
	Request     *UpdateZrLocationSettingsRequests
	Security    UpdateZrLocationSettingsSecurity
}

type UpdateZrLocationSettingsResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	UpdateZRLocationSettings204ApplicationJSONAny *interface{}
}
