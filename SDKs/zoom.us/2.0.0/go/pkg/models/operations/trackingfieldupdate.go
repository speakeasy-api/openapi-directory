package operations

import (
	"openapi/pkg/models/shared"
)

type TrackingfieldUpdatePathParams struct {
	FieldID string `pathParam:"style=simple,explode=false,name=fieldId"`
}

// TrackingfieldUpdateTrackingField
// Tracking Field
type TrackingfieldUpdateTrackingField struct {
	Field             *string  `json:"field,omitempty" multipartForm:"name=field"`
	RecommendedValues []string `json:"recommended_values,omitempty" multipartForm:"name=recommended_values,json"`
	Required          *bool    `json:"required,omitempty" multipartForm:"name=required"`
	Visible           *bool    `json:"visible,omitempty" multipartForm:"name=visible"`
}

type TrackingfieldUpdateRequests struct {
	TrackingField  *TrackingfieldUpdateTrackingField `request:"mediaType=application/json"`
	TrackingField1 *TrackingfieldUpdateTrackingField `request:"mediaType=multipart/form-data"`
}

type TrackingfieldUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type TrackingfieldUpdateRequest struct {
	PathParams TrackingfieldUpdatePathParams
	Request    TrackingfieldUpdateRequests
	Security   TrackingfieldUpdateSecurity
}

type TrackingfieldUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
