package operations

type PutUpdateInvoicePathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type PutUpdateInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUpdateInvoiceRequest struct {
	PathParams PutUpdateInvoicePathParams
	Headers    PutUpdateInvoiceHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutUpdateInvoiceResponse struct {
	ContentType            string
	Headers                map[string][]string
	PutInvoiceResponseType map[string]interface{}
	StatusCode             int64
}
