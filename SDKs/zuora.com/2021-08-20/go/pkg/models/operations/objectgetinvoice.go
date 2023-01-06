package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetInvoicePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetInvoiceQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetInvoiceRequest struct {
	PathParams  ObjectGetInvoicePathParams
	QueryParams ObjectGetInvoiceQueryParams
	Headers     ObjectGetInvoiceHeaders
}

type ObjectGetInvoiceResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetInvoice           map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
