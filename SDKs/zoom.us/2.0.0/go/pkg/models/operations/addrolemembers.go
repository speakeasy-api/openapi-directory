package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type AddRoleMembersPathParams struct {
	RoleID string `pathParam:"style=simple,explode=false,name=roleId"`
}

type AddRoleMembersApplicationJSONMembers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

type AddRoleMembersApplicationJSON struct {
	Members []AddRoleMembersApplicationJSONMembers `json:"members,omitempty"`
}

type AddRoleMembersMultipartFormDataMembers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

type AddRoleMembersMultipartFormData1 struct {
	Members []AddRoleMembersMultipartFormDataMembers `multipartForm:"name=members,json"`
}

type AddRoleMembersRequests struct {
	Object  *AddRoleMembersApplicationJSON    `request:"mediaType=application/json"`
	Object1 *AddRoleMembersMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type AddRoleMembersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AddRoleMembers201ApplicationJSON struct {
	AddAt *time.Time `json:"add_at,omitempty"`
	Ids   *string    `json:"ids,omitempty"`
}

type AddRoleMembersRequest struct {
	PathParams AddRoleMembersPathParams
	Request    AddRoleMembersRequests
	Security   AddRoleMembersSecurity
}

type AddRoleMembersResponse struct {
	AddRoleMembers201ApplicationJSONObject *AddRoleMembers201ApplicationJSON
	Body                                   []byte
	ContentType                            string
	Headers                                map[string][]string
	StatusCode                             int64
}
