package operations

type DownloadInvoicePdfPathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type DownloadInvoicePdfRequest struct {
	PathParams DownloadInvoicePdfPathParams
}

type DownloadInvoicePdfResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	DownloadInvoicePDF200ApplicationJSONAny *interface{}
}
