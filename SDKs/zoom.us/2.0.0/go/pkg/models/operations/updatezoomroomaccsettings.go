package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateZoomRoomAccSettingsQueryParams struct {
	SettingType string `queryParam:"style=form,explode=true,name=setting_type"`
}

type UpdateZoomRoomAccSettingsRequests struct {
	Object  map[string]interface{} `request:"mediaType=application/json"`
	Object1 map[string]interface{} `request:"mediaType=multipart/form-data"`
}

type UpdateZoomRoomAccSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateZoomRoomAccSettingsRequest struct {
	QueryParams UpdateZoomRoomAccSettingsQueryParams
	Request     *UpdateZoomRoomAccSettingsRequests
	Security    UpdateZoomRoomAccSettingsSecurity
}

type UpdateZoomRoomAccSettingsResponse struct {
	Body                                              []byte
	ContentType                                       string
	StatusCode                                        int64
	UpdateZoomRoomAccSettings204ApplicationJSONObject map[string]interface{}
}
