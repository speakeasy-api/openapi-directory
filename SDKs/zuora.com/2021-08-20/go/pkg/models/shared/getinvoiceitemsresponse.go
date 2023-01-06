package shared

type GetInvoiceItemsResponse struct {
	InvoiceItems []map[string]interface{} `json:"invoiceItems,omitempty"`
	NextPage     *string                  `json:"nextPage,omitempty"`
	Success      *bool                    `json:"success,omitempty"`
}
