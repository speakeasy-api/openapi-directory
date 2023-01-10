package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardImQueryParams struct {
	From          time.Time `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string   `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64    `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time `queryParam:"style=form,explode=true,name=to"`
}

type DashboardImSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardIm200ApplicationJSONUsers struct {
	CallsReceive  *int64  `json:"calls_receive,omitempty"`
	CallsSend     *int64  `json:"calls_send,omitempty"`
	Email         *string `json:"email,omitempty"`
	EmojiReceive  *int64  `json:"emoji_receive,omitempty"`
	EmojiSend     *int64  `json:"emoji_send,omitempty"`
	FilesReceive  *int64  `json:"files_receive,omitempty"`
	FilesSend     *int64  `json:"files_send,omitempty"`
	GroupReceive  *int64  `json:"group_receive,omitempty"`
	GroupSend     *int64  `json:"group_send,omitempty"`
	ImagesReceive *int64  `json:"images_receive,omitempty"`
	ImagesSend    *int64  `json:"images_send,omitempty"`
	TotalReceive  *int64  `json:"total_receive,omitempty"`
	TotalSend     *int64  `json:"total_send,omitempty"`
	UserID        *string `json:"user_id,omitempty"`
	UserName      *string `json:"user_name,omitempty"`
	VideosReceive *int64  `json:"videos_receive,omitempty"`
	VideosSend    *int64  `json:"videos_send,omitempty"`
	VoiceReceive  *int64  `json:"voice_receive,omitempty"`
	VoiceSend     *int64  `json:"voice_send,omitempty"`
}

// DashboardIm200ApplicationJSON
// Pagination object.
type DashboardIm200ApplicationJSON struct {
	From          *time.Time                           `json:"from,omitempty"`
	NextPageToken *string                              `json:"next_page_token,omitempty"`
	PageCount     *int64                               `json:"page_count,omitempty"`
	PageSize      *int64                               `json:"page_size,omitempty"`
	To            *time.Time                           `json:"to,omitempty"`
	TotalRecords  *int64                               `json:"total_records,omitempty"`
	Users         []DashboardIm200ApplicationJSONUsers `json:"users,omitempty"`
}

type DashboardImRequest struct {
	QueryParams DashboardImQueryParams
	Security    DashboardImSecurity
}

type DashboardImResponse struct {
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	DashboardIM200ApplicationJSONObject *DashboardIm200ApplicationJSON
}
