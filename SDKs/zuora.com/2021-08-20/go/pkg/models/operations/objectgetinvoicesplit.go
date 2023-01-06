package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetInvoiceSplitPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetInvoiceSplitQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetInvoiceSplitHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetInvoiceSplitRequest struct {
	PathParams  ObjectGetInvoiceSplitPathParams
	QueryParams ObjectGetInvoiceSplitQueryParams
	Headers     ObjectGetInvoiceSplitHeaders
}

type ObjectGetInvoiceSplitResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetInvoiceSplit      *shared.ProxyGetInvoiceSplit
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
