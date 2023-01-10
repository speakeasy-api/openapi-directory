package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ImChatSessionsQueryParams struct {
	From          time.Time `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string   `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64    `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time `queryParam:"style=form,explode=true,name=to"`
}

type ImChatSessionsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ImChatSessions200ApplicationJSONSessionsTypeEnum string

const (
	ImChatSessions200ApplicationJSONSessionsTypeEnumGroup ImChatSessions200ApplicationJSONSessionsTypeEnum = "Group"
	ImChatSessions200ApplicationJSONSessionsTypeEnumOne1  ImChatSessions200ApplicationJSONSessionsTypeEnum = "1:1"
)

type ImChatSessions200ApplicationJSONSessions struct {
	LastMessageSentTime *time.Time                                        `json:"last_message_sent_time,omitempty"`
	Name                *string                                           `json:"name,omitempty"`
	SessionID           *string                                           `json:"session_id,omitempty"`
	Type                *ImChatSessions200ApplicationJSONSessionsTypeEnum `json:"type,omitempty"`
}

// ImChatSessions200ApplicationJSON
// Pagination object.
type ImChatSessions200ApplicationJSON struct {
	From          *time.Time                                 `json:"from,omitempty"`
	NextPageToken *string                                    `json:"next_page_token,omitempty"`
	PageSize      *int64                                     `json:"page_size,omitempty"`
	Sessions      []ImChatSessions200ApplicationJSONSessions `json:"sessions,omitempty"`
	To            *time.Time                                 `json:"to,omitempty"`
}

type ImChatSessionsRequest struct {
	QueryParams ImChatSessionsQueryParams
	Security    ImChatSessionsSecurity
}

type ImChatSessionsResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	ImChatSessions200ApplicationJSONObject *ImChatSessions200ApplicationJSON
}
