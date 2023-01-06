package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetInvoiceAdjustmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetInvoiceAdjustmentQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetInvoiceAdjustmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetInvoiceAdjustmentRequest struct {
	PathParams  ObjectGetInvoiceAdjustmentPathParams
	QueryParams ObjectGetInvoiceAdjustmentQueryParams
	Headers     ObjectGetInvoiceAdjustmentHeaders
}

type ObjectGetInvoiceAdjustmentResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetInvoiceAdjustment map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
