package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePhoneSitePathParams struct {
	SiteID string `pathParam:"style=simple,explode=false,name=siteId"`
}

type DeletePhoneSiteQueryParams struct {
	TransferSiteID string `queryParam:"style=form,explode=true,name=transfer_site_id"`
}

type DeletePhoneSiteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeletePhoneSiteRequest struct {
	PathParams  DeletePhoneSitePathParams
	QueryParams DeletePhoneSiteQueryParams
	Security    DeletePhoneSiteSecurity
}

type DeletePhoneSiteResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	DeletePhoneSite204ApplicationJSONAny *interface{}
}
