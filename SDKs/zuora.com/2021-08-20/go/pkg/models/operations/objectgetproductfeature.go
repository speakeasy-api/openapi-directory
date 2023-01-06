package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetProductFeaturePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetProductFeatureQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetProductFeatureHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetProductFeatureRequest struct {
	PathParams  ObjectGetProductFeaturePathParams
	QueryParams ObjectGetProductFeatureQueryParams
	Headers     ObjectGetProductFeatureHeaders
}

type ObjectGetProductFeatureResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetProductFeature    map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
