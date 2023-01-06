package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRolePathParams struct {
	RoleID string `pathParam:"style=simple,explode=false,name=roleId"`
}

// UpdateRoleApplicationJSONSubAccountPrivileges
// This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
type UpdateRoleApplicationJSONSubAccountPrivileges struct {
	SecondLevel *int64 `json:"second_level,omitempty"`
}

type UpdateRoleApplicationJSON struct {
	Description          *string                                        `json:"description,omitempty"`
	ID                   *string                                        `json:"id,omitempty"`
	Name                 *string                                        `json:"name,omitempty"`
	Privileges           []string                                       `json:"privileges,omitempty"`
	SubAccountPrivileges *UpdateRoleApplicationJSONSubAccountPrivileges `json:"sub_account_privileges,omitempty"`
	TotalMembers         *int64                                         `json:"total_members,omitempty"`
}

// UpdateRoleMultipartFormDataSubAccountPrivileges
// This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
type UpdateRoleMultipartFormDataSubAccountPrivileges struct {
	SecondLevel *int64 `json:"second_level,omitempty"`
}

type UpdateRoleMultipartFormData struct {
	Description          *string                                          `multipartForm:"name=description"`
	ID                   *string                                          `multipartForm:"name=id"`
	Name                 *string                                          `multipartForm:"name=name"`
	Privileges           []string                                         `multipartForm:"name=privileges,json"`
	SubAccountPrivileges *UpdateRoleMultipartFormDataSubAccountPrivileges `multipartForm:"name=sub_account_privileges,json"`
	TotalMembers         *int64                                           `multipartForm:"name=total_members"`
}

type UpdateRoleRequests struct {
	Object  *UpdateRoleApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateRoleMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateRoleSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateRoleRequest struct {
	PathParams UpdateRolePathParams
	Request    *UpdateRoleRequests
	Security   UpdateRoleSecurity
}

type UpdateRoleResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	UpdateRole200ApplicationJSONAny *interface{}
}
