package operations

import (
	"openapi/pkg/models/shared"
)

type PostTransactionInvoicePaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PostTransactionInvoicePaymentRequest struct {
	Headers PostTransactionInvoicePaymentHeaders
	Request shared.PostInvoiceCollectType `request:"mediaType=application/json"`
}

type PostTransactionInvoicePaymentResponse struct {
	ContentType                    string
	Headers                        map[string][]string
	POSTInvoiceCollectResponseType *shared.PostInvoiceCollectResponseType
	StatusCode                     int64
}
