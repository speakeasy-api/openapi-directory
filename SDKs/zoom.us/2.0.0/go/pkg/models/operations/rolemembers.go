package operations

import (
	"openapi/pkg/models/shared"
)

type RoleMembersPathParams struct {
	RoleID string `pathParam:"style=simple,explode=false,name=roleId"`
}

type RoleMembersQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageCount     *string `queryParam:"style=form,explode=true,name=page_count"`
	PageNumber    *int64  `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type RoleMembersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RoleMembersRoleMembersListMembers struct {
	Department *string `json:"department,omitempty"`
	Email      *string `json:"email,omitempty"`
	FirstName  *string `json:"first_name,omitempty"`
	ID         *string `json:"id,omitempty"`
	LastName   *string `json:"last_name,omitempty"`
	Type       *int64  `json:"type,omitempty"`
}

// RoleMembersRoleMembersList
// List of a Role Members
type RoleMembersRoleMembersList struct {
	Members       []RoleMembersRoleMembersListMembers `json:"members,omitempty"`
	NextPageToken *string                             `json:"next_page_token,omitempty"`
	PageCount     *int64                              `json:"page_count,omitempty"`
	PageNumber    *int64                              `json:"page_number,omitempty"`
	PageSize      *int64                              `json:"page_size,omitempty"`
	TotalRecords  *int64                              `json:"total_records,omitempty"`
}

type RoleMembersRequest struct {
	PathParams  RoleMembersPathParams
	QueryParams RoleMembersQueryParams
	Security    RoleMembersSecurity
}

type RoleMembersResponse struct {
	Body            []byte
	ContentType     string
	RoleMembersList *RoleMembersRoleMembersList
	StatusCode      int64
}
