package operations

import (
	"openapi/pkg/models/shared"
)

type PutWriteOffInvoicePathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type PutWriteOffInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutWriteOffInvoiceRequest struct {
	PathParams PutWriteOffInvoicePathParams
	Headers    PutWriteOffInvoiceHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutWriteOffInvoiceResponse struct {
	ContentType                string
	Headers                    map[string][]string
	PUTWriteOffInvoiceResponse *shared.PutWriteOffInvoiceResponse
	StatusCode                 int64
}
