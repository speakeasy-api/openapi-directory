package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserLevelChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
}

type UpdateUserLevelChannelApplicationJSON struct {
	Name string `json:"name"`
}

type UpdateUserLevelChannelMultipartFormData struct {
	Name string `multipartForm:"name=name"`
}

type UpdateUserLevelChannelRequests struct {
	Object  *UpdateUserLevelChannelApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateUserLevelChannelMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateUserLevelChannelSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateUserLevelChannelRequest struct {
	PathParams UpdateUserLevelChannelPathParams
	Request    *UpdateUserLevelChannelRequests
	Security   UpdateUserLevelChannelSecurity
}

type UpdateUserLevelChannelResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	UpdateUserLevelChannel204ApplicationJSONAny *interface{}
}
