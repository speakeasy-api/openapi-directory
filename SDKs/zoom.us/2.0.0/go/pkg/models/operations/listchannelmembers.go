package operations

import (
	"openapi/pkg/models/shared"
)

type ListChannelMembersPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type ListChannelMembersQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ListChannelMembersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListChannelMembers200ApplicationJSONMembersRoleEnum string

const (
	ListChannelMembers200ApplicationJSONMembersRoleEnumAdmin  ListChannelMembers200ApplicationJSONMembersRoleEnum = "admin"
	ListChannelMembers200ApplicationJSONMembersRoleEnumOwner  ListChannelMembers200ApplicationJSONMembersRoleEnum = "owner"
	ListChannelMembers200ApplicationJSONMembersRoleEnumMember ListChannelMembers200ApplicationJSONMembersRoleEnum = "member"
)

type ListChannelMembers200ApplicationJSONMembers struct {
	Email     *string                                              `json:"email,omitempty"`
	FirstName *string                                              `json:"first_name,omitempty"`
	ID        *string                                              `json:"id,omitempty"`
	LastName  *string                                              `json:"last_name,omitempty"`
	Role      *ListChannelMembers200ApplicationJSONMembersRoleEnum `json:"role,omitempty"`
}

type ListChannelMembers200ApplicationJSON struct {
	Members       []ListChannelMembers200ApplicationJSONMembers `json:"members,omitempty"`
	NextPageToken *string                                       `json:"next_page_token,omitempty"`
	PageSize      *int64                                        `json:"page_size,omitempty"`
	TotalRecords  *int64                                        `json:"total_records,omitempty"`
}

type ListChannelMembersRequest struct {
	PathParams  ListChannelMembersPathParams
	QueryParams ListChannelMembersQueryParams
	Security    ListChannelMembersSecurity
}

type ListChannelMembersResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	ListChannelMembers200ApplicationJSONObject *ListChannelMembers200ApplicationJSON
}
