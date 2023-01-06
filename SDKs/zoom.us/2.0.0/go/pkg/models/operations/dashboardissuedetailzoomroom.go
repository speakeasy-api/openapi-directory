package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardIssueDetailZoomRoomPathParams struct {
	ZoomroomID string `pathParam:"style=simple,explode=false,name=zoomroomId"`
}

type DashboardIssueDetailZoomRoomQueryParams struct {
	From          time.Time `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string   `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64    `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time `queryParam:"style=form,explode=true,name=to"`
}

type DashboardIssueDetailZoomRoomSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// DashboardIssueDetailZoomRoom200ApplicationJSON
// Pagination object.
type DashboardIssueDetailZoomRoom200ApplicationJSON struct {
	From *time.Time `json:"from,omitempty"`
	To   *time.Time `json:"to,omitempty"`
}

type DashboardIssueDetailZoomRoomRequest struct {
	PathParams  DashboardIssueDetailZoomRoomPathParams
	QueryParams DashboardIssueDetailZoomRoomQueryParams
	Security    DashboardIssueDetailZoomRoomSecurity
}

type DashboardIssueDetailZoomRoomResponse struct {
	Body                                                 []byte
	ContentType                                          string
	StatusCode                                           int64
	DashboardIssueDetailZoomRoom200ApplicationJSONObject *DashboardIssueDetailZoomRoom200ApplicationJSON
}
