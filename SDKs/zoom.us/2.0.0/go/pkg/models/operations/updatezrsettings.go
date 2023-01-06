package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateZrSettingsPathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type UpdateZrSettingsQueryParams struct {
	SettingType *string `queryParam:"style=form,explode=true,name=setting_type"`
}

type UpdateZrSettingsRequests struct {
	Object  map[string]interface{} `request:"mediaType=application/json"`
	Object1 map[string]interface{} `request:"mediaType=multipart/form-data"`
}

type UpdateZrSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateZrSettingsRequest struct {
	PathParams  UpdateZrSettingsPathParams
	QueryParams UpdateZrSettingsQueryParams
	Request     *UpdateZrSettingsRequests
	Security    UpdateZrSettingsSecurity
}

type UpdateZrSettingsResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	UpdateZRSettings204ApplicationJSONAny *interface{}
}
