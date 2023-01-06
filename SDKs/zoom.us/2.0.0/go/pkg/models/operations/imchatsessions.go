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

// ImChatSessions200ApplicationJSON
// Pagination object.
type ImChatSessions200ApplicationJSON struct {
	NextPageToken *string `json:"next_page_token,omitempty"`
	PageSize      *int64  `json:"page_size,omitempty"`
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
