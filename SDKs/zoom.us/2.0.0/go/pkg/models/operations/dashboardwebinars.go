package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardWebinarsTypeEnum string

const (
	DashboardWebinarsTypeEnumPast DashboardWebinarsTypeEnum = "past"
	DashboardWebinarsTypeEnumLive DashboardWebinarsTypeEnum = "live"
)

type DashboardWebinarsQueryParams struct {
	From          time.Time                  `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string                    `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                     `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time                  `queryParam:"style=form,explode=true,name=to"`
	Type          *DashboardWebinarsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type DashboardWebinarsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// DashboardWebinars200ApplicationJSON
// Pagination object.
type DashboardWebinars200ApplicationJSON struct {
	From *time.Time `json:"from,omitempty"`
	To   *time.Time `json:"to,omitempty"`
}

type DashboardWebinarsRequest struct {
	QueryParams DashboardWebinarsQueryParams
	Security    DashboardWebinarsSecurity
}

type DashboardWebinarsResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	DashboardWebinars200ApplicationJSONObject *DashboardWebinars200ApplicationJSON
}
