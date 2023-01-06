package operations

type DeleteChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteChannelRequest struct {
	PathParams DeleteChannelPathParams
}

type DeleteChannelResponse struct {
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
	DeleteChannel204ApplicationJSONAny *interface{}
}
