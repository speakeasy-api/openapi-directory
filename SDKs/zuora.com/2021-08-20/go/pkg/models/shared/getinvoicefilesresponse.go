package shared

type GetInvoiceFilesResponse struct {
	InvoiceFiles []InvoiceFile `json:"invoiceFiles,omitempty"`
	NextPage     *string       `json:"nextPage,omitempty"`
	Success      *bool         `json:"success,omitempty"`
}
