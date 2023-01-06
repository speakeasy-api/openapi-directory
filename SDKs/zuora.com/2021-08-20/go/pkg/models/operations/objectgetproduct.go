package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetProductPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetProductQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetProductHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetProductRequest struct {
	PathParams  ObjectGetProductPathParams
	QueryParams ObjectGetProductQueryParams
	Headers     ObjectGetProductHeaders
}

type ObjectGetProductResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetProduct           map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
