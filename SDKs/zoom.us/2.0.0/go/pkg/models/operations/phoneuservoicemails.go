package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PhoneUserVoiceMailsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PhoneUserVoiceMailsStatusEnum string

const (
	PhoneUserVoiceMailsStatusEnumAll    PhoneUserVoiceMailsStatusEnum = "all"
	PhoneUserVoiceMailsStatusEnumRead   PhoneUserVoiceMailsStatusEnum = "read"
	PhoneUserVoiceMailsStatusEnumUnread PhoneUserVoiceMailsStatusEnum = "unread"
)

type PhoneUserVoiceMailsQueryParams struct {
	From          *time.Time                     `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string                        `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                         `queryParam:"style=form,explode=true,name=page_size"`
	Status        *PhoneUserVoiceMailsStatusEnum `queryParam:"style=form,explode=true,name=status"`
	To            time.Time                      `queryParam:"style=form,explode=true,name=to"`
}

type PhoneUserVoiceMailsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type PhoneUserVoiceMails200ApplicationJSONVoiceMailsStatusEnum string

const (
	PhoneUserVoiceMails200ApplicationJSONVoiceMailsStatusEnumRead   PhoneUserVoiceMails200ApplicationJSONVoiceMailsStatusEnum = "read"
	PhoneUserVoiceMails200ApplicationJSONVoiceMailsStatusEnumUnread PhoneUserVoiceMails200ApplicationJSONVoiceMailsStatusEnum = "unread"
)

type PhoneUserVoiceMails200ApplicationJSONVoiceMails struct {
	CalleeName       *string                                                    `json:"callee_name,omitempty"`
	CalleeNumber     *string                                                    `json:"callee_number,omitempty"`
	CalleeNumberType *string                                                    `json:"callee_number_type,omitempty"`
	CallerName       *string                                                    `json:"caller_name,omitempty"`
	CallerNumber     *string                                                    `json:"caller_number,omitempty"`
	CallerNumberType *string                                                    `json:"caller_number_type,omitempty"`
	DateTime         *string                                                    `json:"date_time,omitempty"`
	DownloadURL      *string                                                    `json:"download_url,omitempty"`
	Duration         *string                                                    `json:"duration,omitempty"`
	ID               *string                                                    `json:"id,omitempty"`
	Status           *PhoneUserVoiceMails200ApplicationJSONVoiceMailsStatusEnum `json:"status,omitempty"`
}

// PhoneUserVoiceMails200ApplicationJSON
// Phone User Voice Mails
type PhoneUserVoiceMails200ApplicationJSON struct {
	From          *time.Time                                        `json:"from,omitempty"`
	NextPageToken *string                                           `json:"next_page_token,omitempty"`
	PageCount     *int64                                            `json:"page_count,omitempty"`
	PageSize      *int64                                            `json:"page_size,omitempty"`
	To            *time.Time                                        `json:"to,omitempty"`
	TotalRecords  *int64                                            `json:"total_records,omitempty"`
	VoiceMails    []PhoneUserVoiceMails200ApplicationJSONVoiceMails `json:"voice_mails,omitempty"`
}

type PhoneUserVoiceMailsRequest struct {
	PathParams  PhoneUserVoiceMailsPathParams
	QueryParams PhoneUserVoiceMailsQueryParams
	Security    PhoneUserVoiceMailsSecurity
}

type PhoneUserVoiceMailsResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	PhoneUserVoiceMails200ApplicationJSONObject *PhoneUserVoiceMails200ApplicationJSON
}
