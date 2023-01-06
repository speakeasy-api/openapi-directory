package shared

type GetInvoiceFileWrapper struct {
	Invoices []map[string]interface{} `json:"invoices,omitempty"`
	NextPage *string                  `json:"nextPage,omitempty"`
	Success  *bool                    `json:"success,omitempty"`
}
