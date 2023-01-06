package shared

type CreditMemoApplyInvoiceItemRequestType struct {
	Amount           float64 `json:"amount"`
	CreditMemoItemID *string `json:"creditMemoItemId,omitempty"`
	CreditTaxItemID  *string `json:"creditTaxItemId,omitempty"`
	InvoiceItemID    *string `json:"invoiceItemId,omitempty"`
	TaxItemID        *string `json:"taxItemId,omitempty"`
}
