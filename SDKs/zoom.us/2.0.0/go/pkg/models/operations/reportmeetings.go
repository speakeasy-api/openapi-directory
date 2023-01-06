package operations

import (
	"time"
)

type ReportMeetingsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type ReportMeetingsTypeEnum string

const (
	ReportMeetingsTypeEnumPast    ReportMeetingsTypeEnum = "past"
	ReportMeetingsTypeEnumPastOne ReportMeetingsTypeEnum = "pastOne"
)

type ReportMeetingsQueryParams struct {
	From          time.Time               `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string                 `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                  `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time               `queryParam:"style=form,explode=true,name=to"`
	Type          *ReportMeetingsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type ReportMeetings200ApplicationJSONMeetingsCustomKeys struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type ReportMeetings200ApplicationJSONMeetings struct {
	CustomKeys        []ReportMeetings200ApplicationJSONMeetingsCustomKeys `json:"custom_keys,omitempty"`
	Duration          *int64                                               `json:"duration,omitempty"`
	EndTime           *time.Time                                           `json:"end_time,omitempty"`
	ID                *int64                                               `json:"id,omitempty"`
	ParticipantsCount *int64                                               `json:"participants_count,omitempty"`
	Source            *string                                              `json:"source,omitempty"`
	StartTime         *time.Time                                           `json:"start_time,omitempty"`
	Topic             *string                                              `json:"topic,omitempty"`
	TotalMinutes      *int64                                               `json:"total_minutes,omitempty"`
	Type              *int64                                               `json:"type,omitempty"`
	UserEmail         *string                                              `json:"user_email,omitempty"`
	UserName          *string                                              `json:"user_name,omitempty"`
	UUID              *string                                              `json:"uuid,omitempty"`
}

// ReportMeetings200ApplicationJSON
// Pagination Object.
type ReportMeetings200ApplicationJSON struct {
	From          *time.Time                                 `json:"from,omitempty"`
	Meetings      []ReportMeetings200ApplicationJSONMeetings `json:"meetings,omitempty"`
	NextPageToken *string                                    `json:"next_page_token,omitempty"`
	To            *time.Time                                 `json:"to,omitempty"`
}

type ReportMeetingsRequest struct {
	PathParams  ReportMeetingsPathParams
	QueryParams ReportMeetingsQueryParams
}

type ReportMeetingsResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	ReportMeetings200ApplicationJSONObject *ReportMeetings200ApplicationJSON
}
