package operations

type GetRSbyInvoiceItemPathParams struct {
	InvoiceItemID string `pathParam:"style=simple,explode=false,name=invoice-item-id"`
}

type GetRSbyInvoiceItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRSbyInvoiceItemRequest struct {
	PathParams GetRSbyInvoiceItemPathParams
	Headers    GetRSbyInvoiceItemHeaders
}

type GetRSbyInvoiceItemResponse struct {
	ContentType     string
	GETRSDetailType map[string]interface{}
	Headers         map[string][]string
	StatusCode      int64
}
