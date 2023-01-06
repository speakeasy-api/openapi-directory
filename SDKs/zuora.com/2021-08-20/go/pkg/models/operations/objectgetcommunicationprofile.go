package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetCommunicationProfilePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetCommunicationProfileQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetCommunicationProfileHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetCommunicationProfileRequest struct {
	PathParams  ObjectGetCommunicationProfilePathParams
	QueryParams ObjectGetCommunicationProfileQueryParams
	Headers     ObjectGetCommunicationProfileHeaders
}

type ObjectGetCommunicationProfileResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	ProxyGetCommunicationProfile *shared.ProxyGetCommunicationProfile
	ProxyNoDataResponse          *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse    *shared.ProxyUnauthorizedResponse
	StatusCode                   int64
}
