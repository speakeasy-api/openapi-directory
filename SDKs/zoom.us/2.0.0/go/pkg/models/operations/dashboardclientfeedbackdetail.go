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

// DashboardClientFeedbackDetail200ApplicationJSON
// Pagination object.
type DashboardClientFeedbackDetail200ApplicationJSON struct {
	From *time.Time `json:"from,omitempty"`
	To   *time.Time `json:"to,omitempty"`
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
