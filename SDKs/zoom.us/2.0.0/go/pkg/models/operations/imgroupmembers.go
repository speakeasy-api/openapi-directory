package operations

import (
	"openapi/pkg/models/shared"
)

type ImGroupMembersPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type ImGroupMembersQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageNumber    *int64  `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ImGroupMembersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// ImGroupMembersGroupMemberListMembers
// Group member object.
type ImGroupMembersGroupMemberListMembers struct {
	Email     *string `json:"email,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	ID        *string `json:"id,omitempty"`
	LastName  *string `json:"last_name,omitempty"`
	Type      *int64  `json:"type,omitempty"`
}

// ImGroupMembersGroupMemberList
// Pagination Object.
type ImGroupMembersGroupMemberList struct {
	Members       []ImGroupMembersGroupMemberListMembers `json:"members,omitempty"`
	NextPageToken *string                                `json:"next_page_token,omitempty"`
	PageCount     *int64                                 `json:"page_count,omitempty"`
	PageNumber    *int64                                 `json:"page_number,omitempty"`
	PageSize      *int64                                 `json:"page_size,omitempty"`
	TotalRecords  *int64                                 `json:"total_records,omitempty"`
}

type ImGroupMembersRequest struct {
	PathParams  ImGroupMembersPathParams
	QueryParams ImGroupMembersQueryParams
	Security    ImGroupMembersSecurity
}

type ImGroupMembersResponse struct {
	Body            []byte
	ContentType     string
	GroupMemberList *ImGroupMembersGroupMemberList
	StatusCode      int64
}
