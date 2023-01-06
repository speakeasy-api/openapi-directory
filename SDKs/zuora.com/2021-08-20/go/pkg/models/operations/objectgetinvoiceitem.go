package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetInvoiceItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetInvoiceItemQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetInvoiceItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetInvoiceItemRequest struct {
	PathParams  ObjectGetInvoiceItemPathParams
	QueryParams ObjectGetInvoiceItemQueryParams
	Headers     ObjectGetInvoiceItemHeaders
}

type ObjectGetInvoiceItemResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetInvoiceItem       map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
