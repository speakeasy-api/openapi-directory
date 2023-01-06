package shared

type ActionSubscribeInvoiceData struct {
	Invoice     map[string]interface{}   `json:"Invoice,omitempty"`
	InvoiceItem []map[string]interface{} `json:"InvoiceItem,omitempty"`
}
