package operations

type GetRSbyInvoiceItemAdjustmentPathParams struct {
	InvoiceItemAdjKey string `pathParam:"style=simple,explode=false,name=invoice-item-adj-key"`
}

type GetRSbyInvoiceItemAdjustmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRSbyInvoiceItemAdjustmentRequest struct {
	PathParams GetRSbyInvoiceItemAdjustmentPathParams
	Headers    GetRSbyInvoiceItemAdjustmentHeaders
}

type GetRSbyInvoiceItemAdjustmentResponse struct {
	ContentType     string
	GETRSDetailType map[string]interface{}
	Headers         map[string][]string
	StatusCode      int64
}
