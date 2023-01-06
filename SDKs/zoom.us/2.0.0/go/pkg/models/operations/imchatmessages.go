package operations

import (
	"time"
)

type ImChatMessagesPathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
}

type ImChatMessagesQueryParams struct {
	From          time.Time `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string   `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64    `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time `queryParam:"style=form,explode=true,name=to"`
}

// ImChatMessages200ApplicationJSON
// Pagination object.
type ImChatMessages200ApplicationJSON struct {
	From      *time.Time `json:"from,omitempty"`
	SessionID *string    `json:"session_id,omitempty"`
	To        *time.Time `json:"to,omitempty"`
}

type ImChatMessagesRequest struct {
	PathParams  ImChatMessagesPathParams
	QueryParams ImChatMessagesQueryParams
}

type ImChatMessagesResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	ImChatMessages200ApplicationJSONObject *ImChatMessages200ApplicationJSON
}
