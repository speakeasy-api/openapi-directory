package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetRefundInvoicePaymentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetRefundInvoicePaymentQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetRefundInvoicePaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetRefundInvoicePaymentRequest struct {
	PathParams  ObjectGetRefundInvoicePaymentPathParams
	QueryParams ObjectGetRefundInvoicePaymentQueryParams
	Headers     ObjectGetRefundInvoicePaymentHeaders
}

type ObjectGetRefundInvoicePaymentResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	ProxyGetRefundInvoicePayment *shared.ProxyGetRefundInvoicePayment
	ProxyNoDataResponse          *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse    *shared.ProxyUnauthorizedResponse
	StatusCode                   int64
}
