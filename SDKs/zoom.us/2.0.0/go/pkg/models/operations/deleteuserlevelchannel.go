package operations

type DeleteUserLevelChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
}

type DeleteUserLevelChannelRequest struct {
	PathParams DeleteUserLevelChannelPathParams
}

type DeleteUserLevelChannelResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	DeleteUserLevelChannel204ApplicationJSONAny *interface{}
}
