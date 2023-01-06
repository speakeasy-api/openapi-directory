package operations

import (
	"openapi/pkg/models/shared"
)

type DashboardMeetingParticipantSharePathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type DashboardMeetingParticipantShareTypeEnum string

const (
	DashboardMeetingParticipantShareTypeEnumPast    DashboardMeetingParticipantShareTypeEnum = "past"
	DashboardMeetingParticipantShareTypeEnumPastOne DashboardMeetingParticipantShareTypeEnum = "pastOne"
	DashboardMeetingParticipantShareTypeEnumLive    DashboardMeetingParticipantShareTypeEnum = "live"
)

type DashboardMeetingParticipantShareQueryParams struct {
	NextPageToken *string                                   `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                                    `queryParam:"style=form,explode=true,name=page_size"`
	Type          *DashboardMeetingParticipantShareTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type DashboardMeetingParticipantShareSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardMeetingParticipantShare200ApplicationJSONParticipantsDetails struct {
	Content   *string `json:"content,omitempty"`
	EndTime   *string `json:"end_time,omitempty"`
	StartTime *string `json:"start_time,omitempty"`
}

type DashboardMeetingParticipantShare200ApplicationJSONParticipants struct {
	Details  []DashboardMeetingParticipantShare200ApplicationJSONParticipantsDetails `json:"details,omitempty"`
	ID       *string                                                                 `json:"id,omitempty"`
	UserID   *string                                                                 `json:"user_id,omitempty"`
	UserName *string                                                                 `json:"user_name,omitempty"`
}

// DashboardMeetingParticipantShare200ApplicationJSON
// Pagination object.
type DashboardMeetingParticipantShare200ApplicationJSON struct {
	Participants []DashboardMeetingParticipantShare200ApplicationJSONParticipants `json:"participants,omitempty"`
}

type DashboardMeetingParticipantShareRequest struct {
	PathParams  DashboardMeetingParticipantSharePathParams
	QueryParams DashboardMeetingParticipantShareQueryParams
	Security    DashboardMeetingParticipantShareSecurity
}

type DashboardMeetingParticipantShareResponse struct {
	Body                                                     []byte
	ContentType                                              string
	StatusCode                                               int64
	DashboardMeetingParticipantShare200ApplicationJSONObject *DashboardMeetingParticipantShare200ApplicationJSON
}
