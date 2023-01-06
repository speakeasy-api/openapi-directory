package shared

type CreditMemoApplyInvoiceRequestType struct {
	Amount    float64                                 `json:"amount"`
	InvoiceID string                                  `json:"invoiceId"`
	Items     []CreditMemoApplyInvoiceItemRequestType `json:"items,omitempty"`
}
