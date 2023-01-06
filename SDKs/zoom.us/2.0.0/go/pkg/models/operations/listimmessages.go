package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListimmessagesPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type ListimmessagesQueryParams struct {
	Channel       *string `queryParam:"style=form,explode=true,name=channel"`
	ChatUser      *string `queryParam:"style=form,explode=true,name=chat_user"`
	Date          *string `queryParam:"style=form,explode=true,name=date"`
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ListimmessagesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type Listimmessages200ApplicationJSONMessages struct {
	DateTime *time.Time `json:"date_time,omitempty"`
	ID       *string    `json:"id,omitempty"`
	Message  *string    `json:"message,omitempty"`
	Sender   *string    `json:"sender,omitempty"`
	Timstamp *int64     `json:"timstamp,omitempty"`
}

type Listimmessages200ApplicationJSON struct {
	Date          *time.Time                                 `json:"date,omitempty"`
	Messages      []Listimmessages200ApplicationJSONMessages `json:"messages,omitempty"`
	NextPageToken *string                                    `json:"next_page_token,omitempty"`
	PageSize      *int64                                     `json:"page_size,omitempty"`
}

type ListimmessagesRequest struct {
	PathParams  ListimmessagesPathParams
	QueryParams ListimmessagesQueryParams
	Security    ListimmessagesSecurity
}

type ListimmessagesResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	Listimmessages200ApplicationJSONObject *Listimmessages200ApplicationJSON
}
