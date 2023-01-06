package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserSettingPathParams struct {
	SettingType string `pathParam:"style=simple,explode=false,name=settingType"`
	UserID      string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteUserSettingQueryParams struct {
	SharedID string `queryParam:"style=form,explode=true,name=shared_id"`
}

type DeleteUserSettingSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeleteUserSettingRequest struct {
	PathParams  DeleteUserSettingPathParams
	QueryParams DeleteUserSettingQueryParams
	Security    DeleteUserSettingSecurity
}

type DeleteUserSettingResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	DeleteUserSetting204ApplicationJSONAny *interface{}
}
