package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutInvoicePaymentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutInvoicePaymentQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutInvoicePaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutInvoicePaymentRequest struct {
	PathParams  ObjectPutInvoicePaymentPathParams
	QueryParams ObjectPutInvoicePaymentQueryParams
	Headers     ObjectPutInvoicePaymentHeaders
	Request     shared.ProxyModifyInvoicePayment `request:"mediaType=application/json"`
}

type ObjectPutInvoicePaymentResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
