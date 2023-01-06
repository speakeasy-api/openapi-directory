package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetInvoiceItemAdjustmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetInvoiceItemAdjustmentQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetInvoiceItemAdjustmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetInvoiceItemAdjustmentRequest struct {
	PathParams  ObjectGetInvoiceItemAdjustmentPathParams
	QueryParams ObjectGetInvoiceItemAdjustmentQueryParams
	Headers     ObjectGetInvoiceItemAdjustmentHeaders
}

type ObjectGetInvoiceItemAdjustmentResponse struct {
	ContentType                   string
	Headers                       map[string][]string
	ProxyGetInvoiceItemAdjustment map[string]interface{}
	ProxyNoDataResponse           *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse     *shared.ProxyUnauthorizedResponse
	StatusCode                    int64
}
