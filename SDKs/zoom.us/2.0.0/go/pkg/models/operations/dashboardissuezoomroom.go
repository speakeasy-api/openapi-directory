package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardIssueZoomRoomQueryParams struct {
	From time.Time `queryParam:"style=form,explode=true,name=from"`
	To   time.Time `queryParam:"style=form,explode=true,name=to"`
}

type DashboardIssueZoomRoomSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardIssueZoomRoom200ApplicationJSON struct {
	ZoomRooms []interface{} `json:"zoom_rooms,omitempty"`
}

type DashboardIssueZoomRoomRequest struct {
	QueryParams DashboardIssueZoomRoomQueryParams
	Security    DashboardIssueZoomRoomSecurity
}

type DashboardIssueZoomRoomResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	DashboardIssueZoomRoom200ApplicationJSONObject *DashboardIssueZoomRoom200ApplicationJSON
}
