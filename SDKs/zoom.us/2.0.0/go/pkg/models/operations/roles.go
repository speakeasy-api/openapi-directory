package operations

import (
	"openapi/pkg/models/shared"
)

type RolesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// RolesRoleList
// List of Roles
type RolesRoleList struct {
	Roles        []interface{} `json:"roles,omitempty"`
	TotalRecords *int64        `json:"total_records,omitempty"`
}

type RolesRequest struct {
	Security RolesSecurity
}

type RolesResponse struct {
	Body        []byte
	ContentType string
	RoleList    *RolesRoleList
	StatusCode  int64
}
