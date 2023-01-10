package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type MeetingsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type MeetingsTypeEnum string

const (
	MeetingsTypeEnumScheduled MeetingsTypeEnum = "scheduled"
	MeetingsTypeEnumLive      MeetingsTypeEnum = "live"
	MeetingsTypeEnumUpcoming  MeetingsTypeEnum = "upcoming"
)

type MeetingsQueryParams struct {
	NextPageToken *string           `queryParam:"style=form,explode=true,name=next_page_token"`
	PageNumber    *string           `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64            `queryParam:"style=form,explode=true,name=page_size"`
	Type          *MeetingsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type MeetingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingsGroupListMeetings struct {
	Agenda    *string    `json:"agenda,omitempty"`
	CreatedAt *time.Time `json:"created_at,omitempty"`
	Duration  *int64     `json:"duration,omitempty"`
	HostID    *string    `json:"host_id,omitempty"`
	ID        *int64     `json:"id,omitempty"`
	JoinURL   *string    `json:"join_url,omitempty"`
	Pmi       *string    `json:"pmi,omitempty"`
	StartTime *time.Time `json:"start_time,omitempty"`
	Timezone  *string    `json:"timezone,omitempty"`
	Topic     *string    `json:"topic,omitempty"`
	Type      *int64     `json:"type,omitempty"`
	UUID      *string    `json:"uuid,omitempty"`
}

// MeetingsGroupList
// Pagination Object.
type MeetingsGroupList struct {
	Meetings      []MeetingsGroupListMeetings `json:"meetings,omitempty"`
	NextPageToken *string                     `json:"next_page_token,omitempty"`
	PageCount     *int64                      `json:"page_count,omitempty"`
	PageNumber    *int64                      `json:"page_number,omitempty"`
	PageSize      *int64                      `json:"page_size,omitempty"`
	TotalRecords  *int64                      `json:"total_records,omitempty"`
}

type MeetingsRequest struct {
	PathParams  MeetingsPathParams
	QueryParams MeetingsQueryParams
	Security    MeetingsSecurity
}

type MeetingsResponse struct {
	Body        []byte
	ContentType string
	GroupList   *MeetingsGroupList
	StatusCode  int64
}
