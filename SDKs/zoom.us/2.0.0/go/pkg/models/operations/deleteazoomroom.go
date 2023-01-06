package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAZoomRoomPathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type DeleteAZoomRoomSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeleteAZoomRoomRequest struct {
	PathParams DeleteAZoomRoomPathParams
	Security   DeleteAZoomRoomSecurity
}

type DeleteAZoomRoomResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	DeleteAZoomRoom204ApplicationJSONObject map[string]interface{}
}
