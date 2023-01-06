package shared

type CreditMemoUnapplyInvoiceRequestType struct {
	Amount    float64                                   `json:"amount"`
	InvoiceID string                                    `json:"invoiceId"`
	Items     []CreditMemoUnapplyInvoiceItemRequestType `json:"items,omitempty"`
}
