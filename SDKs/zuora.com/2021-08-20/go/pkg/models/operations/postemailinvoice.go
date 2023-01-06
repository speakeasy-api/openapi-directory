package operations

import (
	"openapi/pkg/models/shared"
)

type PostEmailInvoicePathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type PostEmailInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostEmailInvoiceRequest struct {
	PathParams PostEmailInvoicePathParams
	Headers    PostEmailInvoiceHeaders
	Request    shared.PostInvoiceEmailRequestType `request:"mediaType=application/json"`
}

type PostEmailInvoiceResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
