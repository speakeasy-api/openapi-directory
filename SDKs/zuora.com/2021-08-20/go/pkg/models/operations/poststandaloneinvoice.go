package operations

type PostStandaloneInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostStandaloneInvoiceRequest struct {
	Headers PostStandaloneInvoiceHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostStandaloneInvoiceResponse struct {
	ContentType         string
	Headers             map[string][]string
	PostInvoiceResponse map[string]interface{}
	StatusCode          int64
}
