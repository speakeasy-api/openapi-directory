package shared

type GetInvoiceTaxationItemsResponse struct {
	Data     []GetInvoiceTaxItemType `json:"data,omitempty"`
	NextPage *string                 `json:"nextPage,omitempty"`
	Success  *bool                   `json:"success,omitempty"`
}
