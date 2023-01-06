package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportWebinarParticipantsPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type ReportWebinarParticipantsIncludeFieldsEnum string

const (
	ReportWebinarParticipantsIncludeFieldsEnumRegistrantID ReportWebinarParticipantsIncludeFieldsEnum = "registrant_id"
)

type ReportWebinarParticipantsQueryParams struct {
	IncludeFields *ReportWebinarParticipantsIncludeFieldsEnum `queryParam:"style=form,explode=true,name=include_fields"`
	NextPageToken *string                                     `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                                      `queryParam:"style=form,explode=true,name=page_size"`
}

type ReportWebinarParticipantsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ReportWebinarParticipants200ApplicationJSONParticipants struct {
	CustomerKey *string    `json:"customer_key,omitempty"`
	Duration    *int64     `json:"duration,omitempty"`
	Failover    *bool      `json:"failover,omitempty"`
	ID          *string    `json:"id,omitempty"`
	JoinTime    *time.Time `json:"join_time,omitempty"`
	LeaveTime   *time.Time `json:"leave_time,omitempty"`
	Name        *string    `json:"name,omitempty"`
	UserEmail   *string    `json:"user_email,omitempty"`
	UserID      *string    `json:"user_id,omitempty"`
}

// ReportWebinarParticipants200ApplicationJSON
// Pagination object.
type ReportWebinarParticipants200ApplicationJSON struct {
	Participants []ReportWebinarParticipants200ApplicationJSONParticipants `json:"participants,omitempty"`
}

type ReportWebinarParticipantsRequest struct {
	PathParams  ReportWebinarParticipantsPathParams
	QueryParams ReportWebinarParticipantsQueryParams
	Security    ReportWebinarParticipantsSecurity
}

type ReportWebinarParticipantsResponse struct {
	Body                                              []byte
	ContentType                                       string
	StatusCode                                        int64
	ReportWebinarParticipants200ApplicationJSONObject *ReportWebinarParticipants200ApplicationJSON
}
