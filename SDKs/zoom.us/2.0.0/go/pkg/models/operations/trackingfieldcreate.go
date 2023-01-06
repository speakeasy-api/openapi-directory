package operations

import (
	"openapi/pkg/models/shared"
)

// TrackingfieldCreateTrackingField
// Tracking Field
type TrackingfieldCreateTrackingField struct {
	Field             *string  `json:"field,omitempty" multipartForm:"name=field"`
	RecommendedValues []string `json:"recommended_values,omitempty" multipartForm:"name=recommended_values,json"`
	Required          *bool    `json:"required,omitempty" multipartForm:"name=required"`
	Visible           *bool    `json:"visible,omitempty" multipartForm:"name=visible"`
}

type TrackingfieldCreateRequests struct {
	TrackingField  *TrackingfieldCreateTrackingField `request:"mediaType=application/json"`
	TrackingField1 *TrackingfieldCreateTrackingField `request:"mediaType=multipart/form-data"`
}

type TrackingfieldCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type TrackingfieldCreateRequest struct {
	Request  TrackingfieldCreateRequests
	Security TrackingfieldCreateSecurity
}

type TrackingfieldCreateResponse struct {
	Body          []byte
	ContentType   string
	Headers       map[string][]string
	StatusCode    int64
	TrackingField *TrackingfieldCreateTrackingField
}
