package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRoleApplicationJSON struct {
	Description *string  `json:"description,omitempty"`
	Name        *string  `json:"name,omitempty"`
	Privileges  []string `json:"privileges,omitempty"`
}

type CreateRoleMultipartFormData struct {
	Description *string  `multipartForm:"name=description"`
	Name        *string  `multipartForm:"name=name"`
	Privileges  []string `multipartForm:"name=privileges,json"`
}

type CreateRoleRequests struct {
	Object  *CreateRoleApplicationJSON   `request:"mediaType=application/json"`
	Object1 *CreateRoleMultipartFormData `request:"mediaType=multipart/form-data"`
}

type CreateRoleSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type CreateRole201ApplicationJSON struct {
	Description  *string  `json:"description,omitempty"`
	ID           *string  `json:"id,omitempty"`
	Name         *string  `json:"name,omitempty"`
	Privileges   []string `json:"privileges,omitempty"`
	TotalMembers *int64   `json:"total_members,omitempty"`
}

type CreateRoleRequest struct {
	Request  *CreateRoleRequests
	Security CreateRoleSecurity
}

type CreateRoleResponse struct {
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
	CreateRole200ApplicationJSONAny    *interface{}
	CreateRole201ApplicationJSONObject *CreateRole201ApplicationJSON
}
