package operations

import (
	"openapi/pkg/models/shared"
)

type GroupMembersPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupMembersQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageNumber    *int64  `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type GroupMembersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GroupMembers200ApplicationJSONMembers struct {
	Email     *string `json:"email,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	ID        *string `json:"id,omitempty"`
	LastName  *string `json:"last_name,omitempty"`
	Type      *int64  `json:"type,omitempty"`
}

type GroupMembers200ApplicationJSON struct {
	Members       []GroupMembers200ApplicationJSONMembers `json:"members,omitempty"`
	NextPageToken *string                                 `json:"next_page_token,omitempty"`
	PageCount     *int64                                  `json:"page_count,omitempty"`
	PageNumber    *int64                                  `json:"page_number,omitempty"`
	PageSize      *int64                                  `json:"page_size,omitempty"`
	TotalRecords  *int64                                  `json:"total_records,omitempty"`
}

type GroupMembersRequest struct {
	PathParams  GroupMembersPathParams
	QueryParams GroupMembersQueryParams
	Security    GroupMembersSecurity
}

type GroupMembersResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	GroupMembers200ApplicationJSONObject *GroupMembers200ApplicationJSON
}
