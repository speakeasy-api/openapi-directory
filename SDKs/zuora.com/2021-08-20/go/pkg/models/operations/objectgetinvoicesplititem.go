package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetInvoiceSplitItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetInvoiceSplitItemQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetInvoiceSplitItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetInvoiceSplitItemRequest struct {
	PathParams  ObjectGetInvoiceSplitItemPathParams
	QueryParams ObjectGetInvoiceSplitItemQueryParams
	Headers     ObjectGetInvoiceSplitItemHeaders
}

type ObjectGetInvoiceSplitItemResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetInvoiceSplitItem  *shared.ProxyGetInvoiceSplitItem
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
