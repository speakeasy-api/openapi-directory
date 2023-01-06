package operations

import (
	"openapi/pkg/models/shared"
)

type GroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type Group200ApplicationJSON struct {
	ID           *string `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
	TotalMembers *int64  `json:"total_members,omitempty"`
}

type GroupRequest struct {
	PathParams GroupPathParams
	Security   GroupSecurity
}

type GroupResponse struct {
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
	Group200ApplicationJSONObject *Group200ApplicationJSON
}
