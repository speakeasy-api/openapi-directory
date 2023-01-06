package operations

type PostCreditMemoFromInvoicePathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type PostCreditMemoFromInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PostCreditMemoFromInvoiceRequest struct {
	PathParams PostCreditMemoFromInvoicePathParams
	Headers    PostCreditMemoFromInvoiceHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostCreditMemoFromInvoiceResponse struct {
	ContentType       string
	GETCreditMemoType map[string]interface{}
	Headers           map[string][]string
	StatusCode        int64
}
