package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type JoinChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
}

type JoinChannelSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type JoinChannel201ApplicationJSON struct {
	AddedAt *time.Time `json:"added_at,omitempty"`
	ID      *string    `json:"id,omitempty"`
}

type JoinChannelRequest struct {
	PathParams JoinChannelPathParams
	Security   JoinChannelSecurity
}

type JoinChannelResponse struct {
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	JoinChannel201ApplicationJSONObject *JoinChannel201ApplicationJSON
}
