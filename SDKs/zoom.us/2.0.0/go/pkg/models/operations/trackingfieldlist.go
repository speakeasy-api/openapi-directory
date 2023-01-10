package operations

import (
	"openapi/pkg/models/shared"
)

type TrackingfieldListSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// TrackingfieldListTrackingFieldListTrackingField
// Tracking Field
type TrackingfieldListTrackingFieldListTrackingField struct {
	Field             *string  `json:"field,omitempty"`
	ID                *string  `json:"id,omitempty"`
	RecommendedValues []string `json:"recommended_values,omitempty"`
	Required          *bool    `json:"required,omitempty"`
	Visible           *bool    `json:"visible,omitempty"`
}

// TrackingfieldListTrackingFieldList
// Tracking Field List
type TrackingfieldListTrackingFieldList struct {
	TotalRecords   *int64                                            `json:"total_records,omitempty"`
	TrackingFields []TrackingfieldListTrackingFieldListTrackingField `json:"tracking_fields,omitempty"`
}

type TrackingfieldListRequest struct {
	Security TrackingfieldListSecurity
}

type TrackingfieldListResponse struct {
	Body              []byte
	ContentType       string
	StatusCode        int64
	TrackingFieldList *TrackingfieldListTrackingFieldList
}
