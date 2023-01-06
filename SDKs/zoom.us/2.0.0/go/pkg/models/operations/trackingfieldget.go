package operations

import (
	"openapi/pkg/models/shared"
)

type TrackingfieldGetPathParams struct {
	FieldID string `pathParam:"style=simple,explode=false,name=fieldId"`
}

type TrackingfieldGetSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// TrackingfieldGetTrackingField
// Tracking Field
type TrackingfieldGetTrackingField struct {
	Field             *string  `json:"field,omitempty"`
	RecommendedValues []string `json:"recommended_values,omitempty"`
	Required          *bool    `json:"required,omitempty"`
	Visible           *bool    `json:"visible,omitempty"`
}

type TrackingfieldGetRequest struct {
	PathParams TrackingfieldGetPathParams
	Security   TrackingfieldGetSecurity
}

type TrackingfieldGetResponse struct {
	Body          []byte
	ContentType   string
	StatusCode    int64
	TrackingField *TrackingfieldGetTrackingField
}
