package operations

import (
	"openapi/pkg/models/shared"
)

type PutReverseInvoicePathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type PutReverseInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutReverseInvoiceRequest struct {
	PathParams PutReverseInvoicePathParams
	Headers    PutReverseInvoiceHeaders
	Request    shared.PutReverseInvoiceType `request:"mediaType=application/json"`
}

type PutReverseInvoiceResponse struct {
	ContentType                   string
	Headers                       map[string][]string
	PutReverseInvoiceResponseType *shared.PutReverseInvoiceResponseType
	StatusCode                    int64
}
