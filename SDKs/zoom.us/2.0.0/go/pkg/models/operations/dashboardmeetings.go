package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardMeetingsIncludeFieldsEnum string

const (
	DashboardMeetingsIncludeFieldsEnumTrackingFields DashboardMeetingsIncludeFieldsEnum = "tracking_fields"
)

type DashboardMeetingsTypeEnum string

const (
	DashboardMeetingsTypeEnumPast    DashboardMeetingsTypeEnum = "past"
	DashboardMeetingsTypeEnumPastOne DashboardMeetingsTypeEnum = "pastOne"
	DashboardMeetingsTypeEnumLive    DashboardMeetingsTypeEnum = "live"
)

type DashboardMeetingsQueryParams struct {
	From          time.Time                           `queryParam:"style=form,explode=true,name=from"`
	IncludeFields *DashboardMeetingsIncludeFieldsEnum `queryParam:"style=form,explode=true,name=include_fields"`
	NextPageToken *string                             `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                              `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time                           `queryParam:"style=form,explode=true,name=to"`
	Type          *DashboardMeetingsTypeEnum          `queryParam:"style=form,explode=true,name=type"`
}

type DashboardMeetingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardMeetings200ApplicationJSONMetricsCustomKeys struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type DashboardMeetings200ApplicationJSONMetricsTrackingFields struct {
	Field *string `json:"field,omitempty"`
	Value *string `json:"value,omitempty"`
}

// DashboardMeetings200ApplicationJSONMetrics
// Meeting metric details.
type DashboardMeetings200ApplicationJSONMetrics struct {
	CustomKeys         []DashboardMeetings200ApplicationJSONMetricsCustomKeys     `json:"custom_keys,omitempty"`
	Dept               *string                                                    `json:"dept,omitempty"`
	Duration           *string                                                    `json:"duration,omitempty"`
	Email              *string                                                    `json:"email,omitempty"`
	EndTime            *time.Time                                                 `json:"end_time,omitempty"`
	Has3rdPartyAudio   *bool                                                      `json:"has_3rd_party_audio,omitempty"`
	HasPstn            *bool                                                      `json:"has_pstn,omitempty"`
	HasRecording       *bool                                                      `json:"has_recording,omitempty"`
	HasScreenShare     *bool                                                      `json:"has_screen_share,omitempty"`
	HasSip             *bool                                                      `json:"has_sip,omitempty"`
	HasVideo           *bool                                                      `json:"has_video,omitempty"`
	HasVoip            *bool                                                      `json:"has_voip,omitempty"`
	Host               *string                                                    `json:"host,omitempty"`
	ID                 *int64                                                     `json:"id,omitempty"`
	InRoomParticipants *int64                                                     `json:"in_room_participants,omitempty"`
	Participants       *int64                                                     `json:"participants,omitempty"`
	StartTime          *time.Time                                                 `json:"start_time,omitempty"`
	Topic              *string                                                    `json:"topic,omitempty"`
	TrackingFields     []DashboardMeetings200ApplicationJSONMetricsTrackingFields `json:"tracking_fields,omitempty"`
	UserType           *string                                                    `json:"user_type,omitempty"`
	UUID               *string                                                    `json:"uuid,omitempty"`
}

// DashboardMeetings200ApplicationJSON
// Pagination object.
type DashboardMeetings200ApplicationJSON struct {
	From          *time.Time                                   `json:"from,omitempty"`
	Meetings      []DashboardMeetings200ApplicationJSONMetrics `json:"meetings,omitempty"`
	NextPageToken *string                                      `json:"next_page_token,omitempty"`
	PageCount     *int64                                       `json:"page_count,omitempty"`
	PageSize      *int64                                       `json:"page_size,omitempty"`
	To            *time.Time                                   `json:"to,omitempty"`
	TotalRecords  *int64                                       `json:"total_records,omitempty"`
}

type DashboardMeetingsRequest struct {
	QueryParams DashboardMeetingsQueryParams
	Security    DashboardMeetingsSecurity
}

type DashboardMeetingsResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	DashboardMeetings200ApplicationJSONObject *DashboardMeetings200ApplicationJSON
}
