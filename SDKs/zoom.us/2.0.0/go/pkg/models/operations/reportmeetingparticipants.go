package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportMeetingParticipantsPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type ReportMeetingParticipantsIncludeFieldsEnum string

const (
	ReportMeetingParticipantsIncludeFieldsEnumRegistrantID ReportMeetingParticipantsIncludeFieldsEnum = "registrant_id"
)

type ReportMeetingParticipantsQueryParams struct {
	IncludeFields *ReportMeetingParticipantsIncludeFieldsEnum `queryParam:"style=form,explode=true,name=include_fields"`
	NextPageToken *string                                     `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                                      `queryParam:"style=form,explode=true,name=page_size"`
}

type ReportMeetingParticipantsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ReportMeetingParticipants200ApplicationJSONParticipants struct {
	CustomerKey  *string    `json:"customer_key,omitempty"`
	Duration     *int64     `json:"duration,omitempty"`
	Failover     *bool      `json:"failover,omitempty"`
	ID           *string    `json:"id,omitempty"`
	JoinTime     *time.Time `json:"join_time,omitempty"`
	LeaveTime    *time.Time `json:"leave_time,omitempty"`
	Name         *string    `json:"name,omitempty"`
	RegistrantID *string    `json:"registrant_id,omitempty"`
	UserEmail    *string    `json:"user_email,omitempty"`
	UserID       *string    `json:"user_id,omitempty"`
}

// ReportMeetingParticipants200ApplicationJSON
// Pagination object.
type ReportMeetingParticipants200ApplicationJSON struct {
	NextPageToken *string                                                   `json:"next_page_token,omitempty"`
	PageCount     *int64                                                    `json:"page_count,omitempty"`
	PageSize      *int64                                                    `json:"page_size,omitempty"`
	Participants  []ReportMeetingParticipants200ApplicationJSONParticipants `json:"participants,omitempty"`
	TotalRecords  *int64                                                    `json:"total_records,omitempty"`
}

type ReportMeetingParticipantsRequest struct {
	PathParams  ReportMeetingParticipantsPathParams
	QueryParams ReportMeetingParticipantsQueryParams
	Security    ReportMeetingParticipantsSecurity
}

type ReportMeetingParticipantsResponse struct {
	Body                                              []byte
	ContentType                                       string
	StatusCode                                        int64
	ReportMeetingParticipants200ApplicationJSONObject *ReportMeetingParticipants200ApplicationJSON
}
