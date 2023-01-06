package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportSignInSignOutActivitiesQueryParams struct {
	From          *time.Time `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string    `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64     `queryParam:"style=form,explode=true,name=page_size"`
	To            *time.Time `queryParam:"style=form,explode=true,name=to"`
}

type ReportSignInSignOutActivitiesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ReportSignInSignOutActivities200ApplicationJSONActivityLogs struct {
	ClientType *string    `json:"client_type,omitempty"`
	Email      *string    `json:"email,omitempty"`
	IPAddress  *string    `json:"ip_address,omitempty"`
	Time       *time.Time `json:"time,omitempty"`
	Type       *string    `json:"type,omitempty"`
	Version    *string    `json:"version,omitempty"`
}

// ReportSignInSignOutActivities200ApplicationJSON
// Report object
type ReportSignInSignOutActivities200ApplicationJSON struct {
	ActivityLogs  []ReportSignInSignOutActivities200ApplicationJSONActivityLogs `json:"activity_logs,omitempty"`
	From          *string                                                       `json:"from,omitempty"`
	NextPageToken *string                                                       `json:"next_page_token,omitempty"`
	PageSize      *string                                                       `json:"page_size,omitempty"`
	To            *string                                                       `json:"to,omitempty"`
}

type ReportSignInSignOutActivitiesRequest struct {
	QueryParams ReportSignInSignOutActivitiesQueryParams
	Security    ReportSignInSignOutActivitiesSecurity
}

type ReportSignInSignOutActivitiesResponse struct {
	Body                                                  []byte
	ContentType                                           string
	StatusCode                                            int64
	ReportSignInSignOutActivities200ApplicationJSONObject *ReportSignInSignOutActivities200ApplicationJSON
}
