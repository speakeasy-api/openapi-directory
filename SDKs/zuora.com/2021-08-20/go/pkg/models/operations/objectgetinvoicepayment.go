package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetInvoicePaymentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetInvoicePaymentQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetInvoicePaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetInvoicePaymentRequest struct {
	PathParams  ObjectGetInvoicePaymentPathParams
	QueryParams ObjectGetInvoicePaymentQueryParams
	Headers     ObjectGetInvoicePaymentHeaders
}

type ObjectGetInvoicePaymentResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetInvoicePayment    *shared.ProxyGetInvoicePayment
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
