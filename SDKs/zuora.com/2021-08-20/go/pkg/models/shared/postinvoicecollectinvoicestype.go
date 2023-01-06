package shared

type PostInvoiceCollectInvoicesType struct {
	InvoiceAmount *string `json:"invoiceAmount,omitempty"`
	InvoiceID     *string `json:"invoiceId,omitempty"`
	InvoiceNumber *string `json:"invoiceNumber,omitempty"`
}
