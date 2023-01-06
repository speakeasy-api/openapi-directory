package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardMeetingsIncludeFieldsEnum string

const (
	DashboardMeetingsIncludeFieldsEnumTrackingFields DashboardMeetingsIncludeFieldsEnum = "tracking_fields"
)

type DashboardMeetingsTypeEnum string

const (
	DashboardMeetingsTypeEnumPast    DashboardMeetingsTypeEnum = "past"
	DashboardMeetingsTypeEnumPastOne DashboardMeetingsTypeEnum = "pastOne"
	DashboardMeetingsTypeEnumLive    DashboardMeetingsTypeEnum = "live"
)

type DashboardMeetingsQueryParams struct {
	From          time.Time                           `queryParam:"style=form,explode=true,name=from"`
	IncludeFields *DashboardMeetingsIncludeFieldsEnum `queryParam:"style=form,explode=true,name=include_fields"`
	NextPageToken *string                             `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                              `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time                           `queryParam:"style=form,explode=true,name=to"`
	Type          *DashboardMeetingsTypeEnum          `queryParam:"style=form,explode=true,name=type"`
}

type DashboardMeetingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// DashboardMeetings200ApplicationJSON
// Pagination object.
type DashboardMeetings200ApplicationJSON struct {
	From *time.Time `json:"from,omitempty"`
	To   *time.Time `json:"to,omitempty"`
}

type DashboardMeetingsRequest struct {
	QueryParams DashboardMeetingsQueryParams
	Security    DashboardMeetingsSecurity
}

type DashboardMeetingsResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	DashboardMeetings200ApplicationJSONObject *DashboardMeetings200ApplicationJSON
}
