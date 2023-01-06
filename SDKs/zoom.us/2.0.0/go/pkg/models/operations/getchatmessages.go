package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetChatMessagesPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetChatMessagesQueryParams struct {
	Date                           *time.Time `queryParam:"style=form,explode=true,name=date"`
	IncludeDeletedAndEditedMessage *string    `queryParam:"style=form,explode=true,name=include_deleted_and_edited_message"`
	NextPageToken                  *string    `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize                       *int64     `queryParam:"style=form,explode=true,name=page_size"`
	ToChannel                      *string    `queryParam:"style=form,explode=true,name=to_channel"`
	ToContact                      *string    `queryParam:"style=form,explode=true,name=to_contact"`
}

type GetChatMessagesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetChatMessages200ApplicationJSONMessagesStatusEnum string

const (
	GetChatMessages200ApplicationJSONMessagesStatusEnumDeleted GetChatMessages200ApplicationJSONMessagesStatusEnum = "Deleted"
	GetChatMessages200ApplicationJSONMessagesStatusEnumEdited  GetChatMessages200ApplicationJSONMessagesStatusEnum = "Edited"
	GetChatMessages200ApplicationJSONMessagesStatusEnumNormal  GetChatMessages200ApplicationJSONMessagesStatusEnum = "Normal"
)

type GetChatMessages200ApplicationJSONMessages struct {
	DateTime                  *string                                              `json:"date_time,omitempty"`
	ID                        *string                                              `json:"id,omitempty"`
	Message                   *string                                              `json:"message,omitempty"`
	ReplyMainMessageID        *string                                              `json:"reply_main_message_id,omitempty"`
	ReplyMainMessageTimestamp *int64                                               `json:"reply_main_message_timestamp,omitempty"`
	Sender                    *string                                              `json:"sender,omitempty"`
	Status                    *GetChatMessages200ApplicationJSONMessagesStatusEnum `json:"status,omitempty"`
	Timestamp                 *int64                                               `json:"timestamp,omitempty"`
}

// GetChatMessages200ApplicationJSON
// Chat message object.
type GetChatMessages200ApplicationJSON struct {
	Date          *time.Time                                  `json:"date,omitempty"`
	Messages      []GetChatMessages200ApplicationJSONMessages `json:"messages,omitempty"`
	NextPageToken *string                                     `json:"next_page_token,omitempty"`
	PageSize      *int64                                      `json:"page_size,omitempty"`
}

type GetChatMessagesRequest struct {
	PathParams  GetChatMessagesPathParams
	QueryParams GetChatMessagesQueryParams
	Security    GetChatMessagesSecurity
}

type GetChatMessagesResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	GetChatMessages200ApplicationJSONObject *GetChatMessages200ApplicationJSON
}
