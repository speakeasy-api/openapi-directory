package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarPanelistsPathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarPanelistsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// WebinarPanelistsPanelistListPanelists
// Panelist base object.
type WebinarPanelistsPanelistListPanelists struct {
	ID *string `json:"id,omitempty"`
}

// WebinarPanelistsPanelistList
// List of panelists.
type WebinarPanelistsPanelistList struct {
	Panelists    []WebinarPanelistsPanelistListPanelists `json:"panelists,omitempty"`
	TotalRecords *int64                                  `json:"total_records,omitempty"`
}

type WebinarPanelistsRequest struct {
	PathParams WebinarPanelistsPathParams
	Security   WebinarPanelistsSecurity
}

type WebinarPanelistsResponse struct {
	Body         []byte
	ContentType  string
	PanelistList *WebinarPanelistsPanelistList
	StatusCode   int64
}
