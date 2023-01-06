package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSiteDetailsPathParams struct {
	SiteID string `pathParam:"style=simple,explode=false,name=siteId"`
}

type UpdateSiteDetailsApplicationJSON struct {
	Name     *string `json:"name,omitempty"`
	SiteCode *int64  `json:"site_code,omitempty"`
}

type UpdateSiteDetailsMultipartFormData struct {
	Name     *string `multipartForm:"name=name"`
	SiteCode *int64  `multipartForm:"name=site_code"`
}

type UpdateSiteDetailsRequests struct {
	Object  *UpdateSiteDetailsApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateSiteDetailsMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateSiteDetailsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateSiteDetailsRequest struct {
	PathParams UpdateSiteDetailsPathParams
	Request    *UpdateSiteDetailsRequests
	Security   UpdateSiteDetailsSecurity
}

type UpdateSiteDetailsResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	UpdateSiteDetails204ApplicationJSONAny *interface{}
}
