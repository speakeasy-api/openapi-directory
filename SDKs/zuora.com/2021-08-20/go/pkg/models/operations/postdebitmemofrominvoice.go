package operations

type PostDebitMemoFromInvoicePathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type PostDebitMemoFromInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PostDebitMemoFromInvoiceRequest struct {
	PathParams PostDebitMemoFromInvoicePathParams
	Headers    PostDebitMemoFromInvoiceHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostDebitMemoFromInvoiceResponse struct {
	ContentType      string
	GETDebitMemoType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
