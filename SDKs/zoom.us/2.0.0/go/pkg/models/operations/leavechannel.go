package operations

import (
	"openapi/pkg/models/shared"
)

type LeaveChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
}

type LeaveChannelSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type LeaveChannelRequest struct {
	PathParams LeaveChannelPathParams
	Security   LeaveChannelSecurity
}

type LeaveChannelResponse struct {
	Body                              []byte
	ContentType                       string
	StatusCode                        int64
	LeaveChannel204ApplicationJSONAny *interface{}
}
