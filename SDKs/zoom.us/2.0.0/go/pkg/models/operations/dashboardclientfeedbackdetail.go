package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardClientFeedbackDetailPathParams struct {
	FeedbackID string `pathParam:"style=simple,explode=false,name=feedbackId"`
}

type DashboardClientFeedbackDetailQueryParams struct {
	From          *time.Time `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string    `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64     `queryParam:"style=form,explode=true,name=page_size"`
	To            *time.Time `queryParam:"style=form,explode=true,name=to"`
}

type DashboardClientFeedbackDetailSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardClientFeedbackDetail200ApplicationJSONClientFeedbackDetails struct {
	Email           *string    `json:"email,omitempty"`
	MeetingID       *string    `json:"meeting_id,omitempty"`
	ParticipantName *string    `json:"participant_name,omitempty"`
	Time            *time.Time `json:"time,omitempty"`
}

// DashboardClientFeedbackDetail200ApplicationJSON
// Pagination object.
type DashboardClientFeedbackDetail200ApplicationJSON struct {
	ClientFeedbackDetails []DashboardClientFeedbackDetail200ApplicationJSONClientFeedbackDetails `json:"client_feedback_details,omitempty"`
	From                  *time.Time                                                             `json:"from,omitempty"`
	NextPageToken         *string                                                                `json:"next_page_token,omitempty"`
	PageSize              *int64                                                                 `json:"page_size,omitempty"`
	To                    *time.Time                                                             `json:"to,omitempty"`
}

type DashboardClientFeedbackDetailRequest struct {
	PathParams  DashboardClientFeedbackDetailPathParams
	QueryParams DashboardClientFeedbackDetailQueryParams
	Security    DashboardClientFeedbackDetailSecurity
}

type DashboardClientFeedbackDetailResponse struct {
	Body                                                  []byte
	ContentType                                           string
	StatusCode                                            int64
	DashboardClientFeedbackDetail200ApplicationJSONObject *DashboardClientFeedbackDetail200ApplicationJSON
}
