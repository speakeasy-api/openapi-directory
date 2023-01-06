package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserLevelChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
}

type GetUserLevelChannelSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// GetUserLevelChannel200ApplicationJSON
// The channel object represents a Zoom chat [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-).
type GetUserLevelChannel200ApplicationJSON struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *int64  `json:"type,omitempty"`
}

type GetUserLevelChannelRequest struct {
	PathParams GetUserLevelChannelPathParams
	Security   GetUserLevelChannelSecurity
}

type GetUserLevelChannelResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	GetUserLevelChannel200ApplicationJSONObject *GetUserLevelChannel200ApplicationJSON
}
