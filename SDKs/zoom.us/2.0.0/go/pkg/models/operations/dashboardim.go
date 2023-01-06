package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardImQueryParams struct {
	From          time.Time `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string   `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64    `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time `queryParam:"style=form,explode=true,name=to"`
}

type DashboardImSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// DashboardIm200ApplicationJSON
// Pagination object.
type DashboardIm200ApplicationJSON struct {
	From *time.Time `json:"from,omitempty"`
	To   *time.Time `json:"to,omitempty"`
}

type DashboardImRequest struct {
	QueryParams DashboardImQueryParams
	Security    DashboardImSecurity
}

type DashboardImResponse struct {
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	DashboardIM200ApplicationJSONObject *DashboardIm200ApplicationJSON
}
