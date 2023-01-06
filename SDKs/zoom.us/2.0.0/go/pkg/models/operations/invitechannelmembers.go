package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type InviteChannelMembersPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type InviteChannelMembersApplicationJSONMembers struct {
	Email string `json:"email"`
}

type InviteChannelMembersApplicationJSON struct {
	Members []InviteChannelMembersApplicationJSONMembers `json:"members,omitempty"`
}

type InviteChannelMembersMultipartFormDataMembers struct {
	Email string `json:"email"`
}

type InviteChannelMembersMultipartFormData1 struct {
	Members []InviteChannelMembersMultipartFormDataMembers `multipartForm:"name=members,json"`
}

type InviteChannelMembersRequests struct {
	Object  *InviteChannelMembersApplicationJSON    `request:"mediaType=application/json"`
	Object1 *InviteChannelMembersMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type InviteChannelMembersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type InviteChannelMembers201ApplicationJSON struct {
	AddedAt *time.Time `json:"added_at,omitempty"`
	Ids     []string   `json:"ids,omitempty"`
}

type InviteChannelMembersRequest struct {
	PathParams InviteChannelMembersPathParams
	Request    *InviteChannelMembersRequests
	Security   InviteChannelMembersSecurity
}

type InviteChannelMembersResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	InviteChannelMembers201ApplicationJSONObject *InviteChannelMembers201ApplicationJSON
}
