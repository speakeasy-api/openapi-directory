package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// Groups200ApplicationJSONGroups
// Group object.
type Groups200ApplicationJSONGroups struct {
	Name         *string `json:"name,omitempty"`
	TotalMembers *int64  `json:"total_members,omitempty"`
}

// Groups200ApplicationJSON
// List of Groups.
type Groups200ApplicationJSON struct {
	Groups       []Groups200ApplicationJSONGroups `json:"groups,omitempty"`
	TotalRecords *int64                           `json:"total_records,omitempty"`
}

type GroupsRequest struct {
	Security GroupsSecurity
}

type GroupsResponse struct {
	Body                           []byte
	ContentType                    string
	StatusCode                     int64
	Groups200ApplicationJSONObject *Groups200ApplicationJSON
}
