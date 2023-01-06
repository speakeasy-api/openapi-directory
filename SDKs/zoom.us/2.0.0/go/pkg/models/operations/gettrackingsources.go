package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrackingSourcesPathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type GetTrackingSourcesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetTrackingSources200ApplicationJSONTrackingSources struct {
	ID                *string `json:"id,omitempty"`
	RegistrationCount *int64  `json:"registration_count,omitempty"`
	SourceName        *string `json:"source_name,omitempty"`
	TrackingURL       *string `json:"tracking_url,omitempty"`
	VisitorCount      *int64  `json:"visitor_count,omitempty"`
}

type GetTrackingSources200ApplicationJSON struct {
	TotalRecords    *int64                                                `json:"total_records,omitempty"`
	TrackingSources []GetTrackingSources200ApplicationJSONTrackingSources `json:"tracking_sources,omitempty"`
}

type GetTrackingSourcesRequest struct {
	PathParams GetTrackingSourcesPathParams
	Security   GetTrackingSourcesSecurity
}

type GetTrackingSourcesResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	GetTrackingSources200ApplicationJSONObject *GetTrackingSources200ApplicationJSON
}
