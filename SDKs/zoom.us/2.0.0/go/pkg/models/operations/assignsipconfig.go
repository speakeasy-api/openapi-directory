package operations

import (
	"openapi/pkg/models/shared"
)

type AssignSipConfigPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AssignSipConfigApplicationJSON struct {
	Enable                           *bool  `json:"enable,omitempty"`
	ShowCalloutInternalNumber        *bool  `json:"show_callout_internal_number,omitempty"`
	ShowZoomProvidedCalloutCountries *int64 `json:"show_zoom_provided_callout_countries,omitempty"`
	ShowZoomProvidedNumbers          *int64 `json:"show_zoom_provided_numbers,omitempty"`
}

type AssignSipConfigMultipartFormData struct {
	Enable                           *bool  `multipartForm:"name=enable"`
	ShowCalloutInternalNumber        *bool  `multipartForm:"name=show_callout_internal_number"`
	ShowZoomProvidedCalloutCountries *int64 `multipartForm:"name=show_zoom_provided_callout_countries"`
	ShowZoomProvidedNumbers          *int64 `multipartForm:"name=show_zoom_provided_numbers"`
}

type AssignSipConfigRequests struct {
	Object  *AssignSipConfigApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AssignSipConfigMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AssignSipConfigSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AssignSipConfigRequest struct {
	PathParams AssignSipConfigPathParams
	Request    *AssignSipConfigRequests
	Security   AssignSipConfigSecurity
}

type AssignSipConfigResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	AssignSIPConfig204ApplicationJSONAny *interface{}
}
