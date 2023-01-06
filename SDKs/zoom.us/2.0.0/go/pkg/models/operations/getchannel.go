package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetChannelSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// GetChannel200ApplicationJSON
// The channel object represents a Zoom chat [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-).
type GetChannel200ApplicationJSON struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *int64  `json:"type,omitempty"`
}

type GetChannelRequest struct {
	PathParams GetChannelPathParams
	Security   GetChannelSecurity
}

type GetChannelResponse struct {
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
	GetChannel200ApplicationJSONObject *GetChannel200ApplicationJSON
}
