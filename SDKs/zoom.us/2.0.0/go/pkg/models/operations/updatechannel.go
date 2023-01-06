package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type UpdateChannelApplicationJSON struct {
	Name string `json:"name"`
}

type UpdateChannelMultipartFormData struct {
	Name string `multipartForm:"name=name"`
}

type UpdateChannelRequests struct {
	Object  *UpdateChannelApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateChannelMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateChannelSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateChannelRequest struct {
	PathParams UpdateChannelPathParams
	Request    *UpdateChannelRequests
	Security   UpdateChannelSecurity
}

type UpdateChannelResponse struct {
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
	UpdateChannel204ApplicationJSONAny *interface{}
}
