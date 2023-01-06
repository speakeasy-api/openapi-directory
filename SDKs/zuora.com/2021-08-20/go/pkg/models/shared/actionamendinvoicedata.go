package shared

type ActionAmendInvoiceData struct {
	Invoice     *Invoice                 `json:"Invoice,omitempty"`
	InvoiceItem []ActionAmendInvoiceItem `json:"InvoiceItem,omitempty"`
}
