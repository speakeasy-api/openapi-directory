package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetFeaturePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetFeatureQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetFeatureHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetFeatureRequest struct {
	PathParams  ObjectGetFeaturePathParams
	QueryParams ObjectGetFeatureQueryParams
	Headers     ObjectGetFeatureHeaders
}

type ObjectGetFeatureResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetFeature           map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
