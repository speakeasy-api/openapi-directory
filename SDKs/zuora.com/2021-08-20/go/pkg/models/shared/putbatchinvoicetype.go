package shared

type PutBatchInvoiceType struct {
	Invoices []map[string]interface{} `json:"invoices,omitempty"`
}
