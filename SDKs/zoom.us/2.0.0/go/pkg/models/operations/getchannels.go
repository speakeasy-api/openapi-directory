package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetChannelsQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type GetChannelsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetChannels200ApplicationJSONChannelsChannelsSettings struct {
	AllowToAddExternalUsers               *int64 `json:"allow_to_add_external_users,omitempty"`
	NewMembersCanSeePreviousMessagesFiles *bool  `json:"new_members_can_see_previous_messages_files,omitempty"`
	PostingPermissions                    *int64 `json:"posting_permissions,omitempty"`
}

type GetChannels200ApplicationJSONChannels struct {
	ChannelsSettings *GetChannels200ApplicationJSONChannelsChannelsSettings `json:"channels_settings,omitempty"`
	ID               *string                                                `json:"id,omitempty"`
	Name             *string                                                `json:"name,omitempty"`
	Type             *int64                                                 `json:"type,omitempty"`
}

type GetChannels200ApplicationJSON struct {
	Channels      []GetChannels200ApplicationJSONChannels `json:"channels,omitempty"`
	NextPageToken *string                                 `json:"next_page_token,omitempty"`
	PageSize      *int64                                  `json:"page_size,omitempty"`
	TotalRecords  *int64                                  `json:"total_records,omitempty"`
}

type GetChannelsRequest struct {
	PathParams  GetChannelsPathParams
	QueryParams GetChannelsQueryParams
	Security    GetChannelsSecurity
}

type GetChannelsResponse struct {
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	GetChannels200ApplicationJSONObject *GetChannels200ApplicationJSON
}
