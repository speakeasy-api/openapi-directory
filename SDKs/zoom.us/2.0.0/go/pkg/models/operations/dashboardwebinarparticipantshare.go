package operations

import (
	"openapi/pkg/models/shared"
)

type DashboardWebinarParticipantSharePathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type DashboardWebinarParticipantShareTypeEnum string

const (
	DashboardWebinarParticipantShareTypeEnumPast DashboardWebinarParticipantShareTypeEnum = "past"
	DashboardWebinarParticipantShareTypeEnumLive DashboardWebinarParticipantShareTypeEnum = "live"
)

type DashboardWebinarParticipantShareQueryParams struct {
	NextPageToken *string                                   `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                                    `queryParam:"style=form,explode=true,name=page_size"`
	Type          *DashboardWebinarParticipantShareTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type DashboardWebinarParticipantShareSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardWebinarParticipantShare200ApplicationJSONParticipantsDetails struct {
	Content   *string `json:"content,omitempty"`
	EndTime   *string `json:"end_time,omitempty"`
	StartTime *string `json:"start_time,omitempty"`
}

type DashboardWebinarParticipantShare200ApplicationJSONParticipants struct {
	Details  []DashboardWebinarParticipantShare200ApplicationJSONParticipantsDetails `json:"details,omitempty"`
	ID       *string                                                                 `json:"id,omitempty"`
	UserID   *string                                                                 `json:"user_id,omitempty"`
	UserName *string                                                                 `json:"user_name,omitempty"`
}

// DashboardWebinarParticipantShare200ApplicationJSON
// Pagination object.
type DashboardWebinarParticipantShare200ApplicationJSON struct {
	NextPageToken *string                                                          `json:"next_page_token,omitempty"`
	PageCount     *int64                                                           `json:"page_count,omitempty"`
	PageSize      *int64                                                           `json:"page_size,omitempty"`
	Participants  []DashboardWebinarParticipantShare200ApplicationJSONParticipants `json:"participants,omitempty"`
	TotalRecords  *int64                                                           `json:"total_records,omitempty"`
}

type DashboardWebinarParticipantShareRequest struct {
	PathParams  DashboardWebinarParticipantSharePathParams
	QueryParams DashboardWebinarParticipantShareQueryParams
	Security    DashboardWebinarParticipantShareSecurity
}

type DashboardWebinarParticipantShareResponse struct {
	Body                                                     []byte
	ContentType                                              string
	StatusCode                                               int64
	DashboardWebinarParticipantShare200ApplicationJSONObject *DashboardWebinarParticipantShare200ApplicationJSON
}
