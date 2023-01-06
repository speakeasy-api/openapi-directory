package shared

type PaymentInvoiceApplicationItemApplyRequestType struct {
	Amount        float64 `json:"amount"`
	InvoiceItemID *string `json:"invoiceItemId,omitempty"`
	TaxItemID     *string `json:"taxItemId,omitempty"`
}
