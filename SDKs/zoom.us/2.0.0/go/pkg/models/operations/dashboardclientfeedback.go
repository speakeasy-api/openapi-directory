package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardClientFeedbackQueryParams struct {
	From time.Time `queryParam:"style=form,explode=true,name=from"`
	To   time.Time `queryParam:"style=form,explode=true,name=to"`
}

type DashboardClientFeedbackSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardClientFeedback200ApplicationJSONClientFeedbacks struct {
	FeedbackID        *string `json:"feedback_id,omitempty"`
	FeedbackName      *string `json:"feedback_name,omitempty"`
	ParticipantsCount *int64  `json:"participants_count,omitempty"`
}

type DashboardClientFeedback200ApplicationJSON struct {
	ClientFeedbacks []DashboardClientFeedback200ApplicationJSONClientFeedbacks `json:"client_feedbacks,omitempty"`
	From            *time.Time                                                 `json:"from,omitempty"`
	To              *time.Time                                                 `json:"to,omitempty"`
	TotalRecords    *int64                                                     `json:"total_records,omitempty"`
}

type DashboardClientFeedbackRequest struct {
	QueryParams DashboardClientFeedbackQueryParams
	Security    DashboardClientFeedbackSecurity
}

type DashboardClientFeedbackResponse struct {
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
	DashboardClientFeedback200ApplicationJSONObject *DashboardClientFeedback200ApplicationJSON
}
