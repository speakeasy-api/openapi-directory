package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostInvoicePaymentQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostInvoicePaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostInvoicePaymentRequest struct {
	QueryParams ObjectPostInvoicePaymentQueryParams
	Headers     ObjectPostInvoicePaymentHeaders
	Request     shared.ProxyCreateInvoicePayment `request:"mediaType=application/json"`
}

type ObjectPostInvoicePaymentResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
