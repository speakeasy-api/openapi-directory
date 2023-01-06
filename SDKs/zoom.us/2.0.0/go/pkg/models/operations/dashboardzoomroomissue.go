package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardZoomRoomIssueQueryParams struct {
	From time.Time `queryParam:"style=form,explode=true,name=from"`
	To   time.Time `queryParam:"style=form,explode=true,name=to"`
}

type DashboardZoomRoomIssueSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardZoomRoomIssue200ApplicationJSONIssues struct {
	IssueName      *string `json:"issue_name,omitempty"`
	ZoomRoomsCount *int64  `json:"zoom_rooms_count,omitempty"`
}

type DashboardZoomRoomIssue200ApplicationJSON struct {
	Issues []DashboardZoomRoomIssue200ApplicationJSONIssues `json:"issues,omitempty"`
}

type DashboardZoomRoomIssueRequest struct {
	QueryParams DashboardZoomRoomIssueQueryParams
	Security    DashboardZoomRoomIssueSecurity
}

type DashboardZoomRoomIssueResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	DashboardZoomRoomIssue200ApplicationJSONObject *DashboardZoomRoomIssue200ApplicationJSON
}
