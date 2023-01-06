package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetTaxationItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetTaxationItemQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetTaxationItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetTaxationItemRequest struct {
	PathParams  ObjectGetTaxationItemPathParams
	QueryParams ObjectGetTaxationItemQueryParams
	Headers     ObjectGetTaxationItemHeaders
}

type ObjectGetTaxationItemResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetTaxationItem      map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
