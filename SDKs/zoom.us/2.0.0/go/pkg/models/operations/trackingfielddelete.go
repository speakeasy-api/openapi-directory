package operations

import (
	"openapi/pkg/models/shared"
)

type TrackingfieldDeletePathParams struct {
	FieldID string `pathParam:"style=simple,explode=false,name=fieldId"`
}

type TrackingfieldDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type TrackingfieldDeleteRequest struct {
	PathParams TrackingfieldDeletePathParams
	Security   TrackingfieldDeleteSecurity
}

type TrackingfieldDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
